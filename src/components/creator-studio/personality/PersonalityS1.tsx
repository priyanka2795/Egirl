import React, { useState } from 'react';
import Isymbol from '../svg/Isymbol';
import Roleplay from '../svg/Roleplay';
import ConversationalIcon from '../svg/ConversationalIcon';
import InfoIcon from '../../../../public/assets/svgImages/info-icon.svg';
import { Range } from 'react-range';
import RangePicker from '../common/RangePicker';
import UnSelectIcon from '../svg/short_border.svg';
import SelectIcon from '../svg/short_select.svg';

const PersonalityS1 = () => {
  const [values, setValues] = useState([0]);
  const short = ['Roleplay', 'Conversational'];

  const [shortTab, setShortTab] = useState(1);

  const SelectShort = (index: number) => {
    setShortTab(index);
  };

  return (
    <div className='flex w-full items-start gap-4 '>
      <div className='flex w-1/2 flex-col items-start gap-4 self-stretch rounded-[14px] bg-[#121212] p-[24px]'>
        <div className='flex items-center gap-1.5 self-stretch'>
          <h6 className='text-lg font-bold leading-6'>Base type</h6>
          <div className='h-4 w-4'>
            <Isymbol />
          </div>
        </div>
        {/* <div className='flex items-center self-stretch gap-2'>
          <div className='w-5 h-5'>
            <Roleplay />
          </div>
          <b className='text-sm font-normal leading-[18px] text-[#FFFFFF]'>
            Roleplay
          </b>
        </div>
        <div className='flex items-center self-stretch gap-2'>
          <div className='w-5 h-5 stroke-1'>
            <ConversationalIcon />
          </div>
          <b className='text-sm font-normal leading-[18px] text-[#FFFFFF]'>
            Conversational
          </b>
        </div> */}

        <div className='flex items-center gap-2 self-stretch'>
          <div className='flex flex-col gap-1'>
            {short.map((item, index) => (
              <div
                key={index}
                className='flex cursor-pointer items-center gap-2'
                onClick={() => SelectShort(index)}
              >
                {shortTab == index ? <SelectIcon /> : <UnSelectIcon />}
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex w-1/2 flex-col items-start gap-4 self-stretch rounded-[14px] bg-[#121212] p-[24px] pb-4'>
        <div className='w-full gap-10 pl-6 pt-4'>
          <div className='flex flex-col gap-2'>
            <b className='flex items-center gap-2 text-lg leading-[100%]'>
              Creativity <InfoIcon />
            </b>
            <span className='text-[15px] text-[#979797]'>
              Use the slider to adjust creativity
            </span>
          </div>

          <div>
            <div className='flex items-center gap-5 pt-[11px]'>
              <RangePicker values={values} setValues={setValues} />

              <div className='flex w-[50px] items-center justify-center rounded-[10px] bg-white/[0.05] py-[8px]'>
                {values}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityS1;
