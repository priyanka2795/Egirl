import React from 'react'
import Content from '../Content'

const giftContentData = [
  {
    title:"What are Gifts?",
    id:"#what_are_gifts"
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
function GiftContent() {
  return (
    <div className='w-[990px] py-2 relative z-[60]'>
      <Content contentData={giftContentData} />
    </div>
  )
}

export default GiftContent
