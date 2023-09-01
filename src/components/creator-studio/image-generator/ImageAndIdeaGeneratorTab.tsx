import React, { useState } from 'react';
import DefaultTab from '@components/common/DefaultTab';
import SquareImage from '../../../../public/assets/svgImages/image-square.svg'

const ImageAndIdeaGeneratorTab = () => {
  const [activeTab, setActiveTab] = useState('Image Generation');
  const tabContent = ['Image Generation', 'Idea Generator'];
  return (
    <div className='mt-5 bg-[#121212] rounded-[14px]'>
     <div className="border-b-white/[0.08]">
     <DefaultTab
        activeListTab={activeTab}
        setActiveTab={setActiveTab}
        tabContentArray={tabContent}
      />
      <div className="py-[80px] flex flex-col gap-4 justify-center w-full items-center">
        <div className="bg-white/[0.05] rounded-full w-max p-5">
        <SquareImage/>
        </div>
        <p className="text-sm text-[#979797]">Your image generations will be shown here</p>
      </div>
     </div>
    </div>
  );
};

export default ImageAndIdeaGeneratorTab;
