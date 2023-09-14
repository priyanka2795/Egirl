import Image from 'next/image';
import React, { useState } from 'react';
import Search from '../../../../public/assets/search-alt (1).png';

const ViewStyleFilter = () => {
    const filterTabText = ['Realistic', 'Semi-Realistic', 'Anime'];
    const clothing = ['Dress', 'Jacket', 'Jeans', 'Top'];
    const clothingViewAll = ['Dress', 'Jacket', 'Jeans', 'Top', 'style1', 'style2', 'style3'];
    const accessories = ['Bag', 'Chain', 'Rings', 'Rings'];
    const accessoriesViewAll = ['Bag', 'Chain', 'Rings', 'Rings', 'style1', 'style2', 'style3'];
    const [activeIndex, setActiveIndex] = useState(-1);
    const [clothingAll, setClothingAll] = useState(false);
    const [accessoriesAll, setAccessoriesAll] = useState(false);
    const [filterValues, setFilterValues] = useState({});

    const handleChange = (e:any) => {
        const { value, checked } = e.target;
          
        console.log(`${value} is ${checked}`);
    
        if (checked) {
          setFilterValues({
            ...filterValues,
            [value]: true
          });
        }
      
        // Case 2  : The user unchecks the box
        else {
          setFilterValues({
            ...filterValues,
            [value]: false
          });
        }
      }; 

      const handleReset = (e:any) => {
        setFilterValues({});
        console.log("filterValues", filterValues);
        
      } 
      
  return (
    <div className='flex flex-col bg-[#1A1A1A] rounded-[14px] w-[392px] border border-white/[0.05] absolute top-12 right-0 z-50'>
        <form>
        <div className='flex flex-col'>
            <div className='flex items-center justify-between px-6 py-5'>
                <div className='text-white text-[18px] font-bold leading-6'>Filters</div>
                <button onClick={handleReset} type="reset" className='text-[#979797] text-[14px] font-normal leading-[18px]'>Clear all</button>
            </div>
            <div className='relative px-6 pb-5'>
                <div className='absolute left-[31px] top-[9px] mr-[6px]'>
                    <Image src={Search} className='' />
                </div>
                <input type="text" id='category' placeholder='Search' className='bg-[#FFFFFF0D] rounded-[14px] h-10 w-full pl-8 border-none active:border-none focus:border-none focus:ring-0 text-white placeholder:text-[#979797]' name='category' />
            </div>
        </div>
        <div className='flex flex-col gap-5 px-4'>
            <div className='flex flex-col gap-3'>
                <div className='text-white text-[15px] font-semibold leading-5'>Style</div>
                <div className='flex rounded-[16px] border border-[#3A3A3A] overflow-hidden'>
                {filterTabText.map((item,index) => {
                    return(
                        <div key={index} className={`cursor-pointer px-6 py-3 justify-center items-center text-white text-[15px] font-semibold leading-5 ${ index !== 2 ? 'border-r border-[#3A3A3A]' : ''} ${activeIndex === index ? 'bg-[#5848BC]' : ''}`} onClick={() => {setActiveIndex(index)}}>{item}</div>
                    );
                })}
                </div>
            </div>
            <div className='flex flex-col gap-4 pb-5 border-b border-white/[0.08]'>
                <div className='text-white text-[15px] font-semibold leading-5'>Clothing</div>
                <div className='flex flex-col gap-4'>
                    {clothingAll ? 
                    <>
                    {clothingViewAll.map((item,index) => {
                        return(
                            <div key={index} className='flex gap-2'>
                                <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent " type="checkbox" value={item} onChange={handleChange} />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        );
                    })}
                    </> :
                    <>
                     {clothing.map((item,index) => {
                        return(
                            <div key={index} className='flex gap-2'>
                                <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0 bg-transparent" type="checkbox" value={item} onChange={handleChange} />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        );
                    })}
                    <div className='cursor-pointer text-[#8C7DD0] text-[14px] font-semibold leading-[18px]' onClick={() => {setClothingAll(true)}}>View all</div>
                    </>
                    }
                </div>
            </div>
            <div className='flex flex-col gap-4 pb-5 border-b border-white/[0.08]'>
                <div className='text-white text-[15px] font-semibold leading-5'>Accessories</div>
                <div className='flex flex-col gap-4'>
                    {accessoriesAll ? 
                    <>
                    {accessoriesViewAll.map((item,index) => {
                        return(
                            <div key={index} className='flex gap-2'>
                                <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent " type="checkbox" />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        );
                    })}
                    </> :
                    <>
                     {accessories.map((item,index) => {
                        return(
                            <div key={index} className='flex gap-2'>
                                <input className="w-5 h-5 text-[#5848BC] border-[#FFFFFF3D] rounded focus:ring-0 dark:focus:ring-0 dark:ring-offset-0  bg-transparent " type="checkbox" />
                                <label htmlFor={item}>{item}</label>
                            </div>
                        );
                    })}
                    <div className='cursor-pointer text-[#8C7DD0] text-[14px] font-semibold leading-[18px]' onClick={() => {setAccessoriesAll(true)}}>View all</div>
                    </>
                    }
                </div>
            </div>
        </div> 
        <button className='flex border-t border-white/[0.08] p-6 w-full'>
            <div className='px-4 py-[10px] justify-center items-center rounded-[12px] bg-[#5848BC] text-white text-[14px] font-bold leading-5 w-full'>Apply</div>
        </button> 
        </form>
    </div>
  )
}

export default ViewStyleFilter;
