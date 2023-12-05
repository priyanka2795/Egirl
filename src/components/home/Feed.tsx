import React, { useState } from 'react';
import useScroll from '../../../hooks/useScroll';
import Post from './Post';
import SubscriptionPost from './Post/SubscriptionPost';


interface Feed {
  bookmarksActive: boolean;
  BookmarksActive: () => void;
  handleShare: () => void;
  forYouData?: any;
  postUpdate:boolean;
  setPostUpdate:any;
  setBookMarkToast : any;
  subscriptionData?:any;
  showForYou:boolean
}
export default function Feed({
  bookmarksActive,
  BookmarksActive,
  handleShare,
  forYouData,
  postUpdate,
  setPostUpdate,
  setBookMarkToast,
  subscriptionData,
  showForYou
}: Feed) {
  
  const [sticky, animate] = useScroll();


  return (
    <div className='max-w-[600px] flex-grow bg-main-background lg:min-w-[600px]'>
      <div className='px-[20px]'>
        {/* {Array(100)
          .fill(0)
          .map((_, i) => (
            <p key={i}>Main content line {i + 1}</p>
          ))} */}
        {showForYou ? 
        forYouData?.map((ele: any, index: number) => {
          return (
           <div className='mb-5' key={index}>
             <Post
              imageUrl={ele.character_image_url}
              altText='Character Profile Picture'
              name={ele.character_display_name}
              username={`@${ele.character_username}`}
              postText={ele.description}
              commentsNumber={ele.comments_count}
              heartsNumber={ele.likes_count}
              viewsNumber='1.8k'
              tags={['#girl', '#mood', '#relaxtime']}
              location={ele.character_location}
              hours='6h'
              bookmarksActive={ele.is_bookmarked}
              BookmarksActive={BookmarksActive}
              handleShare={handleShare}
              postId={ele.id}
              postUpdate = {postUpdate}
              setPostUpdate={setPostUpdate}
              setBookMarkToast = {setBookMarkToast}
              is_liked_by_user={ele.is_liked_by_user}
            />
           </div>
          );
        })
        :
        // subscriptionData?.map((ele: any, index: number) => {
        //   return (
          <div className='mb-5' >
            <SubscriptionPost
             imageUrl='https://media.istockphoto.com/id/638756792/photo/beautiful-woman-posing-against-dark-background.jpg?s=612x612&w=0&k=20&c=AanwEr0pmrS-zhkVJEgAwxHKwnx14ywNh5dmzwbpyLk='
             altText='Character Profile Picture'
             name= "Mika-chain"
             username={`@abc`}
             postText={'this is a character profile picture'}
             commentsNumber={'7'}
             heartsNumber={'2'}
             viewsNumber='1.8k'
             tags={['#girl', '#mood', '#relaxtime']}
             location={'Indore'}
             hours='6h'
             bookmarksActive={true}
             BookmarksActive={BookmarksActive}
             handleShare={handleShare}
             postId={1}
             postUpdate = {postUpdate}
             setPostUpdate={setPostUpdate}
             setBookMarkToast = {setBookMarkToast}
             is_liked_by_user={false}
            />
           </div>
          //   );
          // })
        }
         
      </div>
    </div>
  );
}

// 
