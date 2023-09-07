import Image from 'next/image'
import React from 'react'
import pic from '../../../../public/assets/Collar.png';

const data = [
    {name:'Anime',img:pic},
    {name:'Artistic',img:pic},
    {name:'Red Dress',img:pic},
    {name:'Fantasy',img:pic},

    {name:'Photoreal',img:pic},
    {name:'Artistic',img:pic},
    {name:'Anime',img:pic},
    {name:'Fantasy',img:pic},
]
const AddStyleModal = () => {
  return (
    <div className='flex flex-col items-start self-stretch gap-4'>
        {/* self made */}
        <div className='flex flex-col items-start self-stretch gap-4 px-8 py-0'>
            <h6 className='self-stretch text-lg font-bold leading-6 text-white'>Self Made</h6>
            <div className='flex h-[550px] w-[800px] flex-col items-start gap-2.5 self-stretch  py-0'>
            <div className='flex flex-wrap items-start self-stretch gap-3 '>
                {
                    data.map((datas)=>{
                        return(
                            <>
                                <div
                
                className='group relative flex h-[174px] w-[175px] cursor-pointer justify-center overflow-hidden  rounded-xl bg-white/[0.05]  hover:bg-[#5848BC] '
              >
                <div
                  className={`flex  items-center rounded-t-sm p-0.5 group-hover:bg-[#5848BC] ${
                    datas.name === 'None'
                      ? 'h-[calc(100%-43.5px)] w-full justify-center'
                      : ''
                  }`}
                >
                  <Image src={datas.img} className='shrink-0 rounded-xl' />
                </div>

                <div className='focus:ring-violet-[#5848BC] absolute bottom-0 top-3/4 flex w-full items-center justify-center gap-2.5 bg-black/[0.80] p-2  focus:outline-none focus:ring active:bg-[#5848BC] group-hover:bg-[#5848BC]'>
                  <div className='overflow-hidden text-ellipsis whitespace-nowrap text-center text-[13px] font-semibold leading-[18px] group-hover:bg-[#5848BC]'>
                    {datas.name}
                  </div>
                </div>
              </div>
                            </>
                        )
                    })
                }
            </div>
            </div>
        </div>
        {/* Added Styles */}
        <div className=''>
            
            </div>
    </div>
  )
}

export default AddStyleModal