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
    <div className='pl-6 mb-5'>
      <Banner
        styleProperty={'px-0 pt-2'}
        followBtnStyle={'border border-[#7362C6] bg-transparent text-[#7362C6]'}
        followText={'Follow'}
        backFromProfile={backFromProfile}
      />

      <div className='flex max-w-[1196px] justify-between gap-5'>
        <div className='flex w-full max-w-[59%] flex-col'>
          <PostInput />
          <PostCard postCardStyle={'w-full'} />
        </div>
        <div className='max-w-[39%]'>
          <UserSection userSectionStyle={'w-full'} />
        </div>
      </div>
    </div>
  )
}

export default RemoveProfile;


{/* <div>
    //     <div className='mb-5'>
    //         <Banner backFromProfile={backFromProfile}/>
    //         <div className='flex justify-between gap-5'>
    //           <div className='flex flex-col'>
    //             <PostInput />
    //             <PostCard />
    //           </div>
    //             <UserSection />
    //         </div>
    //     </div>
    // </div> */}