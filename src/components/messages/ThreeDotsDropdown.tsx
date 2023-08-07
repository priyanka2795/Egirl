import React from 'react'
import ChatIcon from './svg/chat-icon-small.svg';
import DeleteIcon from './svg/delete-icon.svg';

interface ThreeDotsDropdownProp{
    setClearChat:any,
    setMoreOptionDropdown:any
}
const ThreeDotsDropdown = ({setClearChat ,setMoreOptionDropdown}: ThreeDotsDropdownProp) => {
  return (
    <div className='absolute right-0 top-[100%] mt-2 inline-flex w-[218px] flex-col items-start justify-start rounded-2xl bg-zinc-900 py-2 shadow'>
    <div className='flex-col items-center self-stretch justify-start gap-2 cursor-pointer '>
      <div className='flex gap-2 px-4 py-[10px] text-sm'>
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
  )
}

export default ThreeDotsDropdown