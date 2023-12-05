//@ts-nocheck

import { Button } from '@components/common/SmallCompoents/Button';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import PlusIcon from '@/assets/svgImages/plus-large-icon.svg';
import MinusIcon from '@/assets/svgImages/minus-icon.svg';
import RangePicker from '@components/creator-studio/common/RangePicker';
import { Header } from '@components/common/SmallCompoents/Header';
import uploadImage from '@/assets/uploadimage.webp';
import ArrowLeft from '@/assets/svgImages/arrow-left.svg';
import Xmark from '@/assets/svgImages/xmark.svg';

interface editThumbnailProp {
  setUpdateProfileThumbnail: React.Dispatch<React.SetStateAction<boolean>>;
  croppedImage: any;
  setCroppedImage: any;
}
const EditProfileThumbnail = ({
  setUpdateProfileThumbnail,
  croppedImage,
  setCroppedImage
}: editThumbnailProp) => {
  const [values, setValues] = useState<number[]>([1]);
  const [src, setSrc] = useState(`${uploadImage}`);
  const cropRef = useRef<AvatarEditor | null>(null);

  if (values < [1.0]) {
    setValues([1.0]);
  }

  const handleSave = async () => {
    if (cropRef && cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setCroppedImage(URL.createObjectURL(blob));
      setUpdateProfileThumbnail(false);
    }
  };

  return (
    <div className='relative flex w-full flex-col items-start rounded-[20px] bg-backgroundsdark-100 shadow-4-0dp'>
      <div
        className={`flex w-full items-center justify-between border-b border-basic-alfa8 p-6`}
      >
        <div className='flex items-center gap-2'>
          <button onClick={() => setUpdateProfileThumbnail(false)}>
            <ArrowLeft
              className='!relative !h-[24px] !w-[24px]'
              color='#979797'
            />
          </button>
          <div className='text-lg font-[700]'>Edit thumbnail</div>
        </div>

        <button onClick={() => setUpdateProfileThumbnail(false)}>
          <Xmark
            className='!relative !h-[24px] !w-[24px] cursor-pointer'
            color='#979797'
          />
        </button>
      </div>
      <div className='flex w-full flex-col gap-6 p-[24px]'>
        <p className='text-sm text-[#979797]'>
          Select an area for small photos.
          <br />
          The selected thumbnail will be used in profile and feed.
        </p>
        <div className='flex h-[240px] gap-3 self-stretch'>
          <div
            className={`flex w-max flex-col items-center justify-center bg-backgroundsdark-200 bg-cover  bg-[50%_50%]`}
          >
            <AvatarEditor
              image={croppedImage || src}
              width={242}
              height={240}
              border={0}
              borderRadius={150}
              color={[0, 0, 0, 0.8]} // RGBA
              scale={values}
              rotate={0}
              ref={cropRef}
            />
          </div>
          <div className={`h-[120px] w-[120px] overflow-hidden rounded-full`}>
            <AvatarEditor
              image={croppedImage || src}
              width={120}
              height={120}
              border={0}
              borderRadius={150}
              color={[255, 255, 255, 0.6]}
              scale={values}
              rotate={0}
              ref={cropRef}
            />
          </div>
          <div className={`h-[40px] w-[40px] overflow-hidden rounded-full`}>
            <AvatarEditor
              image={croppedImage || src}
              width={40}
              height={40}
              border={0}
              borderRadius={150}
              color={[0, 0, 0, 0.8]} // RGBA
              scale={values}
              rotate={0}
              ref={cropRef}
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
        <div className='flex w-full items-center gap-[12px] self-stretch'>
          <div
            className='flex flex-1 grow'
            onClick={() => setUpdateProfileThumbnail(false)}
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
  );
};

export default EditProfileThumbnail;
