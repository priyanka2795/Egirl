import React from 'react';

interface TinderTabProps {
    largeContentState:boolean
  largeContent?: React.Dispatch<React.SetStateAction<boolean>>;
  // showSingleProfile?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  showSingleProfile?: any;
}
const TinderCardTab = ({ largeContent ,largeContentState ,showSingleProfile }: TinderTabProps) => {

  return (
    <>
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
              The term "roleplay" refers to a form of interactive storytelling
              or improvisational acting in which participants take on the roles
              of fictional characters and engage in a simulated scenario or
              setting.
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
      {largeContentState === true && (
        <>
          <div className='py-5 text-base font-normal leading-tight text-white'>
            What do you guys think of my goth cosplay? uwu -
            私のゴスコスプレについてどう思いますか？
          </div>
          <div className='inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-white bg-opacity-10 px-4 py-2.5' onClick={() => {showSingleProfile(true)}}>
            <div className='text-sm font-bold leading-tight text-white'>
              View profile
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TinderCardTab;
