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
import { postAddBookMark, postLike, postRemoveBookMark } from 'services/services';
import Cookies from 'js-cookie';

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
  BookmarksActive: () => void;
  handleShare: () => void;
  postId: number;
  postUpdate: boolean;
  setPostUpdate: any;
  setBookMarkToast : any;
  is_liked_by_user:boolean;
}

const SubscriptionPost: React.FC<PostProps> = ({
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
  BookmarksActive,
  handleShare,
  postId,
  postUpdate,
  setPostUpdate,
  setBookMarkToast,
  is_liked_by_user
}) => {
  const token: any = Cookies.get('accessToken');
  const [likeActive, setLikeActive] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
  // const [bookmarksActive, setBookmarksActive] = useState(false);

  // ===== post like function ====
  const handlePostLike = () => {
    let likeData
    if(is_liked_by_user === true){
      likeData = {
        post_id: postId,
        is_like: false,
        is_super: false
      };
      setLikeActive(false);
    }else{
      likeData = {
        post_id: postId,
        is_like: true,
        is_super: true
      };
      setLikeActive(true);
    }
    postLike(likeData, token)
      .then((res) => {
        // console.log('post like res---', res);
        setPostUpdate(!postUpdate);
      })
      .catch((err) => {
        console.log('post like err---', err);
      });
  };

  // ===== post addBookMark function ====
  const handleAddBookMark = ()=>{
    if(bookmarksActive === false){
      BookmarksActive()
      postAddBookMark(postId, token)
      .then((res)=>{
        console.log("add bookmark res---", res)
        setPostUpdate(!postUpdate);
        setBookMarkToast(true)
      })
      .catch((err)=>{
        console.log("add bookmark err---", err)
      })
    }else{
      BookmarksActive()
      postRemoveBookMark(postId, token)
      .then((res)=>{
        console.log("remove bookmark res---", res)
        setPostUpdate(!postUpdate);
        setBookMarkToast(false)
      })
      .catch((err)=>{
        console.log("remove bookmark err---", err)
      })
    }
   
  }

  return (
    <>
      <div className='flex w-full flex-col gap-y-4 rounded-[14px] bg-main-bar p-6'>
        {/* Profile Section */}
        <div className='flex items-center'>
          <img
            src={imageUrl} // Change to your image path
            alt={altText} // Change to your alt text
            width={48}
            height={48}
            className='rounded-full'
          />
          <div className='flex items-center ml-4'>
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
                className='font-light mt-1 cursor-pointer text-sm leading-[18px] text-[#8476C4]'
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className='flex flex-col w-full h-auto gap-y-4'>
          <Image
            // src='https://www.shutterstock.com/image-vector/lock-glass-morphism-trendy-style-260nw-2047414109.jpg' // Change to your image path
            src='/dummy-img.png'
            alt='Locked Post' 
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
                is_liked_by_user
                  ? 'bg-[#FF533629] '
                  : 'bg-[#FFFFFF14] hover:bg-[#FFFFFF1F]'
              }`}
              onClick={handlePostLike}
            >
              {is_liked_by_user ? (
                <HeartRed />
              ) : (
                <HeartIcon className='text-[#979797]' />
              )}
              <span
                className={`ml-[6px] ${likeActive ? 'text-[#F44E32]' : ''}`}
              >
                {heartsNumber}
              </span>
              <div className='absolute z-50 transition-all transform -top-7 w-max -translate-x-0 -translate-y-2/4'>
                <Tooltip Text={'Like'} />
              </div>
            </button>
            <button
              className='transition-duration-100 group relative flex items-center rounded-full bg-[#FFFFFF14] px-3 py-2 hover:bg-[#FFFFFF1F]'
              onClick={() => setCommentsModal(!commentsModal)}
            >
              <CommentIcon className='text-[#979797]' />
              <span className='ml-[6px]'>{commentsNumber}</span>
              <div className='absolute z-50 transition-all transform -left-4 -top-7 w-max -translate-x-0 -translate-y-2/4'>
                <Tooltip Text={'Comments'} />
              </div>
            </button>
            <button
              className='transition-duration-100 group relative flex items-center rounded-full bg-[#FFFFFF14] px-3 py-2 hover:bg-[#FFFFFF1F]'
              onClick={handleAddBookMark}
            >
              {bookmarksActive ? (
                <BookmarkFillIcon className='text-[#979797]' />
              ) : (
                <BookmarkIcon className='text-[#979797]' />
              )}

              <div className='absolute z-50 transition-all transform -left-6 -top-7 w-max -translate-x-0 -translate-y-2/4'>
                <Tooltip Text={'Bookmark'} />
              </div>
            </button>
            <button
              className='transition-duration-100 group relative flex items-center rounded-full bg-[#FFFFFF14] px-3 py-2 hover:bg-[#FFFFFF1F]'
              onClick={() => handleShare()}
            >
              <ReturnIcon className='text-[#979797]' />
              <div className='absolute z-50 transition-all transform -left-3 -top-7 w-max -translate-x-0 -translate-y-2/4'>
                <Tooltip Text={'Share'} />
              </div>
            </button>
         
          </div>
        </div>
      </div>
      {commentsModal && (
        <BookMarkModal
          closeModalState={setCommentsModal}
          postId={postId}
          postUpdate={postUpdate}
          setPostUpdate={setPostUpdate}
          commentsNumber={commentsNumber}
          heartsNumber={heartsNumber}
          bookmarksActive={bookmarksActive}
          name = {name}
          username = {username}
          postText = {postText}
        />
      )}
    </>
  );
};

export default SubscriptionPost;

