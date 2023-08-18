import Image from 'next/image'
import React from 'react'

import gridImgFirst from '../../../../public/assets/messages/grid-img-1.png';
import gridImgSecond from '../../../../public/assets/messages/grid-img-2.png';
import gridImgThird from '../../../../public/assets/messages/grid-img-3.png';
import gridImgFourth from '../../../../public/assets/messages/grid-img-4.png';
import gridImgFifth from '../../../../public/assets/messages/grid-img-5.png';

const ChatGridImg = () => {
  return (
    <div className='w-full max-w-[324px]'>
    <div className='grid grid-cols-2 gap-2 my-2'>
      <Image className='object-cover' src={gridImgFirst} alt='' />
      <Image className='object-cover' src={gridImgSecond} alt='' />
    </div>
    <div className='grid grid-cols-3 gap-2 my-2'>
      <Image className='object-contain' src={gridImgThird} alt='' />
      <Image className='object-contain' src={gridImgFourth} alt='' />
      <Image className='object-contain' src={gridImgFifth} alt='' />
    </div>
  </div>
  )
}

export default ChatGridImg