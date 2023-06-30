// 'use client'

// import { FC, useRef, useState } from 'react'
// import TextareaAutoSize from 'react-textarea-autosize'
// import Button from './ui/Button'
// import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/navigation'

// interface GroupChatInputProps {
  
// }

// const GroupChatInput: FC<GroupChatInputProps> = ({}) => {

//     const router = useRouter()

//     const textareaRef = useRef<HTMLTextAreaElement | null>(null)
//     const [input, setInput] = useState<string>('')
//     const [isLoading, setIsLoading] = useState<boolean>(false)

//     const setGroupChat = async () => {
//         // Unable to send blank messages
//         if( !input ) return

//         setIsLoading(true)

//         try {
//             // Want to clear group chat name input field after sending
//             setInput('')
//             textareaRef.current?.focus()

//         } catch (error) {

            
//         } finally {
//             // Reset send button loading anim
//             setIsLoading(false)
//         }
//     }

//     return (
//         <div className='border-t border-gray-200 pb-8 mb-2 w-72 sm:mb-0'>
//             <div className='relative flex-1 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600'>
//                 <TextareaAutoSize 
//                     ref={textareaRef} 
//                     onKeyDown={(e) => {
//                         if(e.key === 'Enter' && !e.shiftKey) {
//                             e.preventDefault()
//                             setGroupChat()
//                         }
//                     }}
//                     rows={1}
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder='Create group chat name'
//                     className='block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6'
//                 />

//                 <div className='absolute right-0 bottom-0 flex-justify-between'>
//                     <div className='flex-shrink-0'>
//                         <Button 
//                             isLoading={isLoading} 
//                             onClick={setGroupChat} 
//                             type='submit'>
//                                 Create
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GroupChatInput