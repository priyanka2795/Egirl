import React, { useState } from 'react';
import ImageGeneratorOption from './ImageGeneratorOption';
import ImageAndIdeaGeneratorTab from './ImageAndIdeaGeneratorTab';
import ImageSetting from './ImageSetting';

const ImageGeneratorIndex = () => {

  const [inpaintingToggle, setInpaintingToggle] = useState(false)
  const [posingToggle, setPosingToggle] = useState(false);
  const [myCharacterToggle, setMyCharacterToggle] = useState(false);


  return (
    <div className="flex justify-between gap-4">
      <div className="w-full">
        <div className='rounded-[14px] bg-[#121212]'>
          <div className='px-4 pt-4 pb-6'>
            <h5 className='font-bold text-[22px] text-white'>
              Image generator
            </h5>
          </div>



          <ImageGeneratorOption InpaintingToggle={inpaintingToggle} PosingToggle={posingToggle} MyCharacterToggle={myCharacterToggle} EditGeneration={true} EditTooltip={true}/>
        </div>
        <ImageAndIdeaGeneratorTab />
      </div>

      <div className="max-w-[256px] w-full">
        <ImageSetting SetInpaintingToggle={setInpaintingToggle} InpaintingToggle={inpaintingToggle} SetPosingToggle={setPosingToggle} PosingToggle={posingToggle} SetMyCharacterToggle={setMyCharacterToggle}  MyCharacterToggle={myCharacterToggle}/>
      </div>
    </div>
  );
};

export default ImageGeneratorIndex;
