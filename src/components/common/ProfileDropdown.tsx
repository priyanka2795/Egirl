import React, { useState } from 'react';
import pen from '../../../public/assets/pen.png';
import userImg from '../../../public/assets/circle-user-white.png';
import deleteIcon from '../../../public/assets/trash-blank.png';
import Image from 'next/image';
import DeleteModal from '@components/add-card/DeleteModal';
import DeleteProfileModal from './DeleteProfileModal';

interface profileDropdowProp {
  profileEdit: boolean;
  deleteProfileState: boolean;
  setProfileEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteProfileState:React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateProfileState: React.Dispatch<React.SetStateAction<boolean>>
  setUpdateProfileImg: React.Dispatch<React.SetStateAction<boolean>>
}
const ProfileDropdown = ({
  profileEdit,
  deleteProfileState,
  setProfileEdit,
  setDeleteProfileState,
  setUpdateProfileState,
  setUpdateProfileImg
}: profileDropdowProp) => {

  return (<>

    <div className='inline-flex h-[130px] w-[218px] flex-col items-start justify-start rounded-[14px] bg-neutral-800 py-2 shadow'>
      <div className='flex h-[38px] flex-col items-center justify-center gap-2.5 self-stretch bg-neutral-800 px-2 py-1'>
        <div onClick={() => {setUpdateProfileState(true),setProfileEdit(false)}} className='inline-flex items-center justify-start gap-2 self-stretch rounded-lg bg-white bg-opacity-5 px-2 py-1.5'>
          <Image src={pen} className='relative h-[18px] w-[18px]' />
          <div
            className="font-normal font-['Open Sans'] shrink grow basis-0 text-sm leading-[18px] text-white"          >
            Update photo
          </div>
        </div>
      </div>
      <div onClick={() => {setUpdateProfileImg(true), setProfileEdit(false)}} className='inline-flex items-center justify-start gap-2 self-stretch bg-neutral-800 px-4 py-2.5'>
        <Image src={userImg} className='relative h-[18px] w-[18px]' />
        <div
          className="font-normal font-['Open Sans'] shrink grow basis-0 text-sm leading-[18px] text-white"
       
        >
          Edit thumbnail
        </div>
      </div>
      <div className='inline-flex items-center justify-start gap-2 self-stretch bg-neutral-800 px-4 py-2.5'
        onClick={() => {
            setProfileEdit(false),
            setDeleteProfileState(!deleteProfileState),
            console.log(deleteProfileState ,'deleteProfileState')
          }}
     >
        <Image src={deleteIcon} className='relative h-[18px] w-[18px]' />
        <div className="font-normal font-['Open Sans'] shrink grow basis-0 text-sm leading-[18px] text-red-500">
          Delete
        </div>
      </div>
    </div> 
   
    </>
  );
};

export default ProfileDropdown;
