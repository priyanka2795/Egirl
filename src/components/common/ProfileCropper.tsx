//@ts-nocheck
import RangePicker from '@components/creator-studio/common/RangePicker';
import React, { SetStateAction, useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import PlusIcon from '@/assets/svgImages/plus-large-icon.svg';
import MinusIcon from '@/assets/svgImages/minus-icon.svg';
import RotateLeftIcon from '@/assets/image-rotate-left.webp';
import RotateRightIcon from '@/assets/image-rotate-right.webp';
import TooltipArrow from '@/assets/svgImages/tooltiparrow.svg';
import ImageUploaded from '@/assets/uploadimage.webp';
import { Header } from './SmallCompoents/Header';
import { Tooltip } from './SmallCompoents/Tooltip';
import { Button } from './SmallCompoents/Button';
import Image from 'next/image';
import ArrowLeft from '@/assets/svgImages/arrow-left.svg';
import Xmark from '@/assets/svgImages/xmark.svg';
interface profileInterface {
  setUpdateProfileImg?: React.Dispatch<React.SetStateAction<boolean>>;
  selectProfileImage?: any;
  setCroppedImage?: any;
  setAddImagesModal?: any;
}

const ProfileCropper = ({
  setUpdateProfileImg,
  selectProfileImage,
  setCroppedImage,
  setAddImagesModal
}: profileInterface) => {
  const [src, setSrc] = useState('@/assets/uploadimage.webp');
  const [values, setValues] = useState<number[]>([1]);
  const [rotate, setRotate] = useState<number>(0);
  const cropRef = useRef<AvatarEditor | null>(null);

  if (values < [1.0]) {
    setValues([1.0]);
  }

  const SelectProfileImage = selectProfileImage.map((profileImage: any) => {
    return profileImage.image.src;
  });

  const handleSave = async () => {
    if (cropRef && cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setCroppedImage(URL.createObjectURL(blob));
      setAddImagesModal(false);
      setUpdateProfileImg(false);
    }
  };

  return (
    <>
      <div className='relative flex w-full flex-col items-start rounded-[20px] bg-backgroundsdark-100 shadow-4-0dp'>
        <div
          className={`flex w-full items-center justify-between border-b border-basic-alfa8 p-6`}
        >
          <div className='flex items-center gap-2'>
            <button onClick={() => setUpdateProfileImg(true)}>
              <ArrowLeft
                className='!relative !h-[24px] !w-[24px]'
                color='#979797'
              />
            </button>
            <div className='text-lg font-[700]'>Upload new photo</div>
          </div>

          <button onClick={() => setAddImagesModal(false)}>
            <Xmark
              className='!relative !h-[24px] !w-[24px] cursor-pointer'
              color='#979797'
            />
          </button>
        </div>

        <div className='relative flex w-full flex-[0_0_auto] flex-col items-center gap-[24px] self-stretch p-[24px]'>
          <p className='relative mt-[-1.00px] self-stretch font-body-text-b2-regular text-[length:var(--body-text-b2-regular-font-size)] font-[number:var(--body-text-b2-regular-font-weight)] leading-[var(--body-text-b2-regular-line-height)] tracking-[var(--body-text-b2-regular-letter-spacing)] text-text-icon-colorslight-grey [font-style:var(--body-text-b2-regular-font-style)]'>
            The selected area will be displayed on your page.
            <br />
            If the image is oriented incorrectly, the photo can be rotated.
          </p>
          <div className='relative h-[240px] w-full self-stretch bg-backgroundsdark-200'>
            <div
              className={`rotate-[${rotate}deg] absolute left-[0px] top-0 flex w-full flex-col items-center justify-center bg-cover bg-[50%_50%]`}
            >
              <AvatarEditor
                image={
                  SelectProfileImage[0] ||
                  'https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg'
                }
                width={242}
                height={240}
                border={0}
                borderRadius={150}
                color={[0, 0, 0, 0.8]} // RGBA
                scale={values}
                rotate={rotate}
                ref={cropRef}
              />
            </div>
            <div className='absolute left-[354px] top-[192px] inline-flex items-start gap-[4px] rounded-[8px] bg-black-alfa48 px-[12px] py-[10px]'>
              <div
                onClick={() => {
                  setRotate(rotate - 90);
                }}
                className='group relative h-[20px] cursor-pointer'
              >
                <Image
                  className='absolute left-[11px] top-[23px] h-[20px] w-[19px]'
                  alt='Hand pointing'
                  src={RotateLeftIcon}
                />

                <Tooltip
                  assets={TooltipArrow}
                  className='!absolute !right-[-25px] !top-[-45px] hidden group-hover:flex'
                  direction='top'
                  text='90° left turn'
                />
              </div>

              <div
                className='group h-[20px] cursor-pointer'
                onClick={() => {
                  setRotate(rotate + 90);
                }}
              >
                <Image
                  className='absolute left-[11px] top-[23px] h-[20px] w-[19px]'
                  alt=''
                  src={RotateRightIcon}
                />

                <Tooltip
                  assets={TooltipArrow}
                  className='!absolute !right-[-15px] !top-[-40px] hidden group-hover:flex'
                  direction='top'
                  text='90° right turn'
                />
              </div>
            </div>
            <div className='cursor-pointer' onClick={() => setValues([1.0])}>
              <Button
                class1='soft'
                className='!absolute !left-[366px] !top-[12px]'
                size='x-small'
                state='default'
                text1='Reset'
                type='secondary'
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='text-[11px] text-[#979797]'>ZOOM</div>

            <div className=' flex max-h-[24px] w-full flex-[0_0_auto] items-center gap-[16px] self-stretch'>
              <button
                className=''
                onClick={() =>
                  setValues((prevValues) =>
                    prevValues.map((value) => Math.max(value - 2, 1))
                  )
                }
              >
                <MinusIcon className='w-[24px] cursor-pointer text-[#979797]' />
              </button>

              <div className='w-full max-w-[356px]'>
                <RangePicker values={values} setValues={setValues} />
              </div>
              <button
                onClick={() =>
                  setValues((prevValues) =>
                    prevValues.map((value) => Math.min(value + 1, 100))
                  )
                }
              >
                <PlusIcon className=' w-[24px] cursor-pointer text-[#979797]' />
              </button>
            </div>
          </div>

          <div className='relative flex w-full flex-[0_0_auto] items-start gap-[12px] self-stretch'>
            <div
              className='flex flex-1 grow'
              onClick={() => setUpdateProfileImg(true)}
            >
              <Button
                class1='outlined'
                className='flex flex-1 cursor-pointer grow'
                size='medium'
                state='default'
                text1='Cancel'
                type='secondary'
              />
            </div>
            <div
              className='flex flex-1 grow'
              onClick={() => {
                handleSave();
              }}
            >
              <Button
                class1='solid'
                className='flex flex-1 cursor-pointer grow'
                size='medium'
                state='default'
                text1='Save'
                type='primary'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCropper;
