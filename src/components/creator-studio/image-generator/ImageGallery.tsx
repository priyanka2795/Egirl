import React, { useState } from 'react';
import pic from '@/assets/Collar.webp';
import none from '@/assets/None.webp';
import Image from 'next/image';
import searchIcon from '@/assets/search-alt.webp';
import { Modal } from '@components/modal/modal';
import girlPic from '@/assets/girl.webp';
import Cross from '@/assets/svgImages/close-icon.svg';
import Correct from '../svg/correct.svg';
import Heart from '../svg/heart-white.svg';
import Info from '../svg/info.svg';
import Copy from '../svg/Copy.svg';
import avtar from '@/assets/avatar-cs-1.webp';
import ExpandIcon from '@/assets/expand-alt.webp';
import AdvanceArrow from '../svg/AdvanceArrow';
import ImageInfoModal from '@components/common/ImageInfoModal';

const ImageGallery = () => {
  const [viewModal, setviewModal] = React.useState<boolean>(false);
  const [defaultModal, setDefaultModal] = useState(false);
  const handleviewModal = (name: string) => {  
    setviewModal(true);
    if (name === 'None') {
      setDefaultModal(true);
    }else{
      setDefaultModal(false);
    }
  };
  const handlecloseModal = () => setviewModal(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const data: any = [
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
  const tabContent = ['Prompt', 'Negative prompt'];
  const [exploreSelectedTab, setExploreSelected] = useState<string>('Prompt');
  const [selectImage, setSelectImage] = useState<number>();

  const handleExploreSelected = (e: React.MouseEvent<HTMLElement>) => {
    setExploreSelected((e.target as HTMLElement).innerText);
  };

  const [isHovered, setIsHovered] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmp = data.filter((egirlData: any) => {
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
    handleClearSelection();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [advanceModal, setAdvanceModal] = React.useState(false);
  function AdvanceModal() {
    setAdvanceModal(!advanceModal);
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
                className='font-light border-none bg-transparent p-0 text-[15px] leading-6 text-[#979797] focus:ring-0 '
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-[550px] w-[800px] flex-col items-start gap-2.5 self-stretch px-8 py-0'>
        <div className='flex flex-wrap items-start self-stretch gap-3'>
          {filteredEmp.map((item: any, index: any) => {
            let temp: any = data.find(
              (element: any) => element.name === item.name
            );
            if (temp.data) {
              item.data = temp.data;
            }
            return (
              <div
                key={index}
                onClick={() => setSelectImage(index)}
                className={`group relative flex h-[174px] w-[175px] cursor-pointer justify-center overflow-hidden  rounded-xl bg-white/[0.05] ${
                  selectImage === index ? 'bg-[#5848BC]' : ''
                }  `}
              >
                <div
                  className={`flex  items-center rounded-t-sm p-0.5 ${
                    selectImage === index ? 'bg-[#5848BC]' : ''
                  }  ${
                    item.name === 'None'
                      ? 'h-[calc(100%-43.5px)] w-full justify-center'
                      : ''
                  }`}
                >
                  <div
                    className={`bg-[#FFFFFF0D] ${
                      item.name === 'None' ? 'h-[64px] w-[64px]' : ''
                    }  flex items-center justify-center rounded-full`}
                  >
                    <Image src={item.img} className='shrink-0 rounded-xl' />
                  </div>
                </div>
                <div
                  className='absolute right-2 top-2  hidden h-[30px] w-[30px] items-center justify-center rounded-full bg-[#0000007A] group-hover:flex'
                  onClick={() => {
                    item.name === 'None'
                      ? setDefaultModal(true)
                      : setviewModal(true);
                  }}
                >
                  <Image src={ExpandIcon} className='w-full h-full' />
                </div>

                <div
                  className={`absolute bottom-0 top-3/4 flex w-full items-center justify-center gap-2.5  p-2  focus:outline-none focus:ring  ${
                    selectImage === index ? 'bg-[#5848BC]' : 'bg-black/[0.80]'
                  } `}
                >
                  <div
                    className={`overflow-hidden text-ellipsis whitespace-nowrap text-center text-[13px] font-semibold leading-[18px] ${
                      selectImage === index ? 'bg-[#5848BC]' : ''
                    } `}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*                     Modals                */}

      {defaultModal && (
        <ImageInfoModal
          ImageInfoModal={defaultModal}
          setImageInfoModal={setDefaultModal}
        />
      )}
      {viewModal && (
        <Modal
          open={viewModal}
          closeModal={() => setviewModal(false)}
          modalOverlayStyle='!bg-black/10  '
          modalClassName={`bg-[#121212] flex flex-col flex-start relative rounded-[20px]`}
        >
          <div className='shadow-[0px 32px 96px 0px rgba(0, 0, 0, 0.40)] inline-flex items-center rounded-[20px] bg-[#121212]'>
            {/* box 1 */}
            <div className='flex flex-col items-center bg-[#121212]'>
              <div className='flex max-w-[928px] items-center justify-center self-stretch'>
                <Image src={girlPic} />
              </div>
            </div>
            <div className='flex w-[445px] flex-col items-start self-stretch'>
              {/* Top Block */}
              <div className='flex flex-col items-start self-stretch gap-4 p-6 pt-5'>
                <div className='flex flex-col items-start gap-0.5 self-stretch'>
                  <div className='flex items-center self-stretch gap-2'>
                    <h5 className='font-bold w-full text-[22px] leading-8 text-white'>
                      A-Zovya Photoreal
                    </h5>
                    <div
                      onClick={() => setviewModal(false)}
                      className='cursor-pointer'
                    >
                      <Cross />
                    </div>
                  </div>
                  <div className='font-normal text-[18px] leading-6'>$4.99</div>
                </div>
                <div className='flex items-start self-stretch gap-3'>
                  <button className='flex items-start w-full'>
                    <button className='flex w-full items-center justify-center gap-2 rounded-[14px] border border-white/[0.32] px-5 py-[13px]'>
                      <Correct />
                      <div className='font-bold text-base leading-[22px] '>
                        Added
                      </div>
                    </button>
                  </button>
                  {/*  */}
                  <button className='flex items-start '>
                    <button className='flex items-center justify-center gap-2.5 rounded-[14px] bg-white/[0.08] p-3.5'>
                      <Heart />
                    </button>
                  </button>
                </div>
              </div>
              {/* Comments block */}
              <div className='flex flex-col items-start gap-5 p-6 pt-0 '>
                {/* List */}
                <div className='flex flex-col items-start gap-3.5'>
                  <b className='text-[15px] font-semibold leading-5 text-white'>
                    Model Details
                  </b>
                  {/* iteam 1 */}
                  <div className='flex items-start self-stretch gap-5'>
                    <div className='flex w-[102px] items-center gap-1'>
                      <b className='font-normal text-sm leading-[18px] text-[#979797]'>
                        Model Type
                      </b>
                      <Info />
                    </div>
                    <div className='font-normal text-sm leading-[18px] '>
                      General
                    </div>
                  </div>
                  {/* iteam 2 */}
                  <div className='flex items-start self-stretch gap-5'>
                    <div className='flex w-[102px] items-center gap-1'>
                      <b className='font-normal text-sm leading-[18px] text-[#979797]'>
                        Style
                      </b>
                      <Info />
                    </div>
                    <div className='font-normal text-sm leading-[18px] '>
                      Anime
                    </div>
                  </div>
                  {/* iteam 3 */}
                  <div className='flex items-start self-stretch gap-5'>
                    <div className='flex w-[102px] items-center gap-1'>
                      <b className='font-normal text-sm leading-[18px] text-[#979797]'>
                        Category
                      </b>
                    </div>
                    <div className='font-normal text-sm leading-[18px] '>
                      Realistic Animation
                    </div>
                  </div>
                  {/* iteam 4 */}
                  <div className='flex items-start self-stretch gap-5'>
                    <div className='flex w-[102px] items-center gap-1'>
                      <b className='font-normal text-sm leading-[18px] text-[#979797]'>
                        Pricing
                      </b>
                    </div>
                    <div className='font-normal text-sm leading-[18px] '>
                      Buy once, use forever
                    </div>
                  </div>
                  {/* description */}
                  <div className='flex flex-col items-start gap-2'>
                    <div className='flex items-center pr-0 '>
                      <b className='font-normal text-sm leading-[18px] text-[#979797]'>
                        Description
                      </b>
                    </div>
                    <div className='flex w-[397px] items-start gap-5'>
                      <b className='font-normal text-sm leading-[18px] text-white'>
                        After a lot of tests I'm finally releasing my mix. This
                        started as a model to make After a lot of tests I'm
                        finally releasing my mix. This started as a model to
                        make.
                      </b>
                    </div>
                  </div>
                  {/* generation data block */}
                  <div className='flex flex-col	items-start gap-4 self-stretch rounded-xl bg-white/[0.05] px-4 py-3.5'>
                    <div
                      onClick={AdvanceModal}
                      className='flex items-center self-stretch justify-between cursor-pointer'
                    >
                      <b className='text-[15px] font-semibold leading-5'>
                        Generation data
                      </b>

                      <div
                        className={`h-6 w-6 ${
                          advanceModal ? 'rotate-180' : ''
                        }`}
                        id='myDiv'
                      >
                        <button>
                          <AdvanceArrow />
                        </button>
                      </div>
                    </div>

                    {/*  */}

                    {advanceModal ? (
                      <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2 '>
                            {tabContent.map((items: string, index: number) => {
                              return (
                                <div
                                  key={index}
                                  onClick={(e) => handleExploreSelected(e)}
                                  className={`font-bold cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] ${
                                    exploreSelectedTab === items
                                      ? ' bg-white bg-opacity-20 text-white  '
                                      : 'text-neutral-400'
                                  }`}
                                >
                                  {items}
                                </div>
                              );
                            })}
                          </div>
                          <div className='w-6 h-6 cursor-pointer '>
                            <Copy />
                          </div>
                        </div>

                        <div className='flex items-start gap-2.5 self-stretch'>
                          <div className='font-normal text-sm leading-[18px]'>
                            Best quality, masterpiece, ultra high res,
                            (photorealistic), raw photo, 1girl, offshoulder, in
                            the dark, deep shadow, low key,
                          </div>
                        </div>
                        {/* Row 1 */}
                        <div className='flex items-start gap-[51px] self-stretch'>
                          {/* Iteam1 */}
                          <div className='flex w-[90px] flex-col items-start gap-1'>
                            <div className='text-sm font-semibold leading-[18px]'>
                              CFG scale
                            </div>
                            <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                              7
                            </div>
                          </div>
                          {/* Iteam2 */}
                          <div className='flex flex-col items-start gap-1'>
                            <div className='text-sm font-semibold leading-[18px]'>
                              Steps
                            </div>
                            <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                              40
                            </div>
                          </div>
                          {/* Iteam3 */}
                          <div className='flex flex-col items-start gap-1'>
                            <div className='text-sm font-semibold leading-[18px]'>
                              Sampler
                            </div>
                            <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                              Eular a
                            </div>
                          </div>
                        </div>

                        {/* Row 2 */}
                        <div className='flex items-start gap-[51px] self-stretch'>
                          {/* Iteam1 */}
                          <div className='flex w-[90px] flex-col items-start gap-1'>
                            <div className='text-sm font-semibold leading-[18px]'>
                              Seed
                            </div>
                            <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                              13145374738
                            </div>
                          </div>
                          {/* Iteam2 */}
                          <div className='flex flex-col items-start gap-1'>
                            <div className='text-sm font-semibold leading-[18px]'>
                              Clip Skip
                            </div>
                            <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                              2
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  {/* creator information  */}
                  <div className='flex flex-col items-start gap-4 self-stretch border-b border-white/[0.08] pb-0'>
                    <div className='mb-4 text-[15px] font-semibold leading-5'>
                      Creator information
                    </div>
                    <div className='flex items-center self-stretch justify-between mb-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full '>
                          <Image src={avtar} />
                        </div>
                        <div className='flex flex-col items-start gap-0.5'>
                          <div className='text-[15px] font-semibold leading-5 text-white'>
                            Gayle Frami
                          </div>
                          <div className='font-normal text-[13px] leading-[18px] text-[#979797]'>
                            @mikachan
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center justify-center gap-1.5 rounded-xl bg-white/[0.08] px-4 py-2.5'>
                        <button className='text-sm font-bold leading-5'>
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ImageGallery;
