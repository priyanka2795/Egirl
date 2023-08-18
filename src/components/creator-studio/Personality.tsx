import React from 'react';
import { useState } from 'react';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 700,
  bgcolor: 'rgb(26, 26, 26)',
  border: '2px solid #000',
  borderRadius: '1em',
  boxShadow: 24,
  p: 4
};

const Personality = () => {
  const [modalDefaultOpen, setModalDefaultOpen] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const likeModal = () => {
    setModalDefaultOpen(true);
  };

  return (
    <>
      <div className='w-full'>
        <div className=' flex h-40 flex-row justify-evenly gap-3 px-2.5 py-3'>
          <div className='h-36 w-4/5 rounded-lg bg-zinc-900'>
            <div className='gap-10 pl-6 pt-4 '>
              <h2 className='pb-5'>
                <div className='flex gap-2'>
                  <b>Base type</b>
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
              <input type='radio' name='baseType' /> <label>Roleplay</label>
              <br />
              <input type='radio' name='baseType' />{' '}
              <label>Conversational</label>
            </div>
          </div>
          <div className='h-36 w-4/5 rounded-lg bg-zinc-900'>
            <div className='gap-10 pl-6 pt-4 '>
              <h2 className='pb-5'>
                <b>Creativity</b>
              </h2>

              <p className='text-stone-700'>
                Use the slider to adjust creativity
              </p>

              
            </div>
          </div>
        </div>

        <div className='mx-2.5 my-3 mb-4 flex h-24 max-w-full rounded-lg bg-zinc-900 pl-6 pt-4 '>
          <div className='mr-96'>
            <h2 className='pb-2'>
              <b>Likes</b>
            </h2>
            <p className='text-stone-700'>0/10</p>
          </div>
          <button className='border-radius-12px ml-96' onClick={handleOpen}>
            + Add
          </button>
        </div>

        <div className='mx-2.5 my-3 mb-4 flex h-24 max-w-full rounded-lg bg-zinc-900 pl-6 pt-4'>
          <div className='mr-96'>
            <h2 className='pb-2'>
              <b>Traits</b>
            </h2>
            <p className='text-stone-700'>0/10</p>
          </div>
          <button className='ml-96' onClick={handleOpen}>
            + Add
          </button>
        </div>

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
          <div className='flex flex-row gap-3 '>
            
              <div className='h-32 w-3/5 rounded-lg bg-stone-800'></div>


            <div className='h-32 w-3/5 rounded-lg bg-stone-800'></div>
          </div>
        </div>
      </div>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <b>Likes</b>
            <hr className='mb-5 bg-zinc-900' />

            

            <form className='mb-8 '>
              <div className='relative '>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center bg-zinc-900 pl-3'>
                  <svg
                    className='h-4 w-4 bg-zinc-900 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='default-search'
                  className='block  w-full rounded-lg border   bg-zinc-900 p-4 pl-10 text-sm   text-gray-900 dark:text-white   dark:placeholder-gray-400'
                  placeholder='Search'
                  required
                />
              </div>
            </form>
            <hr className='bg-zinc-900 mb-5' />
            <div className='mb-2 mt-2'>
              <b>A</b>
              <br/>
            <div className='flex flex-wrap gap-2 mt-2'>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Anime
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Animal Crossing
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Artistic Photography
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              ASMR Content
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Aesthetically
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Astrology
            </button>
            </div>
            </div>

            
            <div >
              <b>B</b>
              <br/>
            <div className='flex flex-wrap gap-2 mt-2'>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Body Modification
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Book Clubs
            </button>
          
            </div>
           
            <div className='mb-2 mt-2'>
              <b>C</b>
              <br/>
            <div className='flex flex-wrap gap-2 mt-2'>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Camping
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Cat Videoas
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Collectables
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Cosplaying
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Cute plushies
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Cute pots and plants
            </button>
            </div>
            </div>

            <div className='mb-2 mt-2'>
              <b>D</b>
              <br/>
            <div className='flex flex-wrap gap-2 mt-2'>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Dream
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Drama Movies
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Design
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Drawings
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Dancing
            </button>
            <button className='rounded-full bg-blue-500 bg-zinc-800 px-4 py-2 text-sm font-thin text-white'>
              Dling
            </button>
           
            </div>
            </div>
            </div>

           
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal> */}
    </>
  );
};

export default Personality;
