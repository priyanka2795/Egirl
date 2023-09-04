import React, { useState } from 'react';
import grid from '../../../../public/assets/grid-horizontal.png';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import Image from 'next/image';
import UnSelectIcon from "../svg/short_border.svg";
import SelectIcon from "../svg/short_select.svg";
import Search from '../../../../public/assets/search-alt (1).png';
import crossIcon from '../../../../public/assets/xmark (1).png';
import AlbumDelete from './albumDelete';

interface ViewImagesTab {
  tabContent: any;
  exploreSelectedTab: any;
  setExploreSelected: any;

}
const Albumshort = ['Default', 'Sort ascending', 'Sort descending'];
const short = ['Newest first', 'Oldest first'];

const FilterData = {
  Modal: ['All models', 'Artistic', 'Fantasy', 'Photoreal', 'Stable (Old)', 'Model 1', 'Model 1', 'Model 1', 'Model 1', 'Model 1', 'Model 1', 'Model 1'],
  Style: ['All style', 'Label', 'Label', 'Label', 'Label'],

};

const ViewImagesTab = ({ tabContent, exploreSelectedTab, setExploreSelected }: ViewImagesTab) => {
  const [shortSelect, setShortSelect] = useState(false);
  const [shortTab, setShortTab] = useState(1);
  const [isActive, setActive] = useState(false);
  const [albumShortSelect, setAlbumShortSelect] = useState(false);
  const [albumShortTab, setAlbumShortTab] = useState(1);
  const [viewAll, setViewAll] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);

  const handleExploreSelected = (e: any) => {
    setExploreSelected(e.target.innerText);

  };

  const AlbumSelectShort = (index: any) => {
    setAlbumShortTab(index)
  }
  const SelectShort = (index: any) => {
    setShortTab(index)
  }

  return (
    <div className='flex justify-between pb-5 border-b border-white/[0.08]'>

      <div className='flex items-start justify-start gap-3'>
        {tabContent.map((items: any, index: any) => {
          return (
            <div
              key={index}
              onClick={(e) => handleExploreSelected(e)}
              className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${exploreSelectedTab === items
                ? ' bg-white bg-opacity-20 text-white  '
                : 'text-neutral-400'
                }`}
            >
              {items}
            </div>
          );
        })}
      </div>

      <div className='flex items-center'>
        {exploreSelectedTab === 'Albums' ?
          <>
            <button className=''>
              <div className={`relative ${isActive ? "w-[360px]" : 'w-[30px]'}`} >
                <span className={`absolute left-2 ${isActive ? 'top-[10px]' : 'top-2'}
            `} onClick={() => setActive(!isActive)}
                ><Image className='h-[24px] w-[24px]' src={Search} alt={''} /></span>
                <input type="text" className={` border-none rounded-[14px] h-10 px-4 placeholder:text-[#979797] active:border-[#FFFFFF52] focus:border-[#FFFFFF52] focus:ring-transparent text-[14px] w-full ${isActive ? "bg-[#FFFFFF0D] pl-10" : 'bg-transparent pl-4'}`} placeholder='Search' />
                {isActive ?
                  <span className='absolute right-2 top-2' onClick={() => setActive(!isActive)} ><Image className='w-full h-full' src={crossIcon} alt={''} /></span> : ''
                }
              </div>
            </button>
            <div className='flex relative'>
              <div className='p-2 cursor-pointer' onClick={() => setAlbumShortSelect(!albumShortSelect)}>
                <Image src={arrowUpArrowDown} alt={''} />
              </div>

              {albumShortSelect &&
                <div className='w-[170px] rounded-[14px] shadow-[0px 8px 12px 0px #0000001F] bg-[#1A1A1A] absolute top-10 right-2 z-50 py-4 px-3 flex flex-col gap-2'>
                  <>
                    {Albumshort.map((item, index) => (
                      <div className='flex items-center gap-2 cursor-pointer' onClick={() => AlbumSelectShort(index)}>
                        {albumShortTab == index ? <SelectIcon />
                          : <UnSelectIcon />
                        }
                        <p>{item}</p>
                      </div>
                    ))}
                  </>
                </div>
              }
            </div>
          </>
          :
          <>
            <div className='flex relative'>
              <div className='p-2 cursor-pointer' onClick={() => setShortSelect(!shortSelect)}>
                <Image src={arrowUpArrowDown} alt={''} />
              </div>

              {shortSelect &&
                <div className='w-[170px] rounded-[14px] shadow-[0px 8px 12px 0px #0000001F] bg-[#1A1A1A] absolute top-10 right-2 z-50 py-4 px-3 flex flex-col gap-2'>
                  <>
                    {short.map((item, index) => (
                      <div className='flex items-center gap-2 cursor-pointer' onClick={() => SelectShort(index)}>
                        {shortTab == index ? <SelectIcon />
                          : <UnSelectIcon />
                        }
                        <p>{item}</p>
                      </div>
                    ))}
                  </>
                </div>
              }
            </div>

            <div className='relative'>
              <button className='' onClick={() => setFilterToggle(!filterToggle)}>
                <Image src={filter} alt={''} />
              </button>
              {filterToggle &&

                <div className='bg-[#272727] p-6 rounded-[14px] w-[346px] shadow-[0px 8px 12px 0px #0000001F] absolute top-7 right-0 z-50 flex flex-col gap-5'>
                  <div className='flex justify-between items-center'>
                    <h5 className='font-bold text-lg'>Filter</h5>
                    <p className='text-[#979797]'>Clear all</p>
                  </div>
                  <div className='relative'>
                    <div className='absolute left-2 top-2.5'><Image src={Search} className='' /></div>
                    <input type="text" id='category' placeholder='Search' className='bg-[#FFFFFF0D] rounded-[14px] h-10 w-full py-4 pl-8 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='category' />
                  </div>

                  <div className='overflow-y-auto h-[500px]'>
                    <div className='border-b border-b-[#FFFFFF14]'>
                      <p className='text-[#979797] '>MODEl</p>
                      <div className={`flex flex-col gap-4 py-3 overflow-hidden ${viewAll ? 'h-auto' : 'h-[200px]'}`}>
                        {FilterData['Modal'].map((items) => (
                          <div className='flex items-center gap-2'>
                            <input type="checkbox" id={items} className='w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent ' />
                            <label htmlFor={items}>{items}</label>
                          </div>
                        ))}
                      </div>
                      <button className='text-[#8C7DD0] pb-5' onClick={() => setViewAll(!viewAll)}>View all</button>
                    </div>

                    <div className='border-b border-b-[#FFFFFF14]'>
                      <p className='text-[#979797] '>STYLE</p>
                      <div className='flex flex-col gap-4 py-3 '>
                        {FilterData.Style.map((items) => (
                          <div className='flex items-center gap-2'>
                            <input type="checkbox" id={items} className='w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent ' />
                            <label htmlFor={items}>{items}</label>
                          </div>
                        ))}
                      </div>
                      <button className='text-[#8C7DD0] pb-5'>View all</button>
                    </div>
                  </div>

                  <div>
                    <button className='bg-[#5848BC] rounded-[14px] px-5 py-3 w-full'>Apply</button>
                  </div>

                </div>
              }

            </div>

          </>


        }

      </div>

    </div>
  )
}

export default ViewImagesTab;
