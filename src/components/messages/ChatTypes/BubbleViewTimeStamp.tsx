import React from 'react'
interface BubbleChatProp{
    chatName: string;
    userName: string;
    timeStamp: string;
}
const BubbleViewTimeStamp = ({userName ,chatName , timeStamp}:BubbleChatProp) => {
  return (
    <div className='mt-1'>
    {chatName === 'Bubble chat' && userName === 'You' ? (
      <div className='text-right text-[12px] font-normal leading-4 text-[#979797]'>
        {timeStamp}
      </div>
    ) : chatName === 'Bubble chat' && userName !== 'You' ? (
      <span className='text-[12px] font-normal leading-4 text-[#979797]'>
        {timeStamp}
      </span>
    ) : (
      ''
    )}
  </div>
  )
}

export default BubbleViewTimeStamp