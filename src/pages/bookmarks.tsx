// import { useEffect, useMemo, useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { toast } from 'react-hot-toast';
// import { useModal } from '@lib/hooks/useModal';

// import {
//   BookmarkLayout,
//   HomeLayout,
//   ProtectedLayout
// } from '@components/layout/common-layout';
// import { MainLayout } from '@components/layout/main-layout';
// import { SEO } from '@components/common-old/seo';
// import { MainHeader } from '@components/home-old/main-header';
// import {
//   MainBookmarkContainer,
//   MainContainer
// } from '@components/home-old/main-container';
// import { Modal } from '@components/modal/modal';
// import { ActionModal } from '@components/modal/action-modal';
// import { Tweet } from '@components/tweet/tweet';
// import { StatsEmpty } from '@components/tweet/stats-empty';
// import { Button } from '@components/ui/button';
// import { ToolTip } from '@components/ui/tooltip';
// import { HeroIcon } from '@components/ui/hero-icon';
// import { Loading } from '@components/ui/loading';
// import type { ReactElement, ReactNode } from 'react';
// // import { User } from '@lib/types/user';
// import { Tweet as TypeTweet } from '@lib/types/tweet';
// import { getBookmarksByUser } from 'api/utils/bookmarks';

// export default function Bookmarks(): JSX.Element {
//   const { open, openModal, closeModal } = useModal();
//   const [selection, setSelection] = useState('all');
//   const [tweetLoading, setTweetLoading] = useState(false);

//   // const [bookmarks, setBookmarks] = useState<
//   //   (TypeTweet & { user: User })[] | null
//   // >(null);


//   const allTweet: (TypeTweet & { user: User })[] | null = [
//     {
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '1',
//       images: null,
//       parent: null,
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
//       id: '2',
//       images: null,
//       parent: {
//         id: '10',
//         username: 'eGorl'
//       },
//       text: 'Bookmark this!',
//       updatedAt: 88889,
//       user: {
//         id: '66',
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
//           id: '456'
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
//     }
//   ];

//   const posts: (TypeTweet & { user: User })[] | null = [
//     {
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '1',
//       images: null,
//       parent: null,
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
//     }
//   ];

//   const images: (TypeTweet & { user: User })[] | null = [
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
//     }
//   ];

//   const locked: (TypeTweet & { user: User })[] | null = [
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
//       createdAt: 12345,
//       createdBy: 'egirl1',
//       id: '2',
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
//     }
//   ];

//   const [tweetData, setTweetData] = useState<
//     (TypeTweet & { user: User })[] | null
//   >(allTweet);

//   const user: User = {
//     id: '1',
//     username: 'egirl',
//     name: 'E girl 1',
//     accent: 'blue',
//     bio: 'Im an Egirl',
//     coverPhotoURL:
//       'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
//     followers: ['100'],
//     following: ['10'],
//     location: 'Metaverse',
//     photoURL: 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg',
//     pinnedTweet: 'My first tweet',
//     theme: 'dark',
//     totalPhotos: 123,
//     totalTweets: 111,
//     verified: true,
//     website: 'www.egirl.com'
//   };

//   const userId = user?.id as string;

//   type Bookmark = {
//     id: string;
//   };

//   const bookmarksRefLoading = false;

//   const bookmarksRef: Bookmark[] = [
//     {
//       id: '1'
//     },
//     {
//       id: '2'
//     }
//   ];

//   const handleClear = async (): Promise<void> => {
//     // await clearAllBookmarks(userId);
//     closeModal();
//     toast.success('Successfully cleared all bookmarks');
//   };

//   const handleSelection = async (value: string): Promise<void> => {
//     if (value == 'all') {
//       setTweetData(allTweet);
//     } else if (value == 'posts') {
//       setTweetData(posts);
//     } else if (value == 'photos') {
//       setTweetData(images);
//     } else if (value == 'locked') {
//       setTweetData(locked);
//     }
//     setSelection(value);
//   };

//   return (
//     <MainBookmarkContainer>
//       <SEO title='Bookmarks / Twitter' />
//       <Modal
//         modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
//         open={open}
//         closeModal={closeModal}
//       >
//         <ActionModal
//           title='Clear all Bookmarks?'
//           description='This can’t be undone and you’ll remove all Tweets you’ve added to your Bookmarks.'
//           mainBtnClassName='bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab 
//                             focus-visible:bg-accent-red/90'
//           mainBtnLabel='Clear'
//           action={handleClear}
//           closeModal={closeModal}
//         />
//       </Modal>
//       <MainHeader className='flex items-center justify-between'>
//         <div className='flex flex-col -mb-1'>
//           <h2 className='-mt-1 text-xl font-bold'>Bookmarks</h2>
//           <p className='text-xs text-light-secondary dark:text-dark-secondary'>
//             @{user?.username}
//           </p>
//         </div>
//         <Button
//           className='relative p-2 dark-bg-tab group hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
//           onClick={openModal}
//         >
//           <HeroIcon className='w-5 h-5' iconName='ArchiveBoxXMarkIcon' />
//           <ToolTip
//             className='!-translate-x-20 translate-y-3 md:-translate-x-1/2'
//             tip='Clear bookmarks'
//           />
//         </Button>
//       </MainHeader>
//       <section className='mt-0.5'>
//         <div className='flex w-full'>
//           <div className='w-1/4'>
//             <div className='w-full'>
//               <button
//                 className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
//                 onClick={async () => {
//                   const selection = 'all';
//                   await handleSelection(selection);
//                 }}
//               >
//                 All Bookmarks
//               </button>
//               <button
//                 className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
//                 onClick={async () => {
//                   const selection = 'posts';
//                   await handleSelection(selection);
//                 }}
//               >
//                 Posts
//               </button>
//               <button
//                 className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
//                 onClick={async () => {
//                   const selection = 'photos';
//                   await handleSelection(selection);
//                 }}
//               >
//                 Photos
//               </button>
//               <button
//                 className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
//                 onClick={async () => {
//                   const selection = 'locked';
//                   await handleSelection(selection);
//                 }}
//               >
//                 Locked
//               </button>
//             </div>
//           </div>
//           <div className='w-full'>
//             {bookmarksRefLoading || tweetLoading ? (
//               <Loading className='mt-5' />
//             ) : !bookmarksRef ? (
//               <StatsEmpty
//                 title='Save Tweets for later'
//                 description='Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.'
//                 imageData={{
//                   src: '/assets/no-bookmarks.webp',
//                   alt: 'No bookmarks'
//                 }}
//               />
//             ) : (
//               <>
//                 {/* <AnimatePresence mode='popLayout'> */}
//                 {tweetData?.map((tweet) => (
//                   <Tweet {...tweet} key={tweet.id} />
//                 ))}
//                 {/* </AnimatePresence> */}
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </MainBookmarkContainer>
//   );
// }

// Bookmarks.getLayout = (page: ReactElement): ReactNode => (
//   <ProtectedLayout>
//     <MainLayout>
//       <BookmarkLayout>{page}</BookmarkLayout>
//     </MainLayout>
//   </ProtectedLayout>
// );

const Bookmarks = () => {
    return <div></div>;
  };
  
export default Bookmarks;