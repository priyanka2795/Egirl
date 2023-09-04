import React,{useState} from 'react';
import ShuffleSvg from "../../../../public/assets/svgImages/shuffle.svg"
import PlusIconSvg from "../../../../public/assets/svgImages/plus-icon.svg"
import Toggle from '@components/common/Toggler';
import AddTagModal from './AddTagModal';

const ImageGeneratorOption = () => {
    const [prompt, setPrompt] = useState(false);
    const [tagState, setTagState] = useState(false);
  return (
    <>
     <div className="border-b border-white/[0.08] p-4">
      <div className="flex justify-between pb-7 gap-4">
        <div className='flex gap-4'>
          <div className='flex h-max w-[300px] items-center justify-start gap-2.5 rounded-[14px] bg-white bg-opacity-5 px-4 py-[13px]'>
            <div className='text-[15px] font-normal leading-normal text-neutral-400'>
              Genre 
            </div>
          </div>

          <div className='flex text-base font-bold text-white h-max w-[142px] items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 cursor-pointer'>
              Add style <PlusIconSvg/>
          </div>

          <div className='flex text-base font-bold text-white h-max w-[130px] items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 cursor-pointer' onClick={() => setTagState (!tagState)}>
              Add tag <PlusIconSvg/>
          </div>
        </div>

        <div className='flex w-12 items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 py-3 cursor-pointer'>
           <ShuffleSvg/>
        </div>
      </div>
      
      <textarea className="bg-[#000000]/[0.48] h-[124px] w-full border-none resize-none rounded-[14px] mb-6" id="" name="w3review" placeholder="Type a prompt ..."></textarea>
      
      <Toggle handleToggleState={() => setPrompt(!prompt )} toggleState={prompt} toggleText={`Negative Prompt`} infoIcon={'hidden'} toggleClasses={'bg-[#383838]'} subHeading={true}/>
    </div>

    <div className="p-4">
        <div className="bg-[#5848BC] px-5 py-[13px] font-bold text-base w-max rounded-[14px] ml-auto">Generate</div>
    </div>

    {tagState &&
      <AddTagModal closeDeleteModal={setTagState}/>
    }
    </>
   
  );
};

export default ImageGeneratorOption;
