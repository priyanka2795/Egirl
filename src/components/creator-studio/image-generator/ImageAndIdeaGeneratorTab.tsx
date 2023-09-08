import React, { useState } from 'react';
import DefaultTab from '@components/common/DefaultTab';
import SquareImage from '../../../../public/assets/svgImages/image-square.svg'
import Dots from '../../../../public/assets/dots-horizontal.png'
import ArrowUp from '../../../../public/assets/chevron-up.png'
import Image from 'next/image';
import Image1 from '../../../../public/assets/vi-image-1.png'
import Image2 from '../../../../public/assets/vi-image-2.png'
import Image3 from '../../../../public/assets/vi-image-3.png'
import Image4 from '../../../../public/assets/vi-image-4.png'
import Image5 from '../../../../public/assets/vi-image-5.png'

const images = [
  { img: Image1 },
  { img: Image2 },
  { img: Image3 },
  { img: Image4 },
  { img: Image5 },
]
const ImageAndIdeaGeneratorTab = () => {
  const [activeTab, setActiveTab] = useState('Image Generation');
  const tabContent = ['Image Generation', 'Idea Generator'];
  const [imageGeneration, setImageGeneration] = useState(false);

  return (
    <div className='mt-5 bg-[#121212] rounded-[14px] pb-6 px-6'>
      <div className="border-b-white/[0.08]">
        <DefaultTab
          activeListTab={activeTab}
          setActiveTab={setActiveTab}
          tabContentArray={tabContent}
        />
        {/* <div className="py-[80px] flex flex-col gap-4 justify-center w-full items-center">
          <div className="bg-white/[0.05] rounded-full w-max p-5">
            <SquareImage />
          </div>
          <p className="text-sm text-[#979797]">Your image generations will be shown here</p>
        </div> */}

        <div className='rounded-[20px] border border-[#FFFFFF29] '>
          <div className='flex items-center justify-between p-6 cursor-pointer' onClick={()=>setImageGeneration(!imageGeneration)}>
            <p>Anime, Photoreal, Artistic, Fantasy, Blue Jeans</p>
            <div className='flex items-center gap-1'>
              <Image src={Dots} />
              <Image src={ArrowUp} />
            </div>
          </div>
          {imageGeneration &&
            <div className='border-t border-[#FFFFFF29] p-6'>
              <div className='flex flex-wrap gap-2'>
                {images.map((items) => (
                  <div className='rounded-2xl overflow-hidden w-[200px] h-[200px] '>
                    <Image src={items.img} />
                  </div>
                ))}
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default ImageAndIdeaGeneratorTab;
