import React,{useState} from 'react';
import Image from 'next/image'
import arrowDown from '../../../public/assets/arrow-down.png';

const Dropdown = ({buttonTitle,options}:any) => {
    const [openDropdown,setOpenDropdown]=useState(false);


  return (
    <>
    <div className='flex cursor-pointer gap-2 border-l border-white/10 pl-2 relative'>
                <p onClick={()=>setOpenDropdown(!openDropdown)}>{buttonTitle}</p>
                <Image style={openDropdown ? {transform:'rotate(-180deg)'} : {transform:'rotate(0deg)'}} src={arrowDown} alt='' className='object-cover transition-all duration-300' />
                <div style={openDropdown ? {opacity:1,pointerEvents:'all'} : {opacity:0,pointerEvents:'none'}} className="transition-all duration-300 dropdown_list w-fit h-fit bg-main-background border-2 border-main-grey absolute top-7 z-50 right-[5px] p-2 rounded-xl whitespace-nowrap">
                  <ul>
                    {options?.map((option,index)=>(
                        <li key={index} className='px-4 py-2'>{option}</li>
                    ))}
                  </ul>
                </div>
                </div>
    </>
    
  )
}

export default Dropdown
