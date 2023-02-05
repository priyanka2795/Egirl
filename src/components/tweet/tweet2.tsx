import { UserName } from '@components/user/user-name';
import { UserUsername } from '@components/user/user-username';
import type { Tweet } from '@lib/types/tweet';
import { UserTooltip } from '@components/user/user-tooltip';

export function Tweet2(): JSX.Element {
  const name = 'holland';
  const username = 'hollandpleskac';
  const modal = true;

  const tweetUserData = {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    username: 'username',
    verified: false,
    photoURL:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
    bio: 'bio',
    followers: [],
    following: [],
    coverPhotoURL:
      'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
    modal: false,
    avatar: false,
    children: null
  };
  const verified = false;

  return (
    <div className='flex justify-between gap-2 text-light-secondary dark:text-dark-secondary'>
      <div className='flex gap-1 truncate xs:overflow-visible xs:whitespace-normal'>
        {/* <UserTooltip modal={modal} {...tweetUserData}> */}
        <UserTooltip {...tweetUserData}>
          <UserName
            name={name}
            username={username}
            verified={verified}
            className='text-light-primary dark:text-dark-primary'
          />
        </UserTooltip>
        {/* <UserTooltip modal={modal} {...tweetUserData}> */}
        <UserTooltip {...tweetUserData}>
          <UserUsername username={username} />
        </UserTooltip>
        {/* <TweetDate tweetLink={tweetLink} createdAt={createdAt} /> */}
      </div>
    </div>
  );
}
