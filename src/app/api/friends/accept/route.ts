import { fetchRedis } from "@/helpers/redis"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { z } from "zod"
import { pusherServer } from '@/lib/pusher';
import { toPusherKey } from "@/lib/utils"

// Naming is important for this
export async function POST( req: Request ) {
    try {
        const body = await req.json()

        const { id: idToAdd } = z.object({ id: z.string() }).parse(body)

        // Perform series of checks to make sure person is allowed to add user
        const session = await getServerSession(authOptions)

        if( !session ) {
            return new Response('Unauthorized', { status: 401 })
        }

        // Verify both users aren't already friends
        const isAlreadyFriends = await fetchRedis(
            'sismember',
            `user:${session.user.id}:friends`,
            idToAdd
        )
        
        if( isAlreadyFriends ) {
            return new Response('Already friends', { status: 400 })
        }

        // Determine if person is an incoming friend request
        const hasFriendRequest = await fetchRedis(
            'sismember', 
            `user:${session.user.id}:incoming_friend_requests`,
            idToAdd
        )

        if( !hasFriendRequest ) {
            return new Response('No friend request', { status: 400 })
        }

        const [userRaw, friendRaw] = (await Promise.all([
            fetchRedis('get',`user:${session.user.id}`),
            fetchRedis('get',`user:${idToAdd}`)
        ])) as [string, string]

        const user = JSON.parse(userRaw) as User
        const friend = JSON.parse(friendRaw) as User

        // Notify added user if they are online

        await Promise.all([
            pusherServer.trigger(toPusherKey(`user:${idToAdd}:friends`), 'new_friend', user),
            pusherServer.trigger(toPusherKey(`user:${session.user.id}:friends`), 'new_friend', friend),

            // Now add friend if previous checks are passed.
            db.sadd(`user:${session.user.id}:friends`, idToAdd),
            // Add to requesters friend list if successfully add
            db.sadd(`user:${idToAdd}:friends`, session.user.id),
            db.srem(`user:${session.user.id}:incoming_friend_requests`, idToAdd),
        ])

        return new Response('OK', { status: 200 })
    } catch (error) {
        if( error instanceof z.ZodError ) {
            return new Response('Invalid request payload', { status: 422 })
        }

        return new Response('Invalid request', { status: 400 })
    }
}