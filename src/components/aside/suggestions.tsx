//@ts-nocheck
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserCard } from '@components/user/user-card';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { variants } from './aside-trends';
// import type { User as AdminUser } from '@lib/types/user';

export function Suggestions(): JSX.Element {
  async function del(): Promise<void> {
    Promise.resolve();
  }

  async function getIdtok(): Promise<string> {
    return Promise.resolve('123');
  }

  function toJSON(): object {
    return {};
  }

  const suggestionsData: AdminUser[] = [
    {
      accent: 'blue',
      bio: 'Syahir',
      coverPhotoURL:
        'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
      followers: ['1', '2'],
      following: ['1'],
      id: '1',
      location: '123',
      name: 'Syahir Amali',
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

  const adminData: AdminUser = {
    accent: 'blue',
    bio: 'Syahir',
    coverPhotoURL:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
    followers: ['1', '2'],
    following: ['1'],
    id: '1',
    location: '123',
    name: 'Syahir Amali',
    photoURL:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
    pinnedTweet: 'pinned test tweet',
    theme: 'dark',
    totalPhotos: 1,
    totalTweets: 5,
    username: 'patato',
    verified: true,
    website: 'www.testsite.com'
  };

  const suggestionsLoading = false;
  const adminLoading = false;

  return (
    <section className='hover-animation rounded-2xl bg-main-sidebar-background'>
      {adminLoading || suggestionsLoading ? (
        <Loading className='flex h-52 items-center justify-center p-4' />
      ) : suggestionsData ? (
        <motion.div className='inner:px-4 inner:py-3' {...variants}>
          <h2 className='text-xl font-bold'>Suggestions</h2>
          {adminData && <UserCard {...adminData} />}
          {suggestionsData?.map((userData, index) => (
            <UserCard {...userData} key={index} />
          ))}
          <Link href='/people'>
            <a
              className='custom-button accent-tab hover-card block w-full rounded-2xl
                         rounded-t-none text-center text-main-accent'
            >
              Show more
            </a>
          </Link>
        </motion.div>
      ) : (
        <Error />
      )}
    </section>
  );
}

// export default function Sugge() {
//     return null; // or return <></> for a fragment
//   }