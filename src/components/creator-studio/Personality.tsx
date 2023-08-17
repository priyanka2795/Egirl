import React from 'react';

const Personality = () => {
  return (
    <>
        <div className='w-full'>
      <div className=' flex h-40 flex-row justify-evenly gap-3 px-2.5 py-3'>
        <div className='h-36 w-4/5 rounded-lg bg-zinc-900'>
          <div className='gap-10 pl-6 pt-4 '>
            <h2 className='pb-5'>
              <b>Base type</b>
            </h2>
            <p>Roleplay</p>
            <p>Conversational</p>
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

      <div className='mx-2.5 my-3 mb-4 h-24 max-w-full rounded-lg bg-zinc-900  pl-6 pt-4 '>
        <h2 className='pb-2'>
          <b>Likes</b>
        </h2>
        <p className='text-stone-700'>0/10</p>
      </div>

      <div className='mx-2.5 my-3 mb-4 h-24 max-w-full rounded-lg bg-zinc-900 pl-6 pt-4'>
        <h2 className='pb-2'>
          <b>Traits</b>
        </h2>
        <p className='text-stone-700'>0/10</p>
      </div>

      <div className='mx-2.5 my-3  max-w-full rounded-lg bg-zinc-900 pb-8 pl-5 pr-5 pt-20'>
      
        <div className='flex flex-row gap-3 '>
        <div className='h-36 w-3/5 rounded-lg bg-stone-800'></div>
        <div className='h-36 w-3/5 rounded-lg bg-stone-800'></div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Personality;
