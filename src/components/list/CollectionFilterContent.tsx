import Card from '@components/common/Card';
import React from 'react';
import micaChan from '@/assets/mikaChan.webp';
import model2 from '@/assets/golden-shoulder-girl.webp';
import model4 from '@/assets/micaChan-2.webp';
import mirandal from '@/assets/mirandalImg.webp';
import sarahScarlet from '@/assets/sarahScarlet.webp';
import PlusIcon from "@/assets/svgImages/plus-icon.svg";
import Image from 'next/image';
import ListFilter from './ListFilter';
import LeftArrow from "./svg/leftArrow.svg"
interface CollectionFilterProp {
  titleText: string;
  clearFilter:any
}
const CollectionFilterContent = ({ titleText , clearFilter}: CollectionFilterProp) => {
  return (
    <div className=''>     
      <div className='flex justify-between mb-5'>
        <div className='flex items-center gap-2 text-lg font-bold cursor-pointer' onClick={() =>{clearFilter(false)}}>
          <LeftArrow />
          {titleText}
          <span className="text-[#979797]">(8)</span>
        </div>
        <div className='flex h-8 items-center justify-center gap-1.5 rounded-lg bg-white bg-opacity-10 px-3 py-1.5'>
          {/* <div className="w-4 h-4">
            <Image src={plusIcon} alt=""/>
          </div> */}
          <PlusIcon />
          <div className='text-xs font-bold leading-none text-neutral-400'>
            Add models
          </div>
        </div>
      </div>
      <ListFilter/>
      <div className='grid grid-cols-5 gap-[14px] mt-[14px]'>
        <Card
          cardMainImg={model2}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={mirandal}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={sarahScarlet}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={model2}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={model4}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={model2}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={model2}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={mirandal}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
        <Card
          cardMainImg={sarahScarlet}
          verified={true}
          characterName='Sarah Scarlet'
          characterType='General'
          availableCount='+2'
        />
      </div>
    </div>
  );
};

export default CollectionFilterContent;
