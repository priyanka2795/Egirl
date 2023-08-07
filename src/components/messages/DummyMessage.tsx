import React from 'react';
import Message from './ChatTypes/Message';
import Date from './ChatTypes/Date';

const DummyMessage = () => {
  return (
    <>
      <Date date='May, 11 2023' />
      {/* <Message
          src='/dummy-char.png'
          alt={`Character Profile Picture ${0}`}
          time='09:22'
          message='hey, how are you?'
          name='You'
        />
        <Message
          src='/dummy-char.png'
          alt={`Character Profile Picture ${1}`}
          time='09:23'
          message='Doing well, thank you. How may I assist you?'
          name='Mika-chan'
        /> */}
      <Message
        src='/dummy-char.png'
        alt={`Character Profile Picture ${0}`}
        time='09:24'
        message='It’s me :) '
        name='Mika-chan'
        gridImage={true}
      />

      <Message
        src='/dummy-char.png'
        alt={`Character Profile Picture ${1}`}
        time='09:23'
        message='Some text'
        name='Mika-chan'
        messageIcons={true}
      />

      <Message
        src='/dummy-char.png'
        alt={`Character Profile Picture ${2}`}
        time='09:23'
        message='Hey Mika-chan, can you send me a picture of you with your arms raised while wearing a black |'
        name='You'
        messageIcons={true}
      />

      <Message
        src='/dummy-char.png'
        alt={`Character Profile Picture ${2}`}
        time='09:23'
        isLast={true}
        message='Hey Mika-chan, can you send me a picture of you with your arms raised while wearing a black dress and black bow?'
        name='Mika-chan'
        messageIcons={true}
        regenerateIcon={true}
        rateResponse={true}
      />
    </>
  );
};

export default DummyMessage;
