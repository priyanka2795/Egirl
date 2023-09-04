import React, { useState } from 'react';
import ImageDimension from './ImageDimension';
import ImageNumber from './ImageNumber';
import Toggle from '@components/messages/Toggler';
import PlusIcon from '../../../../public/assets/svgImages/plus-icon.svg'

const ImageSetting = () => {
  const [inpainting, setInpainting] = useState(false);
  const [posing, setPosing] = useState(false);
  return (
    <div className='bg-[#121212] '>
      <div className='border-b border-white/[0.08] px-6 py-5'>ImageSetting</div>
      <ImageNumber />
      <ImageDimension />

      <div className='px-5'>
        <div className="flex justify-between">
          <h6 className='text-sm font-semibold'>Inpainting</h6>
          <Toggle
            handleToggleState={() => setInpainting(!inpainting)}
            toggleState={inpainting}
            toggleText={``}
          />
        </div>

        <div className="flex justify-between mt-[30px] pb-5 border-b border-white/[0.08]">
          <h6 className='text-sm font-semibold'>Posing</h6>
          <Toggle
            handleToggleState={() => setPosing(!posing)}
            toggleState={posing}
            toggleText={``}
          />
        </div>
      </div>
      <div className="px-5 pt-[25px] pb-5 flex justify-between">
         <h6 className="text-sm font-semibold">Advanced settings</h6>
         <PlusIcon/>
      </div>
      
    </div>
  );
};

export default ImageSetting;
