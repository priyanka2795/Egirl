//@ts-nocheck

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import circleInformation from '@/assets/circle-information.webp';
import { log } from 'console';

interface prop{
  filterCloseForm:any,
  Tags:string [],
  openAllTagsModal:()=>void,
  selectedTags:any,
  getSelectedTagOnClick:any,
  applyAllFilters:any,
  clearAll: () => void
}
const GalleryFilterCheckbox = ({filterCloseForm,Tags,openAllTagsModal,selectedTags,getSelectedTagOnClick,applyAllFilters, clearAll}:prop) => {
  const [viewAllTags, setViewAllTags] = useState(false);
  const [filterValues, setFilterValues] = useState({});
  const [allTags,setAllTags]=useState([]);
  const [allSelectedTags,setAllSelectedTags]=useState({})


  useEffect(()=>{
    setAllTags(Tags)
  },[Tags]);

  useEffect(()=>{
    setAllSelectedTags(selectedTags)
  },[selectedTags])

  const handleClick = (event: any) => {
    // setViewAllTags((current) => !current);
    openAllTagsModal();
  };

  const handleChange = (e:any) => {
    // const { value, checked } = e.target;
      
    // //console.log(`${value} is ${checked}`);

    // if (checked) {
    //   setFilterValues({
    //     ...filterValues,
    //     [value]: true
    //   });
    // }
  
    // // Case 2  : The user unchecks the box
    // else {
    //   setFilterValues({
    //     ...filterValues,
    //     [value]: false
    //   });
    // }
  };

  const onSubmit = (e:any) => {
    console.log(filterValues);
    filterCloseForm(false)
  }

  const handleReset = (e:any) => {
    setFilterValues({});
  }

  console.log({selectedTags, Tags})

  return (
    <div className='absolute -right-[103px] z-[3] mt-2 flex flex-col items-center rounded-[14px] bg-[#272727] pb-5'>
      <form>
      <div className='flex w-[346px] flex-col items-start justify-center gap-3 px-6 py-5 text-[#FFFFFF]'>
        <div className='flex items-center self-stretch justify-between'>
        
          <div className='text-lg font-bold'>Filters</div>
          
          <button onClick={clearAll} type="reset" className='text-sm font-normal text-[#979797]'>Clear all</button>
        </div>
        <div className='flex items-start gap-1'>
          <div>
            <Image src={circleInformation} alt={''} />
          </div>
          <div className='text-xs font-normal text-[#979797]'>
            The maximum number of filters is 4
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start self-stretch gap-5 px-6 max-h-[420px] overflow-auto'>
        
          <div className='flex w-full flex-col items-start gap-3 self-stretch border-b border-[#ffffff14]'>
            <div className='self-stretch text-[11px] font-semibold text-[#979797]'>
              GENDER
            </div>
            <div className='flex flex-col items-start self-stretch gap-4 mb-5'>
              <div className='block custom-checkbox custom-checkbox-circle'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-transparent focus:ring-0 focus:outline-0'
                  type='checkbox'
                  value='Female'
                  onChange={handleChange}
                  id='female'
                />
                <label className="text-[14px] font-normal text-[#FFFFFF]" htmlFor="female">
                  Female
                </label>
              </div>
              <div className='block custom-checkbox custom-checkbox-circle'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-transparent focus:ring-0 focus:outline-0'
                  type='checkbox'
                  value='Male'
                  onChange={handleChange}
                  id='male'
                />
                <label className="text-[14px] font-normal text-[#FFFFFF]" htmlFor="male">
                  Male
                </label>
              </div>
              <div className='block custom-checkbox custom-checkbox-circle'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                  value='Other'
                  onChange={handleChange}
                  id='Other'
                />
                <label className='text-[14px] font-normal text-[#FFFFFF]' htmlFor="Other">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className='mt-5 flex w-full flex-col items-start gap-3 self-stretch border-b border-[#ffffff14]'>
            <div className='self-stretch text-[11px] font-semibold text-[#979797]'>
              STYLE
            </div>
            <div className='flex flex-col items-start self-stretch gap-4 mb-5'>
              <div className='block custom-checkbox custom-checkbox-circle'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                  value='Anime'
                  onChange={handleChange}
                  id='Anime'
                />
                <label className='text-[14px] font-normal text-[#FFFFFF]' htmlFor="Anime">
                  Anime
                </label>
              </div>
              <div className='block custom-checkbox custom-checkbox-circle'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                  value='Realistic'
                  onChange={handleChange}
                  id='Realistic'
                />
                <label className='text-[14px] font-normal text-[#FFFFFF]' htmlFor="Realistic">
                  Realistic
                </label>
              </div>
              <div className='block custom-checkbox custom-checkbox-circle'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                  value='Semi-Realistic'
                  onChange={handleChange}
                  id='Semi-Realistic'
                />
                <label className='text-[14px] font-normal text-[#FFFFFF]' htmlFor="Semi-Realistic">
                  Semi-Realistic
                </label>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start self-stretch w-full gap-3 mt-5'>
            <div className='self-stretch text-[11px] font-semibold text-[#979797]'>
              TAGS
            </div>
            <div>
              
            <div className='flex flex-col items-start self-stretch gap-4 mb-5'>
                  {
                    allTags?.slice(0,4)?.map((tag: string)=>
                    {
                      console.log({istrue:selectedTags[tag],selectedTags})
                    return <div className='block custom-checkbox custom-checkbox-circle'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-none'
                      type='checkbox'
                      value={tag || ""}
                      onChange={()=>getSelectedTagOnClick(tag)}
                      id={tag}
                      checked={selectedTags[tag] || false}
                    /> 
                    <label className='text-[14px] font-normal text-[#FFFFFF]' htmlFor={tag}>
                      {tag}
                    </label>
                  </div>}
                    )
                  }
                  </div>
              {!viewAllTags ? (
                <div
                  onClick={handleClick}
                  className='mb-5 cursor-pointer text-sm font-semibold text-[#8C7DD0]'
                >
                  View all
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        
      </div>
      </form>

      <div className='flex flex-col items-start gap-[10px] self-stretch border-t border-[#ffffff14] p-6'>
        <button onClick={applyAllFilters} className='text-[#FFFFFF ] flex h-[40px] items-center justify-center self-stretch rounded-xl bg-[#5848BC] text-sm  font-bold'>
          Apply
        </button>
      </div>
    </div>
  );
};

export default GalleryFilterCheckbox;
