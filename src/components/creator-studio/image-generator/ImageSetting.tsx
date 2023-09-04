import React, { useState } from 'react';
import ImageDimension from './ImageDimension';
import ImageNumber from './ImageNumber';
import Toggle from '@components/common/Toggler';
import PlusIcon from '../../../../public/assets/svgImages/plus-icon.svg'
import RegenerateIcon from '../../../../public/assets/svgImages/regenerate-icon.svg'

const ImageSetting = () => {
  const [inpainting, setInpainting] = useState(false);
  const [posing, setPosing] = useState(false);
  const [mycharacter, setMycharacter] = useState(false);
  return (
  <div className="h-[calc(100vh-103px)] flex flex-col justify-between">
      <div className='bg-[#121212] '>
      <div className='border-b border-white/[0.08] px-6 py-5'>ImageSetting</div>
      <ImageNumber />
      <ImageDimension />

      <div className='px-5'>
        <div className="flex justify-between">
          <h6 className='text-sm font-semibold'>Inpainting</h6>
          <Toggle
            handleToggleState={() => {setInpainting(!inpainting) , console.log(inpainting , 'toggle state')}}
            toggleState={inpainting}
            toggleText={``}
            infoIcon={'hidden'} toggleClasses={'bg-[#383838]'} 
          />
        </div>

        <div className="flex justify-between mt-[30px]">
          <h6 className='text-sm font-semibold'>Posing</h6>
          <Toggle
            handleToggleState={() => setPosing(!posing)}
            toggleState={posing}
            toggleText={``}
            infoIcon={'hidden'} toggleClasses={'bg-[#383838]'} 
          />
        </div>

        <div className="flex justify-between mt-[30px] pb-5 border-b border-white/[0.08]">
          <h6 className='text-sm font-semibold'>My character</h6>
          <Toggle
            handleToggleState={() => setMycharacter(!mycharacter)}
            toggleState={mycharacter}
            toggleText={``}
            infoIcon={'hidden'} toggleClasses={'bg-[#383838]'} 
          />
        </div>
      </div>
      <div className="px-5 pt-[25px] pb-5 flex justify-between">
         <h6 className="text-sm font-semibold">Advanced settings</h6>
         <PlusIcon/>
      </div>
      
    </div>

    <div className="px-4 py-[10px] m-5 bg-white bg-opacity-10 rounded-xl flex justify-center items-center cursor-pointer">
      <h6 className="pr-[6px]"><RegenerateIcon/></h6>
     Reset
    </div>
  </div>
  );
};

export default ImageSetting;
