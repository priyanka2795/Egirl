import React, { useEffect, useRef, useState } from 'react';
import arrowUpArrowDown from '../../../../public/assets/arrow-down-arrow-up2.png';
import filter from '../../../../public/assets/filter.png';
import Image from 'next/image';
import UnSelectIcon from "../svg/short_border.svg";
import SelectIcon from "../svg/short_select.svg";
import crossIcon from '../../../../public/assets/xmark (1).png';
import Prev from '../../../../public/assets/arrow-left.svg';
import Search from '../../../../public/assets/search-alt (1).png';
import Information from '../../../../public/assets/circle-information2.png';

interface ViewImagesTab {
  tabContent: any;
  exploreSelectedTab: any;
  setExploreSelected: any;

}
const Albumshort = ['Default', 'Sort ascending', 'Sort descending'];
const short = ['Newest first', 'Oldest first'];


const Modal = [
  { id: "1", modalName: "Stable" },
  { id: "2", modalName: "Artistic" },
  { id: "3", modalName: "Fantasy" },
  { id: "4", modalName: "Photoreal" },
  { id: "5", modalName: "Model 1" },
  { id: "6", modalName: "Model 2" },
  { id: "7", modalName: "Model 3" },
];

const Style = [
  { id: "1", styleName: "Stable" },
  { id: "2", styleName: "Artistic" },
  { id: "3", styleName: "Fantasy" },
  { id: "4", styleName: "Photoreal" },
  { id: "5", styleName: "Style 1" },
  { id: "6", styleName: "Style 2" },
  { id: "7", styleName: "Style 3" },
  { id: "8", styleName: "Style 3" },
  { id: "9", styleName: "Style 3" },
  { id: "10", styleName: "Style 3" },
  { id: "11", styleName: "Style 3" },
];

const TagData = [
  'Anime',
  'Animal crossing',
  'Artistic photography',
  'content',
  'Anesthetically',
  'Astrologyes',
  'Nimes',
  ' crossing',
  'Artistic ',
  'ASMR',
  'Aesthetically',
];
const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ViewImagesTab = ({ tabContent, exploreSelectedTab, setExploreSelected }: ViewImagesTab) => {
  const [shortSelect, setShortSelect] = useState(false);
  const [shortTab, setShortTab] = useState(1);
  const [isActive, setActive] = useState(false);
  const [albumShortSelect, setAlbumShortSelect] = useState(false);
  const [albumShortTab, setAlbumShortTab] = useState(1);
  const [filterToggle, setFilterToggle] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [viewAllStyle, setViewAllStyle] = useState(false);
  const [selectTag, setSelectTag] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filterActive, setFilterActive] = useState(false);
  const [checked, setChecked] = useState([] as any);
  const [styleChecked, setStyleChecked] = useState([] as any);

  const handleExploreSelected = (e: any) => {
    setExploreSelected(e.target.innerText);

  };
  const AlbumSelectShort = (index: any) => {
    setAlbumShortTab(index)
  }
  const SelectShort = (index: any) => {
    setShortTab(index)
  }

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));

    } else {
      if (selectedOptions.length < 4) {
        setSelectedOptions([...selectedOptions, option]);
        if (selectedOptions.length === 3) {
          setSelectTag(false)
        }
      }
    }
  };
  console.log(selectedOptions, 'selectedOptions');

  const alphabetArray = Alphabet.split('');
  const ApplyFilter = () => {
    console.log(styleChecked, 'styleChecked');
    if (styleChecked.length === 0 && checked.length === 0 && selectedOptions.length === 0) {
      setFilterToggle(false);
    } else {
      setFilterToggle(false);
      setFilterActive(true);
    }
  }

  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      // setFilterToggle(false);
      setShortSelect(false);
      setAlbumShortSelect(false);
    }
  };


  const handleCheckAllChange = (e: any) => {
    const { name } = e.target;
    console.log(name, 'e.target.name');
    if (name === 'modalAll') {
      setChecked(e.target.checked ? Modal.map((c) => c.modalName) : [])

    } else if (name === 'styleAll') {
      setStyleChecked(e.target.checked ? Style.map((c) => c.styleName) : [])
    }
  };

  const handleCountryChange = (e: any, c: any) => {
    setChecked((prevChecked: any) => e.target.checked ? [...prevChecked, c.modalName] : prevChecked.filter((item: any) => item !== c.modalName));
  };
  const handleStyleChange = (e: any, c: any) => {
    setStyleChecked((prevChecked: any) => e.target.checked ? [...prevChecked, c.styleName] : prevChecked.filter((item: any) => item !== c.styleName));
  };

  return (
    <div className='flex justify-between pb-5 border-b border-white/[0.08]' ref={dropdownRef}>

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

      <div className='flex items-center gap-2' >
        {exploreSelectedTab === 'Albums' ?
          <>
            <button className={`relative ${isActive ? "w-[360px]" : 'w-[30px] h-9'}`} >
              <span className={`absolute left-2 ${isActive ? 'top-[10px]' : 'top-2'}
            `} onClick={() => { setActive(!isActive), setAlbumShortSelect(false) }}
              ><Image className='h-[24px] w-[24px]' src={Search} alt={''} /></span>
              <input type="text" className={` border-none rounded-[14px] h-10 px-4 placeholder:text-[#979797] active:border-[#FFFFFF52] focus:border-[#FFFFFF52] focus:ring-transparent text-[14px] w-full ${isActive ? "bg-[#FFFFFF0D] pl-10" : 'bg-transparent pl-4'}`} placeholder='Search' />
              {isActive ?
                <span className='absolute right-2 top-2' onClick={() => setActive(!isActive)} ><Image className='w-full h-full' src={crossIcon} alt={''} /></span> : ''
              }
            </button>
            <div className='relative flex' >
              <div className={`cursor-pointer w-9 h-9 flex justify-center items-center rounded-full ${albumShortSelect && 'bg-[#FFFFFF14]'}`} onClick={() => setAlbumShortSelect(!albumShortSelect)}>
                <Image src={arrowUpArrowDown} alt={''} />
              </div>

              {albumShortSelect &&
                <div className='w-[170px] rounded-[14px] shadow-[0px 8px 12px 0px #0000001F] bg-[#1A1A1A] absolute top-12 right-0 z-50 py-4 px-3 flex flex-col gap-2'>
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
            <div className='relative flex' >
              <div className={`h-9 w-9 flex justify-center items-center cursor-pointer rounded-full ${shortSelect && 'bg-[#FFFFFF14]'}`} onClick={() => { setShortSelect(!shortSelect), setFilterToggle(false) }}>
                <Image src={arrowUpArrowDown} alt={''} />
              </div>
              {shortSelect &&
                <div className='w-[170px] rounded-[14px] shadow-[0px 8px 12px 0px #0000001F] bg-[#1A1A1A] absolute top-12 right-0 z-50 py-4 px-3 flex flex-col gap-2'>
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

            <div className='relative' >
              <button className={`h-9 w-9 flex justify-center items-center cursor-pointer rounded-full ${filterToggle && 'bg-[#FFFFFF14]'}`} onClick={() => { setFilterToggle(!filterToggle), setShortSelect(false) }}>
                <div className='relative pt-2'>
                  <Image src={filter} alt={''} />
                  {filterActive &&
                    <span className='w-[6px] h-[6px] absolute top-2 right-0 bg-[#FF5336] rounded-full'></span>}
                </div>
              </button>

              {filterToggle &&
                <div className='bg-[#272727] rounded-[14px] w-[346px] shadow-[0px 8px 12px 0px #0000001F] absolute top-12 right-0 z-50' >
                  <div className='flex flex-col gap-3 px-6 py-5'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        {selectTag ?
                          <div className='cursor-pointer' onClick={() => setSelectTag(false)}>
                            <Prev />
                          </div>
                          : ''}
                        <h5 className='text-lg font-bold'>{selectTag ? 'Tags' : 'Filter'}</h5>
                      </div>
                      {selectTag ? '' :
                        <button className='text-[#979797]' onClick={() => { setFilterActive(false), setStyleChecked([]), setChecked([]), setSelectedOptions([]) }}>Clear all</button>
                      }
                    </div>
                  </div>
                  {selectTag ?
                    <div className='flex items-center gap-1 px-6 pb-3'>
                      <Image src={Information} /> <p className='text-[#979797] text-xs'>The maximum number of filters is 4</p>
                    </div> : ''}

                  <div className='relative mx-6 mb-5'>
                    <div className='absolute left-2 top-2.5'><Image src={Search} className='' /></div>
                    <input type="text" id='category' placeholder='Search' className='bg-[#FFFFFF0D] rounded-[14px] h-10 w-full pl-8 border-none active:border-none focus:border-none focus:ring-0 text-white placeholder:text-[#979797]' name='category' />
                  </div>

                  {selectTag ?
                    <div className='overflow-y-auto h-[500px] '>
                      <div className=' border-t border-t-[#FFFFFF14] p-6 relative '>
                        <div className='flex flex-wrap gap-3 '>
                          {TagData.map((items, index) => {
                            return (
                              <div
                                className='relative mb-3 '
                                key={index}
                                onClick={() => {
                                  selectedOptions.includes(items);
                                }}
                              >
                                <input
                                  id={`${index}`}
                                  name='option'
                                  checked={selectedOptions.includes(items)}
                                  onChange={() => handleOptionChange(items)}
                                  className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800 '
                                  type='checkbox'
                                  value={`${index}`}
                                />
                                <label
                                  htmlFor={`${index}`}
                                  className='mb-4 h-10 w-max cursor-pointer rounded-3xl px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4] bg-[#FFFFFF0D]'
                                  id={`${index}`}
                                >
                                  {items}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                        <div className='absolute flex flex-col w-4 gap-1 right-1 top-6'>
                          {alphabetArray.map(letter => (
                            <span className={`text-[11px] cursor-pointer ${letter === 'A' ? 'text-[#979797]' : 'text-[#515151]'}`}>{letter}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    :
                    <div className='overflow-y-auto h-[500px] px-6'>
                      <div className="border-b border-b-[#FFFFFF14] ">
                        <p className='text-[#979797] uppercase'>Model</p>
                        <div className={`flex flex-col gap-4 py-3 overflow-hidden ${viewAll ? 'h-auto' : 'h-[200px]'}`}>
                          <div className='flex items-center gap-2'>
                            <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent" type="checkbox" name='modalAll' id="modalAll" checked={checked.length === Modal.length}
                              onChange={(e) => handleCheckAllChange(e)} />
                            <label className="" htmlFor="modalAll">All Model</label>
                          </div>

                          {Modal.map((c) => (
                            <div className="flex items-center gap-2" key={c.id}>
                              <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent " type="checkbox" id={c.id} checked={checked.includes(c.modalName)}
                                onChange={(e) => handleCountryChange(e, c)} />
                              <label htmlFor={c.id}>{c.modalName}</label>
                            </div>
                          ))}
                        </div>
                        <button className={`text-[#8C7DD0] pb-5 ${viewAll ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} onClick={() => setViewAll(true)}>View all</button>
                      </div>

                      <div className="border-b border-b-[#FFFFFF14] mt-3">
                        <p className='text-[#979797] uppercase	'>Style</p>
                        <div className={`flex flex-col gap-4 py-3 overflow-hidden ${viewAllStyle ? 'h-auto' : 'h-[200px]'}`}>
                          <div className='flex items-center gap-2'>
                            <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent" type="checkbox" name='styleAll' id="styleAll" checked={styleChecked.length === Style.length}
                              onChange={(e) => handleCheckAllChange(e)} />
                            <label className="" htmlFor="styleAll">All Style</label>
                          </div>

                          {Style.map((c) => (
                            <div className="flex items-center gap-2" key={c.id}>
                              <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent " type="checkbox" id={c.id} checked={styleChecked.includes(c.styleName)}
                                onChange={(e) => handleStyleChange(e, c)} />
                              <label htmlFor={c.id}>{c.styleName}</label>
                            </div>
                          ))}
                        </div>
                        <button className={`text-[#8C7DD0] pb-5 ${viewAllStyle ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`} onClick={() => setViewAllStyle(true)}>View all</button>
                      </div>


                      <div className='mt-3'>
                        <p className='text-[#979797] uppercase'>Tags</p>
                        <div className={`flex flex-col gap-4 py-3 overflow-hidden`}>
                          {selectedOptions.map((items) => (
                            console.log(items, 'items Chhh'),

                            <div className='flex items-center gap-2'>
                              <input type="checkbox" id={items} className='w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent ' checked={checked} />
                              <label htmlFor={items}>{items}</label>
                            </div>
                          ))}
                        </div>
                        <button className='text-[#8C7DD0] pb-5' onClick={() => setSelectTag(true)}>View all</button>
                      </div>
                    </div>

                  }
                  {selectTag ? '' :
                    <div className='p-5 mt-2 border-t border-t-[#FFFFFF14]'>
                      <button className='bg-[#5848BC] rounded-[14px] px-5 py-3 w-full' onClick={() => ApplyFilter()}>Apply</button>
                    </div>
                  }
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