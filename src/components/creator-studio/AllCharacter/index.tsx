import React from 'react'
import plusIcon from '../../../../public/assets/plus-large.png'
import Image from 'next/image'
import AvtarLarge from '../../../../public/assets/AvatarLarge.png'
import imageSquare from '../../../../public/assets/image-square.png'
import palette from '../../../../public/assets/palette.png'
import dotsHorizontal from '../../../../public/assets/dots-horizontal.png'

const data = [
  { name: 'Mika-chan', username: '@Mika-chan', img: '12K', palette: 'Anime' },
  { name: 'Sarah Scarlet', username: '@Mika-chan', img: '0', palette: 'None' },
  { name: 'Character 3', username: '', img: '934', palette: 'Style 3' },
  { name: 'Siberica Le', username: '@Mika-chan', img: '12K', palette: 'Anime' }
]
const Create = () => {
  return (
    <div>
      {/* Heading */}
      <div className='flex items-center justify-between'>
        <div className='flex items-start gap-2'>
          <h6 className='font-[18px] font-bold leading-6'>All Characters</h6>
          <h6 className='text-[#515151] font-[18px] font-bold leading-6'>4</h6>

        </div>

        <button className='flex py-2.5 px-4 justify-center items-center gap-1.5 self-stretch rounded-xl bg-[#5848BC] leading-5 text-sm font-bold '>
          <Image className='w-full h-full' src={plusIcon} alt={''} />
          New Character
        </button>
      </div>
      {/* row */}
      <div className='flex items-start gap-5 mt-[10px]'>

        {
          data.map((datas) => {
            return (
              <div className='flex h-[300px] flex-col items-start rounded-2xl bg-[#121212]'>
                <div className='self-stretch '>
                  <Image src={AvtarLarge} className='rounded-t-2xl' />
                </div>
                <div className='flex flex-col items-start px-5 py-4 gap-1.5 self-stretch'>
                  <div className='flex flex-col items-start gap-[2px] self-stretch'>
                    <div className='text-[15px] font-bold leading-5'>{datas.name}</div>
                    <div className='text-[#979797] text-[13px] font-semibold leading-[18px]'>{datas.username}</div>
                  </div>
                  <div className='flex items-center self-stretch justify-between '>
                    <div className='flex pr-[0px] items-start gap-4'>
                      {/* left */}
                      <div className='flex items-center gap-1'>
                        <div className='w-4 h-4'><Image src={imageSquare} /></div>
                        <div className='text-[13px] font-normal leading-[18px]'>{datas.img}</div>
                      </div>
                      {/* center */}
                      <div className='flex items-center gap-1'>
                        <div className='w-4 h-4'><Image src={palette} /></div>
                        <div className='text-[13px] font-normal leading-[18px]'>{datas.palette}</div>
                      </div>

                    </div>
                    <div className='w-6 h-6 '>
                      <Image src={dotsHorizontal} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Create
