import React from 'react'
import Content from '../Content'

const characterVoiceContentData = [
  {
    title:"What is a Character Voice?",
    id:"#what_is_characterVoice"
  },
  {
    title:"How it works?",
    id:"#how_it_works"
  },
  {
    title:"Features",
    id:"#features"
  }
]
function VoiceContent() {
  return (
    <div className='w-[990px] py-2 relative z-[60]'>
      <Content contentData={characterVoiceContentData} />
    </div>
  )
}

export default VoiceContent