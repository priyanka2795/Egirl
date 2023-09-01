import React, {useState} from 'react'
import Banner from './Banner';
import PostCard from './PostCard';
import UserSection from './UserSection';
import PostInput from './PostInput';

interface RemoveProfileProp{
  backFromProfile: React.Dispatch<React.SetStateAction<boolean>>
}
const RemoveProfile = ({backFromProfile} : RemoveProfileProp) => {

  return (
    <div>
        <div className='mb-5'>
            <Banner backFromProfile={backFromProfile}/>
            <div className='flex justify-between gap-5'>
              <div className='flex flex-col'>
                <PostInput />
                <PostCard />
              </div>
                <UserSection />
            </div>
        </div>
    </div>
  )
}

export default RemoveProfile;
