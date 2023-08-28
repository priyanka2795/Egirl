import React from 'react';
import ReactDOM from 'react-dom/client';
import { AudioRecorder } from 'react-audio-voice-recorder';
import SendIcon from './svg/send-icon.svg';

const addAudioElement = (blob: any) => {
  const url = URL.createObjectURL(blob);

  const audio = document.createElement('audio');
  audio.src = url;
  audio.controls = true;
  const audioId:any = document.getElementById('audio-get');
  audioId.appendChild(audio);
};

interface RecordVoiceInterface {
  handleMessage?: () => void;
}
const RecordVoice = ({ handleMessage }: RecordVoiceInterface) => {
  return (
    <React.StrictMode>
      <div className='relative flex justify-between w-full'>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true
          }}
          downloadOnSavePress={true}
          downloadFileExtension='webm'
        />
        <button
          className='absolute right-0 top-[8px]                                                                                                                                                                                                                               '
          onClick={() => 
             handleMessage
          }
        >
          <SendIcon />
        </button>
      </div>
    </React.StrictMode>
  );
};

export default RecordVoice;
