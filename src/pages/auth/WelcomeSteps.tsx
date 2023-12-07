import { Modal } from '@components/modal/modal';
import React, { useState, useEffect } from 'react';
import ArrowLeft from '@/assets/arrow-left.webp';
import ArrowNext from '@/assets/arrow-next.webp';
import RightIcon from '@/assets/check-icon-grey.webp';
import Image from 'next/image';
import arrowLeft from '@/assets/arrow-narrow-left.webp';
import arrowRight from '@/assets/arrow-narrow-right.webp';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userFrameImg1 from '@/assets/messages/grid-img-4.png';
import userFrameImg2 from '@/assets/messages/grid-img-2.png';
import userFrameImg3 from '@/assets/messages/grid-img-15.png';
import userFrameImg4 from '@/assets/messages/grid-img-3.png';
import Cookies from 'js-cookie';
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

const settings: any = {
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
}
const WelcomeStepsModal = ({
  welcomeStepsModal,
  setWelcomeStepsModal
}: WelcomeStepsModal) => {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [nextBtn, setNextBtn] = useState(false);
  const [signUpStep, setSignUpStep] = useState(1);
  const [count, setCount] = useState(3);

  const handleItemClick = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(
        selectedItems.filter((selectedItemId) => selectedItemId !== itemId)
      );
      setCount(() => count + 1);
    } else {
      if (selectedItems.length < data.length) {
        setSelectedItems([...selectedItems, itemId]);
        setCount(() => count - 1);
      }
    }
   
  };
  useEffect(() => {
    if (selectedItems.length < 3) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
  }, [selectedItems]);

  const gotoHome = () => {
    setWelcomeStepsModal(false);
    Cookies.remove('signUpUserId');
  };

  return (
    <Modal
      open={welcomeStepsModal}
      closeModal={() => setWelcomeStepsModal(false)}
      modalOverlayStyle='!bg-black/80 '
      modalClassName='bg-[#121212] flex w-[539px] flex-col flex-start rounded-[20px]'
    >
      <div className='flex flex-col justify-center px-12 pt-8 pb-12 gap-11'>
        <div className='flex items-center justify-between text-[#979797]'>
          {signUpStep === 1 ? (
            <button
              className='border-0'
              onClick={() => setWelcomeStepsModal(false)}
            >
              <Image src={ArrowLeft} className='object-cover w-full h-full' />
            </button>
          ) : (
            <button onClick={() => setSignUpStep(1)}>
              <Image src={ArrowLeft} className='object-cover w-full h-full' />
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
          <div className='relative flex flex-col gap-5 overflow-hidden user-follow-slider'>
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
                  Pick {count} more
                </button>
              )}
            </>
          ) : (
            <button
              className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'
              onClick={gotoHome}
            >
              <Image src={RightIcon} /> Done
            </button>
          )}

          {/* <button className='font-bold flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFFFFF14] px-5 py-4 text-center text-lg'>
            <Image src={RightIcon} /> Done
          </button> */}
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        pauseOnHover
        theme='colored'
        hideProgressBar={true}
        autoClose={2000}
      />
    </Modal>
  );
};

export default WelcomeStepsModal;
