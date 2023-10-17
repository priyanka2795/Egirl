import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import userPenIcon from '../../../public/assets/user-pen.png';
import personalityIcon from '../../../public/assets/user.png';
import imagePlusIcon from '../../../public/assets/image-plus.png';
import palette from '../../../public/assets/palette.png';
import flag from '../../../public/assets/flag.png';
import circleInformation from '../../../public/assets/circle-information-blue.png';

// interface ProfileInfoModalProps {
//     closeModal: any;
// }

const ProfileInfoModal = () => {
  return (
    <div className='flex flex-col bg-[#070707] h-[900px]'>
        <div className='flex px-6 py-4 border-b border-white/[0.08]'>
            <button className='flex px-4 py-[10px] justify-center items-center rounded-[12px] border border-white/[0.32] text-white text-[14px] font-bold leading-5'>Save & Close</button>
        </div>

        <div className='flex flex-col justify-between h-full'>
            <div className='px-[200px] pt-[48px] flex flex-col gap-6 rounded-[16px]'>
            <div className='flex gap-4'>
                <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#5848BC]'>
            <Image src={userPenIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Profile info <span className='pl-1 text-[#979797]'>2/4</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-[#5848BC] bg-opacity-[40%]'>
              <div className='h-1 w-3/6 rounded-xl bg-[#5848BC] '></div>
            </div>
          </div>
                </div>
                <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] '>
            <Image src={personalityIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Personality <span className='pl-1 text-[#979797]'>0/5</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
          </div>
                </div>
                <div className='flex gap-4 '>
          <div className='setup_character flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] '>
            <Image src={imagePlusIcon} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Images <span className='pl-1 text-[#979797]'>0/4</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
          </div>
                </div>
                <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08]'>
            <Image src={palette} alt='' />
          </div>
          <div>
            <p className='text-[15px]'>
              Style <span className='pl-1 text-[#979797]'>0/1</span>
            </p>
            <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
          </div>
                </div>
                <div className='flex gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08]'>
            <Image src={flag} alt='' />
          </div>
                </div>
            </div>
            <div className='flex items-center gap-2 px-4 py-3 rounded-[12px] bg-[#5848BC1F]/[0.12]'>
                <Image src={circleInformation} alt={''} />
                <div className='text-[#7362C6] text-[13px] font-normal leading-[18px]'>Set up a character profile. Explore view tab is a way that other users can find you in Egirls.</div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col p-6 gap-4 w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px]'>
                <div className='flex flex-col gap-[6px]'>
                    <div className='flex justify-between'>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Profile Tags</div>
                        <div className='text-[#515151] text-[14px] font-normal leading-[18px]'>0/4</div>
                    </div>
                    <input type='text' placeholder='Add tags...' className='px-4 py-3 rounded-[14px] bg-white/[0.05] focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797]' />
                </div>
        
                <div className='flex flex-col gap-[6px]'>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Location (Optional)</div>
                    <input type='text' placeholder='Type location...' className='px-4 py-3 rounded-[14px] bg-white/[0.05] focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797]' />
                </div>
        
                <div className='flex flex-col gap-[6px]'>
                    <div className='flex justify-between'>
                        <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>Profile Tags</div>
                        <div className='text-[#515151] text-[14px] font-normal leading-[18px]'>0/160</div>
                    </div>
                    <textarea placeholder='Type something...' className='h-[120px] pl-4 pr-3 py-3 rounded-[14px] bg-white/[0.05] resize-none focus:ring-0 border-none text-[#979797] text-[15px] font-normal leading-6 placeholder:text-[#979797]' />
                </div>
                </div>
            </div>
            </div>
            <div className='flex items-end justify-end px-6 pb-8'>
                <button className='px-5 py-[13px] flex justify-center items-center rounded-[14px] bg-[#5848BC52]/[0.32] text-white/[0.32] text-[16px] font-bold leading-[22px]'>Next</button>
            </div>
        </div>
        
    </div>


    
  )
}

export default ProfileInfoModal;
