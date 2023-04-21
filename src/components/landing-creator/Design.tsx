import { NextImage } from '@components/ui/next-image';
import CustomClothing from './assets/Design/CustomClothing';
import DynamicBackgrounds from './assets/Design/DynamicBackgrounds';
import UniquePersonality from './assets/Design/UniquePersonality';

import React, { useState } from 'react';

const Design = () => {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);
  const [hiddenSideDiv, setHiddenSideDiv] = useState(false);
  const [showBetaAccess, setShowBetaAccess] = useState(false);

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
    <div className='w-full bg-[#FFFFFF] px-[100px]'>
      <div className='w-full pt-[100px] pb-[100px]'>
        <div className='w-full gap-[100px] sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
          <div className='w-full'>
            <div className='flex justify-center lg:justify-start'>
              <div className=' '>
                <span className='select-none text-[36px] font-[500] text-[#949698] lg:text-[18px]'>
                  CREATOR TOOLS
                </span>
              </div>
            </div>
            <div className=' mt-1 flex justify-center text-center lg:justify-start lg:text-start'>
              <span className='select-none text-[64px] font-[600] text-[#000000] lg:text-[48px]'>
                Design with <span className='font-[400] italic'>ease</span>
              </span>
            </div>
            <div>
              <div>
                <div
                  className='mt-[64px] flex cursor-pointer items-center space-x-[16px] px-[8px] py-[12px] transition duration-100'
                  onClick={showSection1(section1)}
                >
                  <button>
                    <div className='hidden lg:block'>
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
                    <div className='lg:hidden'>
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
                      <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                        Custom Clothing
                      </span>
                    </div>
                    {section1 && (
                      <div className='w-3/4'>
                        <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                          Create beautiful clothing and accessories for your
                          Egirl with ease.
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
                    <div className='hidden lg:block'>
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
                    <div className='lg:hidden'>
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
                      <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                        Dynamic Backgrounds
                      </span>
                    </div>
                    {section2 && (
                      <div className='w-3/4'>
                        <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                          Make stunning backgrounds of any real or fictional
                          environment for your Egirl.
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
                    <div className='hidden lg:block'>
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
                    <div className='lg:hidden'>
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
                      <span className='text-[48px] font-[500] text-[#000000] lg:text-[24px]'>
                        Unique Personality
                      </span>
                    </div>
                    {section3 && (
                      <div className='w-3/4'>
                        <span className='text-[36px] font-[400] text-[#000000] lg:text-[18px]'>
                          Build a truly unique voice & personality for your
                          Egirl. As simple as writing a prompt.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <div className='hidden w-full transition duration-100 lg:block '>
              {section1 && (
                // <NextImage
                //     width={800}
                //     height={842}
                //     src={'/assets/svgImages/chatAwayIllus.svg'}
                //     alt={'chatAway illus'}
                //     className='grow-0 border border-red-600'
                //   />
                <figure className='drop-shadow-lg'>
                  {/* <Image
                    className='scale-125'
                    src={'/assets/svgImages/chatAwayIllus.svg'}
                    width={800}
                    height={800}
                    alt={'chatAway illus'}
                    layout='responsive'
                  /> */}
                  <CustomClothing />
                </figure>
              )}
              {section2 && (
                // <NextImage
                //   width={800}
                //   height={842}
                //   src={'/assets/svgImages/requestImagesIllus.svg'}
                //   alt={'requestImage illus'}
                // />
                <figure className=''>
                  {/* <Image
                    className=''
                    src={'/assets/svgImages/requestImagesIllus.svg'}
                    width={800}
                    height={800}
                    alt={'requestImage illus'}
                    layout='responsive'
                  /> */}
                  <DynamicBackgrounds />
                </figure>
              )}
              {section3 && (
                // <NextImage
                //   width={800}
                //   height={842}
                //   src={'/assets/svgImages/voiceMessagesIllus.svg'}
                //   alt={'voiceMessage illus'}
                // />
                <figure className=''>
                  {/* <Image
                    className=''
                    src={'/assets/svgImages/voiceMessagesIllus.svg'}
                    width={800}
                    height={800}
                    alt={'voiceMessage illus'}
                    layout='responsive'
                  /> */}
                  <UniquePersonality />
                </figure>
              )}
            </div>
            <div className='sm:shrink-0 md:shrink-0 lg:hidden'>
              {section1 && (
                <NextImage
                  width={900}
                  height={900}
                  src={'/assets/svgImages/chatAwayIllus.svg'}
                  alt={'chatAway illus'}
                />
              )}
              {section2 && (
                <NextImage
                  width={900}
                  height={900}
                  src={'/assets/svgImages/requestImagesIllus.svg'}
                  alt={'requestImage illus'}
                />
              )}
              {section3 && (
                <NextImage
                  width={900}
                  height={900}
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

export default Design;
