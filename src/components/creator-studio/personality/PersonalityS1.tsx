import React, { useEffect, useState } from 'react';
import Isymbol from '../svg/Isymbol';
import Roleplay from '../svg/Roleplay';
import InfoIcon from '@/assets/svgImages/info-icon.svg';
import RangePicker from '../common/RangePicker';
import UnSelectIcon from '../svg/short_border.svg';
import SelectIcon from '../svg/short_select.svg';

interface PersonalityS1 {
  setPersonalityData: any;
}
const PersonalityS1 = ({
  setPersonalityData
}: PersonalityS1) => {
  const [values, setValues] = useState<number[]>([0]);
  const short = ['Roleplay', 'Conversational'];

  const [shortTab, setShortTab] = useState<string>('');

  useEffect(() => {
    setPersonalityData((prevData: any) => ({
      ...prevData,
      base_type: shortTab,
      creativity: values[0]
    }));
  }, [shortTab, values, setPersonalityData]);

  const SelectShort = (name: string) => {
    setShortTab(name);
  };

  return (
    <div className='flex items-start w-full gap-4 '>
      <div className='flex w-1/2 flex-col items-start gap-4 self-stretch rounded-[14px] bg-[#121212] p-[24px]'>
        <div className='flex items-center gap-1.5 self-stretch'>
          <h6 className='text-lg font-bold leading-6'>Base type</h6>
          <div className='w-4 h-4'>
            <Isymbol />
          </div>
        </div>
        <div className='flex items-center self-stretch gap-2'>
          <div className='flex flex-col gap-1'>
            {short.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-2 cursor-pointer'
                onClick={() => SelectShort(item)}
              >
                {shortTab == item ? <SelectIcon /> : <UnSelectIcon />}
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex w-1/2 flex-col items-start gap-4 self-stretch rounded-[14px] bg-[#121212] p-[24px] pb-4'>
        <div className='w-full gap-10 pt-4 pl-6'>
          <div className='flex flex-col gap-2'>
            <b className='flex items-center gap-2 text-lg leading-[100%]'>
              Creativity <InfoIcon />
            </b>
            <span className='text-[15px] text-[#979797]'>
              Use the slider to adjust creativity
            </span>
          </div>

          <div>
            <div className='flex items-center gap-2 pt-[11px]'>
              <RangePicker values={values} setValues={setValues} />
              <div className='bg-[#FFFFFF0D] w-[40px] h-9 rounded-xl flex justify-center items-center text-sm'>
                {parseInt(values[0].toString())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityS1;
