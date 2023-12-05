import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '@/assets/xmark (1).webp';
import avtar from '@/assets/avtar-message.webp';
import userIcon from '@/assets/user-icon.webp';


interface ChatViewModalProp{
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    setChatName: React.Dispatch<React.SetStateAction<string>>;
    setMoreOptionDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    activeChatStyle:any,
    defaultChatStyle:string,
}

const  ChatViewModal = ({closeModal, setChatName, setMoreOptionDropdown, activeChatStyle ,defaultChatStyle} : ChatViewModalProp) => {

  return (
    <div>
        <Modal
            open={true}
            modalClassName='flex flex-col w-full rounded-[14px] h-max bg-[#1A1A1A] w-max'
            closeModal={() => closeModal(false)}
            modalOverlayStyle='!bg-black/80'
        >
            <div className='flex p-6 justify-between border-b border-white/[0.08]'>
                <div className='text-[#FFFFFF] text-[18px] font-bold leading-6'>Chat view</div>
                <Image onClick={() => {closeModal(false); setMoreOptionDropdown(false);}} className='w-6 h-6' src={crossIcon} alt={''} />
            </div>
            <div className='flex flex-col gap-8 p-6'>
                <div className='flex gap-4'>
                    <div className={`overflow-hidden flex flex-col justify-between group w-[488px] rounded-[14px] bg-white/[0.02] border-2 hover:border-[#5848BC] ${defaultChatStyle === 'Inline chat' ? 'border-[#5848BC]' : 'border-white/[0.05] '}`} onClick={() =>{activeChatStyle('Inline chat') , console.log(defaultChatStyle, "defaultChatStyle Inline chat")}}>
                        <div className='flex flex-col'>
                            <div className='px-6 py-4 bg-white/[0.02] flex gap-3'>
                                <Image className='w-10 h-10' src={avtar} alt={''} />
                                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5 mt-[10px]'>Emily Gray</div>
                            </div>

                            <div className='pt-5 text-center text-[#979797] text-[12px] font-normal leading-4'>May, 11 2023</div>

                            <div className='flex gap-2 px-6 py-4'>
                                <div className='flex p-3 h-max rounded-full bg-white/[0.08]'>
                                    <Image className='object-contain w-4 h-4' src={userIcon} alt={''} />
                                </div>
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-bold leading-5'>Mika-chan</div>
                                        <div className='text-[#979797] text-[12px] font-normal leading-4'>09:23pm</div>
                                    </div>
                                    <div className='text-[#FFFFFF] text-[16px] font-normal leading-6'>Hey, how are you?</div>
                                </div>
                            </div>

                            <div className='flex gap-2 px-6 py-4'>
                                <Image className='h-10 w-' src={avtar} alt={''} />
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>Emily Gray</div>
                                        <div className='text-[#979797] text-[12px] font-normal leading-4'>09:24pm</div>
                                    </div>
                                    <div className='text-[14px] font-normal leading-[18px] text-[#FFFFFF]'>I’m doing well, thank you for asking :) Hbu?</div>
                                </div>
                            </div>

                            <div className='flex gap-2 px-6 py-4'>
                                <div className='flex p-3 h-max rounded-full bg-white/[0.08]'>
                                    <Image className='object-contain w-4 h-4' src={userIcon} alt={''} />
                                </div>
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-bold leading-5'>Mika-chan</div>
                                        <div className='text-[#979797] text-[12px] font-normal leading-4'>09:30pm</div>
                                    </div>
                                    <div className='text-[16px] font-normal leading-6 text-[#FFFFFF]'>
                                        <p>I’m doing really well!</p>
                                        <p>So what do you like doing for fun?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className={`flex items-center justify-center p-6 group-hover:bg-[#5848BC] text-[#FFFFFF] text-[15px] font-semibold leading-5 ${defaultChatStyle === 'Inline chat' ? 'bg-[#5848BC]' : 'bg-white/[0.05]'}`}>Inline chat </button>
                    </div>

                    <div className={`overflow-hidden flex flex-col group w-[488px] rounded-[14px] bg-white/[0.02] border-2 hover:border-[#5848BC] ${defaultChatStyle === 'Bubble chat' ? 'border-[#5848BC]' : 'border-white/[0.05] '}`} onClick={() =>{activeChatStyle('Bubble chat') , console.log(defaultChatStyle,'bubble chat')}}>
                        <div className='flex flex-col'>
                            <div className='px-6 py-4 bg-white/[0.02] flex gap-3'>
                                <Image className='w-10 h-10' src={avtar} alt={''} />
                                <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5 mt-[10px]'>Emily Gray</div>
                            </div>

                            <div className='pt-5 text-center text-[#979797] text-[12px] font-normal leading-4'>May, 11 2023</div>

                            <div className='flex flex-col items-end gap-1 px-6 py-2'>
                                <div className='flex pl-3 pr-[14px] py-3 rounded-tl-[10px] rounded-tr-[10px] rounded-br-0 rounded-bl-[10px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-normal leading-6'>Hey, how are you?</div>
                                <div className='text-[#979797] text-[12px] font-normal leading-4'>09:23pm</div>
                            </div>

                            <div className='flex flex-col gap-1 px-6 py-2'>
                                <div className='flex gap-2'>
                                    <div className='w-8 h-8'>
                                        <Image className='w-full h-full' src={avtar} alt={''} />
                                    </div>
                                    <div className='pl-3 pr-[14px] py-3 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-0 bg-[#272727] text-[#FFFFFF] text-[14px] font-normal leading-[18px]'>
                                        <p>I’m doing well, thank you for</p>
                                        <p>asking :) Hbu?</p>
                                    </div>
                                </div>
                                <div className='text-[#979797] text-[12px] font-normal leading-4 ml-[40px]'>09:24pm</div>
                            </div>

                            <div className='flex flex-col items-end gap-1 px-6 py-2'>
                                <div className='pl-3 pr-[14px] py-3 rounded-tl-[10px] rounded-tr-[10px] rounded-br-0 rounded-bl-[10px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-normal leading-6'>
                                    <p>I’m doing really well!</p>
                                    <p>So what do you like doing for fun?</p>
                                </div>
                                <div className='text-[#979797] text-[12px] font-normal leading-4'>09:30pm</div>
                            </div>
                        </div>
                        <button className={`flex items-center justify-center p-6 text-[#FFFFFF] text-[15px] font-semibold leading-5 group-hover:bg-[#5848BC] ${defaultChatStyle === 'Bubble chat' ? '!bg-[#5848BC]' : 'bg-white/[0.05] '}`}>Bubble chat</button>
                    </div>
                </div>
                
                <div className='flex items-end justify-end'>
                <button className='flex w-max px-5 py-[13px] justify-center items-center rounded-[14px] bg-[#5848BC] text-[#FFFFFF] text-[16px] font-bold leading-[22px]' onClick={() => {closeModal(false); setMoreOptionDropdown(false);}}>Done</button>
                </div>
            </div>
        </Modal>    
    </div>
  )
}

export default ChatViewModal;
