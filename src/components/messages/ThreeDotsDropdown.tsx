import React, { useState } from 'react'
import ChatIcon from './svg/chat-icon-small.svg';
import DeleteIcon from './svg/delete-icon.svg';
import ChatViewModal from './ChatViewModal';

interface ThreeDotsDropdownProp{
    setClearChat:any;
    setMoreOptionDropdown:any;
    setChatName:React.Dispatch<React.SetStateAction<string>>;
}
const ThreeDotsDropdown = ({setClearChat ,setMoreOptionDropdown, setChatName}: ThreeDotsDropdownProp) => {
  const [chatViewModal, setChatViewModal] = useState(false);

  return (
    <>
    <div className='absolute right-0 top-[100%] mt-2 inline-flex w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
    <div className='flex-col items-center self-stretch justify-start gap-2 cursor-pointer '>
      <div className='flex gap-2 px-4 py-[10px] text-sm' onClick={() => {setChatViewModal(true)}}>
        <ChatIcon />
        Chat view
      </div>
      <div
        className='flex gap-2 px-4 py-[10px] text-sm'
        onClick={() => {setClearChat(true), setMoreOptionDropdown(false)}}
      >
        <DeleteIcon />
        Clear chat
      </div>
    </div>
  </div>
   {
    chatViewModal && 
    <ChatViewModal closeModal={setChatViewModal} setChatName={setChatName} setMoreOptionDropdown={setMoreOptionDropdown}/>
   }
   </>
  )
}

export default ThreeDotsDropdown