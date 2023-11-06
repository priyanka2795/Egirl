import RangePicker from '@components/creator-studio/common/RangePicker';
import React, { SetStateAction, useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import PlusIcon from '../../../public/assets/svgImages/plus-large-icon.svg';
import MinusIcon from '../../../public/assets/svgImages/minus-icon.svg';
import RotateLeftIcon from '../../../public/assets/image-rotate-left.png';
import RotateRightIcon from '../../../public/assets/image-rotate-right.png';
import TooltipArrow from '../../../public/assets/svgImages/tooltiparrow.svg';
import ImageUploaded from '../../../public/assets/uploadimage.png';
import { Header } from './SmallCompoents/Header';
import { Tooltip } from './SmallCompoents/Tooltip';
import { Button } from './SmallCompoents/Button';
import Image from 'next/image';

interface profileInterface{
  setUpdateProfileImg:React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileCropper = ({setUpdateProfileImg}:profileInterface) => {

  // const [src, setSrc] = useState('https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg');
  const [src, setSrc] = useState('../../../public/assets/uploadimage.png');
  const [values, setValues] = useState<number[]>([1]);
  const [rotate , setRotate] = useState<number>(0);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const cropRef = useRef<AvatarEditor | null>(null);

  if (values < [1.0]) {
    setValues([1.0]);
  }

  const handleSave = () => {
    if (cropRef.current) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      setCroppedImage(dataUrl);
    }
  };


  return (
    <>
      <div className='relative flex w-full flex-col items-start rounded-[20px] bg-backgroundsdark-100 shadow-4-0dp'>
        <Header
          className='!w-full !flex-[0_0_auto] !self-stretch !bg-transparent ![border-left-style:none] ![border-right-style:none] ![border-top-style:none]'
          text='Upload new photo'
          leftIcon={true}
        />
        <div className='relative flex w-full flex-[0_0_auto] flex-col items-center gap-[24px] self-stretch p-[24px]'>
          <p className='relative mt-[-1.00px] self-stretch font-body-text-b2-regular text-[length:var(--body-text-b2-regular-font-size)] font-[number:var(--body-text-b2-regular-font-weight)] leading-[var(--body-text-b2-regular-line-height)] tracking-[var(--body-text-b2-regular-letter-spacing)] text-text-icon-colorslight-grey [font-style:var(--body-text-b2-regular-font-style)]'>
            The selected area will be displayed on your page.
            <br />
            If the image is oriented incorrectly, the photo can be rotated.
          </p>
          <div className='relative h-[240px] w-full self-stretch bg-backgroundsdark-200'>
            <div className={`rotate-[${rotate}deg] absolute left-[0px] top-0 flex w-full flex-col items-center justify-center bg-cover bg-[50%_50%]`}>
              <AvatarEditor
                image={'https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg'}
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
            <div className='absolute left-[354px] top-[192px] inline-flex items-start gap-[4px] rounded-[8px] bg-black-alfa48 px-[12px] py-[10px]'>
              <div onClick={() => {setRotate(rotate - 90)}} className="group relative h-[20px] cursor-pointer">
              <Image
                className="absolute left-[11px] top-[23px] h-[20px] w-[19px]"              
                alt='Hand pointing'
                src={RotateLeftIcon}
              />
              
              <Tooltip
          assets={TooltipArrow}
          className="group-hover:flex hidden !absolute !right-[-25px] !top-[-45px]"
          direction="top"
          text="90° left turn"
        />
              </div>
            
            <div className="group cursor-pointer h-[20px]" onClick={() => {setRotate(rotate + 90)}}>
            <Image
                className='absolute left-[11px] top-[23px] h-[20px] w-[19px]'
                alt=''
                src={RotateRightIcon}
              />
            
              <Tooltip
          assets={TooltipArrow}
          className="group-hover:flex hidden !absolute !right-[-15px] !top-[-40px]"
          direction="top"
          text="90° right turn"
        />
             
            </div>
            </div>
            <div className="cursor-pointer" onClick={() => setValues([1.0]) }>
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
          <div className='relative flex w-[436px] flex-[0_0_auto] flex-col items-start'>
            <div className='relative mb-[10px] mt-[-1.00px] self-stretch font-overline-overline-2-medium text-[length:var(--overline-overline-2-medium-font-size)] font-[number:var(--overline-overline-2-medium-font-weight)] leading-[var(--overline-overline-2-medium-line-height)] tracking-[var(--overline-overline-2-medium-letter-spacing)] text-text-icon-colorslight-grey [font-style:var(--overline-overline-2-medium-font-style)]'>
              ZOOM
            </div>

            <div className='relative flex w-full max-h-[24px] flex-[0_0_auto] items-center gap-[16px] self-stretch'>
              <MinusIcon className='cursor-pointer relative w-[24px]'/>

              <div className='w-full max-w-[356px]'>
                <RangePicker values={values} setValues={setValues} />
              </div>
              {/* <div className='flex w-[50px] items-center justify-center rounded-[10px] bg-white/[0.05] py-[8px] text-white'>
        {values}
      </div> */}
              <PlusIcon className='cursor-pointer relative w-[24px] text-[#979797]'/>
            </div>
          </div>

          {/* {croppedImage && (
  <img
    src={croppedImage}
    alt="Cropped Thumbnail"
    style={{ width: '100%', height: 'auto' }}
  />
)} */}

          <div className='relative flex w-full flex-[0_0_auto] items-start gap-[12px] self-stretch'>
           <div className='flex flex-1 grow' onClick={() => setUpdateProfileImg(false)}>
           <Button
              class1='outlined'
              className='flex flex-1 cursor-pointer grow' 
              size='medium'
              state='default'
              text1='Cancel'
              type='secondary'
            />
           </div>
            <div className='flex flex-1 grow' onClick={() => {
              // setUpdateProfileImg(false),
              handleSave()}}>
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
