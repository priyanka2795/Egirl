import { Button } from '@components/common/SmallCompoents/Button'
import Image from 'next/image'
import React ,{useState ,useRef} from 'react'
import AvatarEditor from 'react-avatar-editor'
import PlusIcon from '../../../public/assets/svgImages/plus-large-icon.svg';
import MinusIcon from '../../../public/assets/svgImages/minus-icon.svg';
import RangePicker from '@components/creator-studio/common/RangePicker'
import { Header } from '@components/common/SmallCompoents/Header';
import uploadImage from '../../../public/assets/uploadimage.png'

interface editThumbnailProp{
    setUpdateProfileThumbnail:  React.Dispatch<React.SetStateAction<boolean>>
}
const EditProfileThumbnail = ({setUpdateProfileThumbnail}:editThumbnailProp) => {
  const [values, setValues] = useState<number[]>([1]);
  const [src, setSrc] = useState(`${uploadImage}`);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const cropRef = useRef<AvatarEditor | null>(null);
  
    const handleSave = () => {
      if (cropRef.current) {
        const dataUrl = cropRef.current.getImage().toDataURL();
        setCroppedImage(dataUrl);
      }
    };
    
  return (
    <div className='relative flex w-full flex-col items-start rounded-[20px] bg-backgroundsdark-100 shadow-4-0dp'>
        <Header
          className='!w-full !flex-[0_0_auto] !self-stretch !bg-transparent ![border-left-style:none] ![border-right-style:none] ![border-top-style:none]'
          text='Edit thumbnail'
          leftIcon={true}
        />
        <div className='relative flex w-full flex-[0_0_auto] flex-col items-center gap-[24px] self-stretch p-[24px]'>
          <p className='relative mt-[-1.00px] self-stretch font-body-text-b2-regular text-[length:var(--body-text-b2-regular-font-size)] font-[number:var(--body-text-b2-regular-font-weight)] leading-[var(--body-text-b2-regular-line-height)] tracking-[var(--body-text-b2-regular-letter-spacing)] text-text-icon-colorslight-grey [font-style:var(--body-text-b2-regular-font-style)]'>
            Select an area for small photos.
            <br />
            The selected thumbnail will be used in profile and feed.
          </p>
          <div className='relative h-[240px] w-[243px] self-stretch bg-backgroundsdark-200'>
            <div className={`absolute left-[0px] top-0 flex w-full flex-col items-center justify-center bg-cover bg-[50%_50%]`}>
              <AvatarEditor   
                // image='https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg'
                // width={242}
                // height={240}
                // border={0}
                // borderRadius={150}
                // color={[0, 0, 0, 0.8]} // RGBA
                // scale={values}
                // rotate={0}

                image={src} // Use the source image you want to crop
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
        
            </div>
            {/* {croppedImage && (
  <img
    src={croppedImage}
    alt="Cropped Thumbnail"
    style={{ width: '100%', height: 'auto' }}
  />
)} */}

           
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
          <div className='relative flex w-full flex-[0_0_auto] items-start gap-[12px] self-stretch'>
           <div className='flex flex-1 grow' onClick={() => setUpdateProfileThumbnail(false)}>
           <Button
              class1='outlined'
              className='flex flex-1 cursor-pointer grow' 
              size='medium'
              state='default'
              text1='Cancel'
              type='secondary'
            />
           </div>
            <div className='flex flex-1 grow' onClick={() => {setUpdateProfileThumbnail(false) , handleSave()}}>
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
  )
}

export default EditProfileThumbnail
