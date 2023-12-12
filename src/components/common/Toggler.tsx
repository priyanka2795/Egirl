import React from 'react';
import InfoIcon from '@/assets/svgImages/info-icon.svg';
interface Props {
  handleToggleState: () => void;
  toggleState: boolean;
  toggleText: string;
  infoIcon?:string;
  toggleClasses?:string;
  subHeading?: boolean;
  component?: string;
}
const Toggle = ({ handleToggleState, toggleState, toggleText, infoIcon,toggleClasses, subHeading, component }: Props) => {
  return (
    <div className={`flex ${component === 'ImageSetting' ? 'gap-0' : 'gap-[10px]'}`}>
      <div
        onClick={handleToggleState}
        className={`toggler h-6 w-10 cursor-pointer rounded-2xl pt-0.5 shadow ${toggleClasses} ${
          toggleState===true ? '!bg-[#5848BC]' : toggleClasses ? toggleClasses: 'bg-[#8d8d8d]'
        }`}
      >
        <div
          className={`h-5 w-5 rounded-full bg-white transition ${
            toggleState ? 'ml-[18px] ' : 'ml-[2px]'
          }`}
        />
      </div>
      <div className="flex flex-col">
      <h4 className='text-[14px] font-normal leading-[18px] text-white translate-y-1'>{toggleText}</h4>
      {
        subHeading &&
      <h6 className="text-[12px] font-normal leading-4 text-[#515151] ">Text</h6>
      }
      </div>
      {infoIcon !== "hidden" &&
        <div className='w-4 h-4 translate-y-[5px] cursor-pointer'>
          <InfoIcon />
        </div>
      }
    </div>
  );
};

export default Toggle;
