import React, { useState } from 'react';
import Image from 'next/image';
import plusIcon from '../../../public/assets/plus-large.png';
import userAddIcon from '../../../public/assets/user-add-icon.png';
import CreateCharacterModal from './CreateCharacterModal';
function CreateCharacter() {
  const [createCharacter, setCreateCharacter] = useState<boolean>(false);
  return (
    <>
      <div className='flex h-[470px] w-full flex-col items-center justify-center'>
        <div className='w-max rounded-full bg-white/[0.05] p-5'>
          <div className='h-6 w-6'>
            <Image className='h-full w-full' src={userAddIcon} alt={''} />
          </div>
        </div>
        <div className='mt-3 text-[13px] text-[#979797]'>
          You don't have any characters. <br></br>
          Click on the button to create one
        </div>
        <button
          className=' mt-3 flex items-center gap-2 rounded-xl bg-white/[0.08] px-4 py-2.5 text-sm font-bold'
          onClick={() => setCreateCharacter(true)}
        >
          <Image src={plusIcon} alt='' />
          Create character
        </button>
      </div>
      {createCharacter && (
        <CreateCharacterModal closeState={setCreateCharacter} />
      )}
    </>
  );
}

export default CreateCharacter;
