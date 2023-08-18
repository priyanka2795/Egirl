import Image from 'next/image';
import React from 'react';
import micaChan from '../../../public/assets/mikaChan.png';
import mirandal from '../../../public/assets/mirandalImg.png';
import model2 from '../../../public/assets/golden-shoulder-girl.png';
import model4 from '../../../public/assets/micaChan-2.png';
import sarahScarlet from '../../../public/assets/sarahScarlet.png';
import userCheckIcon from '../../../public/assets/user-check-icon.png';
import blueTick from '../../../public/assets/badge-check.png';
import Card from '../common/Card';
import ListFilter from './ListFilter';

interface SubscriptionOptionsProps {
  showProfile: React.Dispatch<React.SetStateAction<boolean>>;
}
const SubscriptionOptions = ({ showProfile }: SubscriptionOptionsProps) => {
  return (
    <div className='flex flex-col items-start gap-[14px] self-stretch'>
      {/* <div className='flex items-center gap-[33rem] justify-between'>
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
        </div> */}
      <ListFilter />
      <div className='grid grid-cols-5 gap-[14px] self-stretch '>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={micaChan}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={model2}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={mirandal}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={model4}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={sarahScarlet}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={micaChan}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={model2}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={mirandal}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={model4}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={sarahScarlet}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={micaChan}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={model2}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>

        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={mirandal}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={model4}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
        <div onClick={() => showProfile(true)}>
          <Card
            cardMainImg={sarahScarlet}
            verified={true}
            characterName='Sarah Scarlet'
            characterType='General'
            availableCount='+2'
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOptions;
