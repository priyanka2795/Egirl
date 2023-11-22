import { Sidebar } from '@components/sidebar/sidebar';
import { WindowContextProvider } from '@lib/context/window-context';
import { MainHeader } from '@components/home-old/main-header';
import { UpdateUsername } from '@components/home-old/update-username';
import { MainContainer } from '@components/home-old/main-container';
import { MainLayout } from '@components/layout/main-layout';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { ReactElement, ReactNode } from 'react';
import { UpdateUsername2 } from '@components/home-old/update-username-2';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { AnimatePresence } from 'framer-motion';
import { Tweet2 } from '@components/tweet/tweet2';
import { Input } from '@components/input/input';
import { Input2 } from '@components/input/input2';

export default function Home2(): JSX.Element {
 const loading = false;
  const data: any[] = [{ id: '1' }];
  const isMobile = false;

  return (
    <MainContainer>
      <MainHeader
        useMobileSidebar
        title='Home'
        className='flex items-center justify-between'
      >
        <UpdateUsername2 />
      </MainHeader>

      {!isMobile && <Input2 />}
      <section className='mt-0.5 xs:mt-0'>
        {loading ? (
          <Loading className='mt-5' />
        ) : !data ? (
          <Error message='Something went wrong' />
        ) : (
          <>
            <AnimatePresence mode='popLayout'>
              {data.map((tweet) => (
                <Tweet2 key={tweet.id} />
                // <h1>test</h1>
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
Home2.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
