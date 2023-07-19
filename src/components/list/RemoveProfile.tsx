import React, {useState} from 'react'
import Banner from './Banner';
import PostCard from './PostCard';
import UserSection from './UserSection';


const RemoveProfile = () => {

  return (
    <div>
        <div className='px-8 mb-5'>
            <Banner />
            <div className='flex gap-5'>
                <PostCard />
                <UserSection />
            </div>
        </div>
    </div>
  )
}

export default RemoveProfile;
