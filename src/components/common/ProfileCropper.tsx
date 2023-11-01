import RangePicker from '@components/creator-studio/common/RangePicker';
import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import PlusIcon from '../../../public/assets/plus-white.png'
import MinusIcon from '../../../public/assets/minus.png'



// import { Button } from "./Button";

// import { ImageRotateLeft } from "./ImageRotateLeft";
// import { ImageRotateRight } from "./ImageRotateRight";
// import { Minus } from "./Minus";
// import { PlusLarge } from "./PlusLarge";
// import { Slider } from "./Slider";
// import { Tooltip } from "./Tooltip";
import { Header } from './SmallCompoents/Header';
import { Tooltip } from './SmallCompoents/Tooltip';
import { Button } from './SmallCompoents/Button';
import Image from 'next/image';

const ProfileCropper = () => {
  const [values, setValues] = useState<number[]>([1]);
  if (values < [1.0]) {
    setValues([1.0]);
  }
  return (
    <>
    <div className="flex flex-col w-[484px] items-start relative bg-backgroundsdark-100 rounded-[20px] shadow-4-0dp">
      <Header
        className="!self-stretch !flex-[0_0_auto] ![border-right-style:none] ![border-top-style:none] ![border-left-style:none] !bg-transparent !w-full"
        text="Upload new photo"
      />
      <div className="flex flex-col items-center gap-[24px] p-[24px] relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-body-text-b2-regular font-[number:var(--body-text-b2-regular-font-weight)] text-text-icon-colorslight-grey text-[length:var(--body-text-b2-regular-font-size)] tracking-[var(--body-text-b2-regular-letter-spacing)] leading-[var(--body-text-b2-regular-line-height)] [font-style:var(--body-text-b2-regular-font-style)]">
          The selected area will be displayed on your page.
          <br />
          If the image is oriented incorrectly, the photo can be rotated.
        </p>
        <div className="relative self-stretch w-full h-[240px] bg-backgroundsdark-200">
          <div className="absolute w-full flex justify-center flex-col items-center top-0 left-[0px] bg-cover bg-[50%_50%]">
          <AvatarEditor
        image='https://img.youtube.com/vi/IUN664s7N-c/maxresdefault.jpg'
        width={242}
        height={240}
        border={0}
        borderRadius={150}
        color={[0, 0, 0, 0.8]} // RGBA
        scale={values}
        rotate={0}
      />
      
            {/* <img className="absolute w-[242px] h-[239px] top-0 left-0" alt="Active" src="active.png" /> */}
          </div>
          <div className="inline-flex items-start gap-[4px] px-[12px] py-[10px] absolute top-[192px] left-[360px] bg-black-alfa48 rounded-[8px]">
            {/* <ImageRotateLeft className="!relative !w-[20px] !h-[20px]" /> */}
            {/* <ImageRotateRight className="!relative !w-[20px] !h-[20px]" /> */}
            <img
              className="absolute w-[19px] h-[20px] top-[23px] left-[11px]"
              alt="Hand pointing"
              src="hand-pointing.svg"
            />
          </div>
          <Button
            class1="soft"
            className="!absolute !left-[366px] !top-[12px]"
            size="x-small"
            state="default"
            text1="Reset"
            type="secondary"
          />
        </div>
        <div className="flex flex-col w-[436px] items-start relative flex-[0_0_auto]">
          <div className="mb-[10px] relative self-stretch mt-[-1.00px] font-overline-overline-2-medium font-[number:var(--overline-overline-2-medium-font-weight)] text-text-icon-colorslight-grey text-[length:var(--overline-overline-2-medium-font-size)] tracking-[var(--overline-overline-2-medium-letter-spacing)] leading-[var(--overline-overline-2-medium-line-height)] [font-style:var(--overline-overline-2-medium-font-style)]">
            ZOOM
          </div>
       
          <div className="flex items-center gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
            {/* <Minus className="!relative !w-[24px] !h-[24px]" color="#979797" /> */}
            {/* <Slider className="!relative !flex-1 !grow !h-[54px] !mb-[-10.00px]" /> */}
            <Image src={MinusIcon} alt='Hello' className="!relative !w-[24px] !h-[24px]"/>
            
            <div className="max-w-[356px] w-full">
          <RangePicker values={values} setValues={setValues} />
          </div>
          {/* <div className='flex w-[50px] items-center justify-center rounded-[10px] bg-white/[0.05] py-[8px] text-white'>
        {values}
      </div> */}
            <Image src={PlusIcon} alt='Hello' className="!relative !w-[24px] !h-[24px]"/>
             {/* <PlusIcon className="!relative !w-[24px] !h-[24px]"/> */}
          </div>
        </div>
        <div className="flex items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
          <Button
            class1="outlined"
            className="!flex-1 !flex !grow"
            size="medium"
            state="default"
            text1="Cancel"
            type="secondary"
          />
          <Button
            class1="solid"
            className="!flex-1 !flex !grow"
            size="medium"
            state="default"
            text1="Save"
            type="primary"
          />
        </div>
        <Tooltip
          assets="image.svg"
          className="!absolute !left-[359px] !top-[242px]"
          direction="top"
          text="90° left turn"
        />
      </div>
    </div>
     
    </>
  );
};

export default ProfileCropper;
