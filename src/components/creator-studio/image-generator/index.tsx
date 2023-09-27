import React, { useState } from 'react';
import ImageGeneratorOption from './ImageGeneratorOption';
import ImageAndIdeaGeneratorTab from './ImageAndIdeaGeneratorTab';
import ImageSetting from './ImageSetting';

const ImageGeneratorIndex = () => {
  const [inpaintingToggle, setInpaintingToggle] = useState<boolean>(false);
  const [posingToggle, setPosingToggle] = useState<boolean>(false);
  const [myCharacterToggle, setMyCharacterToggle] = useState<boolean>(false);

  return (
    <div className='flex gap-8'>
      <div className='flex w-full flex-col gap-5'>
        <ImageGeneratorOption
          InpaintingToggle={inpaintingToggle}
          PosingToggle={posingToggle}
          MyCharacterToggle={myCharacterToggle}
          EditGeneration={true}
          EditTooltip={true}
        />
        <ImageAndIdeaGeneratorTab />
      </div>
      <div className='w-full max-w-[256px]'>
        <ImageSetting
          SetInpaintingToggle={setInpaintingToggle}
          InpaintingToggle={inpaintingToggle}
          SetPosingToggle={setPosingToggle}
          PosingToggle={posingToggle}
          SetMyCharacterToggle={setMyCharacterToggle}
          MyCharacterToggle={myCharacterToggle}
        />
      </div>

      {/* <div className="w-full">
        <div className='rounded-[14px] bg-[#121212]'>
          <div className='px-4 pt-4 pb-6'>
            <h5 className='font-bold text-[22px] text-white'>
              Image generator
            </h5>
          </div>



          
        </div>
        
      </div> */}
    </div>
  );
};

export default ImageGeneratorIndex;

{
  /* <div className="flex justify-between gap-4">
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
</div> */
}
