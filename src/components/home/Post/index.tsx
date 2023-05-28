import React from 'react';

import HeartIcon from './svg/heart.svg';
import SaveIcon from './svg/save.svg';
import ReturnIcon from './svg/return-icon.svg';
import EyeIcon from './svg/eye.svg';
import LocationPinIcon from './svg/location-pin.svg';
import Image from 'next/image';
import DotsHorizontalIcon from './svg/dots-horizontal.svg';
import CommentIcon from './svg/comment.svg';

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
  hours
}) => {
  return (
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
          <h3 className='mr-2 text-lg font-bold leading-6'>{name}</h3>
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
              className='mt-1 cursor-pointer text-sm font-light leading-[18px] text-[#8476C4]'
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
        <div className='flex w-full'>
          <LocationPinIcon />
          <span className='ml-2'>{location}</span>
        </div>
        <div className='flex w-full gap-x-3 text-[15px] font-light leading-5'>
          <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
            <HeartIcon className='text-[#979797]' />
            <span className='ml-[6px] '>{heartsNumber}</span>
          </button>
          <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
            <CommentIcon className='text-[#979797]' />
            <span className='ml-[6px]'>{commentsNumber}</span>
          </button>
          <button className='transition-duration-100 flex items-center rounded-full bg-[#282828] px-3 py-2 hover:bg-[#252525]'>
            <SaveIcon className='text-[#979797]' />
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
  );
};

export default Post;
