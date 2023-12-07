import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '@/assets/xmark (1).webp';
import circleInformation from '@/assets/circle-information4.webp';
import { Range } from 'react-range';
import RangePicker from '../common/RangePicker';
import arrowDown from '@/assets/arrow-down.webp';
import arrowUp from '@/assets/arrow-up.webp';

interface VoiceGeneratorModalProp {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const VoiceGeneratorModal = ({ closeModal }: VoiceGeneratorModalProp) => {
  const [state1, setState1] = useState<number[]>([50]);
  const [state2, setState2] = useState<number[]>([50]);
  const [state3, setState3] = useState<number[]>([50]);
  const [accentState, setAccentState] = useState<number[]>([0]);
  const [voiceStabilityState, setVoiceStabilityState] = useState<number[]>([0]);
  const [voiceClarityState, setVoiceClarityState] = useState<number[]>([0]);
  const Genders = ['Male', 'Female', 'Other'];
  const [gender, setGender] = useState<boolean>(false);
  const [selectGender, setSelectGender] = useState('Female');
  const Ages = ['Young', 'Old', 'Child'];
  const [age, setAge] = useState<boolean>(false);
  const [selectAge, setSelectAge] = useState('Young');
  const Accent = ['American', 'Indian', 'African'];
  const [accent, setAccent] = useState<boolean>(false);
  const [selectAccent, setSelectAccent] = useState('American');
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max  w-[1092px] rounded-[14px] bg-[#121212]'
      closeModal={() => closeModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex justify-between border-b border-white/[0.08] p-6'>
        <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
          Voice generator
        </div>
        <div
          className='w-6 h-6 cursor-pointer'
          onClick={() => closeModal(false)}
        >
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
                  className='font-normal w-full rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
                  type='text'
                />
              </div>

              {/* <div className='flex flex-col gap-[6px]'>
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
              </div> */}
              <div
                className='relative flex flex-col cursor-pointer '
                onClick={() => setGender(!gender)}
              >
                <label
                  htmlFor='gender'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Gender
                </label>
                <div
                  className={`mt-2 flex justify-between rounded-xl p-3  ${
                    gender
                      ? 'border border-[#515151] bg-transparent'
                      : 'border border-transparent bg-white/[0.05]'
                  }`}
                >
                  <div className='text-[15px] text-[#FFF]'>{selectGender}</div>
                  <Image
                    src={gender ? arrowUp : arrowDown}
                    alt=''
                    className='object-cover'
                  />
                </div>
                {gender && (
                  <div className='absolute right-0 top-[90px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                    {Genders.map((gender, index) => {
                      return (
                        <div
                          key={index}
                          className={`bg-opacity-10' cursor-pointer rounded-md px-2 py-1 ${
                            selectGender === gender
                              ? 'rounded-md bg-white bg-opacity-10'
                              : ''
                          }`}
                          onClick={() => setSelectGender(gender)}
                        >
                          {gender}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* <div className='flex flex-col gap-[6px]'>
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
              </div> */}
              <div
                className='relative flex flex-col cursor-pointer '
                onClick={() => setAge(!age)}
              >
                <label
                  htmlFor='gender'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Age
                </label>
                <div
                  className={`mt-2 flex justify-between rounded-xl p-3  ${
                    gender
                      ? 'border border-[#515151] bg-transparent'
                      : 'border border-transparent bg-white/[0.05]'
                  }`}
                >
                  <div className='text-[15px] text-[#FFF]'>{selectAge}</div>
                  <Image
                    src={age ? arrowUp : arrowDown}
                    alt=''
                    className='object-cover'
                  />
                </div>
                {age && (
                  <div className='absolute right-0 top-[90px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                    {Ages.map((age, index) => {
                      return (
                        <div
                          key={index}
                          className={`bg-opacity-10' cursor-pointer rounded-md px-2 py-1 ${
                            selectAge === age
                              ? 'rounded-md bg-white bg-opacity-10'
                              : ''
                          }`}
                          onClick={() => setSelectAge(age)}
                        >
                          {age}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* <div className='flex flex-col gap-[6px]'>
                <label
                  htmlFor='accent'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Accent
                </label>
                <select
                  id='accent'
                  name='accent'
                  className='font-normal rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-[#979797] focus:ring-0'
                >
                  <option value='American'>American</option>
                  <option value='Indian'>Indian</option>
                  <option value='African'>African</option>
                </select>
              </div> */}
                <div
                className='relative flex flex-col cursor-pointer '
                onClick={() => setAccent(!accent)}
              >
                <label
                  htmlFor='gender'
                  className='text-[13px] font-semibold leading-[18px] text-[#979797]'
                >
                  Accent
                </label>
                <div
                  className={`mt-2 flex justify-between rounded-xl p-3  ${
                    accent
                      ? 'border border-[#515151] bg-transparent'
                      : 'border border-transparent bg-white/[0.05]'
                  }`}
                >
                  <div className='text-[15px] text-[#FFF]'>{selectAccent}</div>
                  <Image
                    src={accent ? arrowUp : arrowDown}
                    alt=''
                    className='object-cover'
                  />
                </div>
                {accent && (
                  <div className='absolute right-0 top-[90px] z-50 w-full rounded-xl bg-[#1E1E1E] px-2 py-3'>
                    {Accent.map((accent, index) => {
                      return (
                        <div
                          key={index}
                          className={`bg-opacity-10' cursor-pointer rounded-md px-2 py-1 ${
                            selectAccent === accent
                              ? 'rounded-md bg-white bg-opacity-10'
                              : ''
                          }`}
                          onClick={() => setSelectAccent(accent)}
                        >
                          {accent}
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
        <button
          className='font-bold cursor-pointer items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'
          onClick={() => closeModal(false)}
        >
          Cancel
        </button>
        <button
          className='font-bold cursor-pointer items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF]'
          onClick={() => closeModal(false)}
        >
          Generate
        </button>
      </div>
    </Modal>
  );
};

export default VoiceGeneratorModal;
