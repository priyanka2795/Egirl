import React from 'react'
import Content from '../Content'

const monetizationContentData = [
  {
    title:"What is Monetization?",
    id:"#what_is_monetization"
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
function MonetizationContent() {
   return (
    <div className='w-[990px] py-2 relative z-[60]'>
     <Content contentData={monetizationContentData} />
    </div>
  )
}

export default MonetizationContent
