import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import Isymbol from '../svg/Isymbol';
import AdvanceArrow from '../svg/AdvanceArrow';
import InfoIcon from '@/assets/svgImages/info-icon.svg';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import MultiStepRangeSlider from '../common/MultiStepRangeSlider';

interface PersonalityTraitsInterface {
  setPersonalityData?: any;
  personalityData?: any;
}

const PersonalityTraitsSection = ({
  setPersonalityData,
  personalityData
}: PersonalityTraitsInterface) => {
  const [openT, setOpenT] = React.useState<boolean>(false);
  const [selectedOptionsT, setSelectedOptionsT] = useState<string[]>([]);
  const [advance, setAdvance] = useState<number>(0);
  const [advanceModal, setAdvanceModal] = React.useState<boolean>(false);
  const [seletedTab, setSelectedTab] = useState<boolean>(false);
  const [selectChar, setSelectChar] = useState<string>('A');

  const handleOpenTraits = () => setOpenT(true);
  const handleCloseTraits = () => {
    setOpenT(false), setSelectedTab(true), setSelectChar('A');
  };

  const handleOptionChangeT = (optionT: string) => {
    if (selectedOptionsT.includes(optionT)) {
      setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
    } else {
      setAdvance(optionT.length);
      if (selectedOptionsT.length < 10) {
        setSelectedOptionsT([...selectedOptionsT, optionT]);
      }
    }
  };

  const handleRemoveOptionT = (optionT: string) => {
    setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
    if (optionT.length == 0) {
      setAdvance(0);
    }
    // router.reload();
  };

  function AdvanceModal() {
    setAdvanceModal(!advanceModal);
  }

  const handleClearSelection = () => {
    setSelectedOptionsT([]);
  };
  const clearSelection = () => {
    handleCloseTraits();
    handleClearSelection();
    setAdvance(0);
  };

  const alphabet = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
    { name: 'G' },
    { name: 'H' },
    { name: 'I' },
    { name: 'J' },
    { name: 'K' },
    { name: 'L' },
    { name: 'M' },
    { name: 'N' },
    { name: 'O' },
    { name: 'P' },
    { name: 'Q' },
    { name: 'R' },
    { name: 'S' },
    { name: 'T' },
    { name: 'U' },
    { name: 'V' },
    { name: 'W' },
    { name: 'X' },
    { name: 'Y' },
    { name: 'Z' }
  ];

  //========== alphabetic scroll functionality =========
  const handleClick = (id: string) => {
    setSelectChar(id);
    const element: any = document.querySelector(id);
    if (element) {
      const offset = element.offsetTop - 40;
      const contentHolder = document.querySelector(
        '.content-holder'
      ) as HTMLElement;
      contentHolder.style.overflow = 'visible';
      contentHolder.style.overflow = 'hidden';
      contentHolder.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  //========== alphabetic scroll functionality =========

  return (
    <>
      <div className='flex h-auto w-full max-w-full flex-col rounded-lg bg-[#121212]'>
        <div className='flex items-center justify-between max-w-full p-6'>
          <div className='flex flex-col gap-[2px]'>
            <h2 className='font-bold flex items-center gap-[6px] text-lg'>
              Traits
              <InfoIcon />
            </h2>
            <p className='text-stone-700'>{selectedOptionsT.length}/10</p>
          </div>

          <button
            className={`flex items-center justify-center gap-[6px] rounded-[12px] border border-white/[0.32] px-4 py-[10px] text-[14px] font-black leading-5 ${
              selectedOptionsT.length === 10 ? 'text-[#515151]' : 'text-white'
            }`}
            onClick={handleOpenTraits}
            disabled={selectedOptionsT.length === 10 ? true : false}
          >
            <span className='pr-1 text-[18px]'>+</span> <p>Add</p>
          </button>
        </div>
        {seletedTab && (
          <div
            className={`flex flex-wrap gap-2 ${
              selectedOptionsT.length > 0 ? 'p-6 pt-0' : ''
            }`}
          >
            <div className='flex flex-wrap gap-3 '>
              {selectedOptionsT.map((optionT) => (
                <div
                  key={optionT}
                  className='flex gap-2 rounded-xl bg-neutral-800 px-3 py-[7px] text-sm'
                >
                  {optionT}{' '}
                  <span
                    className='cursor-pointer '
                    onClick={() => handleRemoveOptionT(optionT)}
                  >
                    {/* &#10006; */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                    >
                      <path
                        d='M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5'
                        stroke='#979797'
                        strokeWidth='1.35'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          className={` h-auto flex-col items-start gap-6 self-stretch pb-0 ${
            advance !== 0 ? 'flex px-6' : 'hidden'
          }`}
        >
          {advance ? (
            <div
              onClick={AdvanceModal}
              className='flex h-[24px] cursor-pointer items-start justify-between gap-1.5 self-stretch'
            >
              <div className='flex items-center gap-3'>
                <h6 className='text-lg font-bold leading-6 '>
                  Advance Settings
                </h6>
                <div className='w-4 h-4'>
                  <Isymbol />
                </div>
              </div>

              <div
                className={`h-6 w-6 ${advanceModal ? 'rotate-180' : ''}`}
                id='myDiv'
              >
                <button>
                  <AdvanceArrow />
                </button>
              </div>
            </div>
          ) : (
            <p></p>
          )}

          <div className='w-full'>
            {advanceModal ? (
              <div className='mb-6 flex flex-col items-start gap-6 self-stretch border-b border-white/[0.16] pb-6'>
                <div className='flex items-start self-stretch gap-6'>
                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Horny</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>

                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Angry</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>
                </div>

                {/* SECTION2 */}

                <div className='flex items-start self-stretch gap-6'>
                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>
                        Aggressive
                      </b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>

                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Polite</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>
                </div>

                {/* SECTION3 */}

                <div className='flex items-start self-stretch gap-6'>
                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Wild</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>

                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Horny</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>
                </div>

                {/* SECTION4 */}

                <div className='flex items-start self-stretch gap-6'>
                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Horny</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>

                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Angry</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>
                </div>

                {/* SECTION5 */}

                <div className='flex items-start self-stretch gap-6'>
                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>
                        Aggressive
                      </b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>

                  <div className='flex flex-col items-start w-1/2 gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Polite</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol />
                      </div>
                    </div>
                    <div className='w-full pt-3'>
                      <MultiStepRangeSlider />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* {/ -------------------traits modal---------------------- /} */}

      <Modal
        open={openT}
        closeModal={handleCloseTraits}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex shrink-0 flex-col w-[506px] rounded-2xl h-max max-w-[550px] relative rounded`}
      >
        <div className='flex items-center justify-between border-b border-white/[0.08] p-8 pb-6'>
          <b className='text-2xl'>Traits</b>
          <CloseIcon className='text-white' onClick={handleCloseTraits} />
        </div>

        <div className='border-b border-white/[0.08] px-8 py-4'>
          <input
            className='font-light mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
            type='text'
            placeholder='Search'
          />
          <div
            className={`flex-wrap gap-2 ${
              selectedOptionsT.length > 0 ? 'flex pt-4' : 'hidden'
            }`}
          >
            <div className='flex flex-wrap gap-2 '>
              {selectedOptionsT.map((optionT) => (
                <div
                  key={optionT}
                  className='flex gap-2 rounded-lg bg-neutral-800 p-1 px-2 py-[3px] text-sm'
                >
                  {optionT}{' '}
                  <span
                    className='cursor-pointer'
                    onClick={() => handleRemoveOptionT(optionT)}
                  >
                    {/* &#10006; */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                    >
                      <path
                        d='M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5'
                        stroke='#979797'
                        strokeWidth='1.35'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='relative content-holder' id='content-holder'>
          {/* <hr className='mb-5 bg-zinc-900' /> */}
          <ul className='alpha-nav scrollbar-hide absolute left-5 top-4 z-[30] h-[270px] -translate-y-3 translate-x-[460px] transform overflow-auto leading-4'>
            {Array.from(Array(26), (e, i) => String.fromCharCode(65 + i)).map(
              (char) => (
                <li key={char}>
                  <a
                    href={`#${char}`}
                    className={`text-[11px] font-semibold text-[#515151] ${
                      char === selectChar ? 'text-[#979797]' : ''
                    }`}
                    onClick={() => handleClick(char)}
                  >
                    {char}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className='scrollbar-hide relative h-[270px] overflow-auto px-6 pt-4'>
            <div className=''>
              <div className='font-bold pb-3 text-[#979797]' id='A'>
                A
              </div>

              <div className='flex flex-wrap gap-2'>
                <div className='relative'>
                  <input
                    id='ta1'
                    name='option'
                    checked={selectedOptionsT.includes('Adaptable')}
                    onChange={() => handleOptionChangeT('Adaptable')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    value='ta1'
                  />
                  <label
                    htmlFor='ta1'
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='ta1'
                  >
                    Adaptable
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Animal Crossing')}
                    onChange={() => handleOptionChangeT('Animal Crossing')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='a3'
                    value='a3'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='a3'
                    htmlFor='a3'
                  >
                    Adventurous
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Artistic Photography')}
                    onChange={() => handleOptionChangeT('Artistic Photography')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='a4'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='a4'
                    htmlFor='a4'
                  >
                    Aggressive
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('ASMR Content')}
                    onChange={() => handleOptionChangeT('ASMR Content')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='a5'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='a5'
                    htmlFor='a5'
                  >
                    Ambitious
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Aesthetically')}
                    onChange={() => handleOptionChangeT('Aesthetically')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='a6'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='a6'
                    htmlFor='a6'
                  >
                    Angry
                  </label>
                </div>
              </div>
            </div>

            <div className=''>
              <div className='font-bold pb-3 text-[#979797]' id='B'>
                B
              </div>

              <div className='flex flex-wrap gap-2'>
                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Body Modification')}
                    onChange={() => handleOptionChangeT('Body Modification')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='b1'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='b1'
                    htmlFor='b1'
                  >
                    Boring
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Book Clubs')}
                    onChange={() => handleOptionChangeT('Book Clubs')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='b2'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='b2'
                    htmlFor='b2'
                  >
                    Brave
                  </label>
                </div>
              </div>
            </div>

            <div className=''>
              <div className='font-bold pb-3 text-[#979797]' id='C'>
                C
              </div>

              <div className='flex flex-wrap gap-2'>
                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Camping')}
                    onChange={() => handleOptionChangeT('Camping')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='c1'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='c1'
                    htmlFor='c1'
                  >
                    Caring
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Cat Videos')}
                    onChange={() => handleOptionChangeT('Cat Videos')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='c2'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='c2'
                    htmlFor='c2'
                  >
                    Carefree
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Collectables')}
                    onChange={() => handleOptionChangeT('Collectables')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='c3'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='c3'
                    htmlFor='c3'
                  >
                    Compassionate
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Cosplaying')}
                    onChange={() => handleOptionChangeT('Cosplaying')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='c4'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='c4'
                    htmlFor='c4'
                  >
                    Confident
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Cute Plushies')}
                    onChange={() => handleOptionChangeT('Cute Plushies')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='c5'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='c5'
                    htmlFor='c5'
                  >
                    Creative
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptionsT.includes('Cute pots and plants')}
                    onChange={() => handleOptionChangeT('Cute pots and plants')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='c6'
                    value='c6'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='c6'
                    htmlFor='c6'
                  >
                    Curious
                  </label>
                </div>
              </div>
            </div>
            {/* SCROLL BAR  */}
            {/* <div className='absolute flex flex-col items-start justify-between w-3 h-auto inset-2 '>
 {alphabet.map((alphabets)=>{
 return(
 <div className='self-stretch text-[#979797] align-center font-[11px] font-semibold leading-4 tracking-wide uppercase'>{alphabets.name}</div>
 )
 })}
 
 
 </div> */}
          </div>

          <div className='relative mt-2'></div>

          <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
            <button
              onClick={clearSelection}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px]'
            >
              Cancel
            </button>
            <button
              onClick={handleCloseTraits}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px]'
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PersonalityTraitsSection;
