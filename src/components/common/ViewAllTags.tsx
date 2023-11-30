import React,{useState,useEffect} from 'react';
import Search from '../../../public/assets/search-alt (1).png';
import Information from '../../../public/assets/circle-information2.png';
import Image from 'next/image';
import SearchBar from '@components/common/Search/SearchBar';


const filterOptions=[
    {tag:'Adaptable',id:1},
    {tag:'Adeventurous',id:2},
    {tag:'Aggressive',id:3},
    {tag:'Ambitious',id:4},
    {tag:'Ambitious',id:5},
    {tag:'Ambitious',id:6},
    {tag:'Ambitious',id:7},
    {tag:'Ambitious',id:8},
    {tag:'Ambitious',id:9},
    {tag:'Ambitious',id:10},
    {tag:'Ambitious',id:11},
    {tag:'Ambitious',id:12},
    {tag:'Bravo',id:13},


]

const alphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const ViewAllTags = () => {
    const [filterTagsBy,setFilterTagsBy]=useState<string>("A");
    const [searchTagBy,setSearchTagBy]=useState<string>("");
    const [filteredData,setFilteredData]= useState<any>([]);

    useEffect(()=>{
        let data=filterOptions?.filter(i=>String(i.tag).startsWith(filterTagsBy));
        setFilteredData(data)
    },[filterTagsBy]);


  return (
    <div className='absolute right-0 top-12 z-50 flex w-[392px] flex-col rounded-[14px] border border-white/[0.05] bg-[#1A1A1A]'>
      <form>
        <div className='flex flex-col border-b border-white/[0.08]'>
          <div className='flex items-center justify-between px-6 py-5'>
            <div className='font-bold text-[18px] leading-6 text-white'>
              Tags
            </div>
          </div>
          <div className='flex items-center gap-1 px-6 pb-3'>
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
        
       <div className='w-full h-full min-h-[22rem] flex flex-wrap space-x-3 p-5 relative'>
       <div className='w-3 h-72 absolute right-0 top-0 my-5 flex flex-col items-center text-[8px] opacity-40 mr-1 text-[#979797]'>
        {alphabets?.map((letter)=>(
            <p style={filterTagsBy===letter ? {transform:'scale(3)',color:'white',pointerEvents:'none'} : {}} onClick={()=>setFilterTagsBy(letter)} className='hover:text-white hover:scale-[3] transition-all'>{letter}</p>
        ))}
       </div>
       {filteredData?.map((item)=>(
        <div
        onClick={(e) => {}}
       
        className="m-2 h-fit list-last-item relative z-10 !flex w-max cursor-pointer items-center justify-start gap-2 rounded-full px-4 py-3 last:mr-0 !bg-[#5848BC]"
      >
        

        <div className='text-[15px] font-semibold leading-tight text-white'>
          <p>{item.tag}</p>
        </div>
      </div>
       ))}
       </div>
      </form>
    </div>
  );
};

export default ViewAllTags;
