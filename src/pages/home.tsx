import { AnimatePresence } from 'framer-motion';
import { where, orderBy } from 'firebase/firestore';
// import { useWindow } from '@lib/context/window-context';
// import { Input } from '@components/input/input';
import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll';
import { tweetsCollection } from '@lib/firebase/collections';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainContainer } from '@components/home/main-container';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { ReactElement, ReactNode, useEffect } from 'react';
import { getHomePostsSubscribedTo } from '../api/home/home';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Home(): JSX.Element {
  const user = useUser();
  const client = useSupabaseClient();
  // const { isMobile } = useWindow();

  // const { data, loading, LoadMore } = useInfiniteScroll(
  //   tweetsCollection,
  //   [where('parent', '==', null), orderBy('createdAt', 'desc')],
  //   { includeUser: true, allowNull: true, preserve: true }
  // );

  const getHomePosts = async () => {
    // console.log('user id ', user.id);
    console.log('client', client);
    const data = await getHomePostsSubscribedTo(user!.id, client);
    console.log('data', data);
  };

  useEffect(() => {
    // must check for user here first
    if (user) {
      getHomePosts();
    }
  }, [user]);

  const isMobile = false;

  const loading = false;
  const loadMore = () => {};

  /*
  const {
    id: tweetId,
    text,
    modal,
    images,
    parent,
    pinned,
    profile,
    userLikes,
    createdBy,
    createdAt,
    parentTweet,
    userReplies,
    userRetweets,
    user: tweetUserData
  } = tweet;

  const { id: ownerId, name, username, verified, photoURL } = tweetUserData;
  */

  //
  const tweet_1 = {
    id: '1',
    text: 'test',
    model: false,
    images: [
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp'
    ],
    parent: false,
    pinned: false,
    profile: 'test',
    userLikes: ['like1'],
    createdBy: 'test',
    createdAt: '2022-07-10T17:24:21.114Z',
    parentTweet: false,
    userReplies: 0,
    userRetweets: [],
    user: {
      id: 'ownerId',
      name: 'Holland Pleskac',
      username: 'hollandpleskac',
      verified: false,
      photoURL:
        'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
      following: ['following1', 'following2'],
      followers: ['follower1', 'follower2']
    }
  };

  const data: any[] = [tweet_1];

  return (
    <MainContainer>
      <SEO title='Home / Twitter' />
      <MainHeader
        useMobileSidebar
        title='Home'
        className='flex items-center justify-between'
      >
        <UpdateUsername />
      </MainHeader>
      {/* {!isMobile && <Input />} */}
      <section className='mt-0.5 xs:mt-0'>
        {loading ? (
          <Loading className='mt-5' />
        ) : !data ? (
          <Error message='Something went wrong' />
        ) : (
          <>
            <AnimatePresence mode='popLayout'>
              {data.map((tweet) => (
                <Tweet {...tweet} key={tweet.id} />
              ))}
            </AnimatePresence>
            {/* <LoadMore /> */}
          </>
        )}
      </section>
    </MainContainer>
  );
}

// ProtectedLayout currently commented out (just returns children)
Home.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
