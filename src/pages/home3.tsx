// import { AnimatePresence } from 'framer-motion';
// // import { useWindow } from '@lib/context/window-context';
// // import { Input } from '@components/input/input';
// import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
// import { MainLayout } from '@components/layout/main-layout';
// import { SEO } from '@components/common-old/seo';
// import { MainContainer } from '@components/home-old/main-container';
// import { UpdateUsername } from '@components/home-old/update-username';
// import { MainHeader } from '@components/home-old/main-header';
// import { Tweet } from '@components/tweet/tweet';
// import { Loading } from '@components/ui/loading';
// import { Error } from '@components/ui/error';
// import { ReactElement, ReactNode, useEffect, useState } from 'react';
// import {
//   getHomePostsFollowing,
//   getHomePostsSubscribedTo
// } from '../api/home/home';
// import { Tweet as TypeTweet } from '@lib/types/tweet';
// import { User } from '@lib/types/user';
// import type { ImagesPreview, ImageData } from '@lib/types/file';

// export default function Home(): JSX.Element {
//   const [postList, setPostList] = useState<any[]>([]);
//   // const { isMobile } = useWindow();

//   // const { data, loading, LoadMore } = useInfiniteScroll(
//   //   tweetsCollection,
//   //   [where('parent', '==', null), orderBy('createdAt', 'desc')],
//   //   { includeUser: true, allowNull: true, preserve: true }
//   // );

//   // images previe type has src, alt, id

//   const getHomePosts = async () => {
//     // console.log('user id ', user.id);
//     // user!.id
//   };

//   useEffect(() => {
//     // must check for user here first
//     // if (user) {
//     getHomePosts();
//     // }
//   }, []);

//   const isMobile = false;

//   const loading = false;
//   const loadMore = () => {};

//   /*
//   const {
//     id: tweetId,
//     text,
//     modal,
//     images,
//     parent,
//     pinned,
//     profile,
//     userLikes,
//     createdBy,
//     createdAt,
//     parentTweet,
//     userReplies,
//     userRetweets,
//     user: tweetUserData
//   } = tweet;

//   const { id: ownerId, name, username, verified, photoURL } = tweetUserData;
//   */

//   //
//   const tweetData: (TypeTweet & { user: User })[] | null = [
//     {
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '1',
//       images: null,
//       parent: {
//         id: '10',
//         username: 'eGorl'
//       },
//       text: 'First tweet of the day',
//       updatedAt: 88889,
//       user: {
//         id: '1',
//         username: 'egirl',
//         name: 'E girl 1',
//         accent: 'blue',
//         bio: 'Im an Egirl',
//         coverPhotoURL:
//           'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
//         followers: ['100'],
//         following: ['10'],
//         location: 'Metaverse',
//         photoURL: 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg',
//         pinnedTweet: 'My first tweet',
//         theme: 'dark',
//         totalPhotos: 123,
//         totalTweets: 111,
//         verified: true,
//         website: 'www.egirl.com'
//       },
//       userLikes: ['111'],
//       userReplies: 123,
//       userRetweets: ['123']
//     },
//     {
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '1',
//       images: null,
//       parent: {
//         id: '10',
//         username: 'eGorl'
//       },
//       text: 'Bookmark this!',
//       updatedAt: 88889,
//       user: {
//         id: '1',
//         username: 'egirl',
//         name: 'E girl 1',
//         accent: 'blue',
//         bio: 'Im an Egirl',
//         coverPhotoURL:
//           'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
//         followers: ['100'],
//         following: ['10'],
//         location: 'Metaverse',
//         photoURL: 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg',
//         pinnedTweet: 'My first tweet',
//         theme: 'dark',
//         totalPhotos: 123,
//         totalTweets: 111,
//         verified: true,
//         website: 'www.egirl.com'
//       },
//       userLikes: ['111'],
//       userReplies: 123,
//       userRetweets: ['123']
//     },
//     {
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '1',
//       images: [
//         {
//           src: 'https://i.pinimg.com/550x/8d/4f/44/8d4f442214edc01230b38228bad5226f.jpg',
//           alt: 'anime girl',
//           id: '123'
//         },
//         {
//           src: 'https://i.pinimg.com/564x/f4/fb/6b/f4fb6b6dc78c15007f8c16599ce6e03b.jpg',
//           alt: 'anime girl 2',
//           id: '1233'
//         }
//       ],
//       parent: {
//         id: '10',
//         username: 'eGorl'
//       },
//       text: 'Bookmark with image!',
//       updatedAt: 88889,
//       user: {
//         id: '1',
//         username: 'egirl',
//         name: 'E girl 1',
//         accent: 'blue',
//         bio: 'Im an Egirl',
//         coverPhotoURL:
//           'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
//         followers: ['100'],
//         following: ['10'],
//         location: 'Metaverse',
//         photoURL: 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg',
//         pinnedTweet: 'My first tweet',
//         theme: 'dark',
//         totalPhotos: 123,
//         totalTweets: 111,
//         verified: true,
//         website: 'www.egirl.com'
//       },
//       userLikes: ['111'],
//       userReplies: 123,
//       userRetweets: ['123']
//     }
//   ];
//   return (
//     <MainContainer>
//       <SEO title='Home / Twitter' />
//       <MainHeader
//         useMobileSidebar
//         title='Home'
//         className='flex items-center justify-between'
//       >
//         <UpdateUsername />
//       </MainHeader>
//       {/* {!isMobile && <Input />} */}
//       <section className='mt-0.5 xs:mt-0'>
//         {loading ? (
//           <Loading className='mt-5' />
//         ) : !tweetData ? (
//           <Error message='Something went wrong' />
//         ) : (
//           <>
//             <AnimatePresence mode='popLayout'>
//               {postList?.map((post, index) => (
//                 <Tweet
//                   {...tweetData[0]}
//                   customId={post.id}
//                   customName={'NEED NAME'}
//                   customText={post.description}
//                   images={post.media.map((media: any, index: number) => {
//                     return {
//                       src: 'https://i.pinimg.com/550x/8d/4f/44/8d4f442214edc01230b38228bad5226f.jpg',
//                       alt: 'alt',
//                       id: index.toString()
//                     };
//                   })}
//                   customCommentsCount={post.comments.comments.length}
//                   customLikes={post.likes.total_post_likes as string[]}
//                   //               customId?: string;
//                   // customcreatedBy?: string;
//                   // customText?: string;
//                   // customImageUrls?: string[];
//                   // customCommentsCount?: number;
//                   // customLikesCount?: number;
//                   key={index}
//                 />
//               ))}
//             </AnimatePresence>
//             {/* <LoadMore /> */}
//           </>
//         )}
//       </section>
//     </MainContainer>
//   );
// }

// // ProtectedLayout currently commented out (just returns children)
// Home.getLayout = (page: ReactElement): ReactNode => (
//   <ProtectedLayout>
//     <MainLayout>
//       <HomeLayout>{page}</HomeLayout>
//     </MainLayout>
//   </ProtectedLayout>
// );
const Home3 = () => {
    return <div></div>;
  };
  
export default Home3;