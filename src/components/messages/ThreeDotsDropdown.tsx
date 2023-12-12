//@ts-nocheck
import React, { useState } from 'react'
import ChatIcon from './svg/chat-icon-small.svg';
import DeleteIcon from './svg/delete-icon.svg';
import ChatViewModal from './ChatViewModal';
import ClearBookMarkModal from '@components/list/ClearBookMarkModal';

interface ThreeDotsDropdownProp{
    setClearChat?:any;
    setMoreOptionDropdown?:any;
    setChatName?:React.Dispatch<React.SetStateAction<string>>;
    activeChatStyle?:any;
    defaultChatStyle?:string;  
}
const ThreeDotsDropdown = ({setClearChat ,setMoreOptionDropdown, setChatName ,activeChatStyle , defaultChatStyle}: ThreeDotsDropdownProp) => {
  const [chatViewModal, setChatViewModal] = useState(false);
  const [clearChatModal, setClearChatModal] = useState(false);

  return (
    <>
    <div className='z-50 absolute right-0 top-[100%] mt-2 inline-flex w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
    <div className='flex-col items-center self-stretch justify-start gap-2 cursor-pointer'>
      <div className='flex gap-2 px-4 py-[10px] text-sm' onClick={() => {setChatViewModal(true)}}>
        <ChatIcon />
        Chat view
      </div>
      <div
        className='flex gap-2 px-4 py-[10px] text-sm'
        onClick={() => {setClearChatModal(true)}}
      >
        <DeleteIcon />
        Clear chat
      </div>
    </div>
  </div>
   {
    chatViewModal && 
    <ChatViewModal closeModal={setChatViewModal} setChatName={setChatName} setMoreOptionDropdown={setMoreOptionDropdown} activeChatStyle={activeChatStyle} defaultChatStyle={defaultChatStyle}/>
   }
   {
    clearChatModal && 
    <ClearBookMarkModal heading='Clear chat history' paragraph='Are you sure you want to clear the chat history? This action cannot be undone.' setClearChat={setClearChat} setMoreOptionDropdown={setMoreOptionDropdown} closeModalItem={setClearChatModal}/>
   }
  </>
  )
}

export default ThreeDotsDropdown