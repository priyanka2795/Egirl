import React, { useEffect, useRef, useState } from 'react';
import arrowUpArrowDown from '@/assets/arrow-down-arrow-up2.webp';
import filter from '@/assets/filter.webp';
import Image from 'next/image';
import UnSelectIcon from '../svg/short_border.svg';
import SelectIcon from '../svg/short_select.svg';
import crossIcon from '@/assets/xmark (1).webp';
import Prev from '@/assets/arrow-left.svg';
import Search from '@/assets/search-alt (1).webp';
import Information from '@/assets/circle-information2.webp';

interface ViewImagesTab {
  tabContent: Array<string>;
  exploreSelectedTab: string;
  setExploreSelected: React.Dispatch<React.SetStateAction<string>>;
  HandleSearch: any;
  SearchTerm: string;
}
const Albumshort = ['Default', 'Sort ascending', 'Sort descending'];
const short = ['Newest first', 'Oldest first'];

const Modal = [
  { id: '1', modalName: 'Stable' },
  { id: '2', modalName: 'Artistic' },
  { id: '3', modalName: 'Fantasy' },
  { id: '4', modalName: 'Photoreal' },
  { id: '5', modalName: 'Model 1' },
  { id: '6', modalName: 'Model 2' },
  { id: '7', modalName: 'Model 3' }
];

const Style = [
  { id: '1', styleName: 'Stable' },
  { id: '2', styleName: 'Artistic' },
  { id: '3', styleName: 'Fantasy' },
  { id: '4', styleName: 'Photoreal' },
  { id: '5', styleName: 'Style 1' },
  { id: '6', styleName: 'Style 2' },
  { id: '7', styleName: 'Style 3' },
  { id: '8', styleName: 'Style 3' },
  { id: '9', styleName: 'Style 3' },
  { id: '10', styleName: 'Style 3' },
  { id: '11', styleName: 'Style 3' }
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
  'Aesthetically'
];
const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ViewImagesTab = ({
  tabContent,
  exploreSelectedTab,
  setExploreSelected,
  HandleSearch,
  SearchTerm
}: ViewImagesTab) => {
  const [shortSelect, setShortSelect] = useState<boolean>(false);
  const [shortTab, setShortTab] = useState<number>(1);
  const [isActive, setActive] = useState<boolean>(false);
  const [albumShortSelect, setAlbumShortSelect] = useState<boolean>(false);
  const [albumShortTab, setAlbumShortTab] = useState<number>(1);
  const [filterToggle, setFilterToggle] = useState<boolean>(false);
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [viewAllStyle, setViewAllStyle] = useState<boolean>(false);
  const [selectTag, setSelectTag] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [checked, setChecked] = useState([] as any);
  const [styleChecked, setStyleChecked] = useState([] as any);

  const handleExploreSelected = (e: React.MouseEvent<HTMLElement>) => {
    setExploreSelected((e.target as HTMLElement).innerText);
  };
  const AlbumSelectShort = (index: number) => {
    setAlbumShortTab(index);
  };
  const SelectShort = (index: number) => {
    setShortTab(index);
  };

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      if (selectedOptions.length < 4) {
        setSelectedOptions([...selectedOptions, option]);
        if (selectedOptions.length === 3) {
          setSelectTag(false);
        }
      }
    }
  };

  const alphabetArray = Alphabet.split('');
  const ApplyFilter = () => {
    if (
      styleChecked.length === 0 &&
      checked.length === 0 &&
      selectedOptions.length === 0
    ) {
      setFilterToggle(false);
    } else {
      setFilterToggle(false);
      setFilterActive(true);
    }
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      // setFilterToggle(false);
      setShortSelect(false);
      setAlbumShortSelect(false);
      setFilterToggle(false);
    }
  };

  const handleCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (name === 'modalAll') {
      setChecked(e.target.checked ? Modal.map((c) => c.modalName) : []);
    } else if (name === 'styleAll') {
      setStyleChecked(e.target.checked ? Style.map((c) => c.styleName) : []);
    }
  };

  const handleCountryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    c: { id: string; modalName: string }
  ) => {
    setChecked((prevChecked: any) =>
      e.target.checked
        ? [...prevChecked, c.modalName]
        : prevChecked.filter((item: string) => item !== c.modalName)
    );
  };
  const handleStyleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    c: { id: string; styleName: string }
  ) => {
    setStyleChecked((prevChecked: any) =>
      e.target.checked
        ? [...prevChecked, c.styleName]
        : prevChecked.filter((item: string) => item !== c.styleName)
    );
  };

  return (
    <div
      className='flex justify-between border-b border-white/[0.08] pb-5'
      ref={dropdownRef}
    >
      <div className='flex items-start justify-start gap-3'>
        {tabContent.map((items: string, index: number) => {
          return (
            <div
              key={index}
              onClick={(e) => handleExploreSelected(e)}
              className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
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

      <div className='flex items-center gap-2'>
        {exploreSelectedTab === 'Albums' ? (
          <>
            <button
              className={`relative ${isActive ? 'w-[360px]' : 'h-9 w-[30px]'}`}
            >
              <span
                className={`absolute left-2 ${isActive ? 'top-[10px]' : 'top-2'}
            `}
                onClick={() => {
                  setActive(!isActive), setAlbumShortSelect(false);
                }}
              >
                <Image className='h-[24px] w-[24px]' src={Search} alt={''} />
              </span>
              <input
                value={SearchTerm}
                onChange={HandleSearch}
                type='text'
                className={` h-10 w-full rounded-[14px] border-none px-4 text-[14px] placeholder:text-[#979797] focus:border-[#FFFFFF52] focus:ring-transparent active:border-[#FFFFFF52] ${
                  isActive ? 'bg-[#FFFFFF0D] pl-10' : 'bg-transparent pl-4'
                }`}
                placeholder='Search'
              />
              {isActive ? (
                <span
                  className='absolute right-2 top-2'
                  onClick={() => setActive(!isActive)}
                >
                  <Image className='w-full h-full' src={crossIcon} alt={''} />
                </span>
              ) : (
                ''
              )}
            </button>
            <div className='relative flex'>
              <div
                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${
                  albumShortSelect && 'bg-[#FFFFFF14]'
                }`}
                onClick={() => setAlbumShortSelect(!albumShortSelect)}
              >
                <Image src={arrowUpArrowDown} alt={''} />
              </div>

              {albumShortSelect && (
                <div className='shadow-[0px 8px 12px 0px #0000001F] absolute right-0 top-12 z-50 flex w-[170px] flex-col gap-2 rounded-[14px] bg-[#1A1A1A] px-3 py-4'>
                  <>
                    {Albumshort.map((item, index) => (
                      <div
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => AlbumSelectShort(index)}
                        key={index}
                      >
                        {albumShortTab == index ? (
                          <SelectIcon />
                        ) : (
                          <UnSelectIcon />
                        )}
                        <p>{item}</p>
                      </div>
                    ))}
                  </>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className='relative flex'>
              <div
                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${
                  shortSelect && 'bg-[#FFFFFF14]'
                }`}
                onClick={() => {
                  setShortSelect(!shortSelect), setFilterToggle(false);
                }}
              >
                <Image src={arrowUpArrowDown} alt={''} />
              </div>
              {shortSelect && (
                <div className='shadow-[0px 8px 12px 0px #0000001F] absolute right-0 top-12 z-50 flex w-[170px] flex-col gap-2 rounded-[14px] bg-[#1A1A1A] px-3 py-4'>
                  {short.map((item, index) => (
                    <div
                      className='flex items-center gap-2 cursor-pointer'
                      onClick={() => SelectShort(index)}
                      key={index}
                    >
                      {shortTab == index ? <SelectIcon /> : <UnSelectIcon />}
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='relative'>
              <button
                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${
                  filterToggle && 'bg-[#FFFFFF14]'
                }`}
                onClick={() => {
                  setFilterToggle(!filterToggle), setShortSelect(false);
                }}
              >
                <div className='relative pt-2'>
                  <Image src={filter} alt={''} />
                  {filterActive && (
                    <span className='absolute right-0 top-2 h-[6px] w-[6px] rounded-full bg-[#FF5336]'></span>
                  )}
                </div>
              </button>

              {filterToggle && (
                <div className='shadow-[0px 8px 12px 0px #0000001F] absolute right-0 top-12 z-50 w-[346px] rounded-[14px] bg-[#272727]'>
                  <div className='flex flex-col gap-3 px-6 py-5'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        {selectTag ? (
                          <div
                            className='cursor-pointer'
                            onClick={() => setSelectTag(false)}
                          >
                            <Prev />
                          </div>
                        ) : (
                          ''
                        )}
                        <h5 className='text-lg font-bold'>
                          {selectTag ? 'Tags' : 'Filter'}
                        </h5>
                      </div>
                      {selectTag ? (
                        ''
                      ) : (
                        <button
                          className='text-[#979797]'
                          onClick={() => {
                            setFilterActive(false),
                              setStyleChecked([]),
                              setChecked([]),
                              setSelectedOptions([]);
                          }}
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                  </div>
                  {selectTag ? (
                    <div className='flex items-center gap-1 px-6 pb-3'>
                      <Image src={Information} />{' '}
                      <p className='text-xs text-[#979797]'>
                        The maximum number of filters is 4
                      </p>
                    </div>
                  ) : (
                    ''
                  )}

                  <div className='relative mx-6 mb-5'>
                    <div className='absolute left-2 top-2.5'>
                      <Image src={Search} className='' />
                    </div>
                    <input
                      type='text'
                      id='category'
                      placeholder='Search'
                      className='h-10 w-full rounded-[14px] border-none bg-[#FFFFFF0D] pl-8 text-white placeholder:text-[#979797] focus:border-none focus:ring-0 active:border-none'
                      name='category'
                    />
                  </div>

                  {selectTag ? (
                    <div className='h-[500px] overflow-y-auto '>
                      <div className=' relative border-t border-t-[#FFFFFF14] p-6 '>
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
                                  className='mb-4 h-10 w-max cursor-pointer rounded-3xl bg-[#FFFFFF0D] px-3 py-2 pl-3 text-base text-[white] transition peer-checked:bg-[#5848BC] peer-checked:text-[#f4f4f4]'
                                  id={`${index}`}
                                >
                                  {items}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                        <div className='absolute flex flex-col w-4 gap-1 right-1 top-6'>
                          {alphabetArray.map((letter, index) => (
                            <span
                              key={index}
                              className={`cursor-pointer text-[11px] ${
                                letter === 'A'
                                  ? 'text-[#979797]'
                                  : 'text-[#515151]'
                              }`}
                            >
                              {letter}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='h-[500px] overflow-y-auto px-6'>
                      <div className='border-b border-b-[#FFFFFF14] '>
                        <p className='uppercase text-[#979797]'>Model</p>
                        <div
                          className={`flex flex-col gap-4 overflow-hidden py-3 ${
                            viewAll ? 'h-auto' : 'h-[200px]'
                          }`}
                        >
                          <div className='flex items-center gap-2'>
                            <input
                              className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0'
                              type='checkbox'
                              name='modalAll'
                              id='modalAll'
                              checked={checked.length === Modal.length}
                              onChange={(e) => handleCheckAllChange(e)}
                            />
                            <label className='' htmlFor='modalAll'>
                              All Model
                            </label>
                          </div>

                          {Modal.map((c: { id: string; modalName: string }) => (
                            <div className='flex items-center gap-2' key={c.id}>
                              <input
                                className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0 '
                                type='checkbox'
                                id={c.id}
                                checked={checked.includes(c.modalName)}
                                onChange={(e) => handleCountryChange(e, c)}
                              />
                              <label htmlFor={c.id}>{c.modalName}</label>
                            </div>
                          ))}
                        </div>
                        <button
                          className={`pb-5 text-[#8C7DD0] ${
                            viewAll
                              ? 'cursor-not-allowed opacity-50'
                              : 'opacity-100'
                          }`}
                          onClick={() => setViewAll(true)}
                        >
                          View all
                        </button>
                      </div>

                      <div className='mt-3 border-b border-b-[#FFFFFF14]'>
                        <p className='uppercase text-[#979797]	'>Style</p>
                        <div
                          className={`flex flex-col gap-4 overflow-hidden py-3 ${
                            viewAllStyle ? 'h-auto' : 'h-[200px]'
                          }`}
                        >
                          <div className='flex items-center gap-2'>
                            <input
                              className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0'
                              type='checkbox'
                              name='styleAll'
                              id='styleAll'
                              checked={styleChecked.length === Style.length}
                              onChange={(e) => handleCheckAllChange(e)}
                            />
                            <label className='' htmlFor='styleAll'>
                              All Style
                            </label>
                          </div>

                          {Style.map((c: { id: string; styleName: string }) => (
                            <div className='flex items-center gap-2' key={c.id}>
                              <input
                                className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0 '
                                type='checkbox'
                                id={c.id}
                                checked={styleChecked.includes(c.styleName)}
                                onChange={(e) => handleStyleChange(e, c)}
                              />
                              <label htmlFor={c.id}>{c.styleName}</label>
                            </div>
                          ))}
                        </div>
                        <button
                          className={`pb-5 text-[#8C7DD0] ${
                            viewAllStyle
                              ? 'cursor-not-allowed opacity-50'
                              : 'opacity-100'
                          }`}
                          onClick={() => setViewAllStyle(true)}
                        >
                          View all
                        </button>
                      </div>

                      <div className='mt-3'>
                        <p className='uppercase text-[#979797]'>Tags</p>
                        <div
                          className={`flex flex-col gap-4 overflow-hidden py-3`}
                        >
                          {selectedOptions.map((items, index) => (
                            <div
                              className='flex items-center gap-2'
                              key={index}
                            >
                              <input
                                type='checkbox'
                                id={items}
                                className='h-5 w-5 rounded border-[#FFFFFF3D] bg-transparent text-[#5848BC] focus:ring-0 dark:ring-offset-0  dark:focus:ring-0 '
                                checked={checked}
                              />
                              <label htmlFor={items}>{items}</label>
                            </div>
                          ))}
                        </div>
                        <button
                          className='pb-5 text-[#8C7DD0]'
                          onClick={() => setSelectTag(true)}
                        >
                          View all
                        </button>
                      </div>
                    </div>
                  )}
                  {selectTag ? (
                    ''
                  ) : (
                    <div className='mt-2 border-t border-t-[#FFFFFF14] p-5'>
                      <button
                        className='w-full rounded-[14px] bg-[#5848BC] px-5 py-3'
                        onClick={() => ApplyFilter()}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewImagesTab;
