//@ts-nocheck
import { Modal } from '@components/modal/modal';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import micaChanFullImg from '@/assets/mica-chan-img-bookmark.webp';
import avatar from '@/assets/avatar.webp';
import threeDotsIcon from '@/assets/three-dots-icon.webp';
import horizontalDotsIcon from '@/assets/dots-horizontal.webp';
import crossIcon from '@/assets/xmark.webp';
import orangeHeart from '@/assets/orange-heart.webp';
import messageIcon from '@/assets/message-square.webp';
import bookmark from '@/assets/bookmark-filled.webp';
import shareIcon from '@/assets/share-icon.webp';
import Slider from 'react-slick';
import goldenShoulderGirlAvatar from '@/assets/golden-shoulder-girl-avatar.webp';
import threeDotsWhite from '@/assets/three-dots-white.webp';
import pinkPhnGirlAvatar from '@/assets/pink-phn-girl-avatar.webp';
import heartIcon from '@/assets/unfilled-heart.webp';
import smileyIcon from '@/assets/face-smile-icon.webp';
import CloseIconSvg from '@/assets/svgImages/close-icon.svg';
import FlagRed from '@/assets/flag.svg';
import Pen from '@/assets/pen.webp';
import DeleteIcon from '@/assets/trash-blank-alt3.webp';
import { getPostComments, postComment } from 'services/services';
import Cookies, { set } from 'js-cookie';
import BookmarkIcon from '../home/Post/svg/bookmark.svg';
import BookmarkFillIcon from '../home/Post/svg/bookmark-fill.svg';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

interface BookMarkModalProp {
  closeModalState: any;
  postId?: number;
  postUpdate?: boolean;
  setPostUpdate?: any;
  commentsNumber?: string;
  heartsNumber?: string;
  bookmarksActive?: boolean;
  name?: string;
  username?: string;
  postText?: string;
}
const BookMarkModal = ({
  closeModalState,
  postId,
  postUpdate,
  setPostUpdate,
  commentsNumber,
  heartsNumber,
  bookmarksActive,
  name,
  username,
  postText
}: BookMarkModalProp) => {
  const dispatch = useAppDispatch();
  const token: any = Cookies.get('accessToken');
  const refreshTokenData: any = useAppSelector(
    (state) => state.tokenRefresh?.tokenData
  );

  const [reportToggle, setReportToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [textAreaCount, setTextAreaTotal] = useState('');
  const [textArea, setTextArea] = useState(true);
  const [commentUpdate, setCommentUpdate] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [showMoreComment, setShowMoreComment] = useState(false)
  // ===== post comment function ====
  const handlePostComment = () => {
    setTextArea(true), setTextAreaTotal('');
    let commentData = {
      post_id: postId,
      description: textAreaCount
    };
    postComment(commentData, token)
      .then((res: any) => {
        console.log('post comment res---', res);
        setPostUpdate(!postUpdate);
        setCommentUpdate(!commentUpdate);
      })
      .catch((err: any) => {
        console.log('post comment err---', err);
      });
  };

  // ===== get post comment api =====
  useEffect(() => {
    getPostComments(postId, 1, 10, token)
      .then((res: any) => {
        console.log('get comments res----', res);
        setCommentsData(res?.data);
        if (res?.response?.status === 401) {
          dispatch(tokenRefresh());
        }
      })
      .catch((err) => {
        console.log('get comments err----', err);
      });
  }, [commentUpdate]);

  return (
    <Modal
      open={true}
      modalClassName='flex flex-col h-max  w-[1248px] rounded-[20px] bg-[#121212] overflow-hidden mt-10 mb-10 ml-5 bookmark-img-text'
      closeModal={() => closeModalState(false)}
      modalOverlayStyle='!bg-black/80'
    >
      <div className='flex '>
        <div className='book-mark-modal relative h-full w-[800px]'>
          <Slider {...settings}>
            <Image className='' src={micaChanFullImg} alt={''} />
            <Image className='' src={micaChanFullImg} alt={''} />
            <Image className='' src={micaChanFullImg} alt={''} />
            <Image className='' src={micaChanFullImg} alt={''} />
          </Slider>
        </div>

        <div className='w-full'>
          <div className='flex w-full flex-col gap-4 border-b border-white/[0.12] px-4 py-6'>
            <div className='flex justify-between w-full'>
              <div className='flex items-center gap-4'>
                <div className='h-[48px] w-[48px]'>
                  <Image className='w-full h-full' src={avatar} alt={''} />
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
                    {name}
                  </div>
                  <div className='font-normal text-[15px] leading-5 text-[#979797]'>
                    {username} · 32m
                  </div>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='h-[24px] w-[24px]'>
                  <Image
                    className='object-contain'
                    src={horizontalDotsIcon}
                    alt={''}
                  />
                </div>
                <div
                  className='h-[24px] w-[24px]'
                  onClick={() => closeModalState(false)}
                >
                  <CloseIconSvg />
                  {/* <Image className='object-contain' src={crossIcon} alt={''} /> */}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1 rounded-[12px] p-2'>
              <div className='font-normal text-[14px] leading-[18px] text-[#FFFFFF]'>
                {postText}
              </div>
              <div className='flex gap-[6px]'>
                <div className='font-normal text-[14px] leading-[18px] text-[#8C7DD0]'>
                  #girl
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#8C7DD0]'>
                  #mood
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#8C7DD0]'>
                  #relaxtime
                </div>
              </div>
            </div>
          
            <div className='flex gap-3 p-2'>
              <div className='flex gap-[6px] rounded-[100px] bg-[#FF5336]/[0.16] px-3 py-2'>
                <Image
                  className='h-[20px] w-[20px] object-contain'
                  src={orangeHeart}
                  alt={''}
                />
                <div className='font-normal text-[15px] text-[#F44E32]'>
                  {heartsNumber}
                </div>
              </div>
              <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
                <Image
                  className='h-[20px] w-[20px] object-contain'
                  src={messageIcon}
                  alt={''}
                />
                <div className='font-normal text-[15px] text-[#FFFFFF]'>
                  {commentsNumber}
                </div>
              </div>
              <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
                {bookmarksActive ? (
                  <BookmarkFillIcon className='text-[#979797]' />
                ) : (
                  <BookmarkIcon className='text-[#979797]' />
                )}
              </div>
              <div className='flex gap-[6px] rounded-[100px] bg-white/[0.08] px-3 py-2'>
                <Image
                  className='h-[20px] w-[20px] object-contain'
                  src={shareIcon}
                  alt={''}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-3 p-6'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2 rounded-[14px] bg-[#1A1A1A] px-5 py-4'>
                <div className='flex justify-between'>
                  <div className='flex gap-3'>
                    <div className='h-[40px] w-[40px]'>
                      <Image
                        className='h-full w-full rounded-[100px]'
                        src={goldenShoulderGirlAvatar}
                        alt={''}
                      />
                    </div>
                    <div className='flex flex-col gap-[2px]'>
                      <div className='flex gap-2'>
                        <div className='font-bold text-[15px] leading-5 text-[#FFFFFF]'>
                          Alina Anila
                        </div>
                        <div className='font-normal text-[15px] leading-5 text-[#979797]'>
                          @alinaanila
                        </div>
                      </div>
                      <div className='font-normal text-[13px] leading-[18px] text-[#979797]'>
                        5h
                      </div>
                    </div>
                  </div>
                  <div className='relative h-[24px] w-[24px]'>
                    <button onClick={() => setReportToggle(!reportToggle)}>
                      <Image
                        className='h-full w-full text-[#FFFFFF]'
                        src={threeDotsWhite}
                        alt={''}
                      />
                    </button>
                    {reportToggle && (
                      <div className='shadow-[0px 8px 12px 0px #0000001F] absolute right-0 w-[218px] rounded-[14px] bg-[#272727] py-2'>
                        <div className='flex items-center gap-2 px-4 py-[10px]'>
                          <FlagRed />
                          <p className='text-[#FF5336]'>Report</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <div className='font-normal text-[13px] leading-[18px] text-[#FFFFFF]'>
                    What do you guys think of my goth cosplay? uwu -
                    私のゴスコスプレについてどう思いますか？uwuWhat do you guys
                    think of my goth cosplay? uwu -
                    私のゴスコスプレについてどう思いますか？uwuWhat do you guys
                    think of my goth cosplay? uwu -
                    私のゴスコスプレについてどう思いますか？uwu
                  </div>
                  <div className='flex w-max gap-1 rounded-[100px] bg-[#FF5336]/[0.16] px-2 py-[6px]'>
                    <Image
                      className='h-[16px] w-[16px] object-contain'
                      src={orangeHeart}
                      alt={''}
                    />
                    <div className='text-[13px] font-semibold text-[#F44E32]'>
                      27
                    </div>
                  </div>
                </div>
              </div>
              {commentsData?.map((ele: any, index: number) => {
                return (
                  <div className='flex flex-col gap-2 rounded-[14px] bg-[#1A1A1A] px-5 py-4' key={index}>
                    <div className='flex justify-between'>
                      <div className='flex gap-3'>
                        <div className='h-[40px] w-[40px]'>
                          <Image
                            className='w-full h-full'
                            src={pinkPhnGirlAvatar}
                            alt={''}
                          />
                        </div>
                        <div className='flex flex-col gap-[2px]'>
                          <div className='flex gap-2'>
                            <div className='font-bold text-[15px] text-[#FFFFFF]'>
                              {ele.commenter_username}
                            </div>
                            <div className='font-normal text-[15px] text-[#979797]'>
                              @{ele.commenter_display_name}
                            </div>
                          </div>
                          <div className='font-normal text-[13px] text-[#979797]'>
                            5h
                          </div>
                        </div>
                      </div>
                      <div className='relative h-[24px] w-[24px]'>
                        <button onClick={() => setEditToggle(!editToggle)}>
                          <Image
                            className='w-full h-full'
                            src={threeDotsWhite}
                            alt={''}
                          />
                        </button>
                        {editToggle && (
                          <div className='shadow-[0px 8px 12px 0px #0000001F] absolute right-0 w-[218px] rounded-[14px] bg-[#272727] py-2'>
                            <div className='flex items-center gap-2 px-4 py-[10px]'>
                              <Image src={Pen} />
                              <p className=''>Edit</p>
                            </div>
                            <div className='flex items-center gap-2 px-4 py-[10px]'>
                              <Image
                                src={DeleteIcon}
                                className='!h-[18px] !w-[18px] object-cover'
                              />
                              <p className='text-[#FF5336]'>Delete</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                      <div className='font-normal text-[13px] leading-[18px] text-[#FFFFFF]'>
                        {ele.description}
                      </div>
                      <div className='flex gap-[10px]'>
                        <div className='flex gap-1 rounded-[100px] bg-white/[0.08] px-2 py-[6px]'>
                          <div className='h-[16px] w-[16px]'>
                            <Image
                              className='w-full h-full'
                              src={heartIcon}
                              alt={''}
                            />
                          </div>
                          <div className='text-[13px] font-semibold text-[#FFFFFF]'>
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className='rounded-[12px] bg-white/[0.08] px-4 py-[10px] text-[14px] font-[700] text-[#979797]'
            onClick={()=> setShowMoreComment(!showMoreComment)}
            >
              Show more comments
            </button>
          </div>

          <div className='flex w-full flex-col border-t border-white/[0.12] p-6'>
            <div
              className={`relative rounded-[14px] pb-3 pl-6  ${
                textArea
                  ? 'h-[56px] overflow-hidden bg-[#FFFFFF0D] p-[16px] py-2'
                  : ' bg-[#0000007A] pr-3 pt-6'
              }`}
            >
              <textarea
                name=''
                id=''
                cols={36}
                rows={2}
                value={textAreaCount}
                maxLength={160}
                onChange={(e) => setTextAreaTotal(e.target.value)}
                onFocus={() => setTextArea(false)}
                placeholder='Your reply ...'
                className='resize-none border-none bg-transparent placeholder:text-[#979797] focus:ring-0'
              ></textarea>
              <div
                className={`absolute right-3  ml-[203px] h-[24px] w-[24px] ${
                  textArea ? 'top-4' : 'top-7'
                }`}
              >
                <Image src={smileyIcon} alt={''} />
              </div>
              <div className='flex items-center justify-end gap-4'>
                <p className='text-[#979797]'>{textAreaCount.length}/160</p>
                <button
                  className='font-bold flex items-center justify-center rounded-[16px] bg-[#5848BC] px-6 py-4 text-[18px] leading-6 text-white'
                  onClick={handlePostComment}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BookMarkModal;
