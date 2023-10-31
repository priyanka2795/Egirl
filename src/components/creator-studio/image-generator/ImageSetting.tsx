import React, { useState } from 'react';
import ImageDimension from './ImageDimension';
import ImageNumber from './ImageNumber';
import Toggle from '@components/common/Toggler';
import PlusIcon from '../../../../public/assets/svgImages/plus-icon.svg';
import RegenerateIcon from '../../../../public/assets/svgImages/regenerate-icon.svg';
import Information from '../../../../public/assets/circle-information4.png';
import Image from 'next/image';
import RangePicker from '../common/RangePicker';

interface ImageSetting {
  InpaintingToggle: boolean;
  SetInpaintingToggle: React.Dispatch<React.SetStateAction<boolean>>;
  PosingToggle: boolean;
  SetPosingToggle: React.Dispatch<React.SetStateAction<boolean>>;
  MyCharacterToggle: boolean;
  SetMyCharacterToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const ImageSetting = ({
  SetInpaintingToggle,
  InpaintingToggle,
  PosingToggle,
  SetPosingToggle,
  MyCharacterToggle,
  SetMyCharacterToggle
}: ImageSetting) => {
  const [guidanceScale, setGuidanceScale] = useState<number[]>([19]);
  const [stepScale, setStepScale] = useState<number[]>([83]);
  const [tiling, setTiling] = useState<boolean>(false);
  const [advancedSettings, setAdvancedSettings] = useState<boolean>(false);

  return (
    <div className='flex h-full flex-col justify-between bg-[#121212]'>
      <div className=''>
        <div className='border-b border-white/[0.08] px-6 py-5 text-[15px] font-bold'>
          Image settings
        </div>
        <ImageNumber />
        <ImageDimension />
        <div className='px-5'>
          <div className='flex justify-between mt-6'>
            <h6 className='text-[14px] font-semibold leading-[18px] text-white'>
              Inpainting
            </h6>
            <Toggle
              handleToggleState={() => SetInpaintingToggle(!InpaintingToggle)}
              toggleState={InpaintingToggle}
              toggleText={``}
              infoIcon={'hidden'}
              toggleClasses={'bg-[#383838]'}
              component={'ImageSetting'}
            />
          </div>

          <div className='flex justify-between mt-6'>
            <h6 className='text-[14px] font-semibold leading-[18px] text-white'>Posing</h6>
            <Toggle
              handleToggleState={() => SetPosingToggle(!PosingToggle)}
              toggleState={PosingToggle}
              toggleText={``}
              infoIcon={'hidden'}
              toggleClasses={'bg-[#383838]'}
              component={'ImageSetting'}
            />
          </div>

          <div className='mt-6 flex justify-between border-b border-white/[0.08] pb-5'>
            <h6 className='text-[14px] font-semibold leading-[18px] text-white'>My character</h6>
            <Toggle
              handleToggleState={() => SetMyCharacterToggle(!MyCharacterToggle)}
              toggleState={MyCharacterToggle}
              toggleText={``}
              infoIcon={'hidden'}
              toggleClasses={'bg-[#383838]'}
              component={'ImageSetting'}
            />
          </div>
        </div>
        <div className='px-5 pb-5 mt-6'>
          <button
            className='flex items-center justify-between w-full'
            onClick={() => setAdvancedSettings(!advancedSettings)}
          >
            <h6 className='text-sm font-semibold'>Advanced settings</h6>
            <div>
              <PlusIcon />
            </div>
          </button>
          {advancedSettings && (
            <div className='flex flex-col gap-6 pb-5 mt-6'>
              <div>
                <div className='flex items-center gap-1'>
                  <p className='text-[#979797]'>Guidance Scale</p>
                  <Image src={Information} />
                </div>
                <div className='flex items-center justify-between w-full gap-2'>
                  <RangePicker
                    values={guidanceScale}
                    setValues={setGuidanceScale}
                  />
                  <div className='flex h-[36px] w-[47px] items-center justify-center rounded-[10px] bg-[#FFFFFF0D]'>
                    {guidanceScale}
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-1'>
                  <p className='text-[#979797]'>Step Scale</p>
                  <Image src={Information} />
                </div>
                <div className='flex items-center justify-between w-full gap-2'>
                  <RangePicker values={stepScale} setValues={setStepScale} />
                  <div className='flex h-[36px] w-[47px] items-center justify-center rounded-[10px] bg-[#FFFFFF0D]'>
                    {stepScale}
                  </div>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center gap-1'>
                  <p className='text-[#979797]'>Tiling </p>
                  <Image src={Information} />
                </div>

                <Toggle
                  handleToggleState={() => {
                    setTiling(!tiling), console.log(tiling, 'toggle state');
                  }}
                  toggleState={tiling}
                  toggleText={``}
                  infoIcon={'hidden'}
                  toggleClasses={'bg-[#383838]'}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center border-t border-t-[#FFFFFF14] p-5'>
        <button className='flex w-full items-center justify-center rounded-xl bg-[#FFFFFF14] px-4 py-[10px]'>
          <h6 className='pr-[6px]'>
            <RegenerateIcon />
          </h6>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ImageSetting;
