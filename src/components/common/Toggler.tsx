import React from 'react';
import InfoIcon from '../../../public/assets/svgImages/info-icon.svg';
interface Props {
  handleToggleState: () => void;
  toggleState: boolean;
  toggleText: string;
  infoIcon?:string;
  toggleClasses?:string;
  subHeading?: boolean
}
const Toggle = ({ handleToggleState, toggleState, toggleText, infoIcon,toggleClasses, subHeading }: Props) => {
  return (
    <div className='flex items-center gap-2'>
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
      <h4 className='text-sm text-white'>{toggleText}</h4>
      {
        subHeading &&
      <h6 className="text-xs text-[#515151] ">Text</h6>
      }
      </div>
      {infoIcon !== "hidden" &&
      <InfoIcon />
      }
    </div>
  );
};

export default Toggle;
