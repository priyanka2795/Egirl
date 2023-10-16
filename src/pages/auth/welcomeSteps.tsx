import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import ArrowLeft from '../../../public/assets/arrow-left.png';
import ArrowNext from '../../../public/assets/arrow-next.png';
import RightIcon from '../../../public/assets/check-icon-grey.png';
import Image from 'next/image';
import arrowLeft from '../../../public/assets/arrow-narrow-left.png';
import arrowRight from '../../../public/assets/arrow-narrow-right.png';
import Slider from 'react-slick';
import userFrameImg1 from '../../../public/assets/messages/grid-img-4.png';
import userFrameImg2 from '../../../public/assets/messages/grid-img-2.png';
import userFrameImg3 from '../../../public/assets/messages/grid-img-15.png';
const data = [
  'Anime',
  'Anime',
  'Anime',
  'Anime',
  'Blondes',
  'Cat girls',
  'Anime',
  'Blondes',
  'Realistic style',
  'Anime'
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const userFrame = [
  {
    image: userFrameImg1,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg2,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg3,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg3,
    name: 'Anna Quigley',
    userName: '@sheisannaquigley'
  }
];

interface WelcomeStepsModal {
  welcomeStepsModal: boolean;
  setWelcomeStepsModal: boolean;
}
const WelcomeStepsModal = ({
  welcomeStepsModal,
  setWelcomeStepsModal
}: WelcomeStepsModal) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [nextBtn, setNextBtn] = useState(false);
  const handleItemClick = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, item]);
        setNextBtn(true);
      } else if (selectedItems.length < 3) {
        setNextBtn(false);
      }
    }
  };

  return (
    <Modal
      open={welcomeStepsModal}
      closeModal={() => setWelcomeStepsModal(false)}
      modalOverlayStyle='!bg-black/80 '
      modalClassName='bg-[#121212] flex w-[539px] flex-col flex-start rounded-[20px]'
    >
      <div className='flex flex-col justify-center gap-12 px-12 pb-12 pt-8'>
        <div className='flex items-center justify-between text-[#979797]'>
          <button>
            <Image src={ArrowLeft} className='h-full w-full object-cover' />
          </button>
          <p>/2</p>
        </div>
        <div className='text-center'>
          <h2 className='text-[32px] font-semibold text-white'>
            Do you want to follow someone?
          </h2>
        </div>
        <div className='text-center'>
          <h2 className='text-[32px] font-semibold text-white'>
            What are you interested in?
          </h2>
          <p className='mt-2 text-[15px] text-[#979797]'>
            This helps us find relevant content for you
          </p>
        </div>

        <div className='mt-5 h-max w-[100%] rounded-[14px] bg-[#121212]'>
          <div className='flex justify-between border-b border-white/[0.08] p-6'>
            <div className='font-bold text-[18px] text-[#FFFFFF]'>
              You might like
            </div>
            <div className='flex gap-3'>
              <Image src={arrowLeft} alt={''} />
              <Image src={arrowRight} alt={''} />
            </div>
          </div>
          <div className='bookmark-img-text px-6 py-6'>
            <div className='profile-like-slider h-[286px]'>
              <Slider {...settings}>
                <div>
                  <div>
                    {userFrame.map((item, index) => (
                      <div className='mt-6 flex w-[328px] gap-4' key={index}>
                        <div className='h-[50px] w-[50px]'>
                          <Image
                            className='h-full w-full rounded-[100px]'
                            src={item.image}
                            alt={''}
                          />
                        </div>
                        <div className='flex w-[126px] flex-col gap-[2px]'>
                          <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                            {item.name}
                          </div>
                          <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                            {item.userName}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-3'>
          {data.map((item, index) => (
            <div
              key={index}
              className={`font-normal cursor-pointer rounded-[100px] px-5 py-4 ${
                selectedItems.includes(item) ? 'bg-[#5848BC]' : 'bg-[#FFFFFF14]'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div>
          {nextBtn ? (
            <button className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5848BC] px-5 py-4 text-center text-lg'>
              Next <Image src={ArrowNext} />
            </button>
          ) : (
            <button className='font-bold w-full rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'>
              Pick 3 more
            </button>
          )}
          {/* <button className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'>
            <Image src={RightIcon} /> Done
          </button> */}
        </div>
      </div>
    </Modal>
  );
};

export default WelcomeStepsModal;
