import React from 'react'
import Content from '../Content'

const styleGeneratorContentData = [
  {
    title:"What is the Style Generator?",
    id:"#what_is_styleGenerator"
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
function StyleGeneratorContent() {
  return (
    <div className='w-[990px] py-2 relative z-[60]'>
     <Content contentData={styleGeneratorContentData} />
    </div>
  )
}

export default StyleGeneratorContent