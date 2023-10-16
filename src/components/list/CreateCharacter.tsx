import React, { useState } from 'react';
import Image from 'next/image';
import plusIcon from '../../../public/assets/plus-large.png';
import userAddIcon from '../../../public/assets/user-add-icon.png';
import CreateCharacterModal from './CreateCharacterModal';

interface CreateCharacter {
  SetUserGuide: any;
  SetIsTourOpen: any;
  setTourCount: React.Dispatch<React.SetStateAction<number>>;
}

function CreateCharacter({
  SetUserGuide,
  SetIsTourOpen,
  setTourCount
}: CreateCharacter) {
  const [createCharacter, setCreateCharacter] = useState<boolean>(false);
  return (
    <>
      <div className='flex h-[470px] w-full flex-col items-center justify-center'>
        <div className='w-max rounded-full bg-white/[0.05] p-5'>
          <div className='w-6 h-6'>
            <Image className='w-full h-full' src={userAddIcon} alt={''} />
          </div>
        </div>
        <div className='mt-3 text-[13px] text-[#979797]'>
          You don't have any characters. <br></br>
          Click on the button to create one
        </div>
        <button
          className=' font-bold mt-3 flex items-center gap-2 rounded-xl bg-white/[0.08] px-4 py-2.5 text-sm'
          onClick={() => setCreateCharacter(true)}
        >
          <Image src={plusIcon} alt='' />
          Create character
        </button>
      </div>
      {createCharacter && (
        <CreateCharacterModal
          closeState={setCreateCharacter}
          SetUserGuide={SetUserGuide}
          SetIsTourOpen={SetIsTourOpen}
          setTourCount={setTourCount}
        />
      )}
    </>
  );
}

export default CreateCharacter;
