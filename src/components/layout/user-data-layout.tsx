//@ts-nocheck
import { useRouter } from 'next/router';
import { UserContextProvider } from '@lib/context/user-context';
import { useCollection } from '@lib/hooks/useCollection';
import { SEO } from '@components/common-old/seo';
import { MainContainer } from '@components/home-old/main-container';
import { MainHeader } from '@components/home-old/main-header';
import { UserHeader } from '@components/user/user-header';
import type { LayoutProps } from './common-layout';
import { User } from '@lib/types/user';

export function UserDataLayout({ children }: LayoutProps): JSX.Element {
  const {
    query: { id },
    back
  } = useRouter();

  const data: User[] = [
    {
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
    }
  ];

  const user = data ? data[0] : null;
  const loading = false;

  return (
    <UserContextProvider value={{ user, loading }}>
      {!user && !loading && <SEO title='User not found / Twitter' />}
      <MainContainer>
        <MainHeader useActionButton action={back}>
          <UserHeader />
        </MainHeader>
        {children}
      </MainContainer>
    </UserContextProvider>
  );
}
