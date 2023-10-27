import React from 'react'
import SocialMediaContent from '../SocialMediaContent'
function VoiceContent() {
  return (
    <div className='w-[990px] py-2'>
      <div className='text-[13px] uppercase text-[#515151]'>Contents</div>
      <div className='mt-2 leading-8'>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#'>What is a Character Voice?</a>
        </div>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#'>How it works?</a>
        </div>
        <div className='border-l-[1px] border-white/[0.12] pl-3 text-[15px] text-[#979797] '>
          <a href='#'>Features</a>
        </div>
      </div>
      <SocialMediaContent/>
    </div>
  )
}

export default VoiceContent