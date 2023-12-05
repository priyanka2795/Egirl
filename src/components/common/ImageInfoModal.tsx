import React, { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@components/modal/modal';
import girlPic from '@/assets/girl.webp';
import Cross from '@/assets/svgImages/close-icon.svg';
import Copy from '../creator-studio/svg/Copy.svg';
import Info from '../creator-studio/svg/info.svg';
import Grid from '@/assets/dots-vertical.webp';

const PromptTags = [
  'Silver hair',
  'Almond-shaped eyes',
  'Lean and agile',
  'Scarred cheek',
  'Elegantly poised',
  'Broad shoulders',
  'Bald-headed',
  'Enigmatic gaze'
];
const tabContent = ['Prompt', 'Negative prompt'];
interface ImageInfoModal {
  ImageInfoModal?: any;
  setImageInfoModal?: any;
}

const ImageInfoModal = ({
  ImageInfoModal,
  setImageInfoModal
}: ImageInfoModal) => {
  const [showMorePrompt, setShowMorePrompt] = useState(false);
  const [selectPrompt, setSelectPrompt] = useState<string[]>([]);
  const [exploreSelectedTab, setExploreSelected] = useState<string>('Prompt');

  const SelectPrompts = (name: string) => {
    if (selectPrompt.length > 2) {
      setSelectPrompt(selectPrompt.filter((item) => item !== name));
    } else {
      if (selectPrompt.includes(name)) {
        setSelectPrompt(selectPrompt.filter((item) => item !== name));
      } else {
        setSelectPrompt([...selectPrompt, name]);
      }
    }
  };

  const handleExploreSelected = (e: React.MouseEvent<HTMLElement>) => {
    setExploreSelected((e.target as HTMLElement).innerText);
  };

  return (
    <div>
      <Modal
        open={ImageInfoModal}
        closeModal={() => setImageInfoModal(false)}
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
          {/* box 2 */}
          <div className=' flex w-[445px] flex-col justify-between self-stretch p-6'>
            <div className='flex flex-col items-start self-stretch gap-5 '>
              <div className='flex items-center self-stretch gap-2'>
                <h5 className='w-full text-[22px] font-black leading-8 text-white'>
                  Image info
                </h5>
                <div
                  onClick={() => setImageInfoModal(false)}
                  className='cursor-pointer'
                >
                  <Cross />
                </div>
              </div>

              <div className='flex items-center gap-1 text-xs text-[#979797]'>
                <Info />
                <p>Click on the tag to get its details</p>
              </div>
              <div className='flex w-full flex-col gap-4 rounded-[12px] bg-[#FFFFFF0D] px-4 py-[14px]'>
                <h2 className='text-[15px] font-[600]'>Prompt</h2>
                <div
                  className={`flex flex-wrap gap-2 ${
                    showMorePrompt ? 'h-auto' : 'h-[90px]'
                  } overflow-hidden`}
                >
                  {PromptTags.map((items, index) => (
                    <div
                      className={`flex cursor-pointer items-center gap-2 rounded-xl  px-[10px] py-2 ${
                        selectPrompt.includes(items)
                          ? 'bg-[#5848BC]'
                          : 'bg-[#FFFFFF29]'
                      }`}
                      onClick={() => SelectPrompts(items)}
                    >
                      <Image src={Grid} className='w-full h-full' />
                      <span>{items}</span>
                    </div>
                  ))}
                </div>
                <p
                  className='w-[80px] cursor-pointer text-[14px] font-black text-[#979797]'
                  onClick={() => setShowMorePrompt(!showMorePrompt)}
                >
                  Show more
                </p>
              </div>

              <div className='flex flex-col	items-start gap-4 self-stretch rounded-xl bg-white/[0.05] px-4 py-3.5'>
                <div className='flex items-center self-stretch justify-between'>
                  <b className='text-[15px] font-semibold leading-5'>
                    Generation data
                  </b>
                </div>
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
                      (photorealistic), raw photo, 1girl, offshoulder, in the
                      dark, deep shadow, low key,
                    </div>
                  </div>
                  <div className='flex items-start gap-[51px] self-stretch'>
                    <div className='flex w-[90px] flex-col items-start gap-1'>
                      <div className='text-sm font-semibold leading-[18px]'>
                        CFG scale
                      </div>
                      <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                        7
                      </div>
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                      <div className='text-sm font-semibold leading-[18px]'>
                        Steps
                      </div>
                      <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                        40
                      </div>
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                      <div className='text-sm font-semibold leading-[18px]'>
                        Sampler
                      </div>
                      <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                        Eular a
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start gap-[51px] self-stretch'>
                    <div className='flex w-[90px] flex-col items-start gap-1'>
                      <div className='text-sm font-semibold leading-[18px]'>
                        Seed
                      </div>
                      <div className='font-normal text-sm leading-[18px] text-[#979797]'>
                        13145374738
                      </div>
                    </div>
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
              </div>
            </div>
            <div>
              <button className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px]'>
                Use again
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageInfoModal;
