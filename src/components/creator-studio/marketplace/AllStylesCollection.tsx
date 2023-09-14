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
      <div className='mb-3 mt-5 flex justify-between'>
        <div className='text-[18px] font-bold text-[#FFF]'>All Styles</div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='relative'>
            <div
              className='flex cursor-pointer gap-2 pl-2'
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
              className='flex cursor-pointer gap-2 border-l border-white/10 pl-2'
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
