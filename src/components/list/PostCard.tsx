import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PreviewContent from './PreviewContent';
import PostsContent from './PostsContent';
import MediaContent from './MediaContent';

interface PostCardProps {
  postCardStyle?: string;
}

const PostCard = ({ postCardStyle }: PostCardProps) => {
  const tabContent = ['Preview', 'Posts', 'Media'];
  const [exploreSelectedTab, setExploreSelected] = useState('Preview');

  const handleExploreSelected = (e: React.MouseEvent<HTMLElement>) => {
    setExploreSelected((e.target as HTMLElement).innerText);
  };

  return (
    <div
      className={`mt-5 rounded-[14px] bg-[#121212] ${
        postCardStyle ? postCardStyle : 'w-[59%] '
      }`}
    >
      <div className='flex w-full gap-3 border-b border-white/[0.08] px-6 pb-[20px] pt-6'>
        {tabContent.map((items, index) => {
          return (
            <div
              key={index}
              onClick={(e) => handleExploreSelected(e)}
              className={`flex cursor-pointer gap-3 rounded-xl px-4 py-2 text-[15px] font-bold ${
                exploreSelectedTab === items
                  ? ' bg-white/[0.16] bg-opacity-20 text-white'
                  : 'text-[#979797]'
              }`}
            >
              {items}
            </div>
          );
        })}
      </div>

      {exploreSelectedTab === 'Preview' ? (
        <PreviewContent />
      ) : exploreSelectedTab === 'Posts' ? (
        <PostsContent />
      ) : exploreSelectedTab === 'Media' ? (
        <MediaContent />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostCard;
