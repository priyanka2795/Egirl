import React from 'react'

const data = [
  {
    title:"Characters that do not adhere to fair use laws"
  },
  {
    title:"Characters that infringe upon copyright laws"
  },
  {
    title:`AI versions of real people that aren't you, AKA "Deepfake" characters`
  }
]
function EligibleCharacters() {
  return (
    <div>
        <div className='pt-4 text-[27px] font-black text-white' id='how_it_work'>
        Who is not eligible?
      </div>
      <p className='text-[16px] text-[#979797]'>
        These are the types of characters that aren't eligible for the Egirls Partner Program.
      </p>
      {
        data.map((ele,index)=>{
          return(
            <div key={index} className='rounded-[20px] border border-white/[0.16] p-5 my-4'>
                    <div className='text-[15px] font-black '>{index + 1}. {ele.title}</div>
                    <div className='text-[15px] text-[#979797] pt-1'>
                      Characters must adhere to fair use laws, especially characters that are utilizing 
                      characters from other organizations (non-original characters). Learn more about what
                      constitutes fair use &nbsp;<a className='underline text-[#5848BC]' href="#">here.</a>
                    </div>
                    <div className='text-[15px] text-[#979797] pt-3'>
                      Most notably, non-original characters must be parodies of the character in question, and
                      NOT satire of the character.
                    </div>
                </div>
          )
        })
      }
    </div>
  )
}

export default EligibleCharacters