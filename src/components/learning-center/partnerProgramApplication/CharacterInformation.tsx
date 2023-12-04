import React, { useState } from 'react';
import Image from 'next/image';
import rightArrowWhite from '@/assets/chevron-right-white.webp';
import leftArrow from '@/assets/left-arrow-grey.webp';
import UnSelectIcon from '../../creator-studio/svg/short_border_grey.svg';
import SelectIcon from '../../creator-studio/svg/short_select.svg';

const characterType = ['AI version of yourself', 'Original character'];
const characterAdhere = ['Yes', 'No'];

interface characterInfoProps {
  setSteps: any;
}
function CharacterInformation({ setSteps }: characterInfoProps) {
  const [characterTypeTab, setCharacterTypeTab] = useState<string>(
    'AI version of yourself'
  );
  const [characterAdhereTab, setCharacterAdhereTab] = useState<string>('Yes');

  const SelectCharacterType = (name: string) => {
    setCharacterTypeTab(name);
  };
  const SelectCharacterAdhere = (name: string) => {
    setCharacterAdhereTab(name);
  };

  return (
    <>
      <div className='flex items-center justify-between '>
        <div
          className='flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08]'
          onClick={() => setSteps(2)}
        >
          <Image src={leftArrow} alt='' />
        </div>
        <div className='text-center text-[26px] font-black text-white'>
          Partner Program Application
        </div>
        <span></span>
      </div>
      <div className='pb-5 text-center text-[15px] text-[#979797]'>
        Please specify the information about the character
      </div>
      <div className='flex flex-col items-center'>
        {/* character type */}
        <div className='flex w-[420px] flex-col gap-1.5'>
          <div className='self-stretch text-[15px] font-semibold leading-[18px] text-white'>
            Character type
          </div>
          <div className='flex  gap-[10px] '>
            {characterType.map((item, index) => (
              <div
                key={index}
                className='flex w-full cursor-pointer items-center gap-2 rounded-[14px] bg-white/[0.05] px-4 py-3'
                onClick={() => SelectCharacterType(item)}
              >
                {characterTypeTab == item ? <SelectIcon /> : <UnSelectIcon />}
                <p className='font-normal text-[14px]'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* character adhere */}
        {characterTypeTab === 'Original character' && (
          <div className='mt-4 flex w-[420px] flex-col gap-1.5'>
            <div className='flex items-center justify-between'>
              <div className='self-stretch text-[15px] font-semibold leading-[18px] text-white'>
                Does this character adhere to fair use laws?
              </div>
              <div className='font-normal text-[14px] text-[#5848BC] hover:cursor-pointer hover:underline'>
                Learn more
              </div>
            </div>
            <div className='flex  gap-[10px] '>
              {characterAdhere.map((item, index) => (
                <div
                  key={index}
                  className='flex w-full cursor-pointer items-center gap-2 rounded-[14px] bg-white/[0.05] px-4 py-3'
                  onClick={() => SelectCharacterAdhere(item)}
                >
                  {characterAdhereTab == item ? (
                    <SelectIcon />
                  ) : (
                    <UnSelectIcon />
                  )}
                  <p className='font-normal text-[14px]'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* next button */}
        <button
          className='mt-7 flex h-12 w-[420px] items-center justify-center  gap-2 rounded-[14px] bg-[#5848BC]  px-5 py-[13px] text-base font-black leading-[22px] text-white'
          onClick={() => setSteps(4)}
        >
          Next <Image src={rightArrowWhite} alt='' />
        </button>
      </div>
    </>
  );
}

export default CharacterInformation;
