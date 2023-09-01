import React from 'react';
import ImageGeneratorOption from './ImageGeneratorOption';
import ImageAndIdeaGeneratorTab from './ImageAndIdeaGeneratorTab';
import ImageSetting from './ImageSetting';

const ImageGeneratorIndex = () => {
  return (
    <div className="flex justify-between gap-8">
      <div className="w-full">
        <div className='rounded-[14px] bg-[#121212]'>
          <div className='px-4 pt-4 pb-6'>
            <h5 className='font-bold text-[22px] text-white'>
              Image generator
            </h5>
          </div>
          <ImageGeneratorOption />
        </div>
        <ImageAndIdeaGeneratorTab />
      </div>

      <div className="max-w-[256px] w-full">
        <ImageSetting />
      </div>
    </div>
  );
};

export default ImageGeneratorIndex;
