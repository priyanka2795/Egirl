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
// import { ReactElement, ReactNode, useEffect } from 'react';
// import { getHomePostsSubscribedTo } from '../api/home/home';
// import { User } from '@lib/types/user';
// import { Tweet as TypeTweet } from '@lib/types/tweet';
// import Router from 'next/router';

// export default function Home(): JSX.Element {


 



//   const isMobile = false;

//   const loading = false;
//   const loadMore = () => {};
//   const tweetData: (TypeTweet & { user: User; modal?: boolean })[] | null = [
//     {
//       modal: false,
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
//       modal: false,
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '2',
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
//       modal: false,
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '3',
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
//       parent: null,
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
//     },
//     {
//       modal: false,
//       id: '4',
//       text: 'test holland tweet',
//       // model: false,
//       images: null,
//       parent: null,
//       // pinned: false,
//       updatedAt: 101909,
//       // profile: 'test',
//       userLikes: ['like1'],
//       createdBy: 'test',
//       createdAt: 88889,
//       // parentTweet: false,
//       userReplies: 0,

//       userRetweets: [],
//       user: {
//         id: 'ownerId',
//         name: 'Holland Pleskac',
//         username: 'hollandpleskac',
//         verified: false,
//         photoURL:
//           'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
//         following: ['following1', 'following2'],
//         followers: ['follower1', 'follower2'],
//         accent: 'blue',
//         bio: 'Im Holland',
//         coverPhotoURL:
//           'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
//         location: 'Hollandland',
//         pinnedTweet: null,
//         theme: 'dark',
//         totalPhotos: 0,
//         totalTweets: 0,
//         website: null
//       }
//     }
//   ];

//   const data: any[] = tweetData;

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
//       <section className='mt-0.5 xs:mt-0'>
//         {loading ? (
//           <Loading className='mt-5' />
//         ) : !data ? (
//           <Error message='Something went wrong' />
//         ) : (
//           <>
//             {/* <AnimatePresence mode='popLayout'> */}
//             {data.map((tweet) => (
//               <Tweet {...tweet} key={tweet.id} />
//             ))}
//             {/* </AnimatePresence> */}
//           </>
//         )}
//         <div>
//           <button>Logout</button>
//         </div>
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

const HomeOld = () => {
    return <div></div>;
  };
  
export default HomeOld;