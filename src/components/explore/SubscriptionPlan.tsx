import { Modal } from '@components/modal/modal';
import React from 'react';
import Image from 'next/image';
import bluestarIcon from '../../../public/assets/blue-start-icon.png';
import starIcon from '../../../public/assets/star-icon.png';
import heartIcon from '../../../public/assets/heart-icon.png';
import crownIcon from '../../../public/assets/crown-icon.png';
import CloseIcon from './svg/close-icon.svg';

interface subscriptionPlanModal {
  closeDefaulModal: any;
}
const SubscriptionPlan = ({ closeDefaulModal }: subscriptionPlanModal) => {
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col gap-6 max-w-xl w-full p-8 rounded-2xl h-max bg-[#1A1A1A] !max-w-[819px] w-full'
      modalOverlayStyle='!bg-black/80'
      closeModal={() => {
        closeDefaulModal(false);
      }}
    >
      <div className='inline-flex w-full flex-col items-center gap-8 rounded-[20px] bg-[#1A1A1A] px-8 py-0 relative '>
        <div className="absolute right-0 -top-[5px] cursor-pointer" onClick={() => closeDefaulModal(false)}><CloseIcon/></div>
        <div className='flex flex-col items-center gap-2'>
          <div className='text-[26px] font-bold text-[#FFFFFF] leading-[26px]'>Mika-chan</div>
          <div className='text-center text-[15px] font-normal text-[#979797]'>
            Subscribe to me because I'm your favorite anime waifu
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='flex w-[241px] flex-col items-start gap-6 rounded-[14px] bg-[#121212] p-8 border-2 border-transparent hover:border-[#5848BC] cursor-pointer'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center gap-4'>
                <Image
                  className='h-[36px] w-[36px]'
                  src={bluestarIcon}
                  alt={''}
                />
              </div>
              <div className='flex flex-col items-start'>
                <div className='text-[15px] font-normal text-[#979797]'>
                  Basic
                </div>
                <div className='text-[26px] font-bold text-[#FFFFFF]'>
                  $4.99
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <div className='text-[15px] font-semibold text-[#FFFFFF]'>
                Features:
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Standard Feature 1
                </div>
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Feature 2
                </div>
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Feature 3
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-[241px] flex-col items-start gap-6 rounded-[14px] bg-[#121212] p-8 border-2 border-transparent hover:border-[#5848BC] cursor-pointer'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center gap-4'>
                <Image className='h-[36px] w-[36px]' src={heartIcon} alt={''} />
              </div>
              <div className='flex flex-col items-start gap-[2px]'>
                <div className='text-[15px] font-normal text-[#979797]'>
                  Pro
                </div>
                <div className='text-[26px] font-bold text-[#FFFFFF]'>
                  $19.99
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <div className='text-[15px] font-semibold text-[#FFFFFF]'>
                Features:
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Standard Feature 1
                </div>
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Feature 2
                </div>
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Feature 3
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-[241px] flex-col items-start gap-6 rounded-[14px] bg-[#121212] p-8 border-2 border-transparent hover:border-[#5848BC] cursor-pointer'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center gap-4'>
                <Image className='h-[36px] w-[36px]' src={crownIcon} alt={''} />
              </div>
              <div className='flex flex-col items-start gap-[2px]'>
                <div className='text-[15px] font-normal text-[#979797]'>
                  Elite
                </div>
                <div className='text-[26px] font-bold text-[#FFFFFF]'>
                  $49.99
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <div className='text-[15px] font-semibold text-[#FFFFFF]'>
                Features:
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Standard Feature 1
                </div>
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Feature 2
                </div>
              </div>
              <div className='flex items-start gap-1'>
                <Image className='h-[18px] w-[18px]' src={starIcon} alt={''} />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Feature 3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-start self-stretch gap-3'>
          <div className='flex w-1/2 items-center justify-center gap-2 rounded-[14px] border border-[#ffffff]/10 px-[20px] py-[12px] text-[16px] font-bold text-[#FFFFFF]'>
            Cancel
          </div>
          <div className='flex w-1/2 items-center justify-center gap-2 rounded-[14px] bg-[#5848BC] px-[20px] py-[12px] text-[16px] font-bold text-[#FFFFFF]'>
            Subscribe
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscriptionPlan;
