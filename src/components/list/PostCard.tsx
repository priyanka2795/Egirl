import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PreviewContent from './PreviewContent';
import ChatContent from './ChatContent';
import PostsContent from './PostsContent';
import MediaContent from './MediaContent';


const PostCard = () => {
  const tabContent = ['Preview', 'Chat', 'Posts', 'Media'];
  const [exploreSelectedTab, setExploreSelected] = useState('Preview');

  const handleExploreSelected = (e: any) => {
    setExploreSelected(e.target.innerText);
  };

  return (
    <div className='mt-5 w-[59%] rounded-[14px] bg-[#121212]'>
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
      ) : (
        exploreSelectedTab === 'Chat' ? (
          <ChatContent />
        ) : (
          exploreSelectedTab === 'Posts' ? (
          <PostsContent />
        ) : (
          exploreSelectedTab === 'Media' ? (
          <MediaContent />
        ) : (
          <></>
        )))
      )}
    </div>
  );
};

export default PostCard;
