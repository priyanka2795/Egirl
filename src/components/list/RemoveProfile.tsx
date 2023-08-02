import React, {useState} from 'react'
import Banner from './Banner';
import PostCard from './PostCard';
import UserSection from './UserSection';

interface RemoveProfileProp{
  backFromProfile: React.Dispatch<React.SetStateAction<boolean>>
}
const RemoveProfile = ({backFromProfile} : RemoveProfileProp) => {

  return (
    <div>
        <div className='px-8 mb-5'>
            <Banner backFromProfile={backFromProfile}/>
            <div className='flex justify-between gap-5'>
                <PostCard />
                <UserSection />
            </div>
        </div>
    </div>
  )
}

export default RemoveProfile;
