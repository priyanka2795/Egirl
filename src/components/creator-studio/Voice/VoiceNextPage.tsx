//@ts-nocheck

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Range } from 'react-range';
import crossIcon from '@/assets/xmark (1).webp';
import circleInformation from '@/assets/circle-information4.webp';
import plusIcon from '@/assets/plus-large.webp';
import searchIcon from '@/assets/search-alt (1).webp';
import threeDots from '@/assets/dots-horizontal.webp';
import volume from '@/assets/volume-max.webp';
import pencil from '@/assets/pencil.webp';
import TextEdit from './TextEdit';
import RangePicker from '../common/RangePicker';
import chevronDown from '@/assets/chevron-down2.webp';
import chevronUp from '@/assets/chevron-up.webp';

const voiceGenerations = [
  {
    voice: 'Melodious voice',
    text: 'hello everyone my name is Mica-chan',
    button1: 'Funny',
    button2: 'Light',
    button3: 'Melodious'
  },
  {
    voice: 'Melodious voice',
    text: 'This is example text that the AI character will read',
    button1: 'Melodious',
    button2: 'Cute voice',
    button3: 'Melodious'
  },
  {
    voice: 'Melodious voice',
    text: 'hello everyone my name is Mica-chan',
    button1: 'Melodious',
    button2: 'Cute voice',
    button3: 'Melodious'
  }
];

const Genders = ['Female', 'Male', 'Other'];
const Ages = ['Young', 'Old', 'Child'];
const Accents = ['American', '  Indian', 'African'];
const VoiceNextPage = () => {
  const [inUse, setInUse] = useState<boolean>(false);
  const [textEdit, setTextEdit] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [showEditedText, setShowEditedText] = useState(false);
  const [editedText, setEditedText] = useState<string>('');
  const [accentState, setAccentState] = useState<number[]>([0]);
  const [voiceStabilityState, setVoiceStabilityState] = useState<number[]>([0]);
  const [voiceClarityState, setVoiceClarityState] = useState<number[]>([0]);
  const [genderDropDown, setGenderDropDown] = useState<boolean>(false);
  const [genderInputText, setGenderInputText] = useState<string>('Female');
  const [ageDropDown, setAgeDropDown] = useState<boolean>(false);
  const [ageInputText, setAgeInputText] = useState<string>('Young');
  const [accentDropDown, setAccentDropDown] = useState<boolean>(false);
  const [accentInputText, setAccentInputText] = useState<string>('American');

  // ................................................

  const genderDropdownRef = useRef(null);
  const ageDropdownRef = useRef(null);
  const accentDropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (
        genderDropdownRef.current &&
        !genderDropdownRef.current.contains(event.target)
      ) {
        setGenderDropDown(false);
      }

      if (
        ageDropdownRef.current &&
        !ageDropdownRef.current.contains(event.target)
      ) {
        setAgeDropDown(false);
      }

      if (
        accentDropdownRef.current &&
        !accentDropdownRef.current.contains(event.target)
      ) {
        setAccentDropDown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [genderDropDown, ageDropDown, accentDropDown]);

  // ................................................

  return (
    <div className='flex flex-col gap-5'>
      <div className='mt-5 flex h-max flex-col rounded-[14px] bg-[#121212]'>
        <div className='flex justify-between border-b border-white/[0.08] p-6'>
          <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
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
                    className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                    type='text'
                  />
                </div>

                <div
                  className='relative flex flex-col gap-[6px]'
                  ref={genderDropdownRef}
                >
                  <h6 className='text-[13px] text-[#979797]'>Gender</h6>
                  <div
                    className={`flex cursor-pointer justify-between rounded-[14px] px-4 py-3 ${
                      genderDropDown
                        ? 'border border-[#515151]'
                        : 'border border-transparent bg-white/[0.05]'
                    }`}
                    onClick={() => {
                      setGenderDropDown(!genderDropDown);
                    }}
                  >
                    <div
                      className={`${
                        genderDropDown || genderInputText !== 'Gender'
                          ? 'text-white'
                          : 'text-[#979797]'
                      } font-normal text-[15px] leading-6`}
                    >
                      {genderInputText}
                    </div>
                    <Image
                      src={genderDropDown ? chevronUp : chevronDown}
                      alt={''}
                    />
                  </div>
                  {genderDropDown && (
                    <div className='absolute top-[80px] z-50 flex w-full flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-1'>
                      {Genders.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`font-normal mx-2 my-1 cursor-pointer rounded-[8px] bg-[#1A1A1A] px-2 py-[6px] text-[14px] leading-[18px] text-white hover:bg-white/[0.05] ${
                              genderInputText === item
                                ? 'bg-white/[0.05]'
                                : 'bg-transparent'
                            }`}
                            onClick={() => {
                              setGenderInputText(item),
                                setGenderDropDown(false);
                            }}
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div
                  className='relative flex flex-col gap-[6px]'
                  ref={ageDropdownRef}
                >
                  <h6 className='text-[13px] text-[#979797]'>Age</h6>
                  <div
                    className={`flex cursor-pointer justify-between rounded-[14px] px-4 py-3 ${
                      ageDropDown
                        ? 'border border-[#515151]'
                        : 'border border-transparent bg-white/[0.05]'
                    }`}
                    onClick={() => {
                      setAgeDropDown(!ageDropDown);
                    }}
                  >
                    <div
                      className={`${
                        ageDropDown || ageInputText !== 'Age'
                          ? 'text-white'
                          : 'text-[#979797]'
                      } font-normal text-[15px] leading-6`}
                    >
                      {ageInputText}
                    </div>
                    <Image
                      src={ageDropDown ? chevronUp : chevronDown}
                      alt={''}
                    />
                  </div>
                  {ageDropDown && (
                    <div className=' absolute top-[80px] z-50 flex w-full flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-1'>
                      {Ages.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`font-normal mx-2 my-1 cursor-pointer bg-[#1A1A1A] px-2 py-[6px] text-[14px] leading-[18px] text-white rounded-[8px] hover:bg-white/[0.05] ${
                              ageInputText === item
                                ? 'bg-white/[0.05]'
                                : 'bg-transparent'
                            } `}
                            onClick={() => {
                              setAgeInputText(item), setAgeDropDown(false);
                            }}
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div
                  className='relative flex flex-col gap-[6px]'
                  ref={accentDropdownRef}
                >
                  <h6 className='text-[13px] text-[#979797]'>Accent</h6>
                  <div
                    className={`flex cursor-pointer justify-between rounded-[14px] px-4 py-3 ${
                      accentDropDown
                        ? 'border border-[#515151]'
                        : 'border border-transparent bg-white/[0.05]'
                    }`}
                    onClick={() => {
                      setAccentDropDown(!accentDropDown);
                    }}
                  >
                    <div
                      className={`${
                        accentDropDown || accentInputText !== 'Accent'
                          ? 'text-white'
                          : 'text-[#979797]'
                      } font-normal text-[15px] leading-6`}
                    >
                      {accentInputText}
                    </div>
                    <Image
                      src={accentDropDown ? chevronUp : chevronDown}
                      alt={''}
                    />
                  </div>
                  {accentDropDown && (
                    <div className='absolute top-[80px] z-50 flex w-full flex-col rounded-[14px] bg-[#1A1A1A] px-0 py-1'>
                      {Accents.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`font-normal mx-2 my-1 cursor-pointer bg-[#1A1A1A] px-2 py-[6px] text-[14px] leading-[18px] text-white rounded-[8px] hover:bg-white/[0.05] ${
                              accentInputText === item
                                ? 'bg-white/[0.05]'
                                : 'bg-transparent'
                            } `}
                            onClick={() => {
                              setAccentInputText(item),
                                setAccentDropDown(false);
                            }}
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    Tags (maximum 3)
                  </div>
                  <input
                    placeholder='Ex. Serious voice'
                    className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
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
                  className='font-normal h-[105px] w-full resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                />
              </div>
            </div>

            <div className='flex flex-col w-1/2 gap-4'>
              <div className='flex justify-between'>
                <div className='text-[15px] font-semibold leading-5 text-[#FFFFFF]'>
                  Voice settings
                </div>
                <div className='font-bold items-center justify-center rounded-[10px] bg-white/[0.08] px-3 py-[7px] text-[12px] leading-[18px] text-[#FFFFFF] cursor-pointer'>
                  Default
                </div>
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
                    <RangePicker
                      values={accentState}
                      setValues={setAccentState}
                    />
                    <div className='flex justify-between mt-3'>
                      <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                        Low
                      </div>
                      <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
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
                    <RangePicker
                      values={voiceStabilityState}
                      setValues={setVoiceStabilityState}
                    />
                    <div className='flex justify-between mt-3'>
                      <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                        Low
                      </div>
                      <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
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
                    <RangePicker
                      values={voiceClarityState}
                      setValues={setVoiceClarityState}
                    />
                    <div className='flex justify-between mt-3'>
                      <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                        Low
                      </div>
                      <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
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
          <button className='font-bold cursor-pointer items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'>
            Cancel
          </button>
          <button className='font-bold cursor-pointer items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'>
            Generate
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='flex max-h-[892px] flex-col gap-4 rounded-[14px] bg-[#121212] p-6'>
          <div className='flex justify-between'>
            <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
              All voice generations
            </div>
            <div className='w-5 h-5'>
              <Image className='w-full h-full' src={searchIcon} alt={''} />
            </div>
          </div>

          {voiceGenerations.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-4 rounded-[14px] bg-[#1A1A1A] p-5'
              >
                <div className='flex flex-col gap-[2px]'>
                  <div className='flex justify-between'>
                    <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
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
                        className={`font-bold flex items-center justify-center rounded-[12px] px-4 py-[10px] text-[14px] leading-5 text-[#FFFFFF] ${
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
                    {textEdit && activeIndex === index ? (
                      <TextEdit
                        voiceGenerations={voiceGenerations}
                        activeIndex={activeIndex}
                        editedText={editedText}
                        setEditedText={setEditedText}
                        setTextEdit={setTextEdit}
                      />
                    ) : (
                      <>
                        <div className='font-normal text-[14px] leading-[18px] text-[#979797]'>
                          {item.text}
                        </div>
                        <div
                          className='h-[18px] w-[18px]'
                          onClick={() => {
                            setTextEdit(true), setActiveIndex(index);
                          }}
                        >
                          <Image
                            className='w-full h-full'
                            src={pencil}
                            alt={''}
                          />
                        </div>
                      </>
                    )}
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
