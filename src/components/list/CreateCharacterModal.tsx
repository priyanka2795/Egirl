import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import CloseIcon from '../../../public/assets/svgImages/close-icon.svg';
import CharacterAdd from '@components/creator-studio/NewCharacter/CharacterAdd';

interface createCharacterProps {
  closeState: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateCharacterModal({ closeState }: createCharacterProps) {
  const [showVoiceRequest, setShowVoiceRequest] = useState(false);
  const [showNewCharacter, setShowNewCharacter] = useState(false);
  const [createCharacter, setCreateCharacter] = useState(false);

  const handleVoiceRequest = () => {
    closeState(true);
    setShowVoiceRequest(true);
  };
  const handleNewCharacter = () => {
    closeState(true);
    setShowNewCharacter(true);
  };

  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col gap-6 w-full  rounded-2xl h-max bg-[#121212] max-w-[470px] relative'
        closeModal={() => closeState(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex justify-between border-b-[1px] border-zinc-800 px-6 py-4 '>
          <h3 className='text-[18px] font-bold leading-loose text-white '>
            {showNewCharacter
              ? 'New character'
              : showVoiceRequest
              ? 'Voice request'
              : 'Welcome Adam!'}
          </h3>
          <div className='flex items-center gap-5 '>
            <div className='cursor-pointer ' onClick={() => closeState(false)}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className='px-6 pb-6'>
          {showNewCharacter ? (
            <>
              <p className='text-[15px] font-normal leading-5'>
                Add a character to learn more about the Creator Studio's
                features and capabilities.
              </p>
            </>
          ) : showVoiceRequest ? (
            <>
              <div className=' flex h-[148px] w-full items-center justify-center  self-stretch rounded-[14px] bg-white/[0.05]'>
                <p className='text-[15px] text-white/[0.24]'>
                  here will be illustration
                </p>
              </div>
              <p className='mt-7 text-[15px] font-normal leading-5'>
                With Creator Studio, your characters can respond and engage in
                dynamic conversations through voice requests.
              </p>
              <p className='mt-4 text-[15px] font-normal leading-5'>
                Simply activate the voice interaction option, and witness your
                characters coming to life wit their own unique voices.
              </p>
            </>
          ) : (
            <>
              <h6 className='mb-4 text-[15px] font-bold leading-5'>
                Welcome to Creator Studio!
              </h6>
              <p className='text-[15px] font-normal leading-5'>
                We stand apart from conventional character creation platforms in
                some truly unique ways, and we're excited to introduce them to
                you.
              </p>
            </>
          )}

          <div className='flex justify-end '>
            {showNewCharacter ? (
              <button
                className=' mt-6 rounded-xl bg-[#5848BC] px-5 py-2.5 text-lg font-bold leading-[22px]'
                onClick={() => {
                  setCreateCharacter(true);
                }}
              >
                Create character
              </button>
            ) : showVoiceRequest ? (
              <button
                className=' mt-6 rounded-xl bg-[#5848BC] px-5 py-2.5 text-lg font-bold leading-[22px]'
                onClick={handleNewCharacter}
              >
                Next
              </button>
            ) : (
              <button
                className=' mt-6 rounded-xl bg-[#5848BC] px-5 py-2.5 text-lg font-bold leading-[22px]'
                onClick={handleVoiceRequest}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </Modal>
      {createCharacter && (
        <CharacterAdd NewCharacterClose={setCreateCharacter} />
      )}
    </>
  );
}

export default CreateCharacterModal;
