import { FC } from 'react'
import Button from '@/components/ui/Button'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface pageProps {}

const page = async ({}) => {

    const session = await getServerSession(authOptions)

    console.log(session?.user.email)

    return (
        <pre>{JSON.stringify(session)}</pre>
    )
}

export default page