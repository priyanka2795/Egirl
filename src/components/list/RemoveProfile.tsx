//@ts-nocheck
import React, {useState, useEffect} from 'react'
import Banner from './Banner';
import PostCard from './PostCard';
import UserSection from './UserSection';
import PostInput from './PostInput';
import { profileCharacter, profileInterest } from 'services/services';
import Cookies from 'js-cookie';

interface RemoveProfileProp{
  backFromProfile: React.Dispatch<React.SetStateAction<boolean>>
}
const RemoveProfile = ({backFromProfile} : RemoveProfileProp) => {
  const token:any = Cookies.get("accessToken")
  const [characterData, setCharacterData] = useState({})
  useEffect(()=>{
    // profile character api 
    profileCharacter("f8ee29cd-c1b9-4022-8fa3-c3b19822a1f3", token)
    .then((res:any)=>{
      console.log("profile character res----", res)
      // setCharacterData(res?.data[0])
    })
    .catch((err)=>{
      console.log("profile character err---", err)
    })

    // character interest api
    profileInterest("57713333-24df-4eaf-8070-ff4599b6061c", token)
    .then((res:any)=>{
      console.log("profile interest res----", res)
    })
    .catch((err)=>{
      console.log("profile interest err---", err)
    })
  },[])
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