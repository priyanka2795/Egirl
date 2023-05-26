import SearchIcon from './svg/search-icon.svg';
import useScroll from '../../../hooks/useScroll';
import YouMightLike from '../home/YouMightLike';
import Image from 'next/image';
import DotsHorizontalIcon from './svg/dots-horizontal-icon.svg';
import { useEffect, useRef } from 'react';
import Button from './Button.svg';
import VoiceIcon from './svg/voice-icon.svg';
import SmileIcon from './svg/smile-icon.svg';

export default function ChatScreen() {
  const [sticky, animate] = useScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className='w-full border-r-[2px] border-[#252525] bg-[#121212] lg:inline'>
      <div className='flex h-[72px] w-full items-center justify-between border-b border-[#252525] px-6'>
        <div className='flex items-center'>
          <Image
            key={0}
            src='/dummy-char.png' // Change to your image path
            alt={`Character Profile Picture ${0 + 1}`} // Change to your alt text
            width={40}
            height={40}
            className='rounded-full'
          />
          <h3 className='ml-3 text-[15px] font-semibold leading-5'>
            Mika-chan
          </h3>
        </div>
        <div className='flex items-center'>
          <DotsHorizontalIcon />
        </div>
      </div>
      <div
        style={{ height: 'calc(100vh - 72px - 92px)' }}
        ref={containerRef}
        className='overflow-auto bg-[#121212] px-6 pt-4'
      >
        <div className='flex w-full justify-center text-[12px] font-light leading-4 text-[#979797] '>
          May, 11 2023
        </div>
        <div className='flex w-full items-center py-4'>
          <Image
            key={0}
            src='/dummy-char.png' // Change to your image path
            alt={`Character Profile Picture ${0 + 1}`} // Change to your alt text
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='ml-3 flex flex-col'>
            <div className='mb-[2px] flex items-center'>
              <span className='mr-2 text-[15px] font-semibold leading-5'>
                You
              </span>
              <span className='text-xs font-light text-[#979797]'>09:22</span>
            </div>
            <span className='text-xs font-light leading-[18px]'>
              Hey, how are you?
            </span>
          </div>
        </div>
        <div className='flex w-full items-center py-4'>
          <Image
            key={0}
            src='/dummy-char.png' // Change to your image path
            alt={`Character Profile Picture ${0 + 1}`} // Change to your alt text
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='ml-3 flex flex-col'>
            <div className='mb-[2px] flex items-center'>
              <span className='mr-2 text-[15px] font-semibold leading-5'>
                Mika-chan
              </span>
              <span className='text-xs font-light text-[#979797]'>09:23</span>
            </div>
            <span className='text-xs font-light leading-[18px]'>
              Doing well, thank you. How may I assist you?
            </span>
          </div>
        </div>
      </div>
      <div className='flex h-[92px] items-center border-t  border-[#252525] bg-[red-400] px-6'>
        <div className='mr-[10px]'>
          <Button />
        </div>
        <div className='relative w-full'>
          <div className='absolute right-4 top-3'>
            <SmileIcon />
          </div>
          <input
            className='h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] py-4 pl-4 pr-[50px] text-[15px] font-light leading-6 text-[#979797] transition-all duration-100 focus:ring-1 focus:ring-transparent'
            type='text'
            placeholder='Type a message'
            style={{ outline: 'none' }}
          />
        </div>
        <div className='ml-[10px]'>
          <VoiceIcon />
        </div>
      </div>
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
