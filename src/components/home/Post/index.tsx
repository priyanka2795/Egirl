import React, { useState } from 'react';

import HeartIcon from './svg/heart.svg';
import HeartRed from './svg/heart-filled.svg';
import BookmarkIcon from './svg/bookmark.svg';
import BookmarkFillIcon from './svg/bookmark-fill.svg';
import ReturnIcon from './svg/return-icon.svg';
import EyeIcon from './svg/eye.svg';
import LocationPinIcon from './svg/location-pin.svg';
import Image from 'next/image';
import DotsHorizontalIcon from './svg/dots-horizontal.svg';
import CommentIcon from './svg/comment.svg';
import Tooltip from '@components/common/tooltip';
import BookMarkModal from '@components/list/BookMarkModal';

interface PostProps {
  imageUrl: string;
  altText: string;
  name: string;
  username: string;
  postText: string;
  heartsNumber: string;
  commentsNumber: string;
  viewsNumber: string;
  tags: string[];
  location: string;
  hours: string;
  bookmarksActive: boolean;
  setBookmarksActive: (active: boolean) => void;
}

const Post: React.FC<PostProps> = ({
  imageUrl,
  altText,
  name,
  username,
  postText,
  heartsNumber,
  commentsNumber,
  viewsNumber,
  tags,
  location,
  hours,
  bookmarksActive,
  setBookmarksActive
}) => {
  const [likeActive, setLikeActive] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
  // const [bookmarksActive, setBookmarksActive] = useState(false);

  return (
    <>
      <div className='flex w-full flex-col gap-y-4 rounded-[14px] bg-main-bar p-6'>
        {/* Profile Section */}
        <div className='flex items-center'>
          <Image
            src={imageUrl} // Change to your image path
            alt={altText} // Change to your alt text
            width={48}
            height={48}
            className='rounded-full'
          />
          <div className='ml-4 flex items-center'>
            <h3 className='font-bold mr-2 text-lg leading-6'>{name}</h3>
            <p className='size-[15px] font-light leading-5 text-[#979797]'>
              {username + ' • ' + hours}
            </p>
          </div>
          <div className='ml-auto cursor-pointer'>
            <DotsHorizontalIcon />
          </div>
        </div>
        <div>
          <p className='w-full text-sm leading-[18px] text-white'>{postText}</p>
          <div className='flex items-center gap-x-[6px]'>
            {tags.map((tag, index) => (
              <p
                key={index}
                className='font-light mt-1 cursor-pointer text-sm leading-[18px] text-[#8476C4]'
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className='flex h-auto w-full flex-col gap-y-4'>
          <Image
            // src='https://www.shutterstock.com/image-vector/lock-glass-morphism-trendy-style-260nw-2047414109.jpg' // Change to your image path
            src='/dummy-img.png'
            alt='Locked Post' // Change to your alt text
            width={512}
            height={512}
            className='rounded-xl'
          />
          <div className='flex w-full '>
            <LocationPinIcon />
            <span className='ml-2'>{location}</span>
          </div>
          <div className='font-light flex w-full gap-x-3 text-[15px] leading-5'>
            <button
              className={`transition-duration-100 group relative flex items-center rounded-full px-3 py-2  ${
                likeActive
                  ? 'bg-[#FF533629] '
                  : 'bg-[#282828] hover:bg-[#252525]'
              }`}
              onClick={() => setLikeActive(!likeActive)}
            >
              {likeActive ? (
                <HeartRed />
              ) : (
                <HeartIcon className='text-[#979797]' />
              )}
              <span
                className={`ml-[6px] ${likeActive ? 'text-[#F44E32]' : ''}`}
              >
                {heartsNumber}
              </span>
              <div className='absolute -top-7 z-50 w-max -translate-x-0 -translate-y-2/4 transform transition-all'>
                <Tooltip Text={'Like'} />
              </div>
            </button>
            <button
              className='transition-duration-100 group relative flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'
              onClick={() => setCommentsModal(!commentsModal)}
            >
              <CommentIcon className='text-[#979797]' />
              <span className='ml-[6px]'>{commentsNumber}</span>
              <div className='absolute -left-4 -top-7 z-50 w-max -translate-x-0 -translate-y-2/4 transform transition-all'>
                <Tooltip Text={'Comments'} />
              </div>
            </button>
            <button
              className='transition-duration-100 group relative flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'
              onClick={() => setBookmarksActive(!bookmarksActive)}
            >
              {bookmarksActive ? (
                <BookmarkFillIcon className='text-[#979797]' />
              ) : (
                <BookmarkIcon className='text-[#979797]' />
              )}

              <div className='absolute -left-6 -top-7 z-50 w-max -translate-x-0 -translate-y-2/4 transform transition-all'>
                <Tooltip Text={'Bookmark'} />
              </div>
            </button>
            <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
              <ReturnIcon className='text-[#979797]' />
            </button>
            <button className='transition-duration-100 ml-auto flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
              <EyeIcon className='text-[#979797]' />
              <span className='ml-[6px]'>{viewsNumber}</span>
            </button>
          </div>
        </div>
      </div>
      {commentsModal && <BookMarkModal closeModalState={setCommentsModal} />}
    </>
  );
};

export default Post;
