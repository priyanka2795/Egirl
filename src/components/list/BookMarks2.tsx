import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import micaChanFullImg from '@/assets/mica-chan-img-bookmark.webp'
import avatar from '@/assets/avatar.webp'
import threeDotsIcon from '@/assets/three-dots-icon.webp'
import crossIcon from '@/assets/xmark.webp'
import orangeHeart from '@/assets/orange-heart.webp'
import messageIcon from '@/assets/message-square.png'
import bookmark from '@/assets/bookmark-filled.webp'
import shareIcon from '@/assets/share-icon.webp'
import Slider from 'react-slick';
import goldenShoulderGirlAvatar from '@/assets/golden-shoulder-girl-avatar.webp'
import threeDotsWhite from '@/assets/three-dots-white.webp'
import pinkPhnGirlAvatar from '@/assets/pink-phn-girl-avatar.webp'
import heartIcon from '@/assets/unfilled-heart.webp'
import smileyIcon from '@/assets/face-smile-icon.webp';

const settings = { 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


const BookMarks2 = () => {
  return (
    <div>
      <div className='flex w-[1000px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5'>
        <div className='w-[600px] h-[800px]'>
            <Slider {...settings}>
                <Image className='' src={micaChanFullImg} alt={''} />
                <Image className='' src={micaChanFullImg} alt={''} />
                <Image className='' src={micaChanFullImg} alt={''} />
                <Image className='' src={micaChanFullImg} alt={''} />
            </Slider>
        </div>

        <div className='w-full'>
            <div className='w-full flex flex-col gap-4 px-4 py-6 border-b border-white/[0.12]'>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[48px] h-[48px]'>
                            <Image className='w-full h-full' src={avatar} alt={''} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-[#FFFFFF] text-[18px] leading-6 font-bold'>Mika-chan</div>
                            <div className='text-[#979797] text-[15px] leading-5 font-normal'>@mikachan · 32m</div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-[24px] h-[24px]'>
                            <Image className='object-contain' src={threeDotsIcon} alt={''} />
                        </div>
                        <div className='w-[24px] h-[24px]'>
                            <Image className='object-contain' src={crossIcon} alt={''} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 p-2 rounded-[12px]'>
                    <div className='text-[#FFFFFF] text-[14px] leading-[18px] font-normal'>Hello dears, my mood today is 🤗</div>
                    <div className='flex gap-[6px]'>
                        <div className='text-[#8C7DD0] text-[14px] leading-[18px] font-normal'>#girl</div>
                        <div className='text-[#8C7DD0] text-[14px] leading-[18px] font-normal'>#mood</div>
                        <div className='text-[#8C7DD0] text-[14px] leading-[18px] font-normal'>#relaxtime</div>
                    </div>
                </div>
                <div className='flex gap-3 p-2'>
                    <div className='flex gap-[6px] px-3 py-2 rounded-[100px] bg-[#FF5336]/[0.16]'>
                        <Image className='w-[20px] h-[20px] object-contain' src={orangeHeart} alt={''} />
                        <div className='text-[#F44E32] text-[15px] font-normal'>2</div>
                    </div>
                    <div className='flex gap-[6px] px-3 py-2 rounded-[100px] bg-white/[0.08]'>
                        <Image className='w-[20px] h-[20px] object-contain' src={messageIcon} alt={''} />
                        <div className='text-[#FFFFFF] text-[15px] font-normal'>1</div>
                    </div>
                    <div className='flex gap-[6px] px-3 py-2 rounded-[100px] bg-white/[0.08]'>
                        <Image className='w-[20px] h-[20px] object-contain' src={bookmark} alt={''} />
                    </div>
                    <div className='flex gap-[6px] px-3 py-2 rounded-[100px] bg-white/[0.08]'>
                        <Image className='w-[20px] h-[20px] object-contain' src={shareIcon} alt={''} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-3 p-6'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2 px-5 py-4 bg-[#1A1A1A] rounded-[14px]'>
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <div className='w-[40px] h-[40px]'>
                                    <Image className='w-full h-full rounded-[100px]' src={goldenShoulderGirlAvatar} alt={''} />
                                </div>
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-bold leading-5'>Alina Anila</div>
                                        <div className='text-[#979797] text-[15px] font-normal leading-5'>@alinaanila</div>
                                    </div>
                                    <div className='text-[#979797] text-[13px] font-normal leading-[18px]'>5h</div>
                                </div>
                            </div>
                            <div className='w-[24px] h-[24px]'>
                                <Image className='w-full h-full text-[#FFFFFF]' src={threeDotsWhite} alt={'' } />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-[#FFFFFF] text-[13px] font-normal leading-[18px]'>What do you guys think of my goth cosplay? uwu - 私のゴスコスプレについてどう思いますか？uwuWhat do you guys think of my goth cosplay? uwu - 私のゴスコスプレについてどう思いますか？uwuWhat do you guys think of my goth cosplay? uwu - 私のゴスコスプレについてどう思いますか？uwu</div>
                            <div className='w-max flex gap-1 px-2 py-[6px] bg-[#FF5336]/[0.16] rounded-[100px]'>
                                <Image className='w-[16px] h-[16px] object-contain' src={orangeHeart} alt={''} />
                                <div className='text-[#F44E32] text-[13px] font-semibold'>27</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 px-5 py-4 bg-[#1A1A1A] rounded-[14px]'>
                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <div className='w-[40px] h-[40px]'>
                                    <Image className='w-full h-full' src={pinkPhnGirlAvatar} alt={''} />
                                </div>
                                <div className='flex flex-col gap-[2px]'>
                                    <div className='flex gap-2'>
                                        <div className='text-[#FFFFFF] text-[15px] font-bold'>My Comment</div>
                                        <div className='text-[#979797] text-[15px] font-normal'>@mycomment</div>
                                    </div>
                                    <div className='text-[#979797] text-[13px] font-normal'>5h</div>
                                </div>
                            </div>
                            <div className='w-[24px] h-[24px]'>
                                <Image className='w-full h-full' src={threeDotsWhite} alt={''} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-[#FFFFFF] text-[13px] font-normal leading-[18px]'>I like it!!!</div>
                            <div className='flex gap-[10px]'>
                                <div className='flex px-2 py-[6px] gap-1 rounded-[100px] bg-white/[0.08]'>
                                    <div className='w-[16px] h-[16px]'>
                                        <Image className='w-full h-full' src={heartIcon} alt={''} />
                                    </div>
                                    <div className='text-[#FFFFFF] text-[13px] font-semibold'>2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='px-4 py-[10px] rounded-[12px] bg-white/[0.08] text-[#979797] text-[14px] font-bold'>Show more comments</button>
            </div>

            <div className='flex p-6 border-t border-white/[0.12] w-full'>
                <div className='w-full flex px-5 py-4 rounded-[14px] bg-white/[0.05]'>
                    <div className='text-[#979797] text-[15px] font-normal'>Your reply ...</div>
                    <div className='ml-[203px] w-[24px] h-[24px]'>
                        <Image src={smileyIcon} alt={''} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BookMarks2
