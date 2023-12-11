//@ts-nocheck
import React,{useState,useEffect, useRef} from 'react';
import Search from '@/assets/search-alt (1).webp';
import Information from '@/assets/circle-information2.webp';
import Image from 'next/image';
import SearchBar from '@components/common/Search/SearchBar';
import arroeLeft from '@/assets/arrow-left.webp'


const alphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const ViewAllTags = ({selectedTags,getSelectedTagOnClick,filteredTags, closeAllTagsModal,filterTagsBy,setFilterTagsBy,closeFilterModal}:any) => {
    const [searchTagBy,setSearchTagBy]=useState<string>("");
    const tagAllRef=useRef(null)

    const letterToFilterBy=(letter)=>{
      setFilterTagsBy(letter);
    }

    useEffect(()=>{
      document.addEventListener('mousedown',handleClickOutside);
      return ()=>{
        document.removeEventListener('mousedown',handleClickOutside)
      }
    },[]);
  
    const handleClickOutside=(event)=>{
      if(tagAllRef.current && !tagAllRef.current.contains(event.target)){
        closeFilterModal();
      }
    }

  return (
    <div ref={tagAllRef} className='absolute right-8 top-5 z-50 flex w-[346px] flex-col rounded-[14px] border border-white/[0.05] bg-[#1A1A1A] mt-64' onClick={(e) => e.stopPropagation()}>
      <form>
        <div className='flex flex-col border-b border-white/[0.08] px-6'>
          <div className='flex items-center justify-between py-5'>
            <div className='font-bold text-[18px] leading-6 text-white flex justify-start items-center gap-1'>
              <Image src={arroeLeft} onClick={closeAllTagsModal} className='cursor-pointer'/>
              Tags
            </div>
          </div>
          <div className='flex items-center gap-1 pb-3'>
            <Image src={Information} />{' '}
            <p className='text-xs text-[#979797]'>
              The maximum number of filters is 4
            </p>
          </div>
          <div className='block w-full'>
            <SearchBar
              searchBy={searchTagBy}
              setSearchBy={setSearchTagBy}
              placeholder='Search'
            />
          </div>
        </div>
        
       <div className='w-full h-full min-h-[22rem] flex flex-wrap content-baseline space-x-3 p-5 relative'>
       <div className='w-3 h-72 absolute right-0 top-0 my-5 flex flex-col items-center justify-start text-[8px] opacity-40 mr-1 text-[#979797]'>
        {alphabets?.map((letter)=>(
            <p style={filterTagsBy===letter ? {transform:'scale(3)',color:'white',pointerEvents:'none'} : {}} onClick={()=>letterToFilterBy(letter)} className='hover:text-white hover:scale-[3] transition-all cursor-pointer'>{letter}</p>
        ))}
       </div>
       {filteredTags?.filter((item)=> String(item)?.toLowerCase().includes(searchTagBy?.toLowerCase()))?.map((item)=>(
        <div
        onClick={(e) => getSelectedTagOnClick(item)}
        style={selectedTags[item] ? {backgroundColor:"#5848BC"} : {backgroundColor:'rgba(255, 255, 255, 0.05)',}}
        className=" h-fit list-last-item z-10 !flex w-max cursor-pointer  justify-start rounded-full px-4 py-3 last:mr-0 mb-3"
      >
        <div className='text-[15px] font-semibold leading-tight text-white'>
          <p>{item}</p>
        </div>
      </div>
       ))}
       </div>
      </form>
    </div>
  );
};

export default ViewAllTags;
