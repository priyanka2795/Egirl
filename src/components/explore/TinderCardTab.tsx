import React from 'react'

const TinderCardTab = () => {
  return (
    <div className='inline-flex items-start justify-start gap-1.5'>
    <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px]'>
      <div className='text-center text-sm font-normal leading-[18px] text-white'>
        NSFW
      </div>
    </div>
    <div className='group relative flex cursor-pointer items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px] hover:bg-opacity-20'>
      <div className='text-center text-sm font-normal leading-[18px] text-white'>
        Roleplay
      </div>
      <div className='absolute -left-[130px] bottom-[30px] hidden w-[323px] bg-zinc-900 p-4 group-hover:block'>
        <h5 className='text-[15px] font-semibold'>Roleplay</h5>
        <p className='text-xs text-white text-opacity-80'>
          The term "roleplay" refers to a form of interactive
          storytelling or improvisational acting in which participants
          take on the roles of fictional characters and engage in a
          simulated scenario or setting.
        </p>
      </div>
    </div>
    <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px]'>
      <div className='text-center text-sm font-normal leading-[18px] text-white'>
        Roleplay
      </div>
    </div>
    <div className='flex items-center justify-start gap-1 rounded-md bg-white bg-opacity-10 px-2 py-[3px]'>
      <div className='text-center text-sm font-normal leading-[18px] text-white'>
        Roleplay
      </div>
    </div>
  </div>
  )
}

export default TinderCardTab