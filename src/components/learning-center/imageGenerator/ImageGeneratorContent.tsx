import React from 'react'
import Content from '../Content'

const imgGeneratorContentData = [
  {
    title:"What is the Image Generator?",
    id:"#what_is_imgGenerator"
  },
  {
    title:"How it works?",
    id:"#how_it_works"
  },
  {
    title:"Prompt",
    id:"#prompt"
  }
]
function ImageGeneratorContent() {
  return (
    <div className='w-[990px] py-2 relative z-[60]'>
      <Content contentData={imgGeneratorContentData} />
    </div>
  )
}

export default ImageGeneratorContent