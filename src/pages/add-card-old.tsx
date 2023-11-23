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
          <h2 className='-mt-1 text-xl font-bold'>Add Card</h2>
          <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            @{user?.username}
          </p>
        </div>
        <Button
          className='relative p-2 dark-bg-tab // group hover:bg-light-primary/10 active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
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
        <form className='flex flex-wrap w-full gap-3 p-5'>
          <label className='relative flex flex-col w-full'>
            <span className='mb-3 font-bold'>Card number</span>
            <input
              className='py-2 pl-12 pr-2 placeholder-gray-300 border-2 border-gray-200 rounded-md peer'
              type='text'
              name='card_number'
              placeholder='0000 0000 0000'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-0 left-0 -mb-0.5 h-6 w-6 -translate-y-1/2 translate-x-1/2 transform text-black peer-placeholder-shown:text-gray-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
            </svg>
          </label>

          <label className='relative flex flex-col flex-1'>
            <span className='mb-3 font-bold'>Expire date</span>
            <input
              className='py-2 pl-12 pr-2 placeholder-gray-300 border-2 border-gray-200 rounded-md peer'
              type='text'
              name='expire_date'
              placeholder='MM/YY'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-0 left-0 -mb-0.5 h-6 w-6 -translate-y-1/2 translate-x-1/2 transform text-black peer-placeholder-shown:text-gray-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
            </svg>
          </label>

          <label className='relative flex flex-col flex-1'>
            <span className='flex items-center gap-3 mb-3 font-bold'>
              CVC/CVV
              <span className='relative group'>
                <span className='absolute items-center justify-center hidden px-2 py-1 text-xs text-white transform translate-x-full -translate-y-1/2 bg-black -right-2 top-1/2 w-max group-hover:flex'>
                  {' '}
                  Hey ceci est une infobulle !
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </span>
            </span>
            <input
              className='py-2 pl-12 pr-2 placeholder-gray-300 border-2 border-gray-200 rounded-md peer'
              type='text'
              name='card_cvc'
              placeholder='&bull;&bull;&bull;'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-0 left-0 -mb-0.5 h-6 w-6 -translate-y-1/2 translate-x-1/2 transform text-black peer-placeholder-shown:text-gray-300'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
            </svg>
          </label>
        </form>
      </section>
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
