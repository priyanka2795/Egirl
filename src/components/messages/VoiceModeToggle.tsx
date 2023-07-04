import React from 'react';
import InfoIcon from './svg/info-icon.svg';
interface Props {
  handleVoiceMode: () => void;
  voiceModeState: boolean;
}
const VoiceModeToggle = ({ handleVoiceMode, voiceModeState }: Props) => {
  console.log(voiceModeState, 'voiceModeState');
  return (
    <div className='flex items-center gap-2'>
      <div
        onClick={handleVoiceMode}
        className={`toggler h-6 w-10 cursor-pointer rounded-2xl pt-0.5 shadow ${
          voiceModeState ? 'bg-[#5848BC]' : 'bg-[#8d8d8d]'
        }`}
      >
        <div
          className={`h-5 w-5 rounded-full bg-white transition ${
            voiceModeState ? 'ml-[18px] ' : 'ml-[2px]'
          }`}
        />
      </div>
      <h4 className='text-sm text-white'>Voice Mode</h4>
      <InfoIcon />
    </div>
  );
};

export default VoiceModeToggle;
