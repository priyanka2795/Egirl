import React from 'react'
import SocialMediaContent from '../SocialMediaContent'
function ImageGeneratorContent() {
  return (
    <div className='w-[990px] py-2'>
      <div className='text-[13px] uppercase text-[#515151]'>Contents</div>
      <div className='mt-2 leading-8'>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#character_profile'>What is the Image Generator?</a>
        </div>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#unique_username'>How it works?</a>
        </div>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#general_benefits'>Prompt</a>
        </div>
      </div>
      <SocialMediaContent/>
    </div>
  )
}

export default ImageGeneratorContent