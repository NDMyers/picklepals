// import GroupChatAdd from '@/components/GroupChatAdd'
// import GroupChatInput from '@/components/GroupChatInput'
// import { getFriendsByUserId } from '@/helpers/get-friends-by-user-id'
// import { authOptions } from '@/lib/auth'
// import { chatHrefConstructor } from '@/lib/utils'
// import { PlusIcon } from 'lucide-react'
// import { User, getServerSession } from 'next-auth'
// import { notFound } from 'next/navigation'
// import { FC, useRef, useState } from 'react'

// interface pageProps {
// }

// const page = async () => {

//     const session = await getServerSession(authOptions)
//     if( !session ) notFound()

//     // const friends = await getFriendsByUserId(session.user.id)

//     const addToGroupChat = (  ) => {
//         console.log("printed")
//     }

//     return (

//         <div>
//             <div className='font-bold text-4xl mb-10 mt-8 sm:'>Start a group chat!</div>

//             <div>
//                 <GroupChatInput />
//             </div>

//             <div className='flex flex-row'>
//                 <div>
//                     <p className='text-xl pt-4 pb-5'>Add users to group chat</p>
//                     <ul role='list' className='max-h-[25rem] overflow-y-auto -mx-2 space-y-1'>

//                         {/* { friends.sort().map(( friend ) => {
//                             return <li key={friend.id}>
//                                 <div className='text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-52'>
//                                     <a 
//                                         className=''>
//                                         {friend.name}
//                                     </a>
//                                     <GroupChatAdd />
//                                 </div>
//                             </li>
//                         })} */}

//                     </ul>
//                 </div>

//                 <div>
//                     <p className='text-xl pt-4 pb-5 pl-12'>Users in group chat</p>
//                     <ul role='list' className='max-h-[25rem] overflow-y-auto -mx-2 space-y-1'>

//                     </ul>
//                 </div>

//             </div>

//         </div>
//     )

// }

// export default page