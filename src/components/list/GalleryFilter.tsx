import Image from 'next/image';
import React from 'react'
import searchIcon from '../../../public/assets/search-icon.png'
import arrowDownArrowUp from '../../../public/assets/arrow-down-arrow-up.png'
import filterIcon from '../../../public/assets/filter-icons.png'
import micaChan from '../../../public/assets/mikaChan.png'
import mirandal from '../../../public/assets/mirandalImg.png'
import model2 from '../../../public/assets/golden-shoulder-girl.png'
import model4 from '../../../public/assets/micaChan-2.png'
import sarahScarlet from '../../../public/assets/sarahScarlet.png'
import blueTick from '../../../public/assets/badge-check.png'


const GalleryFilter = () => {
  return (
    <div className='flex flex-col items-start gap-[14px] self-stretch px-8 py-4'>
        <div className='flex items-center gap-[33rem] justify-between'>
            <div className='flex flex-col w-[320px] items-start justify-center gap-[6px] shrink-0 rounded-[12px]'>
                <div className='flex items-start self-stretch gap-2 py-[10px] pl-[14px] pr-[12px] rounded-[12px] bg-white/10'>
                    <Image className='w-[20px] h-[20px]' src={searchIcon} alt={''}/>
                    <div className='text-[#979797] text-sm font-normal'>Search</div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Image className='w-[20px] h-[20px]' src={arrowDownArrowUp} alt={''}/>
                <Image className='w-[20px] h-[20px]' src={filterIcon} alt={''}/>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-[14px] self-stretch '>
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='object-cover' src={micaChan} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='object-cover' src={model2} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[185.987px] h-[296.816px]' src={mirandal} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[181.931px] h-[217.469px]' src={model4} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[181.931px] h-[281.388px]' src={sarahScarlet} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-5 gap-[14px] self-stretch'>
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='object-cover' src={micaChan} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='object-cover' src={model2} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[185.987px] h-[296.816px]' src={mirandal} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[181.931px] h-[217.469px]' src={model4} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[181.931px] h-[281.388px]' src={sarahScarlet} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-5 gap-[14px] self-stretch'>
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='object-cover' src={micaChan} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='object-cover' src={model2} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[185.987px] h-[296.816px]' src={mirandal} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[181.931px] h-[217.469px]' src={model4} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start self-stretch overflow-hidden rounded-2xl bg-white/10'>
                <div className='flex self-stretch justify-center max-h-[180px] h-full overflow-hidden'>
                    <Image className='w-[181.931px] h-[281.388px]' src={sarahScarlet} alt={''} />
                </div>
                <div className='flex flex-col items-start self-stretch gap-2 p-4'>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='text-[#FFFFFF] text-sm font-semibold'>Sarah Scarlet</div>
                        <Image className='w-[16px] h-[16px]' src={blueTick} alt={''}/>
                    </div>
                    <div className='flex items-center self-stretch gap-1'>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>General</div>
                        </div>
                        <div className='flex items-center gap-1 px-[10px] py-[4px] rounded-lg bg-white/10'>
                            <div className='text-[#FFFFFF] text-center text-xs font-normal'>+2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryFilter;
