import Image from 'next/image'
import React from 'react'
import crossIcon from '../../../public/assets/xmark (1).png'
// import { Button } from "./Button";

interface DeleteProfileProp{
  deleteProfileState: boolean
  setDeleteProfileState: React.Dispatch<React.SetStateAction<boolean>>
}
const DeleteProfileModal = ({setDeleteProfileState , deleteProfileState}:DeleteProfileProp) => {
  return (
    <>
      <div className="w-full">
        <div className="p-[24px] border-b border-white/[08] font-bold flex justify-between items-center">            
        <div>Delete profile photo</div>      
        <Image src={crossIcon} alt='' className="cursor-pointer" onClick={() =>setDeleteProfileState(!deleteProfileState)}/>
        </div>
            <div className="flex flex-col items-center gap-[32px] p-[24px] relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative max-w-[290px] mx-auto text-center">
                    Are you sure you want to delete your profile photo?
                </p>
                <div className="flex items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
            <button
              className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] border border-white border-opacity-30 px-5'
              onClick={() => setDeleteProfileState(!deleteProfileState)}
            >
              <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                Cancel
              </div>
            </button>

            <button
              className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] bg-[#5848BC] px-5'
              onClick={() => setDeleteProfileState(!deleteProfileState)}
            >
              <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                Delete
              </div>
            </button>
          
                </div>
            </div>
        </div>
    </>
  )
}

export default DeleteProfileModal
