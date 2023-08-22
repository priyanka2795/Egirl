import React, { useState } from 'react'
import { Modal } from '@components/modal/modal';
const PersonalityLikeSection = () => {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  return (
    <div>
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
          <div className='m-8 mt-0 flex flex-wrap gap-2'>
            <div className='flex flex-wrap gap-5 '>
              {selectedOptions.map((option) => (
                <div
                  key={option}
                  className='flex gap-2 rounded-xl bg-neutral-800 pb-3 pl-5 pr-5 pt-3 text-sm'
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
                className='flex gap-2 rounded-lg   bg-neutral-800 p-1 pb-3 pl-5 pr-5 pt-3 text-sm'
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
        <div className=' '>
          <div className=''>
            <b>A</b>
            <br />
            {/* <div className='mt-1 flex flex-wrap gap-2'>
            {data.map((datas) => {
              return (
                <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
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
            {/* <div className='mt-1 flex flex-wrap gap-2'>
            {data.map((datas) => {
              return (
                <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
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
            {/* <div className='mt-1 flex flex-wrap gap-2'>
            {data.map((datas) => {
              return (
                <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
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

            <div className='mt-1 flex flex-wrap gap-2'>
              {dataD.map((datas) => {
                return (
                  <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
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
            className=' cursor-pointer rounded-full px-4 py-2 text-sm 
      font-thin text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 '
          >
            <input
              className='hidden rounded-full bg-blue-500 bg-fuchsia-600 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'
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
          <div className='mt-1 flex flex-wrap gap-2'>
            {dataB.map((datas) => {
              return (
                <button className='rounded-full bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
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
    </div>
  )
}

export default PersonalityLikeSection
