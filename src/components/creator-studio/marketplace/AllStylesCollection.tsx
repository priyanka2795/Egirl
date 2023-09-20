import React, { useState } from 'react';
import Image from 'next/image';
import arrowDown from '../../../../public/assets/arrow-down.png';
import arrowUp from '../../../../public/assets/arrow-up.png';
import MarketPlaceCards from './MarketPlaceCards';
import checkIcon from '../../../../public/assets/check-cs.png';
const AllStylesCollection = () => {
  const [showNewest, setShowNewest] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [selectedNewest, setSelectedNewest] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
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
  };
  const handleDuration = () => {
    setShowDuration(!showDuration);
  };
  const handleSelectedNewest = (ele: any) => {
    setSelectedNewest(ele);
  };
  const handleSelectedDuration = (ele: any) => {
    setSelectedDuration(ele);
  };

  return (
    <>
      <div className='flex justify-between mt-8 mb-4'>
        <div className='text-[18px] font-bold leading-6 text-[#FFF]'>All Styles</div>
        <div className='flex gap-4'>
          <div className='relative'>
            <div
              className='flex gap-2 pr-2 border-r border-white/[0.08] cursor-pointer'
              onClick={handleNewest}
            >
              <p>Newest</p>
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
            <div
              className='flex gap-2 cursor-pointer'
              onClick={handleDuration}
            >
              <p>Month</p>
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