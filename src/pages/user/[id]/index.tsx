import { doc, query, where } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import { useUser } from '@lib/context/user-context';
import { useCollection } from '@lib/hooks/useCollection';
import { useDocument } from '@lib/hooks/useDocument';
import { tweetsCollection } from '@lib/firebase/collections';
import { mergeData } from '@lib/merge';
import { UserLayout, ProtectedLayout } from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { UserDataLayout } from '@components/layout/user-data-layout';
import { UserHomeLayout } from '@components/layout/user-home-layout';
import { StatsEmpty } from '@components/tweet/stats-empty';
import { Loading } from '@components/ui/loading';
import { Tweet } from '@components/tweet/tweet';
import type { ReactElement, ReactNode } from 'react';
import { User } from '@lib/types/user';
import { Tweet as TypeTweet } from '@lib/types/tweet';

export default function UserTweets(): JSX.Element {
  // const { user } = useUser();

  const id = '123';
  const username = 'eGirl' 
  const pinnedTweet = 'My First Tweet';

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

  // const { data: pinnedData } = useDocument(
  //   doc(tweetsCollection, pinnedTweet ?? 'null'),
  //   {
  //     disabled: !pinnedTweet,
  //     allowNull: true,
  //     includeUser: true
  //   }
  // );

  const pinnedData: (TypeTweet & { user: User; }) | null =
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

  // const { data: ownerTweets, loading: ownerLoading } = useCollection(
  //   query(
  //     tweetsCollection,
  //     where('createdBy', '==', id),
  //     where('parent', '==', null)
  //   ),
  //   { includeUser: true, allowNull: true }
  // );

  const mergedTweets: (TypeTweet & { user: User; })[] | null =
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

  const ownerLoading = false;
  const peopleLoading = false;

  // const { data: peopleTweets, loading: peopleLoading } = useCollection(
  //   query(
  //     tweetsCollection,
  //     where('createdBy', '!=', id),
  //     where('userRetweets', 'array-contains', id)
  //   ),
  //   { includeUser: true, allowNull: true }
  // );

  // const mergedTweets = mergeData(true, ownerTweets, peopleTweets);

  return (
    <section>
      {ownerLoading || peopleLoading ? (
        <Loading className='mt-5' />
      ) : !mergedTweets ? (
        <StatsEmpty
          title={`@${username as string} hasn't tweeted`}
          description='When they do, their Tweets will show up here.'
        />
      ) : (
        <AnimatePresence mode='popLayout'>
          {pinnedData && (
            <Tweet pinned {...pinnedData} key={`pinned-${pinnedData.id}`} />
          )}
          {mergedTweets.map((tweet) => (
            <Tweet {...tweet} profile={user} key={tweet.id} />
          ))}
        </AnimatePresence>
      )}
    </section>
  );
}

UserTweets.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <UserLayout>
        <UserDataLayout>
          <UserHomeLayout>{page}</UserHomeLayout>
        </UserDataLayout>
      </UserLayout>
    </MainLayout>
  </ProtectedLayout>
);
