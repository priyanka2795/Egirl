import React from 'react'
import Content from '../Content'

const partnerContentData = [
  {
    title:"Benefits of joining the Partner Program",
    id:"#benefits_of_partnerProgram"
  },
  {
    title:"How it works?",
    id:"#how_it_works"
  },
  {
    title:"For Creators",
    id:"#for_creators"
  }
]
function PartnerProgramContent() {
   
  return (
    <div className='w-[995px] py-2 relative z-[60]'>
      <Content contentData={partnerContentData} />
    </div>
  )
}

export default PartnerProgramContent