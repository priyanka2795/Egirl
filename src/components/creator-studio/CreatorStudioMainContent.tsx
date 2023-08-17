import Banner from '@components/list/Banner'
import PostCard from '@components/list/PostCard'
import UserSection from '@components/list/UserSection'
import React from 'react'

const CreatorStudioMainContent = () => {
  return (
    <div className='px-8 mb-5'>
      <Banner />
      <div className='flex gap-5'>
        <div>
          <PostCard />
        </div>
        <div>
          <UserSection />
        </div>
      </div>
    </div>
  )
}

export default CreatorStudioMainContent;  