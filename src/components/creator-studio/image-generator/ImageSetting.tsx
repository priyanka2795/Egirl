import React, { useState } from 'react';
import ImageDimension from './ImageDimension';
import ImageNumber from './ImageNumber';
import Toggle from '@components/common/Toggler';
import PlusIcon from '../../../../public/assets/svgImages/plus-icon.svg'
import RegenerateIcon from '../../../../public/assets/svgImages/regenerate-icon.svg'
import Information from '../../../../public/assets/circle-information4.png'
import Image from 'next/image';
import RangePicker from '../common/RangePicker';

interface ImageSetting {
  InpaintingToggle: any;
  SetInpaintingToggle: any;
  PosingToggle: any;
  SetPosingToggle: any;
  MyCharacterToggle: any;
  SetMyCharacterToggle: any;
}
const ImageSetting = ({ SetInpaintingToggle, InpaintingToggle, PosingToggle, SetPosingToggle, MyCharacterToggle, SetMyCharacterToggle }: ImageSetting) => {
  const [guidanceScale, setGuidanceScale] = useState([19])
  const [stepScale, setStepScale] = useState([83])
  const [tiling, setTiling] = useState(false);
  const [advancedSettings, setAdvancedSettings] = useState(false);




  return (
    <div className=" flex flex-col justify-between ">
      <div className='bg-[#121212] '>
        <div className='border-b border-white/[0.08] font-bold text-[15px] px-6 py-5'>Image settings</div>
        <ImageNumber />
        <ImageDimension />

        <div className='px-5'>
          <div className="flex justify-between">
            <h6 className='text-sm font-semibold'>Inpainting</h6>
            <Toggle
              handleToggleState={() => SetInpaintingToggle(!InpaintingToggle)}
              toggleState={InpaintingToggle}
              toggleText={``}
              infoIcon={'hidden'} toggleClasses={'bg-[#383838]'}
            />
          </div>

          <div className="flex justify-between mt-[30px]">
            <h6 className='text-sm font-semibold'>Posing</h6>
            <Toggle
              handleToggleState={() => SetPosingToggle(!PosingToggle)}
              toggleState={PosingToggle}
              toggleText={``}
              infoIcon={'hidden'} toggleClasses={'bg-[#383838]'}
            />
          </div>

          <div className="flex justify-between mt-[30px] pb-5 border-b border-white/[0.08]">
            <h6 className='text-sm font-semibold'>My character</h6>
            <Toggle
              handleToggleState={() => SetMyCharacterToggle(!MyCharacterToggle)}
              toggleState={MyCharacterToggle}
              toggleText={``}
              infoIcon={'hidden'} toggleClasses={'bg-[#383838]'}
            />
          </div>
        </div>
        <div className='px-5'>
          <button className="py-6 flex items-center justify-between w-full" onClick={() => setAdvancedSettings(!advancedSettings)}>
            <h6 className="text-sm font-semibold">Advanced settings</h6>
            <div>
              <PlusIcon />
            </div>
          </button>
          {advancedSettings &&
            <div className='flex flex-col gap-6 pb-5'>
              <div>
                <div className='flex gap-1 items-center'>
                  <p className='text-[#979797]'>Guidance Scale</p>
                  <Image src={Information} />
                </div>
                <div className='flex justify-between items-center gap-2 w-full'>
                  <RangePicker values={guidanceScale} setValues={setGuidanceScale} />
                  <div className='bg-[#FFFFFF0D] w-[47px] h-[36px] rounded-[10px] flex justify-center items-center'>
                    {guidanceScale}
                  </div>
                </div>
              </div>
              <div>
                <div className='flex gap-1 items-center'>
                  <p className='text-[#979797]'>Step Scale</p>
                  <Image src={Information} />
                </div>
                <div className='flex justify-between items-center gap-2 w-full'>
                  <RangePicker values={stepScale} setValues={setStepScale} />
                  <div className='bg-[#FFFFFF0D] w-[47px] h-[36px] rounded-[10px] flex justify-center items-center'>
                    {stepScale}
                  </div>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-1 items-center'>
                  <p className='text-[#979797]'>Tiling </p>
                  <Image src={Information} />
                </div>

                <Toggle
                  handleToggleState={() => { setTiling(!tiling), console.log(tiling, 'toggle state') }}
                  toggleState={tiling}
                  toggleText={``}
                  infoIcon={'hidden'} toggleClasses={'bg-[#383838]'}
                />
              </div>
            </div>
          }

        </div>
        <div className='border-t border-t-[#FFFFFF14] mb-5 p-5 flex justify-center'>
          <button className="flex items-center justify-center rounded-xl w-full bg-[#FFFFFF14] px-4 py-[10px]">
            <h6 className="pr-[6px]"><RegenerateIcon /></h6>
            Reset
          </button>
        </div>
      </div>


    </div>
  );
};

export default ImageSetting;
