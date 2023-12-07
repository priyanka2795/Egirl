import Image from 'next/image';
import React from 'react';
import heart from '@/assets/Egirls+.webp'

const PostsContent = () => {  
  return (
    <div className='flex flex-col items-center justify-center gap-6 py-12'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='w-max flex p-5 rounded-[100px] bg-white/[0.05]'>
            <Image className='w-[21px] h-[20px]' src={heart} alt={''} />
        </div>
        <div className='text-center text-[#FFFFFF] text-[15px] font-semibold leading-5'>Select a subscription plan to see posts</div>
      </div>
      <div className='px-4 py-[10px] justify-center items-center rounded-[12px] bg-white/[0.08] text-[#FFFFFF] text-[14px] font-bold leading-5'>Subscribe</div>
    </div>
  )
}

export default PostsContent;
