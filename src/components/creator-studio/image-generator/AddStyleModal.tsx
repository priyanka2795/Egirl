import Image from 'next/image';
import React, { useState } from 'react';
import pic from '@/assets/Collar.webp';
import { Modal } from '@components/modal/modal';
import CloseIcon from '@/assets/xmark-style.webp';
import searchIcon from '@/assets/search-alt.webp';
import Tooltip from '@components/common/tooltip';

const SelfMode = [
  { name: 'Anime', img: pic },
  { name: 'Artistic', img: pic },
  { name: 'Red Dress', img: pic },
  { name: 'Fantasy', img: pic },
  { name: 'Photocell', img: pic },
  { name: 'Artistries', img: pic },
  { name: 'Animes', img: pic },
  { name: 'Fantast', img: pic }
];
const AddedStyle = [
  { name: 'Anime', img: pic },
  { name: 'Artistic', img: pic },
  { name: 'Red Dress', img: pic },
  { name: 'Fantasy', img: pic }
];
interface AddStyleModal {
  SetOpenStyle: React.Dispatch<React.SetStateAction<boolean>>;
}
const StyleTab = ['Your Styles', 'Popular'];

const AddStyleModal = ({ SetOpenStyle }: AddStyleModal) => {
  const [styleTabs, setStyleTabs] = useState<string>('Your Styles');
  const [tooltip, setTooltip] = useState<boolean>(false);
  const [selfModeImages, setSelfModeImages] = useState<any[]>(SelfMode);
  const [selfImageSearch, setSelfImageSearch] = useState<boolean>(false);
  const [searchStyle, setSearchStyle] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const SelectImage = (name: string) => {
    if (selectedItems.length > 3) {
      setSelectedItems(selectedItems.filter((item) => item !== name));
    } else {
      if (selectedItems.includes(name)) {
        setSelectedItems(selectedItems.filter((item) => item !== name));
      } else {
        setSelectedItems([...selectedItems, name]);
      }
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchStyle(searchTerm);
    const filteredItems = SelfMode.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSelfModeImages(filteredItems);
    if (filteredItems.length === 0) {
      setSelfImageSearch(true);
    } else {
      setSelfImageSearch(false);
    }
  };

  return (
    <Modal
      open={true}
      closeModal={() => SetOpenStyle(false)}
      modalOverlayStyle='!bg-black/80 '
      modalClassName={`bg-[#121212] flex flex-col flex-start relative rounded-[20px]`}
    >
      <div className='rounded-[20px] bg-[#121212] '>
        {/* Header */}
        <div className='flex items-center justify-between border-b border-white/[0.08] border-b-white/[0.08] p-8'>
          <h5 className='text-lg font-bold'>Style</h5>
          <button
            className='h-[24px] w-[24px]'
            onClick={() => SetOpenStyle(false)}
          >
            <Image src={CloseIcon} className='' />
          </button>
        </div>
        {/* frame */}
        <div className='flex items-center gap-3 px-8 py-4'>
          {/* tab */}
          {StyleTab.map((items, index) => (
            <div
              key={index}
              className={`cursor-pointer gap-1.5 rounded-xl px-4 py-2 ${
                styleTabs == items ? 'bg-white/[0.16]' : 'text-[#979797]'
              }`}
              onClick={(e) => setStyleTabs((e.target as HTMLElement).innerText)}
            >
              <p className={`font-bold text-[15px]`}>{items}</p>
            </div>
          ))}
        </div>
        {/* search bar */}
        <div className='border-b border-[#FFFFFF14] px-8 pb-6'>
          <div className='flex w-full gap-[10px] rounded-[10px] bg-white/[0.05] p-3'>
            <div className='w-6 h-6'>
              <Image
                className='w-full h-full'
                src={searchIcon}
                alt={''}
                id='myinput'
              />
            </div>
            <input
              placeholder='Search'
              type='text'
              className='font-light flex-1 border-none bg-transparent p-0 text-[15px] leading-6 placeholder:text-[#979797] focus:ring-0'
              value={searchStyle}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Imges  */}
        <div className=''>
          <div className='flex flex-col gap-4 px-8 mt-4 '>
            {/* self made */}
            <h6 className='text-lg font-bold leading-6 text-white'>
              Self Made
            </h6>
            {selfImageSearch ? (
              <p className='font-bold text-center text-[#979797]'>
                Image Not Found
              </p>
            ) : (
              <div className='grid grid-cols-4 gap-x-3 gap-y-4'>
                {selfModeImages.map((items, index) => (
                  <div
                    key={index}
                    className={`relative h-[174px] w-[175px] cursor-pointer overflow-hidden rounded-xl border-[3px] bg-[#121212] ${
                      selectedItems.includes(items.name)
                        ? 'border-[#5848BC]'
                        : 'border-[#121212]'
                    } `}
                    onClick={() => SelectImage(items.name)}
                  >
                    <div className={``}>
                      <Image src={items.img} className='shrink-0 rounded-xl' />
                    </div>
                    <div
                      className={`absolute bottom-0 ${
                        selectedItems.includes(items.name)
                          ? 'bg-[#5848BC]'
                          : 'bg-[#000000CC]'
                      } group flex h-[34px] w-full items-center justify-center`}
                    >
                      <p className='text-[13px] font-semibold'>{items.name}</p>
                      {selectedItems.length > 3 && (
                        <div className='absolute text-xs text-center left-30 -top-14'>
                          <Tooltip Text='You can select maximum of 4 styles' />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Added Styles */}
            {/* <h6 className='text-lg font-bold leading-6 text-white'>Added Styles</h6>
            <div className='grid grid-cols-4 gap-x-3 gap-y-4'>
              {AddedStyle.map((items, index) => (
                <>
                  <div key={index} className={`group relative h-[174px] w-[175px] rounded-xl cursor-pointer bg-[#121212] overflow-hidden border-[2px]  border-[#121212] `} >
                    <div className={``}>
                      <Image src={items.img} className='shrink-0 rounded-xl' />
                    </div>
                    <div className={`absolute bottom-0 h-[34px] w-full flex justify-center items-center bg-[#000000CC]`}>
                      <p className='text-[13px] font-semibold'>{items.name}</p>
                    </div>
                  </div>
                </>
              ))}
            </div> */}
          </div>
        </div>

        <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
          <button
            onClick={() => SetOpenStyle(false)}
            className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px]'
          >
            Cancel
          </button>
          <button
            onClick={() => SetOpenStyle(false)}
            className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px]'
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddStyleModal;
