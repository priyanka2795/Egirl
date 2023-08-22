import { Modal } from '@components/modal/modal';
import React from 'react';
import { useState } from 'react';


const data = [
  {
    name: 'Anime'
  },
  {
    name: 'Animal Crossing'
  },
  {
    name: 'Artistic Photography'
  },
  {
    name: 'ASMR Content'
  },
  {
    name: 'Aesthetically'
  },
  {
    name: 'Astrology'
  }
];

const dataB = [
  {
    name: 'Body Modification',
    id: 'b1'
  },
  {
    name: 'Book Clubs',
    id: 'b2'
  }
];

const dataC = [
  {
    name: 'Camping'
  },
  {
    name: 'Cat Videos'
  },
  {
    name: 'Collectables'
  },
  {
    name: 'Cosplaying'
  },
  {
    name: 'Cute plushies'
  },
  {
    name: 'Cute pots and plants'
  }
];

const dataD = [
  {
    name: 'Dream'
  },
  {
    name: 'Drama Movies'
  },
  {
    name: 'Design'
  },
  {
    name: 'Drawings'
  },
  {
    name: 'Dancing'
  },
  {
    name: 'Dling'
  }
];

const Personality = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openT, setOpenT] = React.useState(false);
  const handleOpenTraits = () => setOpenT(true);
  const handleCloseTraits = () => setOpenT(false);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const [selectedOptionsT, setSelectedOptionsT] = useState<string[]>([]);

  const handleOptionChangeT = (optionT: string) => {
    if (selectedOptionsT.includes(optionT)) {
      setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
    } else {
      setSelectedOptionsT([...selectedOptionsT, optionT]);
    }
  };

  const handleRemoveOptionT = (optionT: string) => {
    setSelectedOptionsT(selectedOptions.filter((o) => o !== optionT));
  };

  return (
    <>
      {/* <PersonalityLikeModal/> */}
      <div className='w-full'>
        <div className=' flex h-40 flex-row justify-evenly gap-3 px-2.5 py-3'>
          <div className='w-4/5 rounded-lg h-36 bg-zinc-900'>
            <div className='gap-10 pt-4 pl-6 '>
              <h2 className='pb-5'>
                <div className='flex gap-2'>
                  <b className='text-lg'>Base type</b>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    className='mt-1'
                  >
                    <g clip-path='url(#clip0_3296_2197)'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M7.99935 2.00008C4.68564 2.00008 1.99935 4.68637 1.99935 8.00008C1.99935 11.3138 4.68564 14.0001 7.99935 14.0001C11.3131 14.0001 13.9993 11.3138 13.9993 8.00008C13.9993 4.68637 11.3131 2.00008 7.99935 2.00008ZM0.666016 8.00008C0.666016 3.94999 3.94926 0.666748 7.99935 0.666748C12.0494 0.666748 15.3327 3.94999 15.3327 8.00008C15.3327 12.0502 12.0494 15.3334 7.99935 15.3334C3.94926 15.3334 0.666016 12.0502 0.666016 8.00008Z'
                        fill='#515151'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M8.00065 7.33325C8.36884 7.33325 8.66732 7.63173 8.66732 7.99992V10.6666C8.66732 11.0348 8.36884 11.3333 8.00065 11.3333C7.63246 11.3333 7.33398 11.0348 7.33398 10.6666V7.99992C7.33398 7.63173 7.63246 7.33325 8.00065 7.33325Z'
                        fill='#515151'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M7.33398 5.33341C7.33398 4.96522 7.63246 4.66675 8.00065 4.66675H8.00732C8.37551 4.66675 8.67398 4.96522 8.67398 5.33341C8.67398 5.7016 8.37551 6.00008 8.00732 6.00008H8.00065C7.63246 6.00008 7.33398 5.7016 7.33398 5.33341Z'
                        fill='#515151'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_3296_2197'>
                        <rect width='16' height='16' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </h2>
              <input
                type='radio'
                name='baseType'
                className='mr-[5px] h-5 w-5'
              />{' '}
              <label className='text-sm'>Roleplay</label>
              <br />
              <input
                type='radio'
                name='baseType'
                className='mr-[5px] h-5 w-5'
              />{' '}
              <label className='text-sm'>Conversational</label>
            </div>
          </div>
          <div className='w-4/5 rounded-lg h-36 bg-zinc-900'>
            <div className='gap-10 pt-4 pl-6 '>
              <h2 className='pb-5'>
                <b className='text-lg'>Creativity</b>
              </h2>

              <p className='text-stone-700'>
                Use the slider to adjust creativity
              </p>
            </div>
          </div>
        </div>

        <div className='mx-2.5 my-3 mb-4 flex h-auto  max-w-full flex-col rounded-lg bg-zinc-900 '>
          <div className='mx-2.5 my-3 mb-4 flex h-24 max-w-full rounded-lg bg-zinc-900 pl-6 pt-4 '>
            <div className='mr-96'>
              <h2 className='pb-2'>
                <b className='text-lg'>Likes</b>
              </h2>
              <p className='text-stone-700'>0/10</p>
            </div>

            <button
              className='ml-96 ml-[27.4rem]  mt-2 h-[40px] w-[84px] justify-center rounded-xl border-2 border-zinc-50 text-sm font-bold'
              onClick={handleOpen}
            >
              <span>+ Add</span>
            </button>
          </div>
          <div className='flex flex-wrap gap-2 m-8 mt-0'>
            <div className='flex flex-wrap gap-5 '>
              {selectedOptions.map((option) => (
                <div
                  key={option}
                  className='flex gap-2 pt-3 pb-3 pl-5 pr-5 text-sm rounded-xl bg-neutral-800'
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
                        stroke-width='1.35'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-2.5 my-3 mb-4 flex h-auto  max-w-full flex-col rounded-lg bg-zinc-900 '>
          <div className='mx-2.5 my-3 mb-4 flex h-24 max-w-full rounded-lg bg-zinc-900 pl-6 pt-4 '>
            <div className='mr-96'>
              <h2 className='pb-2'>
                <b className='text-lg'>Traits</b>
              </h2>
              <p className='text-stone-700'>0/10</p>
            </div>

            <button
              className='ml-96 ml-[27.4rem]  mt-2 h-[40px] w-[84px] justify-center rounded-xl border-2 border-zinc-50 text-sm font-bold'
              onClick={handleOpenTraits}
            >
              <span>+ Add</span>
            </button>
          </div>
          <div className='flex flex-wrap gap-2 m-8 mt-0'>
            <div className='flex flex-wrap gap-5 '>
              {selectedOptionsT.map((optionT) => (
                <div
                  key={optionT}
                  className='flex gap-2 pt-3 pb-3 pl-5 pr-5 text-sm rounded-xl bg-neutral-800'
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
                        stroke-width='1.35'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className='mx-2.5 my-3 mb-4 flex h-24 max-w-full rounded-lg bg-zinc-900 pl-6 pt-4'>
          <div className='mr-96'>
            <h2 className='pb-2'>
              <b>Traits</b>
            </h2>
            <p className='text-stone-700'>0/10</p>
          </div>
          <button
            className='ml-96 ml-[28rem] mt-2 h-[40px] w-[84px] justify-center rounded-xl border-2 border-zinc-50 text-sm font-bold'
            onClick={handleOpenTraits}
          >
            <span>+ Add</span>
          </button>
        </div> */}

        <div className='mx-2.5 my-3  max-w-full rounded-lg bg-zinc-900 pb-8 pl-5 pr-5 pt-8'>
          <h2 className='pb-5'>
            <div className='flex gap-2'>
              <b>Description</b>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                className='mt-1'
              >
                <g clip-path='url(#clip0_3296_2197)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.99935 2.00008C4.68564 2.00008 1.99935 4.68637 1.99935 8.00008C1.99935 11.3138 4.68564 14.0001 7.99935 14.0001C11.3131 14.0001 13.9993 11.3138 13.9993 8.00008C13.9993 4.68637 11.3131 2.00008 7.99935 2.00008ZM0.666016 8.00008C0.666016 3.94999 3.94926 0.666748 7.99935 0.666748C12.0494 0.666748 15.3327 3.94999 15.3327 8.00008C15.3327 12.0502 12.0494 15.3334 7.99935 15.3334C3.94926 15.3334 0.666016 12.0502 0.666016 8.00008Z'
                    fill='#515151'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.00065 7.33325C8.36884 7.33325 8.66732 7.63173 8.66732 7.99992V10.6666C8.66732 11.0348 8.36884 11.3333 8.00065 11.3333C7.63246 11.3333 7.33398 11.0348 7.33398 10.6666V7.99992C7.33398 7.63173 7.63246 7.33325 8.00065 7.33325Z'
                    fill='#515151'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M7.33398 5.33341C7.33398 4.96522 7.63246 4.66675 8.00065 4.66675H8.00732C8.37551 4.66675 8.67398 4.96522 8.67398 5.33341C8.67398 5.7016 8.37551 6.00008 8.00732 6.00008H8.00065C7.63246 6.00008 7.33398 5.7016 7.33398 5.33341Z'
                    fill='#515151'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3296_2197'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </h2>
          <div className='flex flex-row '>
            <div className='flex flex-col w-4/5 h-32 gap-2 max-h-max'>
              <div className='flex flex-row justify-between w-11/12 p-1'>
                <label className='text-xs'>Description</label>
                <label className='text-xs text-stone-700'>0/2000</label>
              </div>

              <textarea
                placeholder='Enter a descrition here...'
                className='h-5/6 w-11/12 resize-none rounded-lg bg-white/[0.05]'
              ></textarea>
            </div>

            <div className='flex flex-col w-4/5 h-32 gap-2 max-h-min'>
              <div className='flex flex-row justify-between w-11/12 p-1'>
                <label className='text-xs'>Word Description</label>
                <label className='text-xs text-stone-700'>0/2000</label>
              </div>
              <textarea
                placeholder='Enter a world descrition here...'
                className='h-5/6 w-11/12 resize-none rounded-lg bg-white/[0.05]'
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        closeModal={handleClose}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex shrink-0 flex-col gap-6 w-[506px] p-8 rounded-2xl h-max max-w-[550px] relative rounded`}
      >
        <b className='text-2xl'>Likes</b>
        <hr className='mb-1 w-[100%] bg-zinc-900' />

        <div>
          {/* <div className='relative mt-2'>
                  <input
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
              </label>
            
          </div> */}
        </div>

        <input
          className='py-auto mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
          type='text'
          placeholder='Search'
        />

        <div className='flex flex-wrap gap-2'>
          <div className='flex flex-wrap gap-5 '>
            {selectedOptions.map((option) => (
              <div
                key={option}
                className='flex gap-2 p-1 pt-3 pb-3 pl-5 pr-5 text-sm rounded-lg bg-neutral-800'
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
                      stroke-width='1.35'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
        <hr className='mb-5 bg-zinc-900' />
        <div className=''>
          <div className=''>
            <b>A</b>
            <br />
            {/* <div className='flex flex-wrap gap-2 mt-1'>
            {data.map((datas) => {
              return (
                <button className='px-4 py-2 text-sm font-thin text-white bg-blue-500 rounded-full bg-zinc-800'>
                  {datas.name}
                </button>
              );
            })}
          </div> */}
            <div className='flex flex-wrap gap-2'>
              {/* {
              data.map((map,index)=>{
                return(
                  <div id={index}>
                    
                    </div>
                )
              })
            } */}

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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                  id='a7'
                  htmlFor='a7'
                >
                  Astrology
                </label>
              </div>
            </div>
          </div>
          {/* <div id="picked-0" className="" ><input className="absolute left-[23px] top-[13px] peer styled-checkbox checkbox" type="checkbox" id="Production/ Manufacturing" name="picked-0" value="Production/ Manufacturing"/>
          <label className="h-10 inline-block px-3 py-2 mb-4 ml-3 text-base transition cursor-pointer rounded-3xl bg-[#c6c6c6] text-[#525252] w-max peer-checked:bg-fuchsia-700 peer-checked:text-[#f4f4f4]" id="Production/ Manufacturing">Anime</label>

          </div> */}

          <div className=''>
            <b>B</b>
            <br />
            {/* <div className='flex flex-wrap gap-2 mt-1'>
            {data.map((datas) => {
              return (
                <button className='px-4 py-2 text-sm font-thin text-white bg-blue-500 rounded-full bg-zinc-800'>
                  {datas.name}
                </button>
              );
            })}
          </div> */}
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                  id='b2'
                  htmlFor='b2'
                >
                  Book Clubs
                </label>
              </div>
            </div>
          </div>

          <div className=''>
            <b>C</b>
            <br />
            {/* <div className='flex flex-wrap gap-2 mt-1'>
            {data.map((datas) => {
              return (
                <button className='px-4 py-2 text-sm font-thin text-white bg-blue-500 rounded-full bg-zinc-800'>
                  {datas.name}
                </button>
              );
            })}
          </div> */}
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                  id='c6'
                  htmlFor='c6'
                >
                  Cute pots and plants
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=''>
            <b>D</b>
            <br />

            <div className='flex flex-wrap gap-2 mt-1'>
              {dataD.map((datas) => {
                return (
                  <button className='px-4 py-2 text-sm font-thin text-white bg-blue-500 rounded-full bg-zinc-800'>
                    {datas.name}
                  </button>
                );
              })}
            </div>
          </div> */}

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
        <div className='flex flex flex-row  gap-3 self-stretch pb-[10px] pl-[10px] pr-[10px] pt-[0px] '>
          <button
            onClick={handleClose}
            className=' flex-[1 0 0] flex h-[48px] w-[100%] items-center justify-center gap-2 rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 pb-[13] pl-[20] pr-[20] pt-[13] text-lg text-sm text-xl font-bold text-white'
          >
            Cancel
          </button>
          <button
            onClick={handleClose}
            className='flex-[1 0 0] flex h-[48px] w-[100%] items-center justify-center gap-2 rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 pb-[13] pl-[20] pr-[20] pt-[13] text-lg text-sm text-xl font-bold text-white'
          >
            Save
          </button>
        </div>
      </Modal>


      {/* -------------------traits modal---------------------- */}

      <Modal
        open={openT}
        closeModal={handleCloseTraits}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex shrink-0 flex-col gap-6 w-[506px] p-8 rounded-2xl h-max max-w-[550px] relative rounded`}
      >
        <b className='text-2xl'>Traits</b>
        <hr className='mb-1 w-[100%] bg-zinc-900' />

        <div>
          
        </div>

        <input
          className='py-auto mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
          type='text'
          placeholder='Search'
        />

        <div className='flex flex-wrap gap-2'>
          <div className='flex flex-wrap gap-5 '>
            {selectedOptionsT.map((optionT) => (
              <div
                key={optionT}
                className='flex gap-2 p-1 pt-3 pb-3 pl-5 pr-5 text-sm rounded-lg bg-neutral-800'
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
                      stroke-width='1.35'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
        <hr className='mb-5 bg-zinc-900' />
        <div className=''>
          <div className=''>
            <b>A</b>
            <br />
            
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                  id='a6'
                  htmlFor='a6'
                >
                  Angry
                </label>
              </div>

              
            </div>
          </div>
          

          <div className=''>
            <b>B</b>
            <br />
            
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                  id='b2'
                  htmlFor='b2'
                >
                  Brave
                </label>
              </div>
            </div>
          </div>

          <div className=''>
            <b>C</b>
            <br />
            
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
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
                  className='mb-4 ml-3 inline-block h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                  id='c6'
                  htmlFor='c6'
                >
                  Curious
                </label>
              </div>
            </div>
          </div>
        </div>

        

          <div className='relative mt-2'>
            
          </div>
          
        
        <div className='flex flex flex-row  gap-3 self-stretch pb-[10px] pl-[10px] pr-[10px] pt-[0px] '>
          <button
            onClick={handleCloseTraits}
            className=' flex-[1 0 0] flex h-[48px] w-[100%] items-center justify-center gap-2 rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 pb-[13] pl-[20] pr-[20] pt-[13] text-lg text-sm text-xl font-bold text-white'
          >
            Cancel
          </button>
          <button
            onClick={handleCloseTraits}
            className='flex-[1 0 0] flex h-[48px] w-[100%] items-center justify-center gap-2 rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 pb-[13] pl-[20] pr-[20] pt-[13] text-lg text-sm text-xl font-bold text-white'
          >
            Save
          </button>
        </div>
      </Modal>

      
    </>
  );
};

export default Personality;
