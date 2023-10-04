import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useState } from 'react';
import crossIcon from '../../../../public/assets/xmark (1).png';
import circleInformation from '../../../../public/assets/circle-information4.png';
import { Range } from 'react-range';
import RangePicker from '../common/RangePicker';

interface VoiceGeneratorModalProp {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const VoiceGeneratorModal = ({ closeModal }: VoiceGeneratorModalProp) => {
  const [state1, setState1] = useState([50]);
  const [state2, setState2] = useState([50]);
  const [state3, setState3] = useState([50]);
  const [accentState, setAccentState] = useState([0]);
  const [voiceStabilityState, setVoiceStabilityState] = useState([0]);
  const [voiceClarityState, setVoiceClarityState] = useState([0]);
  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max  w-[1092px] rounded-[14px] bg-[#121212]'
      closeModal={() => closeModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex justify-between border-b border-white/[0.08] p-6'>
        <div className='text-[18px] font-bold leading-6 text-[#FFFFFF]'>
          Voice generator
        </div>
        <div
          className='h-6 w-6 cursor-pointer'
          onClick={() => closeModal(false)}
        >
          <Image className='h-full w-full' src={crossIcon} alt={''} />
        </div>
      </div>

      <form>
        <div className='flex gap-6 p-6'>
          <div className='flex w-1/2 flex-col gap-4'>
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
                className='h-[105px] w-full resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] font-normal leading-6 text-[#979797] placeholder:text-[#979797] focus:ring-0'
              />
            </div>
          </div>

          <div className='flex w-1/2 flex-col gap-4'>
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
                <div className='mt-3 flex flex-col'>
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
                  <div className='mt-3 flex justify-between'>
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
                <div className='mt-3 flex flex-col'>
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
                  <div className='mt-3 flex justify-between'>
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
                <div className='mt-3 flex flex-col'>
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
                  <div className='mt-3 flex justify-between'>
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
        <button
          className='cursor-pointer items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]'
          onClick={() => closeModal(false)}
        >
          Cancel
        </button>
        <button
          className='cursor-pointer items-center justify-center rounded-[14px] border border-transparent bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-[#FFFFFF]'
          onClick={() => closeModal(false)}
        >
          Generate
        </button>
      </div>
    </Modal>
  );
};

export default VoiceGeneratorModal;
