import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import { useRouter } from 'next/router';
import Isymbol from './svg/Isymbol';
import AdvanceArrow from './svg/AdvanceArrow';
import InfoIcon from '../../../public/assets/svgImages/info-icon.svg';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';

// const router = useRouter();

const PersonalityTraitsSection = () => {
  const [openT, setOpenT] = React.useState(false);
  const [selectedOptionsT, setSelectedOptionsT] = useState<string[]>([]);
  const [advance, setAdvance] = useState(0);
  const [advanceModal, setAdvanceMOdal] = React.useState(false);
  const [seletedTab , setSelectedTab] = useState(false)

  const handleOpenTraits = () => setOpenT(true);
  const handleCloseTraits = () => {setOpenT(false) , setSelectedTab(true)};
  const handleOptionChangeT = (optionT: string) => {
    if (selectedOptionsT.includes(optionT)) {
      setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
    } else {
      setSelectedOptionsT([...selectedOptionsT, optionT]);
      console.log('ye he length', optionT.length);
      setAdvance(optionT.length);
    }
  };

  
  const handleRemoveOptionT = (optionT: string) => {
    setSelectedOptionsT(selectedOptionsT.filter((o) => o !== optionT));
    if(optionT.length==0){
      setAdvance(0);
    }
    // router.reload();
  };

  function AdvanceModal() {
    setAdvanceMOdal(true);
  }

  const handleClearSelection = () => {
    setSelectedOptionsT([]);
  };
  const clearSelection = () => {
    handleCloseTraits()
    handleClearSelection()
    setAdvance(0)
  }
  return (
    <>
      <div className='w-full flex flex-col h-auto max-w-full rounded-lg bg-[#121212]'>
        <div className='flex justify-between max-w-full p-6 pb-5'>
          <div className='w-full'>
            
            <h2 className='text-lg font-bold leading-[110%] flex gap-[6px]'>
            Traits<InfoIcon/>
              </h2>
            <p className='text-stone-700'>{selectedOptionsT.length}/10</p>
          </div>

         <button
              className='flex items-center justify-center h-[40px] w-[84px] justify-center rounded-xl border border-white/[0.32] text-sm font-bold'
              onClick={handleOpenTraits}
            >
             + Add
            </button>
        </div>
        {
          seletedTab &&
        <div className={`flex flex-wrap gap-2 ${selectedOptionsT.length > 0 ? "p-6 pt-0":""}`}>
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
        }
        <div className={` h-auto flex-col items-start gap-6 self-stretch pb-0 ${advance!== 0? 'flex px-6':'hidden'}`}>
          {advance ? (
            <div className='flex h-[24px] items-start gap-1.5 self-stretch justify-between '>
              <div className='flex gap-3 '>
                <h6 className='text-lg font-bold leading-6 '>
                  Advance Settings
                </h6>
                <div className='w-4 h-4'>
                  <Isymbol />
                </div>
              </div>

              <div className='w-6 h-6 ' id='myDiv'>
                <button onClick={AdvanceModal}>
                  <AdvanceArrow />
                </button>
              </div>
            </div>
          ) : (
            <p></p>
          )}

          <div >
            {advanceModal ? (
              < div className='flex flex-col items-start self-stretch gap-6'>
                {/* SECTION1 */}
                <div className='flex items-start self-stretch gap-6'>

                  <div className='flex flex-col items-start gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Horny</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                            <div></div>
                            <div className='flex items-start self-stretch justify-between '>
                                <b className='text-sm font-normal leading-[18px]'>Low</b>
                                <b className='text-sm font-normal leading-[18px]'>Low Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>MId High</b>
                                <b className='text-sm font-normal leading-[18px]'>High</b>
                            </div>
                    </div>
                  </div>


                  <div className='flex flex-col items-start gap-1 '>
                  <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Angry</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                    <div></div>
                            <div className='flex items-start self-stretch justify-between'>
                                <b className='text-sm font-normal leading-[18px]'>Low</b>
                                <b className='text-sm font-normal leading-[18px]'>Low Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>MId High</b>
                                <b className='text-sm font-normal leading-[18px]'>High</b>
                            </div>
                    </div>
                  </div>

                </div>

                {/* SECTION2 */}

                <div className='flex items-start self-stretch gap-6'>

                  <div className='flex flex-col items-start gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Aggressive</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                    <div></div>
                            <div className='flex items-start self-stretch justify-between '>
                                <b className='text-sm font-normal leading-[18px]'>Low</b>
                                <b className='text-sm font-normal leading-[18px]'>Low Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>MId High</b>
                                <b className='text-sm font-normal leading-[18px]'>High</b>
                            </div>
                    </div>
                  </div>


                  <div className='flex flex-col items-start gap-1 '>
                  <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Polite</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                    <div></div>
                            <div className='flex items-start self-stretch justify-between '>
                                <b className='text-sm font-normal leading-[18px]'>Low</b>
                                <b className='text-sm font-normal leading-[18px]'>Low Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>Mid</b>
                                <b className='text-sm font-normal leading-[18px]'>MId High</b>
                                <b className='text-sm font-normal leading-[18px]'>High</b>
                            </div>
                    </div>
                  </div>

                </div>

                {/* SECTION3 */}

                <div className='flex items-start self-stretch gap-6'>

                  <div className='flex flex-col items-start gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Wild</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>

                    </div>
                  </div>


                  <div className='flex flex-col items-start gap-1 '>
                  <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Horny</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                        
                    </div>
                  </div>

                </div>

                {/* SECTION4 */}

                <div className='flex items-start self-stretch gap-6'>

                  <div className='flex flex-col items-start gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Horny</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>

                    </div>
                  </div>


                  <div className='flex flex-col items-start gap-1 '>
                  <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Angry</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                        
                    </div>
                  </div>

                </div>

                {/* SECTION5 */}

                <div className='flex items-start self-stretch gap-6'>

                  <div className='flex flex-col items-start gap-1 '>
                    <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Aggressive</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>

                    </div>
                  </div>


                  <div className='flex flex-col items-start gap-1 '>
                  <div className='flex items-center self-stretch gap-1'>
                      <b className='text-base font-bold leading-5'>Polite</b>
                      <div className='h-[14px] w-[14px]'>
                        <Isymbol/>
                      </div>
                    </div>
                    <div className='flex flex-col items-end self-stretch gap-2 pt-3'>
                        
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

     
      {/* -------------------traits modal---------------------- */}

      <Modal
        open={openT}
        closeModal={handleCloseTraits}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex shrink-0 flex-col w-[506px] rounded-2xl h-max max-w-[550px] relative rounded`}
      >
        <div className='flex items-center justify-between border-b border-white/[0.08] p-8 pb-6'>
          <b className='text-2xl'>Traits</b>
          <CloseIcon className='text-white' onClick={handleCloseTraits}/>
        </div>

        <div className='border-b border-white/[0.08] px-8 py-4'>
          <input
            className='mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797] transition duration-100 focus:ring-1 focus:ring-[#5848BC]'
            type='text'
            placeholder='Search'
          />
          <div className={`flex-wrap gap-2 ${selectedOptionsT.length > 0 ? "flex pt-4": "hidden"}`}>
            <div className='flex flex-wrap gap-2 '>
              {selectedOptionsT.map((optionT) => (
                <div
                  key={optionT}
                  className='flex gap-2 p-1 py-[3px] px-2 text-sm rounded-lg bg-neutral-800'
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
        </div>

        {/* <hr className='mb-5 bg-zinc-900' /> */}
        <div className='px-6 pt-4'>
          <div className=''>
          <div className="font-bold text-[#979797] pb-3">A</div>
           
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
          <div className="font-bold text-[#979797] pb-3">B</div>          

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
          <div className="font-bold text-[#979797] pb-3">C</div>          

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

        <div className='relative mt-2'></div>

        <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
          <button
            onClick={clearSelection}
            className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] font-bold'
          >
            Cancel
          </button>
          <button
            onClick={handleCloseTraits}
            className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] px-5 py-[13px] font-bold bg-[#5848BC]'
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default PersonalityTraitsSection;
