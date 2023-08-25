import React, { useState } from 'react'
import Banner from '@components/list/Banner'
import PostCard from '@components/list/PostCard'
import UserSection from '@components/list/UserSection'

const CreatorStudio = () => {
  return (
    <div className='h-full mb-5'>
    <Banner styleProperty={'px-0 pt-[32px]'}/>
    <div className='flex gap-5 max-w-[1020px]'>
        <PostCard />
        <UserSection />
    </div>
</div>
  )
}

export default CreatorStudio