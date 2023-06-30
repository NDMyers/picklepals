import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FC } from 'react'

interface CourtSideBarOptionsProps {
    sessionId: string
}

const CourtSideBarOptions: FC<CourtSideBarOptionsProps> = ({ sessionId }) => {
    if ( !sessionId ) notFound()

    return (
        <Link href='/dashboard/courts'
        className='text-gray-700 hover:text-indigo-600 gover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'>
            <div className='text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-9 items-center justify-center rounded-lg border text-[0.625 rem] font-medium bg-white'>
                <Image
                    src='/pickleballcolor.png'
                    alt='Pickleball Paddle'
                    width={16}
                    height={16}
                />
                {/* <Users className='h-4 w-4' /> */}
            </div>
            <p className='truncate'>Find a Court</p>
        </Link>
    )
}

export default CourtSideBarOptions