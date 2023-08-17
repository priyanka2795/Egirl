import Banner from '@components/list/Banner'
import PostCard from '@components/list/PostCard'
import UserSection from '@components/list/UserSection'
import React from 'react'

const CreatorStudioMainContent = () => {
  return (
    <div className='h-full mb-5 overflow-y-auto'>
            <Banner />
            <div className='flex gap-5 max-w-[1020px] px-8'>
                <PostCard />
                <UserSection />
            </div>
    </div>
  )
}

export default CreatorStudioMainContent;  