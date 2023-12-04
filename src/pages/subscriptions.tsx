import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useModal } from '@lib/hooks/useModal';
import {
  BookmarkLayout,
  ProtectedLayout
} from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common-old/seo';
import { MainHeader } from '@components/home-old/main-header';
import { MainBookmarkContainer } from '@components/home-old/main-container';
import { Modal } from '@components/modal/modal';
import { StatsEmpty } from '@components/tweet/stats-empty';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';
import { HeroIcon } from '@components/ui/hero-icon';
import type { ReactElement, ReactNode } from 'react';
import { User } from '@lib/types/user';
import type { User as AdminUser } from '@lib/types/user';
import { UserCard } from '@components/user/user-card';
import { AddListModal } from '@components/modal/add-list-model';
import { getSubscriptions } from 'api/subscriptions/subscriptions';

const suggestionsData: AdminUser[] = [
  {
    accent: 'blue',
    bio: 'egorl',
    coverPhotoURL:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
    followers: ['1', '2'],
    following: ['1'],
    id: '1',
    location: '123',
    name: 'egirl character',
    photoURL:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
    pinnedTweet: 'pinned test tweet',
    theme: 'dark',
    totalPhotos: 1,
    totalTweets: 5,
    username: 'patoto',
    verified: true,
    website: 'www.testsite.com'
  }
];

type SubsCharacterType = {
  id: string;
  bio: string;
  display_name: string;
  created_at: number;
  creator_id: number;
  infotag_ids: number[];
  is_verified: boolean;
  profile_banner_pictures: string;
  profile_picture: string;
  username: string;
};

export default function Lists(): JSX.Element {
  const { open, openModal, closeModal } = useModal();
  const [activeList, setActiveList] = useState<number>(-3);
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState<
    SubsCharacterType[] | null
  >(null);

  const user: User = {
    id: '1',
    username: 'egirl',
    name: 'E girl 1',
    accent: 'blue',
    bio: 'Im an Egirl',
    coverPhotoURL:
      'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
    followers: ['100'],
    following: ['10'],
    location: 'Metaverse',
    photoURL: 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg',
    pinnedTweet: 'My first tweet',
    theme: 'dark',
    totalPhotos: 123,
    totalTweets: 111,
    verified: true,
    website: 'www.egirl.com'
  };

  const action = async (): Promise<void> => {
    closeModal();
    toast.success('Successfully added list');
  };

  return (
    <MainBookmarkContainer>
      <SEO title='Subscriptions / Twitter' />
      <Modal
        modalClassName='max-w-xs bg-main-background w-full p-8 rounded-2xl'
        open={open}
        closeModal={closeModal}
      >
        <AddListModal
          title='Add List'
          description='This can’t be undone and you’ll remove all Tweets you’ve added to your Lists.'
          mainBtnClassName='bg-accent-red hover:bg-accent-red/90 active:bg-accent-red/75 accent-tab 
                            focus-visible:bg-accent-red/90'
          mainBtnLabel='Clear'
          action={action}
          closeModal={closeModal}
        />
      </Modal>
      <MainHeader className='flex items-center justify-between'>
        <div className='flex flex-col -mb-1'>
          <h2 className='-mt-1 text-xl font-bold'>Subscriptions</h2>
          <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
        <Button
          className='relative p-2 dark-bg-tab group hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
          onClick={openModal}
        >
          <HeroIcon className='w-5 h-5' iconName='ArchiveBoxXMarkIcon' />
          <ToolTip
            className='!-translate-x-20 translate-y-3 md:-translate-x-1/2'
            tip='Clear lists'
          />
        </Button>
      </MainHeader>

      <section className='mt-0.5'>
        <div className='flex'>
          <button
            // onClick={() => {
            //   fetchSubscriptionsList();
            // }}
            className={`border-2 border-black p-4 text-white hover:border-white ${
              activeList == -3 && 'bg-accent-blue'
            }`}
          >
            All
          </button>
          <button
            // onClick={() => {
            //   fetchSubscriptionsList();
            // }}
            className={`border-2 border-black p-4 text-white hover:border-white ${
              activeList == -2 && 'bg-accent-blue'
            }`}
          >
            Active
          </button>
          <button
            // onClick={() => {
            //   fetchSubscriptionsList();
            // }}
            className={`border-2 border-black p-4 text-white hover:border-white ${
              activeList == -1 && 'bg-accent-blue'
            }`}
          >
            Expired
          </button>
          <button
            // onClick={() => {
            //   fetchSubscriptionsList();
            // }}
            className={`border-2 border-black p-4 text-white hover:border-white ${
              activeList == 0 && 'bg-accent-blue'
            }`}
          >
            Attention Required
          </button>
        </div>
      </section>
      <section className='mt-0.5'>
        {subscriptions &&
          subscriptions?.map((char: any) => (
            <UserCard
              {...suggestionsData[0]}
              key={char.id}
              customName={char.display_name}
              customTwitterHandle={char.username}
              // customAlt={'EGIRL'}
              // customSrcUrl={char.profile_banner_picture}
              // customUrl={char.profile_picture}
            />
          ))}
        {subscriptions && subscriptions?.length == 0 && !loading && (
          <StatsEmpty
            title='Save Profiles in a list'
            description='Don’t let the good ones fly away! Save Profiles to easily find them again in the future.'
            imageData={{
              src: '/assets/no-bookmarks.webp',
              alt: 'No bookmarks'
            }}
          />
        )}
      </section>
      <section className='mt-0.5'></section>
    </MainBookmarkContainer>
  );
}

Lists.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <BookmarkLayout>{page}</BookmarkLayout>
    </MainLayout>
  </ProtectedLayout>
);
