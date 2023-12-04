import React, { useState } from 'react';
import { Modal } from '@components/modal/modal';
import CloseIcon from '@/assets/xmark-large.webp';
import Image from 'next/image';
import SearchBar from '@components/common/Search/SearchBar';
import searchIcon from '@/assets/search-alt.webp';

interface AddTagModalProp {
  closeDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterData = [
  {
    id: 1,
    title: 'Entertainment',
    tags: [
      'Anime',
      'Animal crossing',
      'Artistic photography',
      'ASMR content',
      'Aesthetically',
      'Astrology'
    ]
  },
  {
    id: 2,
    title: 'Arts',
    tags: ['Body modification', 'Book clubs']
  },
  {
    id: 3,
    title: 'Character',
    tags: [
      'Camping',
      'Cat videos',
      'Collectables',
      'Cosplaying',
      'Cute plushies'
    ]
  },
  {
    id: 4,
    title: 'Entertainment',
    tags: [
      'Anime1',
      'Animal crossing1',
      'Artistic photography1',
      'ASMR content1',
      'Aesthetically1',
      'Astrology1'
    ]
  }
];

const AddTagModal = ({ closeDeleteModal }: AddTagModalProp) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchTags, setSearchTags] = useState<string>('');
  const [addTags, setAddTags] = useState(FilterData);
  const [tagsSearch, setTagsSearch] = useState<boolean>(false);

  const handleOptionChange = (option: string) => {
    console.log(option, 'resr');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTags(searchTerm);
    const filteredItems = FilterData.filter((user) => {
      const tagsLowerCase = user.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return tagsLowerCase;
    });
    setAddTags(filteredItems);
    if (filteredItems.length === 0) {
      setTagsSearch(true);
    } else {
      setTagsSearch(false);
    }
  };

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#121212] max-w-[800px] py-8'
      closeModal={() => closeDeleteModal(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex justify-between px-8 pb-6 border-b border-white CloseIcon border-opacity-10'>
        <h6 className='text-lg font-bold leading-normal text-white'> Tags</h6>
        <div className='cursor-pointer' onClick={() => closeDeleteModal(false)}>
          <Image src={CloseIcon} />
        </div>
      </div>

      <div className='px-8 py-4'>
        <div className='flex w-full gap-[10px] rounded-[14px] bg-white/[0.05] px-4 py-3'>
          <div className='w-6 h-6'>
            <Image className='w-full h-full' src={searchIcon} alt={''} />
          </div>
          <input
            type='text'
            className='w-full border-none bg-transparent p-0 text-[15px] font-light placeholder:text-[#979797] focus:ring-0'
            placeholder='Search'
            value={searchTags}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {selectedOptions.length > 0 && (
        <div
          className={`flex flex-wrap gap-2  border-b border-[#FFFFFF14] ${
            selectedOptions.length > 0 ? 'p-6 pt-0' : ''
          }`}
        >
          <div className='flex flex-wrap gap-5 '>
            {selectedOptions.map((option) => (
              <div
                key={option}
                className='flex items-center gap-1 rounded-xl bg-neutral-800 p-2 text-xs text-[#979797]'
              >
                {option}{' '}
                <span
                  className='cursor-pointer '
                  onClick={() => handleRemoveOption(option)}
                >
                  {/* &#10006; */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                  >
                    <path
                      d='M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5'
                      stroke='#979797'
                      strokeWidth='1.35'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tagsSearch ? (
        <p className='text-center font-bold text-[#979797]'>Image Not Found</p>
      ) : (
        <div className='mb-4 px-7'>
          {addTags.map((data) => {
            return (
              <div key={data.id}>
                <h6 className='p-4 pl-0 text-[#979797]'>{data.title}</h6>
                <div className='flex flex-wrap gap-3 '>
                  {data.tags.map((items, index) => {
                    return (
                      <div
                        className='relative mb-3'
                        key={index}
                        onClick={() => {
                          selectedOptions.includes(items);
                        }}
                      >
                        <input
                          id={`${data.id}` + `${index}`}
                          name='option'
                          checked={selectedOptions.includes(items)}
                          onChange={() => handleOptionChange(items)}
                          className='styled-checkbox checkbox peer absolute left-[23px] top-[13px] hidden bg-zinc-800'
                          type='checkbox'
                          value={`${data.id}` + `${index}`}
                        />
                        <label
                          htmlFor={`${data.id}` + `${index}`}
                          className='mb-4 h-10 w-max cursor-pointer rounded-3xl bg-zinc-800 px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                          id={`${data.id}` + `${index}`}
                        >
                          {items}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className='flex w-full gap-3 px-6 py-4'>
        <button
          className='flex w-1/2 items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-white'
          onClick={() => closeDeleteModal(false)}
        >
          Cancel
        </button>
        <button
          className='flex w-1/2 items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-[22px] text-white'
          onClick={() => closeDeleteModal(false)}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddTagModal;
