import React ,{useState} from 'react';
import Isymbol from './svg/Isymbol';
import Roleplay from './svg/Roleplay';
import ConversationalIcon from './svg/ConversationalIcon';
import InfoIcon from '../../../public/assets/svgImages/info-icon.svg';
import { Range } from 'react-range';
import RangePicker from './common/RangePicker';

const PersonalityS1 = () => {
  const [values, setValues] = useState([0]);

  return (
    <div className='flex items-start w-full gap-4 '>
      <div className='flex w-1/2 flex-col items-start gap-4 rounded-[14px] bg-[#121212] p-[24px] self-stretch'>
        <div className='flex items-center gap-1.5 self-stretch'>
          <h6 className='text-lg font-bold leading-6'>Base type</h6>
          <div className='w-4 h-4'>
            <Isymbol />
          </div>
        </div>
        <div className='flex items-center self-stretch gap-2'>
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
        </div>
      </div>

      <div className='flex w-1/2 flex-col items-start gap-4 rounded-[14px] bg-[#121212] p-[24px] pb-4 self-stretch'>
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
        <div className="pt-[11px] flex items-center gap-5">
           <RangePicker values={values} setValues={setValues}/>
           <div className="py-[8px] bg-white/[0.05] rounded-[10px] w-[50px] flex justify-center items-center">{values}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityS1;
