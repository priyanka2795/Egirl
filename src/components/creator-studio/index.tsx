import React, { useState } from 'react'
import Banner from '@components/list/Banner'
import PostCard from '@components/list/PostCard'
import UserSection from '@components/list/UserSection'
import PostInput from '@components/list/PostInput'

const CreatorStudio = () => {
  return (
    <div className='mb-5'>
    <Banner styleProperty={'px-0 pt-2'} followBtnStyle={'border border-[#7362C6] bg-transparent text-[#7362C6]'} followText={'Follow'}/>

    <div className='flex gap-5 max-w-[1196px] justify-between'>
      <div className="flex flex-col max-w-[59%] w-full">
        <PostInput />
        <PostCard postCardStyle={'w-full'}/>
      </div>
       <div className="max-w-[39%]">
       <UserSection userSectionStyle={'w-full'}/>
       </div>
    </div>
</div>
  )
}

export default CreatorStudio