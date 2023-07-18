import Image from 'next/image';
import React from 'react'
import searchIcon from '../../../public/assets/search-icon.png'
import arrowDownArrowUp from '../../../public/assets/arrow-down-arrow-up.png'
import filterIcon from '../../../public/assets/filter-icons.png'
import micaChan from '../../../public/assets/mikaChan.png'
import mirandal from '../../../public/assets/mirandalImg.png'
import model2 from '../../../public/assets/golden-shoulder-girl.png'
import model4 from '../../../public/assets/micaChan-2.png'
import sarahScarlet from '../../../public/assets/sarahScarlet.png'
import blueTick from '../../../public/assets/badge-check.png'
import Card from '@components/common/card';


const GalleryFilter = () => {
  return (
    <div className='flex flex-col items-start gap-[14px] self-stretch px-8 py-4'>
        <div className='flex items-center gap-[33rem] justify-between'>
            <div className='flex flex-col w-[320px] items-start justify-center gap-[6px] shrink-0 rounded-[12px]'>
                <div className='flex items-start self-stretch gap-2 py-[10px] pl-[14px] pr-[12px] rounded-[12px] bg-white/10'>
                    <Image className='w-[20px] h-[20px]' src={searchIcon} alt={''}/>
                    <div className='text-[#979797] text-sm font-normal'>Search</div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Image className='w-[20px] h-[20px]' src={arrowDownArrowUp} alt={''}/>
                <Image className='w-[20px] h-[20px]' src={filterIcon} alt={''}/>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-[14px] self-stretch '>           
            <Card cardMainImg={micaChan} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={model2} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={mirandal} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={model4} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={sarahScarlet} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>            
            
            <Card cardMainImg={micaChan} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2" />
            <Card cardMainImg={model2} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2" />
            <Card cardMainImg={mirandal} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={model4} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={sarahScarlet} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>        

            <Card cardMainImg={micaChan} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2" />
            <Card cardMainImg={model2} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2" />
            <Card cardMainImg={mirandal} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={model4} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>
            <Card cardMainImg={sarahScarlet} verified={true} characterName="Sarah Scarlet" characterType="General" availableCount="+2"/>        
        </div>
    </div>
  )
}

export default GalleryFilter;
