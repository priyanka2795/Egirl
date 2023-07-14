import Image from 'next/image';
import React, { useState } from 'react';
import circleInformation from '../../../public/assets/circle-information.png';

const GalleryFilterCheckbox = () => {
  const [viewAllTags, setViewAllTags] = useState(false);

  const handleClick = (event: any) => {
    setViewAllTags((current) => !current);
  };
  return (
    <div className='absolute -right-[103px] z-[3] mt-2 flex flex-col items-center rounded-[14px] bg-[#272727] pb-5'>
      <div className='flex w-[346px] flex-col items-start justify-center gap-3 px-6 py-5 text-[#FFFFFF]'>
        <div className='flex items-center justify-between self-stretch'>
          <div className='text-lg font-bold'>Filters</div>
          <div className='text-sm font-normal text-[#979797]'>Clear all</div>
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

      <div className='flex flex-col items-start gap-5 self-stretch px-6'>
        <form className='w-full'>
          <div className='flex w-full flex-col items-start gap-3 self-stretch border-b border-[#ffffff14]'>
            <div className='self-stretch text-[11px] font-semibold text-[#979797]'>
              GENDER
            </div>
            <div className='mb-5 flex flex-col items-start gap-4 self-stretch'>
              <div className='flex items-center gap-2 self-stretch'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Female
                </div>
              </div>
              <div className='flex items-center gap-2 self-stretch'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Male
                </div>
              </div>
              <div className='flex items-center gap-2 self-stretch'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Other
                </div>
              </div>
            </div>
          </div>

          <div className='mt-5 flex w-full flex-col items-start gap-3 self-stretch border-b border-[#ffffff14]'>
            <div className='self-stretch text-[11px] font-semibold text-[#979797]'>
              STYLE
            </div>
            <div className='mb-5 flex flex-col items-start gap-4 self-stretch'>
              <div className='flex items-center gap-2 self-stretch'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Anime
                </div>
              </div>
              <div className='flex items-center gap-2 self-stretch'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Realistic
                </div>
              </div>
              <div className='flex items-center gap-2 self-stretch'>
                <input
                  className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                  type='checkbox'
                />
                <div className='text-[14px] font-normal text-[#FFFFFF]'>
                  Semi-Realistic
                </div>
              </div>
            </div>
          </div>

          <div className='mt-5 flex w-full flex-col items-start gap-3 self-stretch'>
            <div className='self-stretch text-[11px] font-semibold text-[#979797]'>
              TAGS
            </div>
            <div>
              {viewAllTags ? (
                <div className='mb-5 flex flex-col items-start gap-4 self-stretch'>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-none'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Furry
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Ahegao
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      NSFW
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Roleplay
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Fashion Model
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-none'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Furry
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Ahegao
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      NSFW
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Roleplay
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Fashion Model
                    </div>
                  </div>
                </div>
              ) : (
                <div className='mb-5 flex flex-col items-start gap-4 self-stretch'>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727] focus:outline-none'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Furry
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Ahegao
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      NSFW
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Roleplay
                    </div>
                  </div>
                  <div className='flex items-center gap-2 self-stretch'>
                    <input
                      className='flex h-[20px] w-[20px] items-center gap-[10px] rounded bg-[#272727]'
                      type='checkbox'
                    />
                    <div className='text-[14px] font-normal text-[#FFFFFF]'>
                      Fashion Model
                    </div>
                  </div>
                </div>
              )}
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
        </form>
      </div>

      <div className='flex flex-col items-start gap-[10px] self-stretch border-t border-[#ffffff14] p-6'>
        <button className='text-[#FFFFFF ] flex h-[40px] items-center justify-center self-stretch rounded-xl bg-[#5848BC] text-sm  font-bold'>
          Apply
        </button>
      </div>
    </div>
  );
};

export default GalleryFilterCheckbox;
