import { Emoji } from 'emoji-picker-react'
import React from 'react'
import ArrowDown from './svg/solid-arrow-down.svg'

const emojiList =["2764-fe0f" , '1f44d' , '1f44e' ,'1f62e','1f602','2049-fe0f']

interface chatReactionEmoji{
  setShowSeletedEmoji: any
}
const ChatReactionEmoji = ({setShowSeletedEmoji}:chatReactionEmoji) => {
  return (
   <div className="absolute right-0 top-[-70px]">
     <div className="flex gap-3 px-5 py-4 bg-[#1A1A1A] rounded-full w-max relative">
     <div className="absolute bottom-[-10px] mx-auto w-max right-[30px] bg-red">
      <ArrowDown/>
    </div>
      {emojiList.map((data , index) =>{
        return(
          <div key={index} className="" onClick={() => setShowSeletedEmoji(data)}>
              <Emoji unified={data} size={25} />
          </div>
        )
      })}
    
  
    </div>
   </div>
  )
}

export default ChatReactionEmoji