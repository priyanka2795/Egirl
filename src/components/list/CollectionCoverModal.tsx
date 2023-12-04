import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React from 'react';
import cameraIcon from '@/assets/camera-icon.png';
import avatar from '@/assets/avatar.webp';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import MainImage from '@/assets/gallery-tab-img-3.webp';
import { addCharacterToCollection } from 'services/services';
import Cookies from 'js-cookie';
interface CollectionCoverModalProps {
  closeAddCollectionModal?: any;
  closeDropdown: any;
  collectionId?:number
}

const imagesArray = [
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage,
  MainImage
];
const CollectionCoverModal = ({
  closeAddCollectionModal,
  closeDropdown,
  collectionId
}: CollectionCoverModalProps) => {
  const token:any = Cookies.get("accessToken")
  const handleCreate = ()=>{
    closeAddCollectionModal(false)
    closeDropdown('')
    const data:any = []
     addCharacterToCollection(collectionId, data, token)
     .then((res)=>{
      console.log("add character to collection res----", res)
     })
     .catch((err)=>{
      console.log("add character to collection err----", err)
     })
  }
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[1044px]'
      closeModal={() => closeAddCollectionModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div>
        <div className='flex w-full justify-between gap-2 border-b border-white/[0.08] p-6'>
          <div className='flex w-[286px] flex-col items-start gap-1 text-lg font-bold text-[#FFFFFF]'>
            Collection Cover
          </div>
          <div
            className='top-[7px] flex h-[24px] w-[24px] cursor-pointer items-start gap-4 object-contain'
            onClick={() => {closeAddCollectionModal(false), closeDropdown('')}}
          >
            <CloseIcon />
          </div>
        </div>

        <div className='grid grid-cols-5 gap-3 px-6'>
          {imagesArray.map((items, index) => {
            return (
              <div className='relative flex items-center'>
                <div className='h-[190px] w-full'>
                  <Image src={items} alt='' className='object-cover' />
                </div>

                <div className='absolute top-0 right-0 w-full h-full custom-checkbox'>
                  <div className='pt-4 pr-4 text-right'>
                    <input type='checkbox' id={`checked-${index}`} />
                    <label htmlFor={`checked-${index}`}></label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='flex items-end justify-end w-full gap-3 p-6 h-max'>
          <div
            className='flex items-center justify-center gap-2 px-5 py-3 border border-white cursor-pointer rounded-2xl border-opacity-30'
            onClick={() => {closeAddCollectionModal(false), closeDropdown('')}}
          >
            <div className='text-base font-bold leading-snug text-white'>
              Cancel
            </div>
          </div>
          <div
            className='flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#5848BC] px-5 py-3'
            onClick={handleCreate}
          >
            <div className='text-base font-bold leading-snug text-white'>
              Create
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CollectionCoverModal;
