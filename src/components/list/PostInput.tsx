import React from 'react'
import avatar from '../../../public/assets/avatar 67.png'
import camera from '../../../public/assets/camera-Icon.png'
import smiley from '../../../public/assets/smiley-Icon.png'
import Image from 'next/image';

const PostInput = () => {
  return (
    <div className='flex justify-between mt-5 p-6 rounded-[14px] bg-[#121212]'>
      <div className='flex items-center gap-3'>
        <Image className='object-contain rounded-[100px]' src={avatar} alt={''} />
        <input type='text' className='text-[#979797] text-[15px] font-normal leading-6 h-0 border-none bg-transparent focus:ring-0 placeholder:text-[#979797]' placeholder={`What's happening?`} />
      </div>
      <div className='flex items-center gap-3'>
        <Image className='object-contain' src={camera} alt={''} />
        <Image className='object-contain' src={smiley} alt={''} />
      </div>
    </div>
  )
}

export default PostInput;
