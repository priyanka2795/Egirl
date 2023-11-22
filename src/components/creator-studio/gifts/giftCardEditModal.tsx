import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumFirst from '../../../../public/assets/gallery-tab-img.png';
import ImageSquareGray from '../svg/image-square-gray.svg';
import plusIcon from '../../../../public/assets/plus-large.png';
import MoveImgFirst from '../svg/Image-block.png';
import MoveImg from '../svg/Image-block2.png';
import ImageSquare from '../svg/image-square.png';
import GiftCardDelete from './giftCardDelete';
import { updateGifts } from 'services/services';
// dots-horizontal-white
interface CardEditModal {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  GiftEditModal: number | undefined;
  DeleteGift: any;
  DeleteIndex: number | undefined;
  DeleteBtnStep: number;
  giftImageSet: string;
  giftName?: string;
  selectedGiftData: any;
  characterId: string;
  token: string;
  updateGift: boolean;
  setUpdateGift: React.Dispatch<React.SetStateAction<boolean>>;
}
const moveData = [
  {
    name: 'Date',
    imgpath: MoveImgFirst,
    gifts: '0/9gifts'
  },
  {
    name: 'Summer',
    imgpath: MoveImg,
    gifts: '2/9 gifts'
  },
  {
    name: 'Tokyo',
    imgpath: ImageSquare,
    gifts: '9/9gifts'
  }
];
function GiftCardEditModal({
  closeModal,
  GiftEditModal,
  DeleteGift,
  DeleteIndex,
  DeleteBtnStep,
  giftImageSet,
  giftName,
  selectedGiftData,
  characterId,
  token,
  setUpdateGift,
  updateGift
}: CardEditModal) {
  const [EditName, setEditName] = useState<any>(selectedGiftData?.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditName(value);
  };

  const handleSave = () => {
    const updatedDataFormat = {
      character_id: characterId,
      gift_id: selectedGiftData?.gift_id,
      name: EditName,
      price: 'UNCHANGED',
      media_id: 'UNCHANGED',
      gift_category_id: 'UNCHANGED'
    };
    updateGifts(updatedDataFormat, token)
      .then((res: any) => {
        setUpdateGift(!updateGift);
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
    closeModal(false);
  };

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col h-fit rounded-[14px] bg-[#1A1A1A]'
        closeModal={() => closeModal(false)}
        modalOverlayStyle='!bg-black/80'
      >
        {GiftEditModal === 1 ? (
          <div className='w-[385px] '>
            <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
              <h5 className='text-lg font-semibold'>Edit name</h5>
              <div
                className='h-6 w-6 cursor-pointer'
                onClick={() => closeModal(false)}
              >
                <Image className='h-full w-full' src={crossIcon} alt={''} />
              </div>
            </div>
            <div className='p-6'>
              <div className='m-auto mb-5 max-h-[156px] max-w-[156px] overflow-hidden rounded-xl'>
                <Image
                  className='h-full w-full object-cover'
                  src={giftImageSet}
                />
              </div>
              <div className=' flex flex-col text-[#979797]'>
                <label htmlFor='name' className='pb-1 text-[13px]'>
                  Gift Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Romantic dinner'
                  className='h-12 rounded-[14px] border-none bg-[#FFFFFF0D] px-4 focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
                  value={EditName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='mt-6 grid grid-cols-2 gap-3 font-semibold text-white'>
                <button
                  className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </button>
                <button
                  className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        ) : GiftEditModal === 2 ? (
          <div className='w-[385px] '>
            <div className='flex items-center justify-between border-b border-[#FFFFFF14] p-6'>
              <h5 className='text-lg font-semibold'>Romantic dinner</h5>
              <div
                className='h-6 w-6 cursor-pointer'
                onClick={() => closeModal(false)}
              >
                <Image className='h-full w-full' src={crossIcon} alt={''} />
              </div>
            </div>
            <div className='p-6'>
              <div className='m-auto mb-5 max-h-[156px] max-w-[156px] overflow-hidden rounded-xl'>
                <Image
                  className='h-full w-full object-cover'
                  src={giftImageSet}
                />
              </div>
              <div className='flex flex-col gap-3 pb-4 '>
                <p className='text-[13px] font-semibold text-[#979797]'>
                  Move to
                </p>
                {moveData.map((items) => (
                  <div
                    className={`rounded-[14px] border border-[#FFFFFF29] px-4 py-3`}
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#FFFFFF0D]'>
                          <Image
                            src={items.imgpath}
                            className='m-auto h-full w-full'
                          />
                        </div>
                        <div className=''>
                          <p className='font-semibold'>{items.name}</p>
                          <p className='text-xs text-[#979797]'>
                            {items.gifts}
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                ))}
              </div>
              <button className='flex items-center gap-2 pb-3 font-semibold'>
                <Image className='h-full w-full' src={plusIcon} alt={''} />
                <p>New Category</p>
              </button>

              <div className='mt-6 grid grid-cols-2 gap-3 font-semibold text-white'>
                <button
                  className='rounded-[14px] border border-[#FFFFFF52] px-5 py-3'
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </button>
                <button
                  className='rounded-[14px] bg-[#5848BC] px-5 py-3'
                  onClick={() => closeModal(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </Modal>
      {GiftEditModal === 3 ? (
        <GiftCardDelete
          DeleteModal={closeModal}
          Heading={'Delete gift'}
          Content={'Are you sure you want to delete the'}
          GiftName={giftName}
          DeleteGiftImage={giftImageSet}
          Img={false}
          DeleteGift={DeleteGift}
          DeleteIndex={DeleteIndex}
          DeleteBtnStep={DeleteBtnStep}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default GiftCardEditModal;
