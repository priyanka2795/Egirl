import { NextImage } from '@components/ui/next-image';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import TextingLoading from './assets/Chat/TextingLoading';
import ImgRequestsLoading from './assets/Chat/ImgRequestsLoading';
import VoiceMessagesLoading from './assets/Chat/VoiceMessagesLoading';

const ImgRequests = dynamic(() => import('./assets/Chat/ImgRequests'), {
  loading: () => (
    <ImgRequestsLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
  ),
  ssr: false
});

const VoiceMessages = dynamic(() => import('./assets/Chat/VoiceMessages'), {
  loading: () => (
    <VoiceMessagesLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
  ),
  ssr: false
});

const Texting = dynamic(() => import('./assets/Chat/Texting'), {
  loading: () => (
    <TextingLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
  ),
  ssr: false
});

import React, { useState } from 'react';

const Chat = () => {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);

  const showSection1 = (visibility: boolean) => (): void => {
    setSection2(false);
    setSection3(false);
    if (!visibility) {
      setSection1(true);
    }
  };

  const showSection2 = (visibility: boolean) => (): void => {
    setSection1(false);
    setSection3(false);
    if (!visibility) {
      setSection2(true);
    }
  };

  const showSection3 = (visibility: boolean) => (): void => {
    setSection1(false);
    setSection2(false);
    if (!visibility) {
      setSection3(true);
    }
  };
  return (
    <div className='w-full bg-[#FFFFFF] px-[40px] lg:px-[100px] 2xl:px-[120px]'>
      <div className='w-full pt-[80px] pb-[120px]'>
        <div className='grid w-full grid-cols-1 gap-[100px] md:grid-cols-2'>
          <div className='w-full'>
            <div className='flex sm:justify-center md:justify-start'>
              <div className=' '>
                <span className='select-none text-[36px] font-[500] text-[#949698] md:text-[18px]'>
                  CHAT AWAY
                </span>
              </div>
            </div>
            <div className='mt-1 flex justify-center text-center md:justify-start md:text-start'>
              <span className='select-none text-[64px] font-[600] text-[#000000] md:text-[48px]'>
                Easily <span className='font-[400] italic'>chat</span> with any
                Egirl you like
              </span>
            </div>
            <div>
              <div>
                <div
                  className='mt-[64px] flex cursor-pointer items-center space-x-[16px] px-[8px] py-[12px] transition duration-100'
                  onClick={showSection1(section1)}
                >
                  <button>
                    <div className='hidden md:block'>
                      {section1 === true ? (
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/pencilLogo.png'}
                          alt={'pencilLogo'}
                        />
                      ) : (
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/pencilLogoBlank.png'}
                          alt={'pencilLogo'}
                        />
                      )}
                    </div>
                    <div className='md:hidden'>
                      {section1 === true ? (
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/pencilLogo.png'}
                          alt={'pencilLogo'}
                        />
                      ) : (
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/pencilLogoBlank.png'}
                          alt={'pencilLogo'}
                        />
                      )}
                    </div>
                  </button>
                  <div className='select-none'>
                    <div>
                      <span className='text-[36px] font-[500] text-[#000000] md:text-[24px]'>
                        Texting
                      </span>
                    </div>
                    {section1 && (
                      <div className='w-3/4'>
                        <span className='text-[36px] font-[400] text-[#000000] md:text-[18px]'>
                          Text any Egirl to get a conversation started. Every
                          Egirl has a unique personality.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div
                  className='flex cursor-pointer items-center space-x-[16px] px-[8px] py-[12px] transition duration-100'
                  onClick={showSection2(section2)}
                >
                  <button>
                    <div className='hidden md:block'>
                      {section2 === true ? (
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/requestLogo.png'}
                          alt={'requestLogo'}
                        />
                      ) : (
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/requestLogoBlank.png'}
                          alt={'requestLogoBlank'}
                        />
                      )}
                    </div>
                    <div className='md:hidden'>
                      {section2 === true ? (
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/requestLogo.png'}
                          alt={'requestLogo'}
                        />
                      ) : (
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/requestLogoBlank.png'}
                          alt={'requestLogoBlank'}
                        />
                      )}
                    </div>
                  </button>
                  <div className='select-none'>
                    <div>
                      <span className='text-[48px] font-[500] text-[#000000] md:text-[24px]'>
                        Request Images
                      </span>
                    </div>
                    {section2 && (
                      <div className='w-3/4'>
                        <span className='text-[36px] font-[400] text-[#000000] md:text-[18px]'>
                          Make a request for an Egirl to send you a specially
                          made pic of themselves.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div
                  className='flex cursor-pointer items-center space-x-[16px] px-[8px] py-[12px] transition duration-100'
                  onClick={showSection3(section3)}
                >
                  <button>
                    <div className='hidden md:block'>
                      {section3 === true ? (
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/voiceMessage.png'}
                          alt={'voiceMessage'}
                        />
                      ) : (
                        <NextImage
                          width={60}
                          height={60}
                          src={'/assets/homeIcons/voiceMessageBlank.png'}
                          alt={'voiceMessageBlank'}
                        />
                      )}
                    </div>
                    <div className='md:hidden'>
                      {section3 === true ? (
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/voiceMessage.png'}
                          alt={'voiceMessage'}
                        />
                      ) : (
                        <NextImage
                          width={120}
                          height={120}
                          src={'/assets/homeIcons/voiceMessageBlank.png'}
                          alt={'voiceMessageBlank'}
                        />
                      )}
                    </div>
                  </button>
                  <div className='select-none'>
                    <div>
                      <span className='text-[48px] font-[500] text-[#000000] md:text-[24px]'>
                        Voice Messages
                      </span>
                    </div>
                    {section3 && (
                      <div className='w-3/4'>
                        <span className='text-[36px] font-[400] text-[#000000] md:text-[18px]'>
                          Ask an Egirl to send you voice messages instead of
                          regular texts.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <div className='hidden md:block md:w-full md:transition md:duration-100 '>
              {section1 && (
                <figure>
                  <Texting className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
                </figure>
              )}
              {section2 && (
                <figure>
                  <ImgRequests className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
                </figure>
              )}
              {section3 && (
                <figure>
                  <VoiceMessages className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
                </figure>
              )}
            </div>
            <div className='flex shrink-0 md:hidden'>
              {section1 && (
                <NextImage
                  width={650}
                  height={650}
                  imgClassName='scale-125'
                  src={'/assets/svgImages/userChatSvg.svg'}
                  alt={'chatAway illus'}
                />
              )}
              {section2 && (
                <NextImage
                  width={650}
                  height={650}
                  src={'/assets/svgImages/requestImagesIllus.svg'}
                  alt={'requestImage illus'}
                />
              )}
              {section3 && (
                <NextImage
                  width={650}
                  height={650}
                  src={'/assets/svgImages/voiceMessagesIllus.svg'}
                  alt={'voiceMessage illus'}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
