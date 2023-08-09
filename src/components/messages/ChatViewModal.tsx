import React from 'react';
import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import crossIcon from '../../../public/assets/xmark (1).png';
import avtar from '../../../public/assets/avtar-message.png';
import userIcon from '../../../public/assets/user-icon.png';


interface ChatViewModalProp{
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatViewModal = ({closeModal} : ChatViewModalProp) => {
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
                <Image className='w-6 h-6' src={crossIcon} alt={''} />
            </div>
            <div className='flex flex-col gap-8 p-6'>
                <div className='flex gap-4'>
                    <div className='flex flex-col justify-between w-[488px] rounded-[14px] border-2 border-white/[0.05] bg-white/[0.02]'>
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
                                    <div className='text-[16px] font-normal leading-6 text-[#FFFFFF]'>Hey, how are you?</div>
                                </div>
                            </div>

                            <div className='flex gap-2 px-6 py-4'>
                                <Image className='h-10 w-' src={avtar} alt={''} />
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>Emily Gray</div>
                                        <div className='text-[#979797] text-[12px] font-normal leading-4'>09:24pm</div>
                                    </div>
                                    <div className='text-[14px] font-normal leading-[18px] text-[#FFFFFF]'></div>
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
                        <button className='flex items-center justify-center p-6 bg-white/[0.05] text-[#FFFFFF] text-[15px] font-semibold leading-5'>Inline chat </button>
                    </div>

                    <div className='flex flex-col w-[488px] rounded-[14px] border-2 border-white/[0.05] bg-white/[0.02]'>
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
                                    <div className='text-[16px] font-normal leading-6 text-[#FFFFFF]'>Hey, how are you?</div>
                                </div>
                            </div>

                            <div className='flex gap-2 px-6 py-4'>
                                <Image className='h-10 w-' src={avtar} alt={''} />
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-semibold leading-5'>Emily Gray</div>
                                        <div className='text-[#979797] text-[12px] font-normal leading-4'>09:24pm</div>
                                    </div>
                                    <div className='text-[14px] font-normal leading-[18px] text-[#FFFFFF]'></div>
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
                        <button className='flex items-center justify-center p-6 bg-white/[0.05] text-[#FFFFFF] text-[15px] font-semibold leading-5'>Inline chat </button>
                    </div>
                </div>
                
                <div></div>
            </div>
        </Modal>    
    </div>
  )
}

export default ChatViewModal;
