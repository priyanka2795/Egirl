import React, { useState, useEffect } from 'react';
import { Modal } from '@components/modal/modal';
import InfoIcon from '@/assets/svgImages/info-icon.svg';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import searchIcon from '@/assets/search-alt.webp';
import Image from 'next/image';
import downArrow from '@/assets/down-arrow-img.webp';

interface PersonalityLikesInterface {
  setPersonalityData?: any;
  personalityData?: any;
}

const PersonalityLikeSection = ({
  setPersonalityData,
  personalityData
}: PersonalityLikesInterface) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [seletedTab, setSelectedTab] = useState<boolean>(false);
  const [selectChar, setSelectChar] = useState<string>('A');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false), setSelectedTab(true), setSelectChar('A');
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showHoverModal, setShowHoverModal] = useState<boolean>(false);

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      if (selectedOptions.length < 10) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };
  const clearSelection = () => {
    handleClose();
    handleClearSelection();
  };

  useEffect(() => {
    setPersonalityData({
      ...personalityData,
      likes: selectedOptions
    });
  }, [selectedOptions]);

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
          <div className='flex flex-col gap-[2px] '>
            <h2 className='font-bold flex items-center gap-[6px] text-lg'>
              Likes
              <div
                onClick={() => {
                  setShowHoverModal(!showHoverModal);
                }}
                className='relative group'
              >
                <InfoIcon />
                <div className='absolute -left-[70px] -top-7 z-50 hidden w-[238px] -translate-x-0 -translate-y-2/3 transform rounded-lg bg-[#303030] px-3 py-1.5 text-center text-xs transition-all group-hover:block'>
                  Likes are an essential aspect of your AI character's identity
                  within the social media app.
                  <div className='absolute bottom-0 left-[76px] h-[6px] w-3'>
                    <Image className='w-full h-full' src={downArrow} alt={''} />
                  </div>
                </div>
              </div>
            </h2>
            <p className='text-stone-700'>{selectedOptions.length}/10</p>
          </div>

          <button
            className={`flex items-center justify-center gap-[6px] rounded-[12px] border border-white/[0.32] px-4 py-[10px] text-[14px] font-black leading-5 ${
              selectedOptions.length === 10 ? 'text-[#515151] ' : 'text-white'
            }`}
            onClick={handleOpen}
            disabled={selectedOptions.length === 10 ? true : false}
          >
            <span className='pr-1 text-[18px]'>+</span> <p>Add</p>
          </button>
        </div>
        {seletedTab && (
          <div
            className={`flex flex-wrap gap-2 ${
              selectedOptions.length > 0 ? 'p-6 pt-0' : ''
            }`}
          >
            <div className='flex flex-wrap gap-3 '>
              {selectedOptions.map((option) => (
                <div
                  key={option}
                  className='flex gap-2 rounded-xl bg-neutral-800 px-3 py-[7px] text-sm'
                >
                  {option}{' '}
                  <span
                    className='cursor-pointer '
                    onClick={() => handleRemoveOption(option)}
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
      </div>

      <Modal
        open={open}
        closeModal={handleClose}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex shrink-0 flex-col w-[506px] rounded-2xl h-max max-w-[550px] relative rounded `}
      >
        <div className='flex items-center justify-between border-b border-white/[0.08] p-8 pb-6'>
          <b className='text-2xl'>Likes</b>
          <CloseIcon className='text-white' onClick={handleClose} />
        </div>

        <div className='border-b border-white/[0.08] px-8 py-4'>
          <div className='flex w-full gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
            <div className='w-6 h-6'>
              <Image className='w-full h-full' src={searchIcon} alt={''} />
            </div>
            <input
              type='text'
              className='font-light border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] focus:ring-0 '
            />
          </div>
          <div
            className={`flex-wrap gap-2 ${
              selectedOptions.length > 0 ? 'flex pt-4' : 'hidden'
            }`}
          >
            <div className='flex flex-wrap gap-2'>
              {selectedOptions.map((option) => (
                <div
                  key={option}
                  className='flex gap-2 rounded-lg bg-neutral-800 p-1 px-2 py-[3px] text-sm'
                >
                  {option}{' '}
                  <span
                    className='cursor-pointer'
                    onClick={() => handleRemoveOption(option)}
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
        <div className='relative content-holder ' id='content-holder'>
          <ul className='alpha-nav scrollbar-hide absolute left-5 top-4 z-[30] h-[270px] -translate-y-3 translate-x-[460px] transform overflow-auto leading-4'>
            {Array.from(Array(26), (e, i) => String.fromCharCode(65 + i)).map(
              (char) => (
                <li key={char}>
                  <a
                    href={`#${char}`}
                    className={`text-[11px] font-semibold  text-[#515151] ${
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
                    id='a1'
                    name='option'
                    checked={selectedOptions.includes('Anime')}
                    onChange={() => handleOptionChange('Anime')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    value='a1'
                  />
                  <label
                    htmlFor='a1'
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='a1'
                  >
                    Anime
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Animal Crossing')}
                    onChange={() => handleOptionChange('Animal Crossing')}
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
                    Animal Crossing
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Artistic Photography')}
                    onChange={() => handleOptionChange('Artistic Photography')}
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
                    Artistic Photography
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('ASMR Content')}
                    onChange={() => handleOptionChange('ASMR Content')}
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
                    ASMR Content
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Aesthetically')}
                    onChange={() => handleOptionChange('Aesthetically')}
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
                    Aesthetically
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Astrology')}
                    onChange={() => handleOptionChange('Astrology')}
                    className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                    type='checkbox'
                    id='a7'
                    value='Services/ Software'
                  />
                  <label
                    className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[#fff] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                    id='a7'
                    htmlFor='a7'
                  >
                    Astrology
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
                    checked={selectedOptions.includes('Body Modification')}
                    onChange={() => handleOptionChange('Body Modification')}
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
                    Body Modification
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Book Clubs')}
                    onChange={() => handleOptionChange('Book Clubs')}
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
                    Book Clubs
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
                    checked={selectedOptions.includes('Camping')}
                    onChange={() => handleOptionChange('Camping')}
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
                    Camping
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Cat Videos')}
                    onChange={() => handleOptionChange('Cat Videos')}
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
                    Cat Videos
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Collectables')}
                    onChange={() => handleOptionChange('Collectables')}
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
                    Collectables
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Cosplaying')}
                    onChange={() => handleOptionChange('Cosplaying')}
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
                    Cosplaying
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Cute Plushies')}
                    onChange={() => handleOptionChange('Cute Plushies')}
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
                    Cute Plushies
                  </label>
                </div>

                <div className='relative'>
                  <input
                    name='option'
                    checked={selectedOptions.includes('Cute pots and plants')}
                    onChange={() => handleOptionChange('Cute pots and plants')}
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
                    Cute pots and plants
                  </label>
                </div>
              </div>
            </div>
            {/* <div className=''>
              <div className='font-bold pb-3 text-[#979797]' id='D'>
                D
              </div>

              <div className='flex flex-wrap gap-2 '>
                {dataD.map((datas) => {
                  return (
                    <div className='relative'>
                      <input
                        name='option'
                        checked={selectedOptions.includes('Cat Videos')}
                        onChange={() => handleOptionChange('Cat Videos')}
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
                        Cat Videos
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=''>
              <div className='font-bold  pb-3 text-[#979797]' id='E'>
                E
              </div>

              <div className='flex flex-wrap gap-2 '>
                {dataD.map((datas) => {
                  return (
                    <div className='relative'>
                      <input
                        name='option'
                        checked={selectedOptions.includes('Cat Videos')}
                        onChange={() => handleOptionChange('Cat Videos')}
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
                        Egirl Videos
                      </label>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>

          <div>
            {/* <ul>
        {selectedOptions.map((option) => (
          <li key={option}>
            {option}{' '}
            <span
              className="cursor-pointer"
              onClick={() => handleRemoveOption(option)}
            >
              &#10006; 
            </span>
          </li>
        ))}
      </ul> */}

            <div className='relative mt-2'>
              {/* <input
        className='hidden bg-fuchsia-600'
          type="radio"
          id="yes"
          name="option"
          checked={selectedOptions.includes('YES')}
          onChange={() => handleOptionChange('YES')}
        />
        <label 
        className='inline-block border-[1px solid CadetBlue] py-0 px-3.5 m-12 '
        
        htmlFor="yes">
          <h3>YES</h3>
        </label> */}
              {/* <input
          type="radio"
          id="no"
          name="option"
          checked={selectedOptions.includes('NO')}
          onChange={() => handleOptionChange('NO')}
        />
        <label htmlFor="no">
          <h3>NO</h3>
        </label> */}
            </div>
            {/* <div
            className='px-4 py-2 text-sm font-thin text-white rounded-full cursor-pointer hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300'
          >
            <input
              className='hidden px-4 py-2 text-sm font-thin text-white bg-blue-500 rounded-full bg-fuchsia-600 bg-zinc-800'
              type='checkbox'
              id='yes'
              name='option'
              checked={selectedOptions.includes('YES')}
              onChange={() => handleOptionChange('YES')}
            />
            Anime
          </div> */}
          </div>
          {/* <div className=''>
          <b>B</b>
          <br />
          <div className='flex flex-wrap gap-2 mt-1'>
            {dataB.map((datas) => {
              return (
                <button className='px-4 py-2 text-sm font-thin text-white rounded-full bg-zinc-800'>
                  {datas.name}
                </button>
              );
            })}
          </div>
        </div> */}
          <div className='flex flex-wrap gap-2'>
            {/* <div  className="relative " >
          <input className="hidden bg-zinc-800 absolute left-[23px] top-[13px] peer styled-checkbox checkbox" type="checkbox" id="Services/ Software"  value="Services/ Software"/>
          <label className="bg-zinc-800 pl-8 h-10 inline-block px-3 py-2 mb-4 ml-3 text-base transition cursor-pointer rounded-3xl  text-[#525252] w-max peer-checked:bg-fuchsia-700 peer-checked:text-[#f4f4f4] " id='a1' htmlFor="Services/ Software">aman</label>
          </div> */}

            {/* <div  className="relative" value="Production/ Manufacturing,Services/ Software">
          <input className="absolute left-[23px] top-[13px] peer styled-checkbox checkbox" type="checkbox" id="Services/ Software" name="picked-0" value="Services/ Software"/>
          <label className="pl-8 h-10 inline-block px-3 py-2 mb-4 ml-3 text-base transition cursor-pointer rounded-3xl bg-[#c6c6c6] text-[#525252] w-max peer-checked:bg-fuchsia-700 peer-checked:text-[#f4f4f4]" id='a2' for="Services/ Software">Anime</label>
          </div> */}
          </div>
          <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8 '>
            <button
              onClick={clearSelection}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px]'
            >
              Cancel
            </button>
            <button
              onClick={handleClose}
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

export default PersonalityLikeSection;
