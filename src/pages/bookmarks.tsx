import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { orderBy, query } from 'firebase/firestore';
import { useAuth } from '@lib/context/auth-context';
import { useModal } from '@lib/hooks/useModal';
import { useCollection } from '@lib/hooks/useCollection';
import { useArrayDocument } from '@lib/hooks/useArrayDocument';
import { clearAllBookmarks } from '@lib/firebase/utils';
import {
  tweetsCollection,
  userBookmarksCollection
} from '@lib/firebase/collections';
import { HomeLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainHeader } from '@components/home/main-header';
import { MainContainer } from '@components/home/main-container';
import { Modal } from '@components/modal/modal';
import { ActionModal } from '@components/modal/action-modal';
import { Tweet } from '@components/tweet/tweet';
import { StatsEmpty } from '@components/tweet/stats-empty';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';
import { HeroIcon } from '@components/ui/hero-icon';
import { Loading } from '@components/ui/loading';
import type { ReactElement, ReactNode } from 'react';
import { User } from '@lib/types/user';
import { Tweet as TypeTweet } from '@lib/types/tweet';

export default function Bookmarks(): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  const user: User = {
    id: '1',
    username: "egirl",
    name: "E girl 1",
    accent: 'blue',
    bio: 'Im an Egirl',
    coverPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png",
    followers: ['100'],
    following: ['10'],
    location: 'Metaverse',
    photoURL: "https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg",
    pinnedTweet: 'My first tweet',
    theme: 'dark',
    totalPhotos: 123,
    totalTweets: 111,
    verified: true,
    website: 'www.egirl.com'
  };

  const userId = user?.id as string;

  // const { data: bookmarksRef, loading: bookmarksRefLoading } = useCollection(
  //   query(userBookmarksCollection(userId), orderBy('createdAt', 'desc')),
  //   { allowNull: true }
  // );
  type Bookmark = {
    id: string;
  };

  const bookmarksRefLoading = false;

  const bookmarksRef: Bookmark[] = [
    {
      id: '1'
    },
    {
      id: '2'
    }
  ]

  const tweetIds = useMemo(
    () => bookmarksRef?.map(({ id }) => id) ?? [],
    [bookmarksRef]
  );

  // const { data: tweetData, loading: tweetLoading } = useArrayDocument(
  //   tweetIds,
  //   tweetsCollection,
  //   { includeUser: true }
  // );

  const tweetLoading = false

  const tweetData: (TypeTweet & { user: User; })[] | null =
    [
      {
        createdAt: 12345,
        createdBy: 'egirl1',
        id: '1',
        images: null,
        parent: {
          id: '10',
          username: 'eGorl'
        },
        text: 'First tweet of the day',
        updatedAt: 88889,
        user: {
          id: '1',
          username: "egirl",
          name: "E girl 1",
          accent: 'blue',
          bio: 'Im an Egirl',
          coverPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png",
          followers: ['100'],
          following: ['10'],
          location: 'Metaverse',
          photoURL: "https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg",
          pinnedTweet: 'My first tweet',
          theme: 'dark',
          totalPhotos: 123,
          totalTweets: 111,
          verified: true,
          website: 'www.egirl.com'
        },
        userLikes: ['111'],
        userReplies: 123,
        userRetweets: ['123']
      },
      {
        createdAt: 12345,
        createdBy: 'egirl1',
        id: '1',
        images: null,
        parent: {
          id: '10',
          username: 'eGorl'
        },
        text: 'Bookmark this!',
        updatedAt: 88889,
        user: {
          id: '1',
          username: "egirl",
          name: "E girl 1",
          accent: 'blue',
          bio: 'Im an Egirl',
          coverPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png",
          followers: ['100'],
          following: ['10'],
          location: 'Metaverse',
          photoURL: "https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg",
          pinnedTweet: 'My first tweet',
          theme: 'dark',
          totalPhotos: 123,
          totalTweets: 111,
          verified: true,
          website: 'www.egirl.com'
        },
        userLikes: ['111'],
        userReplies: 123,
        userRetweets: ['123']
      },
      {
        createdAt: 12345,
        createdBy: 'egirl1',
        id: '1',
        images: [
          {
            src: 'https://i.pinimg.com/550x/8d/4f/44/8d4f442214edc01230b38228bad5226f.jpg',
            alt: 'anime girl',
            id: '123',
          },
          {
            src: 'https://i.pinimg.com/564x/f4/fb/6b/f4fb6b6dc78c15007f8c16599ce6e03b.jpg',
            alt: 'anime girl 2',
            id: '1233',
          }
        ],
        parent: {
          id: '10',
          username: 'eGorl'
        },
        text: 'Bookmark with image!',
        updatedAt: 88889,
        user: {
          id: '1',
          username: "egirl",
          name: "E girl 1",
          accent: 'blue',
          bio: 'Im an Egirl',
          coverPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png",
          followers: ['100'],
          following: ['10'],
          location: 'Metaverse',
          photoURL: "https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg",
          pinnedTweet: 'My first tweet',
          theme: 'dark',
          totalPhotos: 123,
          totalTweets: 111,
          verified: true,
          website: 'www.egirl.com'
        },
        userLikes: ['111'],
        userReplies: 123,
        userRetweets: ['123']
      }
    ]

  const handleClear = async (): Promise<void> => {
    await clearAllBookmarks(userId);
    closeModal();
    toast.success('Successfully cleared all bookmarks');
  };

  return (
    <MainContainer>
      <SEO title='Bookmarks / Twitter' />
      <Modal
        modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
        open={open}
        closeModal={closeModal}
      >
        <ActionModal
          title='Clear all Bookmarks?'
          description='This can’t be undone and you’ll remove all Tweets you’ve added to your Bookmarks.'
          mainBtnClassName='bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab 
                            focus-visible:bg-accent-red/90'
          mainBtnLabel='Clear'
          action={handleClear}
          closeModal={closeModal}
        />
      </Modal>
      <MainHeader className='flex items-center justify-between'>
        <div className='-mb-1 flex flex-col'>
          <h2 className='-mt-1 text-xl font-bold'>Bookmarks</h2>
          <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
        <Button
          className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                     dark:active:bg-dark-primary/20'
          onClick={openModal}
        >
          <HeroIcon className='h-5 w-5' iconName='ArchiveBoxXMarkIcon' />
          <ToolTip
            className='!-translate-x-20 translate-y-3 md:-translate-x-1/2'
            tip='Clear bookmarks'
          />
        </Button>
      </MainHeader>
      <section className='mt-0.5'>
        {bookmarksRefLoading || tweetLoading ? (
          <Loading className='mt-5' />
        ) : !bookmarksRef ? (
          <StatsEmpty
            title='Save Tweets for later'
            description='Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.'
            imageData={{ src: '/assets/no-bookmarks.png', alt: 'No bookmarks' }}
          />
        ) : (
          <AnimatePresence mode='popLayout'>
            {tweetData?.map((tweet) => (
              <Tweet {...tweet} key={tweet.id} />
            ))}
          </AnimatePresence>
        )}
      </section>
    </MainContainer>
  );
}

Bookmarks.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  </ProtectedLayout>
);
