import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import xMark from '../../../public/assets/xmark (1).png';
import avatar from '../../../public/assets/image 69.png';
import cameraOverlay from '../../../public/assets/white-camera.png';
import InputFieldDesign from '@components/common/InputFieldDesign';
import ProfileDropdown from '@components/common/ProfileDropdown';
interface EditProfileModalProps {
  closeState: any;
}

const EditProfileModal = ({ closeState }: EditProfileModalProps) => {
  const tabs = ['Profile view', 'Explore view'];
  const [activeTab, setActiveTab] = useState(0);
  const [profileEdit, setProfileEdit] = useState(false);
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px] relative'
      closeModal={() => closeState(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex justify-between border-b border-white/[0.08] p-6'>
        <div className='font-bold text-[18px] leading-6 text-white'>
          Edit profile
        </div>
        <Image src={xMark} alt={''} />
      </div>
      <div className='flex items-center gap-4 px-6 pb-3 pt-6'>
        <div
          className='relative cursor-pointer'
          onClick={() => {
            setProfileEdit(!profileEdit),
              console.log(profileEdit, 'profileEdit');
          }}
        >
          <Image className='rounded-[100px]' src={avatar} alt={''} />
          <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
            <div className='flex h-[32px] w-[32px] items-center justify-center rounded-[100px] bg-black bg-opacity-60'>
              <Image
                src={cameraOverlay}
                className='h-[16px] w-[16px] object-contain'
                alt=''
              />
            </div>
          </div>

          <div className='absolute'>
            {profileEdit && (
              <ProfileDropdown
                profileEdit={profileEdit}
                setProfileEdit={setProfileEdit}
              />
            )}
          </div>
        </div>

        <div className='flex flex-col gap-[2px]'>
          <div className='font-bold text-[15px] leading-5 text-white'>
            Profile photo
          </div>
          <div className='font-normal text-[14px] leading-[18px] text-[#979797]'>
            Click on the photo to edit
          </div>
        </div>
      </div>
      <div className='flex gap-3 border-b border-white/[0.08] px-6 pb-4 pt-2'>
        {tabs.map((item, index) => {
          return (
            <div
              key={index}
              className={`text-bold flex w-1/2 cursor-pointer items-center justify-center rounded-[12px] px-4 py-2 text-[15px] leading-5 ${
                activeTab === index
                  ? 'bg-white/[0.16] text-white'
                  : 'bg-transparent text-[#979797]'
              }`}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className='flex flex-col gap-6 px-6 pb-6 pt-3'>
        <div className='flex flex-col gap-4'>
          <InputFieldDesign
            labelName='Name'
            inputType='text'
            inputPlaceholder='Mika-chan'
          />

          <InputFieldDesign
            labelName='Username'
            inputType='text'
            inputPlaceholder='mikachan'
          />

          <InputFieldDesign
            labelName='Profile Tags'
            inputType='text'
            inputPlaceholder='Add profile tags'
          />

          <InputFieldDesign
            labelName='Select location'
            inputType='dropdown'
            inputPlaceholder='Tokyo'
          />

          <InputFieldDesign
            labelName='Bio'
            inputType='textarea'
            inputPlaceholder='Shy fox girl looking for adventure ·冒険を探している恥ずかしがり屋のキツ ...'
          />

          <div className='flex gap-3 '>
            <button
              className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] border border-white border-opacity-30 px-5'
              onClick={() => closeState(false)}
            >
              <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                Cancel
              </div>
            </button>

            <button
              className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] bg-[#5848BC] px-5'
              onClick={() => closeState(false)}
            >
              <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                Save
              </div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
