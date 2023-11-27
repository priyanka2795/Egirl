import React, { useState } from 'react';
import Image from 'next/image';
import plusIcon from '../../../public/assets/plus-white.png';
import userAddIcon from '../../../public/assets/user-plus.png';
import CreateCharacterModal from './CreateCharacterModal';

interface CreateCharacter {
  setUserGuide: any;
  setIsTourOpen: any;
  UserGuide: any;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
  setCreateCharacterData: any;
  setActiveProfile:any
}

function CreateCharacter({
  setUserGuide,
  setIsTourOpen,
  setTourCount,
  setCreateCharacterData,
  UserGuide,
  setActiveProfile
}: CreateCharacter) {
  const [createCharacter, setCreateCharacter] = useState<boolean>(false);
  return (
    <>
      <div className='flex h-[470px] w-full flex-col items-center justify-center'>
        <div className='w-max rounded-full bg-white/[0.05] p-4'>
          <div className='w-6 h-6'>
            <Image className='w-full h-full' src={userAddIcon} alt={''} />
          </div>
        </div>
        <div className='mt-3 text-[13px] text-[#979797] text-center'>
          You don't have any characters.<br></br>
          Click on the button to create one
        </div>
        <button
          className=' font-bold mt-3 flex items-center gap-2 rounded-xl bg-white/[0.08] px-4 py-2.5 text-sm'
          onClick={() => setCreateCharacter(true)}
        >
          <Image src={plusIcon} alt='' />
          <p className='text-sm font-bold leading-5'>Create character</p>
        </button>
      </div>
      {createCharacter && (
        <CreateCharacterModal
          closeState={setCreateCharacter}
          setUserGuide={setUserGuide}
          setIsTourOpen={setIsTourOpen}
          setTourCount={setTourCount}
          setCreateCharacterData={setCreateCharacterData}
          UserGuide={UserGuide}
          setActiveProfile={setActiveProfile}
        />
      )}
    </>
  );
}

export default CreateCharacter;
