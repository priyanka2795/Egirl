import Image from 'next/image';
import React, { useState } from 'react';
import userProfileIcon from '../../../public/assets/user-profile-grey.png';
import avatart1 from '../../../public/assets/avatar-cs-1.png'
import avatart2 from '../../../public/assets/avatar-cs-2.png'
import avatart3 from '../../../public/assets/avatar-cs-3.png'
import check from '../../../public/assets/check-cs.png'
import plusIcon from '../../../public/assets/plus-white.png'


const sidebarModal = [
    {
        image: avatart1,
        name: 'Mika-chan',
    },
    {
        image: avatart2,
        name: 'Character 2',
    },
    {
        image: avatart3,
        name: 'Character 3',
    }
];

const SidebarModal = () => {
    const [activeProfile, setActiveProfile] = useState('Mika-chan');
  return (
    <div className='absolute top-10 -left-[4px] mt-[7px] w-[260px] flex flex-col px-0 pt-2 pb-3 rounded-[14px] bg-[#1A1A1A] h-max'>
      <div className='px-6 py-[14px]'>
        <div className='flex gap-[10px]'>
            <div className='bg-white/[0.08] rounded-full p-2 justify-center items-center h-max w-8 h-8'>
                <div className='w-4 h-4 overflow-hidden rounded-full'>
                    <Image className='w-full h-full' src={userProfileIcon} alt={''} />
                </div>
            </div>
            <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px]'>All Characters</div>
        </div>
      </div>

      {sidebarModal.map((item) => {
        return(
            <div onClick={() => {setActiveProfile(item.name)}}>
                {activeProfile === item.name ? 
                <div className='flex px-4 py-[6px]'>
                <div className='flex justify-between w-full mt-[5px] pl-2 pr-[14px] py-2 rounded-full bg-white/[0.08]'>
                    <div className='flex gap-[10px]'>
                        <div className='w-8 h-8'>
                            <Image className='w-full h-full' src={item.image} alt={''} />
                        </div>
                        <div className='mt-[6px] text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>{item.name}</div>
                    </div>
                    <div className='w-4 h-4'>
                        <Image className='w-full h-full' src={check} alt={''} />
                    </div>
                </div>
              </div> : 
              <div className='flex pl-6 pr-4 py-[14px] gap-[10px]'>
              <div className='w-8 h-8 overflow-hidden rounded-full'>
                  <Image className='w-full h-full' src={item.image} alt={''} />
              </div>
              <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px] mt-[6px]'>{item.name}</div>
            </div>
              }
            </div>
        );
      })}

      {/* <div className='flex px-4 py-[6px]'>
        <div className='flex justify-between w-full mt-[5px] pl-2 pr-[14px] py-2 rounded-full bg-white/[0.08]'>
            <div className='flex gap-[10px]'>
                <div className='w-8 h-8'>
                    <Image className='w-full h-full' src={avatart1} alt={''} />
                </div>
                <div className='mt-[6px] text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>Mika-chan</div>
            </div>
            <div className='w-4 h-4'>
                <Image className='w-full h-full' src={check} alt={''} />
            </div>
        </div>
      </div>

      <div className='flex pl-6 pr-4 py-[14px] gap-[10px]'>
        <div className='w-8 h-8 overflow-hidden rounded-full'>
            <Image className='w-full h-full' src={avatart2} alt={''} />
        </div>
        <div className='text-[#FFFFFF] text-[14px] font-normal leading-[18px] mt-[6px]'>Character 2</div>
      </div> */}
      
      <button className='w-full flex px-6 py-[10px] '>
        <div className='w-full flex gap-[6px] px-4 py-[10px] justify-center items-center bg-[#5848BC] rounded-[12px]'>
            <div className='w-[18px] h-[18px]'>
                <Image className='w-full h-full' src={plusIcon} alt={''} />
            </div>
            <div className='text-[#FFFFFF] text-[14px] font-bold leading-5'>New Character</div>
        </div>
      </button>
    </div>
  )
}

export default SidebarModal;
