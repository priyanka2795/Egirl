import Image from 'next/image';
import React, { useState } from 'react';
import { Range } from 'react-range';
import crossIcon from '../../../../public/assets/xmark (1).png';
import circleInformation from '../../../../public/assets/circle-information4.png';
import plusIcon from '../../../../public/assets/plus-large.png';
import searchIcon from '../../../../public/assets/search-alt (1).png';
import threeDots from '../../../../public/assets/dots-horizontal (2).png';
import volume from '../../../../public/assets/volume-max.png';
import pencil from '../../../../public/assets/pencil.png';
import TextEdit from './TextEdit';
import RangePicker from '../common/RangePicker';

const voiceGenerations = [
  {
    voice: 'Melodious voice',
    // use: 'Use',
    text: 'hello everyone my name is Mica-chan',
    button1: 'Funny',
    button2: 'Light',
    button3: 'Melodious'
  },
  {
    voice: 'Melodious voice',
    // use: 'Use',
    text: 'This is example text that the AI character will read',
    button1: 'Melodious',
    button2: 'Cute voice',
    button3: 'Melodious'
  },
  {
    voice: 'Melodious voice',
    // use: 'Use',
    text: 'hello everyone my name is Mica-chan',
    button1: 'Melodious',
    button2: 'Cute voice',
    button3: 'Melodious'
  }
];

const VoiceNextPage = () => {
  const [state1, setState1] = useState([50]);
  const [state2, setState2] = useState([50]);
  const [state3, setState3] = useState([50]);
  const [inUse, setInUse] = useState(false);
  const [textEdit, setTextEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [showEditedText, setShowEditedText] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [accentState ,setAccentState] = useState([0])
  const [voiceStabilityState ,setVoiceStabilityState] = useState([0])
  const [voiceClarityState ,setVoiceClarityState] = useState([0])

  const handleEditIcon = (index: any) => {
    
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='mt-5 flex h-max flex-col rounded-[14px] bg-[#121212]'>
        <div className='flex justify-between border-b border-white/[0.08] p-6'>
          <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
            Voice generator
          </div>
          <div className='w-6 h-6 cursor-pointer'>
            <Image className='w-full h-full' src={crossIcon} alt={''} />
          </div>
        </div>

        <form>
          <div className='flex gap-6 p-6'>
            <div className='flex flex-col w-1/2 gap-4'>
              <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                General settings
              </div>

              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-[6px]'>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    Voice name
                  </div>
                  <input
                    placeholder='Ex. Serious voice'
                    className='w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                    type='text'
                  />
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    htmlFor='gender'
                    className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                  >
                    Gender
                  </label>
                  <select
                    id='gender'
                    name='gender'
                    className='rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0'
                  >
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    htmlFor='age'
                    className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                  >
                    Age
                  </label>
                  <select
                    id='age'
                    name='age'
                    className='rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0'
                  >
                    <option value='Young'>Young</option>
                    <option value='Old'>Old</option>
                    <option value='Child'>Child</option>
                  </select>
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    htmlFor='accent'
                    className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                  >
                    Accent
                  </label>
                  <select
                    id='accent'
                    name='accent'
                    className='rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] focus:ring-0'
                  >
                    <option value='American'>American</option>
                    <option value='Indian'>Indian</option>
                    <option value='African'>African</option>
                  </select>
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    Tags (maximum 3)
                  </div>
                  <input
                    placeholder='Ex. Serious voice'
                    className='w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] font-normal leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                    type='text'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                  Text
                </div>
                <textarea
                  placeholder='Type something'
                  className='h-[105px] w-full rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] font-normal leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0 resize-none'
                />
              </div>
            </div>

            <div className='flex flex-col w-1/2 gap-4'>
              <div className='flex justify-between'>
                <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                  Voice settings
                </div>
                <button className='items-center justify-center rounded-[10px] bg-white/[0.08] px-3 py-[7px] text-[12px] font-bold leading-[18px] text-[#FFFFFF]'>
                  Default
                </button>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-1'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Accent Strength
                    </div>
                    <Image
                      className='h-[14px] w-[14px] object-contain'
                      src={circleInformation}
                      alt={''}
                    />
                  </div>
                  <div className='flex flex-col mt-3'>
                    {/* <Range
                      step={0.1}
                      min={0}
                      max={100}
                      values={state1}
                      onChange={(values) => setState1(values)}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '4px',
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '2px'
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '20px',
                            width: '20px',
                            borderRadius: '100%',
                            backgroundColor: 'white',
                            border: '3px solid #5848BC'
                          }}
                        />
                      )}
                    /> */}
                     <RangePicker values={accentState} setValues={setAccentState}/>
                    <div className='flex justify-between mt-3'>
                      <div className='text-[14px] font-normal leading-[18px] text-[#515151]'>
                        Low
                      </div>
                      <div className='text-[14px] font-normal leading-[18px] text-[#515151]'>
                        High
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <div className='flex gap-1'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Stability
                    </div>
                    <Image
                      className='h-[14px] w-[14px] object-contain'
                      src={circleInformation}
                      alt={''}
                    />
                  </div>
                  <div className='flex flex-col mt-3'>
                    {/* <Range
                      step={0.1}
                      min={0}
                      max={100}
                      values={state2}
                      onChange={(values) => setState2(values)}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '4px',
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '2px'
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '20px',
                            width: '20px',
                            borderRadius: '100%',
                            backgroundColor: 'white',

                            border: '3px solid #5848BC'
                          }}
                        />
                      )}
                    /> */}
                     <RangePicker values={voiceStabilityState} setValues={setVoiceStabilityState}/>
                    <div className='flex justify-between mt-3'>
                      <div className='text-[14px] font-normal leading-[18px] text-[#515151]'>
                        Low
                      </div>
                      <div className='text-[14px] font-normal leading-[18px] text-[#515151]'>
                        High
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <div className='flex gap-1'>
                    <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                      Clarity + Similarity Enhancement
                    </div>
                    <Image
                      className='h-[14px] w-[14px] object-contain'
                      src={circleInformation}
                      alt={''}
                    />
                  </div>
                  <div className='flex flex-col mt-3'>
                    {/* <Range
                      step={0.1}
                      min={0}
                      max={100}
                      values={state3}
                      onChange={(values) => setState3(values)}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '4px',
                            width: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '2px'
                          }}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '20px',
                            width: '20px',
                            borderRadius: '100%',
                            backgroundColor: 'white',

                            border: '3px solid #5848BC'
                          }}
                        />
                      )}
                    /> */}
                     <RangePicker values={voiceClarityState} setValues={setVoiceClarityState}/>
                    <div className='flex justify-between mt-3'>
                      <div className='text-[14px] font-normal leading-[18px] text-[#515151]'>
                        Low
                      </div>
                      <div className='text-[14px] font-normal leading-[18px] text-[#515151]'>
                        High
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className='flex items-end justify-end gap-3 p-6'>
          <button className='cursor-pointer items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]'>
            Cancel
          </button>
          <button className='cursor-pointer items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]'>
            Generate
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='flex max-h-[892px] flex-col gap-4 rounded-[14px] bg-[#121212] p-6'>
          <div className='flex justify-between'>
            <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
              All voice generations
            </div>
            <div className='w-5 h-5'>
              <Image className='w-full h-full' src={searchIcon} alt={''} />
            </div>
          </div>

          {voiceGenerations.map((item, index) => {
            return (
              <div key={index} className='flex flex-col gap-4 rounded-[14px] bg-[#1A1A1A] p-5'>
                <div className='flex flex-col gap-[2px]'>
                  <div className='flex justify-between'>
                    <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
                      {item.voice}
                    </div>
                    <div className='flex gap-4'>
                      <div className='mt-[10px] h-5 w-5'>
                        <Image
                          className='w-full h-full'
                          src={threeDots}
                          alt={''}
                        />
                      </div>
                      <button
                        className={`flex items-center justify-center rounded-[12px] px-4 py-[10px] text-[14px] font-bold leading-5 text-[#FFFFFF] ${
                          inUse === true && currentIndex === index
                            ? 'border border-[0.32]'
                            : 'border border-transparent bg-white/[0.08]'
                        }`}
                        onClick={() => {
                          setInUse(true), setCurrentIndex(index);
                        }}
                      >
                        {inUse === true && currentIndex === index
                          ? 'In use'
                          : 'Use'}
                      </button>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-5 h-5'>
                      <Image className='w-full h-full' src={volume} alt={''} />
                    </div>
                    {textEdit && activeIndex === index ? <TextEdit voiceGenerations={voiceGenerations} activeIndex={activeIndex} editedText={editedText} setEditedText={setEditedText} setTextEdit={setTextEdit}/> :  
                    <> 
                      <div className='text-[14px] font-normal leading-[18px] text-[#979797]'>
                        {item.text}
                      </div>
                      <div className='w-[18px] h-[18px]' onClick={() => {setTextEdit(true), setActiveIndex(index)}}>
                        <Image className='w-full h-full' src={pencil} alt={''} />
                      </div>
                    </>
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
   
    </div>
  );
};

export default VoiceNextPage;