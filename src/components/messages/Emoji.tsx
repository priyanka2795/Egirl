//@ts-nocheck

import EmojiPicker from 'emoji-picker-react';
import React from 'react';

interface EmojiProp {
  setMessage?: any;
}
const Emoji = ({ setMessage }: EmojiProp) => {
  return (
    <EmojiPicker
      searchDisabled={true}
      theme='dark'
      autoFocusSearch={true}
      skinTonesDisabled={true}
      width='302px'
      // height='224px'
      size='16'
      onEmojiClick={(emojiObject) =>
        setMessage((prevMsg: any) => prevMsg + emojiObject.emoji)
      }
    />
  );
};

export default Emoji;
