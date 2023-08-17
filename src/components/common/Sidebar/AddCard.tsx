import React from 'react'
interface AddCardProps{
    seletedAddCard?:string
}
const AddCardSidebar = ({seletedAddCard}:AddCardProps) => {
  console.log(seletedAddCard,'activeItem')
  return (
   <div className="top-4 left-4 bg-[#1A1A1A] pl-6 py-4 pr-4 absolute">
Hello Card
   </div>
  )
}

export default AddCardSidebar