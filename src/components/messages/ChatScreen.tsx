import SearchIcon from './SearchIcon.svg';
import useScroll from '../../../hooks/useScroll';
import YouMightLike from '../home/YouMightLike';
import Image from 'next/image';
import DotsHorizontalIcon from './svg/dots-horizontal-icon.svg';
import { useEffect, useRef } from 'react';

export default function ChatScreen() {
  const [sticky, animate] = useScroll();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className='w-full border-r border-[#252525] lg:inline'>
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
        style={{ height: 'calc(100vh - 72px)' }}
        ref={containerRef}
        className='overflow-auto px-6'
      ></div>
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
