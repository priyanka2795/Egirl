//@ts-nocheck
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useUser } from '@lib/context/user-context';
import { SEO } from '@components/common-old/seo';
import { UserHomeCover } from '@components/user/user-home-cover';
import { UserHomeAvatar } from '@components/user/user-home-avatar';
import { UserDetails } from '@components/user/user-details';
import { UserNav } from '@components/user/user-nav';
import { Button } from '@components/ui/button';
import { Loading } from '@components/ui/loading';
import { HeroIcon } from '@components/ui/hero-icon';
import { ToolTip } from '@components/ui/tooltip';
import { FollowButton } from '@components/ui/follow-button';
import { variants } from '@components/user/user-header';
import { UserEditProfile } from '@components/user/user-edit-profile';
import { UserShare } from '@components/user/user-share';
import type { LayoutProps } from './common-layout';
import type { User } from '@lib/types/user';

export function UserHomeLayout({ children }: LayoutProps): JSX.Element {
  const coverData = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
    alt: 'cover'
  };

  const profileData = {
    src: 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg',
    alt: 'profile'
  };

  const isOwner = true;
  const isAdmin = true;

  const userData: User = {
    id: '1',
    username: 'egirl',
    name: 'E-Girl 1',
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

  const loading = false;

  return (
    <>
      {userData && <SEO title={`${`E Girl 1 (@egirl)`} / Twitter`} />}
      <motion.section {...variants} exit={undefined}>
        {loading ? (
          <Loading className='mt-5' />
        ) : !userData ? (
          <>
            <UserHomeCover />
            <div className='flex flex-col gap-8'>
              <div className='relative flex flex-col gap-3 px-4 py-3'>
                <UserHomeAvatar />
                <p className='text-xl font-bold'>@123</p>
              </div>
              <div className='p-8 text-center'>
                <p className='text-3xl font-bold'>This account doesn’t exist</p>
                <p className='text-light-secondary dark:text-dark-secondary'>
                  Try searching for another.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <UserHomeCover coverData={coverData} />
            <div className='relative flex flex-col gap-3 px-4 py-3'>
              <div className='flex justify-between'>
                <UserHomeAvatar profileData={profileData} />
                {isOwner ? (
                  <UserEditProfile />
                ) : (
                  <div className='flex gap-2 self-start'>
                    <UserShare username={userData.username} />
                    <Button
                      className='dark-bg-tab group relative cursor-not-allowed border border-light-line-reply p-2
                                 hover:bg-light-primary/10 active:bg-light-primary/20 dark:border-light-secondary 
                                 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
                    >
                      <HeroIcon className='h-5 w-5' iconName='EnvelopeIcon' />
                      <ToolTip tip='Message' />
                    </Button>
                    <FollowButton
                      userTargetId={userData.id}
                      userTargetUsername={userData.username}
                    />
                    {/* {isAdmin && <UserEditProfile hide />} */}
                  </div>
                )}
              </div>
              <UserDetails {...userData} />
            </div>
          </>
        )}
      </motion.section>
      {userData && (
        <>
          <UserNav />
          {children}
        </>
      )}
    </>
  );
}
