import { NextImage } from '@components/ui/next-image';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import CustomClothingLoading from './assets/Design/CustomClothingLoading';
import DynamicBackgroundsLoading from './assets/Design/DynamicBackgroundsLoading';
import UniquePersonalityLoading from './assets/Design/UniquePersonalityLoading';

const CustomClothingBase = dynamic(
  () => import('./assets/Design/CustomClothing'),
  {
    loading: () => (
      <CustomClothingLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
    ),
    ssr: false
  }
);

const DynamicBackgroundBase = dynamic(
  () => import('./assets/Design/DynamicBackgrounds'),
  {
    loading: () => (
      <DynamicBackgroundsLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
    ),
    ssr: false
  }
);

const UniquePersonalityBase = dynamic(
  () => import('./assets/Design/UniquePersonality'),
  {
    loading: () => (
      <UniquePersonalityLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
    ),
    ssr: false
  }
);

interface DynamicComponentProps {
  className?: string;
}

type DynamicComponent = (props: DynamicComponentProps) => ReactElement | null;

import React, { ReactElement, useEffect, useState } from 'react';

const Design = () => {
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

  // Special Load for the Images which are huge (only want to load 1 at once instead of all on page load)

  const [CustomClothing, setCustomClothing] = useState<DynamicComponent | null>(
    null
  );
  const [DynamicBackground, setDynamicBackground] =
    useState<DynamicComponent | null>(null);
  const [UniquePersonality, setUniquePersonality] =
    useState<DynamicComponent | null>(null);

  useEffect(() => {
    if (section1 && CustomClothing === null) {
      const CustomClothingComponent = dynamic(
        () => import('./assets/Design/CustomClothing'),
        {
          loading: () => (
            <CustomClothingLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
          ),
          ssr: false
        }
      );
      setCustomClothing(() => () => <CustomClothingComponent />);
    } else if (section2 && DynamicBackground === null) {
      const DynamicBackgroundComponent = dynamic(
        () => import('./assets/Design/DynamicBackgrounds'),
        {
          loading: () => (
            <DynamicBackgroundsLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
          ),
          ssr: false
        }
      );
      setDynamicBackground(() => () => <DynamicBackgroundComponent />);
    } else if (section3 && UniquePersonality === null) {
      const UniquePersonalityComponent = dynamic(
        () => import('./assets/Design/UniquePersonality'),
        {
          loading: () => (
            <UniquePersonalityLoading className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
          ),
          ssr: false
        }
      );
      setUniquePersonality(() => () => <UniquePersonalityComponent />);
    }
  }, [section1, section2, section3]);

  return (
    <>
      <div className='hidden w-full bg-[#FFFFFF] px-[40px] lg:flex lg:px-[100px] 2xl:px-[120px]'>
        <div className='w-full pb-[120px] pt-[80px]'>
          <div className='grid w-full grid-cols-1 gap-[100px] md:grid-cols-2'>
            <div className='w-full'>
              <div className='flex sm:justify-center md:justify-start'>
                <div className=' '>
                  <span className='select-none text-[36px] font-[500] text-[#949698] md:text-[18px]'>
                    CREATOR TOOLS
                  </span>
                </div>
              </div>
              <div className='mt-1 flex justify-center text-center md:justify-start md:text-start'>
                <span className='select-none text-[64px] font-[600] text-[#000000] md:text-[48px]'>
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
                          Custom Clothing
                        </span>
                      </div>
                      {section1 && (
                        <div className='w-3/4'>
                          <span className='text-[36px] font-[400] text-[#000000] md:text-[18px]'>
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
                          Dynamic Backgrounds
                        </span>
                      </div>
                      {section2 && (
                        <div className='w-3/4'>
                          <span className='text-[36px] font-[400] text-[#000000] md:text-[18px]'>
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
                          Unique Personality
                        </span>
                      </div>
                      {section3 && (
                        <div className='w-3/4'>
                          <span className='text-[36px] font-[400] text-[#000000] md:text-[18px]'>
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
              <div className='hidden md:block md:w-full md:transition md:duration-100 '>
                {section1 && CustomClothing && (
                  <figure>
                    {/* <CustomClothing className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' /> */}
                    <div className='hidden lg:flex'>
                      <Image
                        src={
                          '/assets2/CreatorLanding/CustomClothing/CustomClothing2x.png'
                        }
                        layout='fixed'
                        width={620}
                        height={555}
                      />
                    </div>
                    <div className='lg:hidden'>
                      <Image
                        src={
                          '/assets2/CreatorLanding/CustomClothing/CustomClothing2x.png'
                        }
                        layout='fixed'
                        width={320}
                        height={314}
                      />
                    </div>
                  </figure>
                )}
                {section2 && DynamicBackground && (
                  <figure>
                    {/* <DynamicBackground className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' /> */}
                    <div className='hidden lg:flex'>
                      <Image
                        src={
                          '/assets2/CreatorLanding/DynamicBackgrounds/DynamicBackgrounds2x.png'
                        }
                        layout='fixed'
                        width={620}
                        height={555}
                      />
                    </div>
                    <div className='lg:hidden'>
                      <Image
                        src={
                          '/assets2/CreatorLanding/DynamicBackgrounds/DynamicBackgrounds2x.png'
                        }
                        layout='fixed'
                        width={320}
                        height={314}
                      />
                    </div>
                  </figure>
                )}
                {section3 && UniquePersonality && (
                  <figure>
                    {/* <UniquePersonality className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' /> */}
                    <div className='hidden lg:flex'>
                      <Image
                        src={
                          '/assets2/CreatorLanding/UniquePersonality/UniquePersonality2x.png'
                        }
                        layout='fixed'
                        width={620}
                        height={555}
                      />
                    </div>
                    <div className='lg:hidden'>
                      <Image
                        src={
                          '/assets2/CreatorLanding/UniquePersonality/UniquePersonality2x.png'
                        }
                        layout='fixed'
                        width={320}
                        height={314}
                      />
                    </div>
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
      {/* start of medium display */}
      <div className='flex w-full bg-[#FFFFFF] px-[24px] md:px-[40px] lg:hidden lg:px-[100px] 2xl:px-[120px]'>
        <div className='w-full pb-[120px] pt-[64px]'>
          <div className='flex justify-center md:justify-start'>
            <span className='select-none text-center text-[14px] font-[500] text-[#949698] md:text-start md:text-[18px]'>
              CREATOR TOOLS
            </span>
          </div>
          <div className='mt-1 flex justify-center text-center md:justify-start md:text-start'>
            <span className='select-none text-[24px] font-[600] text-[#000000] md:text-[48px]'>
              Design with <span className='font-[400] italic'>ease</span>
            </span>
          </div>
          <div className='grid w-full grid-cols-1 gap-[20px]  md:grid-cols-2'>
            <div className='w-full'>
              <div>
                <div className=''>
                  {/* <CustomClothingBase className='h-[200px] w-full md:hidden md:h-[314px]' /> */}
                  <div className='flex w-full justify-center md:hidden'>
                    <div className='relative h-[241px] w-full min-[380px]:h-[466px]'>
                      <Image
                        src={
                          '/assets2/UserLanding/CustomClothing/CustomClothing2x.png'
                        }
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        quality={75}
                      />
                    </div>
                  </div>
                  <div className='mt-[32px] flex md:hidden'>
                    <NextImage
                      width={60}
                      height={60}
                      src={'/assets/homeIcons/pencilLogo.png'}
                      alt={'pencilLogo'}
                    />

                    <div className='ml-[16px] select-none md:hidden'>
                      <div>
                        <span className='text-[18px] font-[500] text-[#000000] md:text-[24px]'>
                          Custom Clothing
                        </span>
                      </div>

                      <span className='text-[16px] font-[400] text-[#000000] md:text-[18px]'>
                        Create beautiful clothing and
                        <br />
                        accessories for your Egirl with
                        <br />
                        ease.
                      </span>
                    </div>
                  </div>
                  <div
                    className='mt-[64px] hidden cursor-pointer  items-center space-x-[16px] px-[8px] py-[12px] transition duration-100 md:flex'
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
                    </button>
                    <div className='select-none'>
                      <div>
                        <span className='text-[18px] font-[500] text-[#000000] md:text-[24px]'>
                          Custom Clothing
                        </span>
                      </div>
                      {section1 && (
                        <div className='w-3/4'>
                          <span className='text-[16px] font-[400] text-[#000000] md:text-[18px]'>
                            Create beautiful clothing and accessories for your
                            Egirl with ease.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  {/* <DynamicBackgroundBase className='h-[314px] w-full md:hidden' /> */}
                  <div className='flex w-full justify-center md:hidden'>
                    <div className='relative h-[241px] w-full min-[380px]:h-[466px]'>
                      <Image
                        src={
                          '/assets2/UserLanding/DynamicBackgrounds/DynamicBackgrounds2x.png'
                        }
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        quality={75}
                      />
                    </div>
                  </div>
                  <div className='mt-[32px] flex md:hidden'>
                    <NextImage
                      width={60}
                      height={60}
                      src={'/assets/homeIcons/pencilLogo.png'}
                      alt={'pencilLogo'}
                    />

                    <div className='ml-[16px] select-none md:hidden'>
                      <div>
                        <span className='text-[18px] font-[500] text-[#000000] md:text-[24px]'>
                          Image Requests
                        </span>
                      </div>

                      <div>
                        <span className='text-[16px] font-[400] text-[#000000] md:text-[18px]'>
                          Make stunning backgrounds of
                          <br />
                          any real or fictional environment
                          <br />
                          for your Egirl.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='hidden cursor-pointer items-center space-x-[16px] px-[8px] py-[12px] transition duration-100 md:flex'
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
                    </button>
                    <div className='select-none'>
                      <div>
                        <span className='text-[18px] font-[500] text-[#000000] md:text-[24px]'>
                          Dynamic Backgrounds
                        </span>
                      </div>
                      {section2 && (
                        <div className='w-3/4'>
                          <span className='text-[16px] font-[400] text-[#000000] md:text-[18px]'>
                            Make stunning backgrounds of any real or fictional
                            environment for your Egirl.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  {/* <UniquePersonalityBase className='h-[314px] w-full md:hidden' /> */}
                  <div className='flex w-full justify-center md:hidden'>
                    <div className='relative h-[241px] w-full min-[380px]:h-[466px]'>
                      <Image
                        src={
                          '/assets2/UserLanding/UniquePersonality/UniquePersonality2x.png'
                        }
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        quality={75}
                      />
                    </div>
                  </div>
                  <div className='mt-[32px] flex md:hidden'>
                    <NextImage
                      width={60}
                      height={60}
                      src={'/assets/homeIcons/pencilLogo.png'}
                      alt={'pencilLogo'}
                    />

                    <div className='ml-[16px] select-none md:hidden'>
                      <div>
                        <span className='text-[18px] font-[500] text-[#000000] md:text-[24px]'>
                          Unique Personality
                        </span>
                      </div>

                      <div className=''>
                        <span className='text-[16px] font-[400] text-[#000000] md:text-[18px]'>
                          Build a truly unique voice &<br />
                          personality for your Egirl. As
                          <br />
                          simple as writing a prompt.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='hidden cursor-pointer items-center space-x-[16px] px-[8px] py-[12px] transition duration-100 md:flex'
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
                    </button>
                    <div className='select-none'>
                      <div>
                        <span className='text-[18px] font-[500] text-[#000000] md:text-[24px]'>
                          Unique Personality
                        </span>
                      </div>
                      {section3 && (
                        <div className='w-3/4'>
                          <span className='text-[16px] font-[400] text-[#000000] md:text-[18px]'>
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
            <div className='hidden w-full items-center justify-center md:flex'>
              <div className='hidden md:block md:w-full md:transition md:duration-100 '>
                {section1 && CustomClothing && (
                  <figure>
                    <CustomClothing className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
                  </figure>
                )}
                {section2 && DynamicBackground && (
                  <figure>
                    <DynamicBackground className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
                  </figure>
                )}
                {section3 && UniquePersonality && (
                  <figure>
                    <UniquePersonality className='h-[314px] w-[320px] lg:h-[555px] lg:w-[620px]' />
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
    </>
  );
};

export default Design;
