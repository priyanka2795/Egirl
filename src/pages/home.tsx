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
import type { ReactElement, ReactNode } from 'react';

export default function Home(): JSX.Element {
  // const { isMobile } = useWindow();

  // const { data, loading, LoadMore } = useInfiniteScroll(
  //   tweetsCollection,
  //   [where('parent', '==', null), orderBy('createdAt', 'desc')],
  //   { includeUser: true, allowNull: true, preserve: true }
  // );

  const isMobile = false;
  const data: any[] = [];
  const loading = false;
  const loadMore = () => {};

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
