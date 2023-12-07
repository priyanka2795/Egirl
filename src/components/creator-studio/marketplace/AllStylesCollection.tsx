import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import arrowDown from '@/assets/arrow-down.webp';
import arrowUp from '@/assets/arrow-up.webp';
import MarketPlaceCards from './MarketPlaceCards';
import checkIcon from '@/assets/check-cs.webp';
const AllStylesCollection = () => {
  const [showNewest, setShowNewest] = useState<boolean>(false);
  const [showDuration, setShowDuration] = useState<boolean>(false);
  const [selectedNewest, setSelectedNewest] = useState<string>('Newest');
  const [selectedDuration, setSelectedDuration] = useState<string>('Month');
  const newestArr = [
    'Highest rated',
    'Most downloaded',
    'Most liked',
    'Most disliked',
    'Newest'
  ];
  const durationArr = ['Day', 'Week', 'Month', 'year', 'All time'];

  const handleNewest = () => {
    setShowNewest(!showNewest);
    setShowDuration(false);

  };
  const handleDuration = () => {
    setShowDuration(!showDuration);
    setShowNewest(false);

  };
  const handleSelectedNewest = (ele: string) => {
    setSelectedNewest(ele);
    setShowNewest(false);

  };
  const handleSelectedDuration = (ele: string) => {
    setSelectedDuration(ele);
    setShowDuration(false);

  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShowDuration(false);
      setShowNewest(false);
    }
  };

  return (
    <>
      <div className='flex justify-between mt-8 mb-4' ref={dropdownRef}>
        <div className='text-[18px] font-bold leading-6 text-[#FFF]'>
          All Styles
        </div>
        <div className='flex gap-4'>
          <div className='relative'>
            <div
              className='flex cursor-pointer gap-2 border-r border-white/[0.08] pr-2'
              onClick={handleNewest}
            >
              <p>{selectedNewest}</p>
              <Image
                src={showNewest ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {showNewest && (
              <div className='absolute right-0 top-[30px] z-50 w-[200px] rounded-xl bg-[#1E1E1E] px-2 py-3'>
                {newestArr.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-2 py-1 ${
                        selectedNewest === e
                          ? 'rounded-md bg-white bg-opacity-10'
                          : ''
                      }`}
                      onClick={() => handleSelectedNewest(e)}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className='relative'>
            <div className='flex gap-2 cursor-pointer' onClick={handleDuration}>
              <p>{selectedDuration}</p>
              <Image
                src={showDuration ? arrowUp : arrowDown}
                alt=''
                className='object-cover'
              />
            </div>
            {showDuration && (
              <div className='absolute right-0 top-[30px] z-50 w-[200px] rounded-xl bg-[#1E1E1E] py-2'>
                {durationArr.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer px-3 py-1 ${
                        selectedDuration === e ? 'bg-white bg-opacity-10' : ''
                      }`}
                      onClick={() => handleSelectedDuration(e)}
                    >
                      <div className='flex justify-between'>
                        <p>{e}</p>
                        {selectedDuration === e ? (
                          <Image
                            src={checkIcon}
                            alt=''
                            className='object-fill'
                          />
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <MarketPlaceCards />
    </>
  );
};

export default AllStylesCollection;