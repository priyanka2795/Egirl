import React from 'react'
interface BubbleChatProp{
    chatName: string;
    userName: string;
    timeStamp: string;
}
const BubbleViewTimeStamp = ({userName ,chatName , timeStamp}:BubbleChatProp) => {
  return (
    <div className='w-[inherit]'>
    {chatName === 'Bubble chat' && userName === 'You' ? (
      <div className='text-right text-[12px] font-normal leading-4 text-[#979797]'>
        {timeStamp}
      </div>
    ) : chatName === 'Bubble chat' && userName !== 'You' ? (
      <div className='pl-[47px] text-left text-[12px] font-normal leading-4 text-[#979797]'>
        {timeStamp}
      </div>
    ) : (
      ''
    )}
  </div>
  )
}

export default BubbleViewTimeStamp