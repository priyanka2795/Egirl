import React, { useState } from 'react';
import Image from 'next/image';
import plusIcon from '@/assets/plus-white.webp';
import userAddIcon from '@/assets/user-plus.webp';
import CreateCharacterModal from './CreateCharacterModal';
import CharacterAdd from '@components/creator-studio/NewCharacter/CharacterAdd';

interface CreateCharacter {
  setUserGuide?: any;
  setIsTourOpen?: any;
  UserGuide?: any;
  setTourCount?: React.Dispatch<React.SetStateAction<number>>;
  setCreateCharacterData?: any;
  setUserDetails?: any;
  setActiveProfile?: any;
  createCharacterData?:any;
  setCreateCharacterToggle:React.Dispatch<React.SetStateAction<boolean>>
  createCharacterToggle:boolean
}

function CreateCharacter({
  setUserGuide,
  setIsTourOpen,
  setTourCount,
  createCharacterData,
  setCreateCharacterData,
  UserGuide,
  setActiveProfile,
  setCreateCharacterToggle,
  createCharacterToggle
}: CreateCharacter) {
  const [createCharacter, setCreateCharacter] = useState<boolean>(false);
  const [welcomeModal, setWelcomeModal] = useState<boolean>(false);

  const handleNewCharacter = () => {
    setWelcomeModal(false)
    setCreateCharacter(true)
  }
  return (
    <>
      <div className='flex h-[470px] w-full flex-col items-center justify-center'>
        <div className='w-max rounded-full bg-white/[0.05] p-4'>
          <div className='w-6 h-6'>
            <Image className='w-full h-full' src={userAddIcon} alt={''} />
          </div>
        </div>
        <div className='mt-3 text-center text-[13px] text-[#979797]'>
          You don't have any characters.<br></br>
          Click on the button to create one
        </div>
        <button
          className=' font-bold mt-3 flex items-center gap-2 rounded-xl bg-white/[0.08] px-4 py-2.5 text-sm'
          onClick={() => setWelcomeModal(true)}
        >
          <Image src={plusIcon} alt='' />
          <p className='text-sm font-bold leading-5'>Create character</p>
        </button>
      </div>
      {welcomeModal && <CreateCharacterModal closeState={setWelcomeModal} setCreateCharacter={handleNewCharacter} />}

      {createCharacter && (
        <CharacterAdd
          NewCharacterClose={setCreateCharacter}
          setCreateCharacterData={setCreateCharacterData}
          setUserGuide={setUserGuide}
          setIsTourOpen={setIsTourOpen}
          setTourCount={setTourCount}
          UserGuide={UserGuide}
          createCharacterData={createCharacterData}
          setActiveProfile={setActiveProfile}
          setCreateCharacterToggle={setCreateCharacterToggle}
          createCharacterToggle={createCharacterToggle}
        />
      )}
    </>
  );
}

export default CreateCharacter;
