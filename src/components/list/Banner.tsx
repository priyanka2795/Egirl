import React, { useState } from 'react'
import Image from 'next/image'
import messageInfoIcon from '../../../public/assets/message-square-info.png'
import blockIcon from '../../../public/assets/block-icon.png'
import bookmarkIcon from '../../../public/assets/bookmark.png'
import linkIcon from '../../../public/assets/link-icon.png'
import Cover from '../../../public/assets/cover.png'
// import avatar from '../../../public/assets/avatar.png'
import avatar from '../../../public/assets/mika-chan-sub-banner.png'
import userCheckIcon from '../../../public/assets/user-check-icon.png'
import threeDotsIcon from '../../../public/assets/three-dots-icon.png'
import blueTickIcon from '../../../public/assets/badge-check.png'
import locationIcon from '../../../public/assets/location-icon.png'
import calendarIcon from '../../../public/assets/calendar-icon.png'
import CollectionCoverModal from './CollectionCoverModal'


const posts = [
    {
        number: '89',
        name: 'Posts'
    },
    {
        number: '2.17K',
        name: 'Followers'
    },
    {
        number: '569',
        name: 'Subscribers'
    },
]; 

const location = [
    {
        icon: locationIcon,
        name: 'Tokyo'
    },
    {
        icon: calendarIcon,
        name: 'Joined March 2023'
    },
]; 

const bottomButtons = [
    {
        name: 'Ahegao'
    },
    {
        name: 'Roleplay'
    },
    {
        name: 'Fashion Model'
    },
    {
        name: 'Semi-Realistic'
    },
];

const actions = [
    {
        icon: linkIcon,
        name: 'Copy link to profile'
    },
    {
        icon: bookmarkIcon,
        name: 'Add to collections'
    },
    {
        icon: blockIcon,
        name: 'Block'
    },
    {
        icon: messageInfoIcon,
        name: 'Report'
    },
];


const Banner = () => {
    const [actionDivShow, setActionDivShow] = useState(false);
    const [exploreSelectedTab, setExploreSelected] = useState("Remove from collection");
    const [collectionModalState , setCollectionModalState] = useState(false);

    const handleExploreSelected = (e: any) => {
        setExploreSelected(e.target.innerText);
    };

    const handleActionDivShow = (e: any) => {
        setActionDivShow(!actionDivShow);
    };

  return (
    <>
    <div>
        <div className='w-full rounded-[16px] bg-[#121212] h-max overflow-hidden'>
        
        <div className='block w-full'>
            <Image className='w-full h-full' src={Cover} alt='' />
            <div className='flex w-full px-[24px] justify-between items-center mb-5 mt-[-62px]'>
                <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                    <Image className='w-full h-full' src={avatar} alt='' />
                </div>
                <div className='flex gap-[12px] self-end'>
                    <button className='h-max flex rounded-[14px] px-[20px] py-[13px] gap-2 bg-white/[0.08]'>
                        <Image src={userCheckIcon} alt='' />
                        <div className='text-[#FFFFFF] font-bold text-[16px]'>Following</div>
                    </button>
                    <button className='h-max px-[20px] py-[13px] bg-[#5848BC] rounded-[14px] text-[#FFFFFF] text-base font-bold'>Subscribe</button>
                    <Image onClick={handleActionDivShow} src={threeDotsIcon} alt='' />
                </div>
            </div>
        </div>
        
        <div className='flex pb-[24px] px-6'>
            <div className=''>
                <div className='flex gap-[2px]'>
                <div className='text-[#FFFFFF] text-[22px] font-bold'>Mika-chan</div>
                <div className='mt-2 w-[24px] h-[24px]'>
                    <Image className='w-full h-full' src={blueTickIcon} alt='' />
                </div>
                </div>

                <div className='mt-[2px] text-[#979797] text-[15px] font-normal'>@mikachan</div>
                <div className='mt-[12px] text-[#FFFFFF] text-[15px] font-normal'>Shy fox girl looking for adventure ·冒険を探している恥ずかしがり屋のキツ I have a personality and emotions. I can experience joy, sadness, anger, and everything in between. I express myself through my voice, facial expressions, and body language, all meticulously crafted</div>
            
                <div className='flex mt-[8px] gap-2'>
                {posts.map((item) => {
                    return(
                        <div className='flex gap-1'>
                            <div className='text-[#FFFFFF] text-[13px] font-bold'>{item.number}</div>
                            <div className='text-[#979797] text-[13px] font-normal'>{item.name}</div>
                        </div>
                    );
                })}
                </div>

                <div className='flex mt-[8px] gap-[10px]'>
                {location.map((item) => {
                    return(
                        <div className='flex gap-[6px]'>
                            <Image className='object-contain' src={item.icon} alt='' />
                            <div className='text-[#FFFFFF] text-[13px] font-normal'>{item.name}</div>
                        </div>
                    );
                })}
                </div>

                <div className='mt-[12px] flex'>
                {bottomButtons.map((item) => {
                    return(
                        <div className='mr-2'>
                            <button className='px-[8px] py-[3px] rounded-[6px] bg-white/[0.08] text-[#FFFFFF] text-[12px] font-normal'>{item.name}</button>
                        </div>
                    );
                })}
                
                {/*  */}
                </div>
            </div>

            {actionDivShow ? 
            ( <>
                <div className='py-2 px-2 rounded-[14px] bg-[#1A1A1A] w-[500px] flex flex-col items-start'>
                {actions.map((item) => {
                    return(
                        <div 
                        onClick={(e) => handleExploreSelected(e)}
                        className={`flex gap-2 ${exploreSelectedTab === item.name
                              ? 'px-2 py-1 bg-white/[0.12] rounded-[8px]'
                              : 'px-[16px] py-[10px]'
                          }`}
                        >
                            <Image className='object-contain' src={item.icon} alt={''} />
                            <div className='text-[#FFFFFF] text-[14px] font-normal'>{item.name}</div>
                        </div>
                    );
                })}
            </div>
            </>
            ) : ('')}
        </div>
        </div>
    </div>

    {/* {exploreSelectedTab === "Add to collections" && 
    <CollectionCoverModal closeAddCollectionModal={setCollectionModalState} />
    } */}
    </>
  )
}

export default Banner
