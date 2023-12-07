import React, { useState } from 'react';
import Image from 'next/image';
import plusIcon from '@/assets/plus-large.webp';
import searchIcon from '@/assets/search-alt (1).webp';
import threeDots from '@/assets/dots-horizontal.webp';
import volume from '@/assets/volume-max.webp';
import VoiceGeneratorModal from './VoiceGeneratorModal';

const voiceGenerations = [
  {
    voice: 'Serious voice',
    // use: 'Use',
    text: 'This is example text that the AI character will read',
    button1: 'Funny',
    button2: 'Light',
    button3: 'Melodious'
  },
  {
    voice: 'Melodious voice',
    // use: 'Use',
    text: 'hello everyone my name is Mica-chan',
    button1: 'Melodious',
    button2: 'Cute voice',
    button3: 'Melodious'
  },
  {
    voice: 'Melodious voice',
    // use: 'Use',
    text: 'hello everyone my name is Mica-chan',
    button1: 'Melodious',
    button2: 'Cute voice',
    button3: 'Melodious'
  }
];

const Voice = () => {
  const [inUse, setInUse] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [voiceModal, setVoiceModal] = useState<boolean>(false);

  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <div className='text-[22px] font-bold leading-8 text-[#FFFFFF]'>
            Voice
          </div>
          <button
            className='flex cursor-pointer items-center justify-center gap-[6px] rounded-[12px] bg-[#5848BC] px-4 py-[10px]'
            onClick={() => {
              setVoiceModal(true);
            }}
          >
            <Image className='h-[18px] w-[18px]' src={plusIcon} alt={''} />
            <div className='text-[14px] font-bold leading-5 text-[#FFFFFF]'>
              New
            </div>
          </button>
        </div>

        {/* <div className='flex max-h-[892px] flex-col gap-4 rounded-[14px] bg-[#121212] p-6'>
        <div className='flex justify-between'>
          <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
            All voice generations
          </div>
          <div className='w-5 h-5'>
            <Image className='w-full h-full' src={searchIcon} alt={''} />
          </div>
        </div>

        {voiceGenerations.map((item, index) => {
          return (
            <div className='flex flex-col gap-4 rounded-[14px] bg-[#1A1A1A] p-5'>
              <div className='flex flex-col gap-[2px]'>
                <div className='flex justify-between'>
                  <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
                    {item.voice}
                  </div>
                  <div className='flex gap-4'>
                    <div className='w-5 h-5 mt-[10px]'>
                      <Image
                        className='w-full h-full'
                        src={threeDots}
                        alt={''}
                      />
                    </div>
                    <button className={`flex items-center justify-center rounded-[12px] px-4 py-[10px] text-[14px] font-bold leading-5 text-[#FFFFFF] ${inUse === true && currentIndex === index ? 'border border-[0.32]' : 'bg-white/[0.08] border border-transparent'}`} onClick={() => {setInUse(true), setCurrentIndex(index)}}>
                      {inUse === true && currentIndex === index ? 'In use' : 'Use'}
                    </button>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='w-5 h-5'>
                    <Image className='w-full h-full' src={volume} alt={''} />
                  </div>
                  <div className='text-[14px] font-normal leading-[18px] text-[#979797]'>
                    {item.text}
                  </div>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='rounded-2 items-center justify-center bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px] text-[#FFFFFF]'>
                  {item.button1}
                </div>
                <div className='rounded-2 items-center justify-center bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px] text-[#FFFFFF]'>
                {item.button2}
                </div>
                <div className='rounded-2 items-center justify-center bg-white/[0.08] px-[10px] py-1 text-[13px] font-normal leading-[18px] text-[#FFFFFF]'>
                {item.button3}
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      </div>
      {voiceModal && <VoiceGeneratorModal closeModal={setVoiceModal} />}
    </>
  );
};

export default Voice;
