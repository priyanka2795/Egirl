import Image from 'next/image';
import React, {useState} from 'react'
import Cover from '../../../public/assets/cover.png'
import avatar from '../../../public/assets/avatar.png'
import userCheckIcon from '../../../public/assets/user-check-icon.png'
import threeDotsIcon from '../../../public/assets/three-dots-icon.png'
import blueTickIcon from '../../../public/assets/badge-check.png'
import locationIcon from '../../../public/assets/location-icon.png'
import calendarIcon from '../../../public/assets/calendar-icon.png'
import messageInfoIcon from '../../../public/assets/message-square-info.png'
import blockIcon from '../../../public/assets/block-icon.png'
import bookmarkIcon from '../../../public/assets/bookmark.png'
import linkIcon from '../../../public/assets/link-icon.png'
import shareIcon from '../../../public/assets/share-icon.png'
import messageIcon from '../../../public/assets/message-square.png'
import heartIcon from '../../../public/assets/unfilled-heart.png'
import arrowLeft from '../../../public/assets/arrow-narrow-left.png'
import arrowRight from '../../../public/assets/arrow-narrow-right.png'


const RemoveProfile = () => {
    const tabContent = ['Preview', 'Chat' , 'Posts' , 'Media'];
    const [exploreSelectedTab, setExploreSelected] = useState("Preview");

    const handleExploreSelected = (e: any) => {
        setExploreSelected(e.target.innerText);
    };

  return (
    <div>
        <div className='w-[960px] rounded-[16px] bg-[#121212] h-max ml-7'>
        <div className='block w-full'>
            <Image className='w-full' src={Cover} alt='' />
            <div className='flex w-full px-[24px] justify-between items-center'>
                <div className="relative -top-[46px] w-[120px] h-[120px]">
                    <Image className='w-full h-full' src={avatar} alt='' />
                </div>
                <div className='flex gap-[12px] -mt-[43px]'>
                    <button className='h-max flex rounded-[14px] px-[20px] py-[13px] gap-2 bg-white/[0.08]'>
                        <Image src={userCheckIcon} alt='' />
                        <div className='text-[#FFFFFF] font-bold text-[16px]'>Following</div>
                    </button>
                    <button className='h-max px-[20px] py-[13px] bg-[#5848BC] rounded-[14px] text-[#FFFFFF] text-base font-bold'>Subscribe</button>
                    <Image src={threeDotsIcon} alt='' />
                </div>
            </div>
        </div>
        <div className='flex pb-[24px] px-6'>
            <div className='-mt-[46px] '>
            <div className='flex gap-[2px]'>
                <div className='text-[#FFFFFF] text-[22px] font-bold'>Mika-chan</div>
                <div className='mt-2 w-[24px] h-[24px]'>
                    <Image className='w-full h-full' src={blueTickIcon} alt='' />
                </div>
            </div>
            <div className='mt-[2px] text-[#979797] text-[15px] font-normal'>@mikachan</div>
            <div className='mt-[12px] text-[#FFFFFF] text-[15px] font-normal'>Shy fox girl looking for adventure ·冒険を探している恥ずかしがり屋のキツ I have a personality and emotions. I can experience joy, sadness, anger, and everything in between. I express myself through my voice, facial expressions, and body language, all meticulously crafted</div>
            <div className='flex mt-[8px] gap-2'>
                <div className='flex gap-1'>
                    <div className='text-[#FFFFFF] text-[13px] font-bold'>89</div>
                    <div className='text-[#979797] text-[13px] font-normal'>Posts</div>
                </div>
                <div className='flex gap-1'>
                    <div className='text-[#FFFFFF] text-[13px] font-bold'>2.17K</div>
                    <div className='text-[#979797] text-[13px] font-normal'>Followers</div>
                </div>
                <div className='flex gap-1'>
                    <div className='text-[#FFFFFF] text-[13px] font-bold'>569</div>
                    <div className='text-[#979797] text-[13px] font-normal'>Subscribers</div>
                </div>
            </div>
            <div className='flex mt-[8px] gap-[10px]'>
                <div className='flex gap-[6px]'>
                    <Image className='object-contain' src={locationIcon} alt='' />
                    <div className='text-[#FFFFFF] text-[13px] font-normal'>Tokyo</div>
                </div>
                <div className='flex gap-[6px]'>
                    <Image className='object-contain' src={calendarIcon} alt='' />
                    <div className='text-[#FFFFFF] text-[13px] font-normal'>Joined March 2023</div>
                </div>
            </div>
            <div className='mt-[12px] flex gap-2'>
                <button className='px-[8px] py-[3px] rounded-[6px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal'>Ahegao</button>
                <button className='px-[8px] py-[3px] rounded-[6px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal'>Roleplay</button>
                <button className='px-[8px] py-[3px] rounded-[6px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal'>Fashion Model</button>
                <button className='px-[8px] py-[3px] rounded-[6px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal'>Semi-Realistic</button>
            </div>
            </div>
            <div className='py-2 px-2 rounded-[14px] bg-[#1A1A1A] w-[500px] flex flex-col items-start'>
                <div className='flex px-[16px] py-[10px] gap-2'>
                    <Image src={linkIcon} alt={''} />
                    <div className='text-[#FFFFFF] text-[14px] font-normal'>Copy link to profile</div>
                </div>
                <div className='flex gap-2 px-2 py-1 bg-white/[0.12] rounded-[8px]'>
                    <Image src={bookmarkIcon} alt={''} />
                    <div className='text-[#FFFFFF] text-[14px] font-normal'>Remove from collection</div>
                </div>
                <div className='flex gap-2 px-[16px] py-[10px]'>
                    <Image className='object-contain' src={blockIcon} alt={''} />
                    <div className='text-[#FFFFFF] text-[14px] font-normal'>Block</div>
                </div>
                <div className='flex gap-2 px-[16px] py-[10px]'>
                    <Image className='object-contain' src={messageInfoIcon} alt={''} />
                    <div className='text-[#FFFFFF] text-[14px] font-normal'>Report</div>
                </div>
            </div>
        </div>
        </div>

        <div className='flex gap-5 mb-5 mt-[20px] ml-7'>
            <div className='w-[560px] bg-[#121212] rounded-[14px]'>
            <div className='flex w-full gap-3 px-6 pt-6 pb-[20px] border-b border-white/[0.08]'>
            {tabContent.map((items, index) => {
             return (
            <div
              key={index}
              onClick={(e) => handleExploreSelected(e)}
              className={`flex cursor-pointer gap-3 rounded-xl px-4 py-2 text-[15px] font-bold ${
                exploreSelectedTab === items
                  ? ' bg-white/[0.16] bg-opacity-20 text-white  '
                  : 'text-[#979797]'
              }`}
            >
              {items}
            </div>
          );
        })}
            </div>
            <div className='p-6'>
                <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <div className='w-[40px] h-[40px]'>
                        <Image src={avatar} alt={''} />
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <div className='text-[#FFFFFF] text-base font-bold'>Mika-chan</div>
                        <div className='text-[#979797] text-sm font-normal'>@mikachan • 6h</div>
                    </div>
                </div>
                <div className=''>
                    <Image src={threeDotsIcon} alt={''} />
                </div>
                </div>
                <div className='mt-4'>
                <div className='text-[#FFFFFF] text-sm font-normal'>Hello dears, my mood today is 🤗</div>
                <div className='flex gap-[6px]'>
                    <div className='text-[#8C7DD0] text-sm font-normal'>#girl</div>
                    <div className='text-[#8C7DD0] text-sm font-normal'>#mood</div>
                    <div className='text-[#8C7DD0] text-sm font-normal'>#relaxtime</div>
                </div>
                </div>
                <div className='w-full h-[512px] rounded-[14px]'>
                    {/* {/ <Image src={} alt={''} /> /} */}
                </div>
                <div className='flex gap-2 mt-4'>
                    <Image className='object-contain' src={locationIcon} alt={''} />
                    <div className='text-sm font-normal text-[#FFFFFF]'>Warsaw, Old Town</div>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex gap-3'>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={heartIcon} alt={''} />
                            <div className='text-[#FFFFFF] text-[15px] font-normal'>6.2k</div>
                        </div>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={messageIcon} alt={''} />
                            <div className='text-[#FFFFFF] text-[15px] font-normal'>98</div>
                        </div>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={bookmarkIcon} alt={''} />
                        </div>
                        <div className='flex px-3 py-2 gap-[6px] rounded-[100px] bg-white/[0.08]'>
                            <Image className='object-contain' src={shareIcon} alt={''} />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            </div>

            <div className='bg-[#121212] rounded-[14px]'>
                <div className='flex justify-between p-6 border-b border-white/[0.08]'>
                    <div className='text-[#FFFFFF] text-[18px] font-bold'>You might like</div>
                    <div className='flex gap-3'>
                        <Image src={arrowLeft} alt={''} />
                        <Image src={arrowRight} alt={''} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RemoveProfile
