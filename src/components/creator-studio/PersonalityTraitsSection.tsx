import React, { useState } from 'react'
import { Modal } from '@components/modal/modal';
const PersonalityTraitsSection = () => {

    const [openT, setOpenT] = React.useState(false);
  const handleOpenTraits = () => setOpenT(true);
  const handleCloseTraits = () => setOpenT(false);

    const [selectedOptionsT, setSelectedOptionsT] = useState<string[]>([]);

  const handleOptionChangeT = (optionT: string) => {
    if (selectedOptionsT.includes(optionT)) {
      setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
    } else {
      setSelectedOptionsT([...selectedOptionsT, optionT]);
    }
  };

  const handleRemoveOptionT = (optionT: string) => {
    setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
  };
  return (
    <div>
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
          <div className='m-8 mt-0 flex flex-wrap gap-2'>
            <div className='flex flex-wrap gap-5 '>
              {selectedOptionsT.map((optionT) => (
                <div
                  key={optionT}
                  className='flex gap-2 rounded-xl bg-neutral-800 pb-3 pl-5 pr-5 pt-3 text-sm'
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
                className='flex gap-2 rounded-lg   bg-neutral-800 p-1 pb-3 pl-5 pr-5 pt-3 text-sm'
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
        <div className=' '>
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
    </div>
  )
}

export default PersonalityTraitsSection
