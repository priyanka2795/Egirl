import React from 'react'
import ChatIcon from './svg/chat-icon.svg';


const NewConversationWithUser = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-6">
         <ChatIcon className='mb-4' />
         <div className="text-[22px] font-bold leading-loose text-center text-[#979797]">Betty White</div>
         <div className="text-[15px] font-medium leading-tight text-center text-[#979797]">This is the beginning of your conversation with Betty White</div>
    </div>
  )
}

export default NewConversationWithUser