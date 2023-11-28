import { Modal } from '@components/modal/modal';
import React, { useState, useEffect } from 'react';
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
import userFrameImg4 from '../../../public/assets/messages/grid-img-3.png';
const data = [
  {
    id: 1,
    name: 'Anime'
  },
  {
    id: 2,
    name: 'Blondes'
  },
  {
    id: 3,
    name: 'Cat girls'
  },
  {
    id: 4,
    name: 'Realistic style'
  },
  {
    id: 5,
    name: 'Anime'
  },
  {
    id: 6,
    name: 'Realistic style'
  },
  {
    id: 7,
    name: 'Blondes'
  },
  {
    id: 8,
    name: 'Cat girls'
  }
];
const userFrame = [
  {
    image: userFrameImg1,
    name: 'Emily Gray',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg2,
    name: 'Mika-chan',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg3,
    name: 'Sarah Carter',
    userName: '@sheisannaquigley'
  },
  {
    image: userFrameImg4,
    name: 'Mika-chan',
    userName: '@sheisannaquigley'
  }
];

const settings = {
  dots: true,
  lazyLoad: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0
};

interface WelcomeStepsModal {
  welcomeStepsModal: boolean;
  setWelcomeStepsModal: React.Dispatch<React.SetStateAction<boolean>>;
  signUpCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
}
const WelcomeStepsModal = ({
  welcomeStepsModal,
  setWelcomeStepsModal,
  signUpCompleted
}: WelcomeStepsModal) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [nextBtn, setNextBtn] = useState(false);
  const [signUpStep, setSignUpStep] = useState(1);

  const handleItemClick = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(
        selectedItems.filter((selectedItemId) => selectedItemId !== itemId)
      );
    } else {
      if (selectedItems.length < 4) {
        setSelectedItems([...selectedItems, itemId]);
      }
    }
  };
  useEffect(() => {
    if (selectedItems.length < 4) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
  }, [selectedItems]);

  return (
    <Modal
      open={welcomeStepsModal}
      closeModal={() => setWelcomeStepsModal(false)}
      modalOverlayStyle='!bg-black/80 '
      modalClassName='bg-[#121212] flex w-[539px] flex-col flex-start rounded-[20px]'
    >
      <div className='flex flex-col justify-center gap-11 px-12 pb-12 pt-8'>
        <div className='flex items-center justify-between text-[#979797]'>
          {signUpStep === 1 ? (
            <button
              className='border-0'
              onClick={() => setWelcomeStepsModal(false)}
            >
              <Image src={ArrowLeft} className='h-full w-full object-cover' />
            </button>
          ) : (
            <button onClick={() => setSignUpStep(1)}>
              <Image src={ArrowLeft} className='h-full w-full object-cover' />
            </button>
          )}
          <p>{signUpStep}/2</p>
        </div>

        {signUpStep === 1 ? (
          <div className='text-center'>
            <h2 className='text-[32px] font-semibold text-white'>
              What are you interested in?
            </h2>
            <p className='mt-2 text-[15px] text-[#979797]'>
              This helps us find relevant content for you
            </p>
          </div>
        ) : signUpStep === 2 ? (
          <div className='text-center'>
            <h2 className='text-[32px] font-semibold text-white'>
              Do you want to follow someone?
            </h2>
          </div>
        ) : (
          ''
        )}

        {signUpStep === 1 ? (
          <div className='flex flex-wrap gap-3'>
            {data.map((item) => (
              <div
                key={item.id}
                className={`font-normal cursor-pointer rounded-[100px] px-5 py-4 ${
                  selectedItems.includes(item.id)
                    ? 'bg-[#5848BC]'
                    : 'bg-[#FFFFFF14]'
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <div className='user-follow-slider relative flex flex-col gap-5 overflow-hidden'>
            <div className='flex justify-between '>
              <div className='text-[18px] font-semibold text-[#FFFFFF]'>
                Users
              </div>
            </div>
            <Slider {...settings}>
              {Array(3)
                .fill('0')
                .map(() => (
                  <div>
                    <div className='flex flex-col justify-center gap-6'>
                      {userFrame.map((item, index) => (
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-4'>
                            <div className='h-[68px] w-[68px] rounded-full'>
                              <Image
                                src={item.image}
                                className='rounded-full'
                              />
                            </div>
                            <div>
                              <h2 className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                                {item.name}
                              </h2>
                              <p className='font-normal text-sm leading-[18px] text-[#979797]'>
                                {item.userName}
                              </p>
                            </div>
                          </div>
                          <div>
                            <button className='rounded-[14px] bg-[#5848BC] px-5 py-3 font-semibold'>
                              Follow
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        )}

        <div>
          {signUpStep === 1 ? (
            <>
              {nextBtn ? (
                <button
                  className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#5848BC] px-5 py-4 text-center text-lg'
                  onClick={() => setSignUpStep(2)}
                >
                  Next <Image src={ArrowNext} />
                </button>
              ) : (
                <button className='font-bold w-full rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'>
                  Pick 3 more
                </button>
              )}
            </>
          ) : (
            <button
              className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'
              onClick={() => signUpCompleted(false)}
            >
              <Image src={RightIcon} /> Done
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
