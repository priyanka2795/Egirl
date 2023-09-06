import React, { useState } from 'react';
import pic from '../../../../public/assets/Collar.png';
import none from '../../../../public/assets/None.png';
// import Image from 'next/image';
import SearchIcon from '@components/common/Search/SearchIcon';
import Image from 'next/image';
import searchIcon from '../../../../public/assets/search-alt.png';
import { Modal } from '@components/modal/modal';
import girlPic from '../../../../public/assets/girl.png';
import Cross from '../../../../public/assets/svgImages/close-icon.svg';
import Correct from '../svg/correct.svg';
import Heart from '../svg/heart.svg';
import Info from '../svg/info.svg';
import ArrowUpper from '../svg/arrow-upper.svg';

const ImageGallery = () => {
  const [viewModal, setviewModal] = React.useState(false);
  const handleviewModal = () => setviewModal(true);
  const handlecloseModal = () => setviewModal(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const data = [
    { name: 'None', img: none },
    { name: 'Artistic', img: pic },
    { name: 'Anime', img: pic },
    { name: 'Fantasy', img: pic },

    { name: 'Photoreal', img: pic },
    { name: 'Artistic', img: pic },
    { name: 'Anime', img: pic },
    { name: 'Fantasy', img: pic },

    { name: 'Photoreal', img: pic },
    { name: 'Artistic', img: pic },
    { name: 'Anime', img: pic },
    { name: 'Fantasy', img: pic }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmp = data.filter((egirlData) => {
    const searchString =
      egirlData.name.toLowerCase() + ' ' + egirlData.name.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      if (selectedOptions.length < 10) {
        setSelectedOptions([...selectedOptions, option]);
      } 
    }
  };
  
  const handleRemoveOption = (option: string) => {
    setSelectedOptions(selectedOptions.filter((o) => o !== option));
  };

  const handleClearSelection = () => {
    setSelectedOptions([]);
  };
  const clearSelection = () => {
    handlecloseModal()
    handleClearSelection()
  }

  return (
    <div>
      <div className='flex flex-col items-start self-stretch gap-4 pt-4 pb-8'>
        <div className='flex flex-col items-start self-stretch gap-4'>
          <div className='flex flex-col items-start self-stretch gap-4 px-8 '>
            {/* <div className='flex items-center px-4 py-3 gap-2.5 self-stretch rounded-[10px] bg-[#FFFFFF0D]'>
                  <SearchIcon/>
                  <input type='text' className='w-full border-none outline-none bg-[#FFFFFF0D]' placeholder='Search'/>
                </div> */}
            <div className='flex w-full gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
              <div className='w-6 h-6'>
                <Image
                  className='w-full h-full'
                  src={searchIcon}
                  alt={''}
                  id='myinput'
                />
              </div>
              <input
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Search'
                type='text'
                className='border-none bg-transparent p-0 text-[15px] font-light leading-6 text-[#979797] focus:ring-0 '
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-[550px] w-[800px] flex-col items-start gap-2.5 self-stretch px-8 py-0'>
        <div className='flex flex-wrap items-start self-stretch gap-3'>
          {filteredEmp.map((item, index) => {
            let temp = data.find((element) => element.name === item.name);
            if (temp.data) {
              item.data = temp.data;
            }
            return (
              <div
                onClick={handleviewModal}
                className='relative flex h-[174px] w-[175px] cursor-pointer justify-center  overflow-hidden rounded-xl  bg-white/[0.05] hover:bg-[#5848BC]'
              >
                <div className='flex items-center p-0.5'>
                  <Image src={item.img} className=' shrink-0' />
                </div>

                <div className='focus:ring-violet-[#5848BC] absolute bottom-0 top-3/4 flex w-full items-center justify-center gap-2.5 bg-black/[0.80] p-2  hover:bg-[#5848BC] focus:outline-none focus:ring active:bg-[#5848BC]'>
                  <div className='overflow-hidden text-ellipsis whitespace-nowrap text-center text-[13px] font-semibold leading-[18px] '>
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*                     modal                */}
      <Modal
        open={viewModal}
        closeModal={handleviewModal}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex  flex-col flex-start relative rounded-[20px]`}
      >
        <div className='shadow-[0px 32px 96px 0px rgba(0, 0, 0, 0.40)] inline-flex items-center rounded-[20px] bg-[#121212]'>
          {/* box 1 */}
          <div className='flex flex-col items-center bg-[#121212]'>
            <div className='flex items-center self-stretch justify-center max-w-[928px]'>
              <Image src={girlPic} />
            </div>
          </div>
          {/* box 2 */}
          
          <div className='flex flex-col items-start self-stretch w-[445px]'> 
          {/* Top Block */}
            <div className='flex flex-col items-start self-stretch gap-4 p-6 pt-5'>
                <div className='flex flex-col items-start gap-0.5 self-stretch'>
                    <div className='flex items-center self-stretch gap-2'>
                        <h5 className='text-white text-[22px] font-bold leading-8 w-full'>
                        A-Zovya Photoreal
                        </h5>
                       <div onClick={handlecloseModal}>
                       <Cross/>
                       </div>
                    </div>
                    <div className='text-[18px] font-normal leading-6'>
                    $4.99
                    </div>
                </div>
                <div className='flex items-start self-stretch gap-3'>
                    <button className='flex items-start w-full'>
                        <button className='flex py-[13px] px-5 justify-center items-center gap-2 rounded-[14px] border border-white/[0.32] w-full'>
                            <Correct/>
                            <div className='text-base font-bold leading-[22px] '>
                        Added
                        </div>
                        </button>
                        
                    </button>
                    {/*  */}
                    <button className='flex items-start '>
                        <button className='flex p-3.5 justify-center items-center gap-2.5 rounded-[14px] bg-white/[0.08]'>
                            <Heart/>
                        </button>
                    </button>
                </div>
            </div>
          {/* Comments block */}
          <div className='flex flex-col items-start gap-5 p-6 pt-0 '>
            {/* List */}
            <div className='flex flex-col items-start gap-3.5'>
                <b className='text-white text-[15px] font-semibold leading-5'>
                Model Details
                </b>
                {/* iteam 1 */}
                <div className='flex items-start self-stretch gap-5'>
                    <div className='flex items-center gap-1 w-[102px]'> 
                    <b className='text-[#979797] text-sm font-normal leading-[18px]'>Model Type</b>
                    <Info/>
                    </div>
                    <div className='text-sm font-normal leading-[18px] '>
                    General 
                    </div>
                </div>
                {/* iteam 2 */}
                <div className='flex items-start self-stretch gap-5'>
                    <div className='flex items-center gap-1 w-[102px]'> 
                    <b className='text-[#979797] text-sm font-normal leading-[18px]'>Style</b>
                    <Info/>
                    </div>
                    <div className='text-sm font-normal leading-[18px] '>
                    Anime 
                    </div>
                </div>
                {/* iteam 3 */}
                <div className='flex items-start self-stretch gap-5'>
                    <div className='flex items-center gap-1 w-[102px]'> 
                    <b className='text-[#979797] text-sm font-normal leading-[18px]'>Category</b>
                    
                    </div>
                    <div className='text-sm font-normal leading-[18px] '>
                    Realistic Animation 
                    </div>
                </div>
                {/* iteam 4 */}
                <div className='flex items-start self-stretch gap-5'>
                    <div className='flex items-center gap-1 w-[102px]'> 
                    <b className='text-[#979797] text-sm font-normal leading-[18px]'>Pricing</b>
                    
                    </div>
                    <div className='text-sm font-normal leading-[18px] '>
                    Buy once, use forever 
                    </div>
                </div>
                {/* description */}
                <div className='flex flex-col items-start gap-2'>
                    <div className='flex items-center pr-0 '>
                    <b className='text-[#979797] text-sm font-normal leading-[18px]'>Description</b>
                    </div>
                    <div className='flex items-start gap-5 w-[397px]'>
                            <b className='text-white text-sm font-normal leading-[18px]'>
                            After a lot of tests I'm finally releasing my mix.
                            This started as a model to make After a lot of tests I'm finally releasing my mix.
                            This started as a model to make.
                            </b>
                    </div>
                </div>
                {/* generation data block */}
                <div className='flex py-3.5	px-4 flex-col items-start gap-4 self-stretch rounded-xl bg-white/[0.05]'>
                        <div className='flex items-center self-stretch justify-between'>
                            <b className='text-[15px] font-semibold leading-5'>Generation data</b>
                            <ArrowUpper/>
                        </div>
                        <div className='flex flex-col items-start self-stretch gap-3'>
                          <div className='flex items-center self-stretch justify-between'>
                            
                          </div>
                        </div>
                </div>
            </div>
          </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageGallery;
