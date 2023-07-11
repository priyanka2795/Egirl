import React, { useState } from 'react';
import RandomImageToggle from './Toggler';
import CloseIcon from './svg/close-icon.svg';
import ImgIcon from './svg/img-icon.svg';
import RandomImageIcon from './svg/random-img-icon.svg';
import gridImg1 from '../../../public/assets/messages/grid-img-6.png';
import gridImg2 from '../../../public/assets/messages/grid-img-7.png';
import gridImg3 from '../../../public/assets/messages/grid-img-8.png';
import gridImg4 from '../../../public/assets/messages/grid-img-9.png';
import gridImg5 from '../../../public/assets/messages/grid-img-10.png';
import gridImg6 from '../../../public/assets/messages/grid-img-11.png';
import gridImg7 from '../../../public/assets/messages/grid-img-12.png';
import gridImg8 from '../../../public/assets/messages/grid-img-13.png';
import gridImg9 from '../../../public/assets/messages/grid-img-14.png';
import Image from 'next/image';

type ImageRequestModal = {
  closeModal?: () => void;
};

const ImageRequestModal = ({ closeModal }: ImageRequestModal) => {
  const imageFilterText = ['Clothes', 'Accessories', 'Poses', 'Locations'];
  const requestedImageTypes = [
    { image: gridImg3, title: 'Red Dress' },
    { image: gridImg4, title: 'Some access...' },
    { image: gridImg9, title: 'Red Dress' },
    { image: gridImg3, title: 'Red Dress' }
  ];

  const imageType = [
    { image: gridImg1, title: 'Red Dress' },
    { image: gridImg2, title: 'Shorts' },
    { image: gridImg3, title: 'Red Dress' },
    { image: gridImg4, title: 'Red Dress' },
    { image: gridImg5, title: 'Red Dress' },
    { image: gridImg6, title: 'Red Dress' },
    { image: gridImg7, title: 'Red Dress' },
    { image: gridImg8, title: 'Red Dress' }
  ];
  const [randomImageState, setRandomImageState] = useState(false);
  const [imageRequestType, setImageRequestType] = useState(false);
  const [imageRequestTab, setImageRequestTab] = useState('Clothes');
  const handleImageRequestTab = (e: any) => {
    setImageRequestTab(e.target.textContent);
    console.log(e.target.textContent, 'get target');
  };

  return (
    <div className='flex h-max w-[530px] flex-col items-center justify-start overflow-hidden rounded-2xl bg-zinc-900'>
      <div className='inline-flex items-start justify-start gap-2 self-stretch border-b border-white border-opacity-10 p-6'>
        <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1'>
          <div className='w-[286px] text-[18px] font-bold leading-normal text-white'>
            Image request
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <RandomImageToggle
            handleToggleState={() => setRandomImageState(!randomImageState)}
            toggleState={randomImageState}
            toggleText={'Random'}
          />
          <span className='h-5 border-l-[2px] border-white/10 text-xl text-white/10'></span>
          <CloseIcon />
        </div>
      </div>
      <div className='flex h-max flex-col items-start justify-start self-stretch'>
        {randomImageState === false ? (
          <>
            <div className='flex h-[338px] flex-col items-start justify-start gap-5 self-stretch px-6 pb-5'>
              <div className='mt-6 flex gap-3'>
                {imageFilterText.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(e) => handleImageRequestTab(e)}
                      className={`cursor-pointer rounded-xl px-4 py-2 font-bold text-[#979797] text-white ${
                        imageRequestTab === item ? 'bg-white bg-opacity-20' : ''
                      }`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className='grid grid-cols-4 gap-[10px]'>
                {imageType.map((items, index) => {
                  return (
                    <div
                      key={index}
                      className='relative cursor-pointer'
                      onClick={() => setImageRequestType(true)}
                    >
                      <Image
                        src={items.image}
                        alt=''
                        className='rounded-xl object-cover'
                      />
                      <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center  text-[13px] font-semibold'>
                        {items.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-2.5 self-stretch bg-neutral-900 px-6 pt-6'>
              <div className='inline-flex items-start justify-start gap-3 self-stretch rounded-2xl bg-[#1A1A1A] p-5'>
                <div className='flex items-start justify-start gap-2.5 rounded-[100px] bg-white bg-opacity-5 p-3.5'>
                  {/* <div className='relative w-5 h-5' /> */}
                  <ImgIcon />
                </div>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3'>
                  <div className='flex flex-col items-start justify-start gap-1.5 self-stretch'>
                    <div className='self-stretch text-[14px] font-bold leading-none text-white'>
                      Image request
                    </div>

                    {imageRequestType ? (
                      <div className='mt-3 grid grid-cols-4 gap-[10px]'>
                        {requestedImageTypes.map((items, index) => {
                          return (
                            <div
                              key={index}
                              className='flex flex-col'
                              onClick={() =>
                                setImageRequestType(!imageRequestType)
                              }
                            >
                              <Image
                                src={items.image}
                                alt=''
                                className='rounded-xl object-cover'
                              />
                              <p className='h-max w-full py-[6px] text-xs font-semibold'>
                                {items.title}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className='self-stretch text-[14px] font-normal leading-none text-neutral-400'>
                        The selected styles will be displayed here.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col items-start justify-start gap-2.5 self-stretch bg-neutral-900 px-6 pt-6'>
              <div className='inline-flex items-start justify-start gap-3 self-stretch rounded-2xl bg-[#1A1A1A] p-5'>
                <div className='flex items-start justify-start gap-2.5 rounded-[100px] bg-white bg-opacity-5 p-3.5'>
                  {/* <div className='relative w-5 h-5' /> */}
                  <RandomImageIcon />
                </div>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3'>
                  <div className='flex flex-col items-start justify-start gap-1.5 self-stretch'>
                    <div className='self-stretch text-[14px] font-bold leading-none text-white'>
                      Random image request
                    </div>
                    <div className='self-stretch text-[14px] font-normal leading-none text-neutral-400'>
                      Hey Mika-chan, can you send me a random picture of you?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className='inline-flex items-end justify-end gap-3 self-stretch bg-neutral-900 p-6'>
          <button
            className='rounded-2xl border border-white border-opacity-30 px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className='rounded-2xl bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
            onClick={closeModal}
          >
            Send request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageRequestModal;
