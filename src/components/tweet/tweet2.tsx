import { UserName } from '@components/user/user-name';
import { UserUsername } from '@components/user/user-username';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'clsx';
import { UserTooltip } from '@components/user/user-tooltip';
import { ImagePreview } from '@components/input/image-preview';
import { TweetStatus } from './tweet-status';
import Link from 'next/link';
import { delayScroll } from '@lib/utils';
import type { Variants } from 'framer-motion';
import { useModal } from '@lib/hooks/useModal';
import { Modal } from '@components/modal/modal';
import { TweetStats2 } from './tweet-stats2';

export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export function Tweet2(): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  const name = 'holland';
  const username = 'hollandpleskac';
  const modal = false;
  const text = 'some text';

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
  // for images
  const images: any[] = [
    {
      id: 1,
      src: 'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
      alt: 'alt'
    },
    {
      id: 1,
      src: 'https://www.wikihow.com/images/thumb/f/fc/Get-the-URL-for-Pictures-Step-1-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-1-Version-6.jpg.webp',
      alt: 'alt'
    }
  ];
  const parent = false;

  // For tweet stats

  const reply = true;
  const userId: string = '1';
  const isOwner = true;
  const tweetId = '1';
  const userLikes: any[] = [];
  const userReplies = 1;
  const userRetweets: any[] = [];
  // const openModal = () => {};

  // for the animate presence
  const pinned = false;
  const tweetIsRetweeted = false;
  const profileUsername = 'profileUsername';
  const profileId = 'profileId';
  const profileName = 'profileName';
  const parentTweet = {};

  // for the link that wraps everythinng
  const tweetLink = `/tweet/${tweetId}`;

  return (
    <motion.article
      {...(!modal ? { ...variants, layout: 'position' } : {})}
      animate={{
        ...variants.animate,
        ...(parentTweet && { transition: { duration: 0.2 } })
      }}
    >
      <Modal
        className='flex items-start justify-center'
        modalClassName='bg-main-background rounded-2xl max-w-xl w-full my-8 overflow-hidden'
        open={open}
        closeModal={closeModal}
      >
        {/* <TweetReplyModal tweet={tweet} closeModal={closeModal} /> */}
        TWEET REPLY MODEL NEEDS TO BE IMPLIMENTED
      </Modal>
      <Link href={tweetLink} scroll={!reply}>
        <div
          className={cn(
            `accent-tab hover-card relative flex flex-col
             gap-y-4 px-4 py-3 outline-none duration-200`,
            parentTweet
              ? 'mt-0.5 pt-2.5 pb-0'
              : 'border-b border-light-border dark:border-dark-border'
          )}
          onClick={delayScroll(200)}
        >
          <div className='grid grid-cols-[auto,1fr] gap-x-3 gap-y-1'>
            <AnimatePresence initial={false}>
              {modal ? null : pinned ? (
                <TweetStatus type='pin'>
                  <p className='text-sm font-bold'>Pinned Tweet</p>
                </TweetStatus>
              ) : (
                tweetIsRetweeted && (
                  <TweetStatus type='tweet'>
                    <Link href={profileUsername as string}>
                      <a className='custom-underline truncate text-sm font-bold'>
                        {userId === profileId ? 'You' : profileName} Retweeted
                      </a>
                    </Link>
                  </TweetStatus>
                )
              )}
            </AnimatePresence>
            <div className='flex flex-col items-center gap-2'>
              {/* <UserTooltip avatar modal={modal} {...tweetUserData}>
                <UserAvatar src={photoURL} alt={name} username={username} />
              </UserTooltip> */}
              {parentTweet && (
                <i className='hover-animation h-full w-0.5 bg-light-line-reply dark:bg-dark-line-reply' />
              )}
            </div>
            <div className='flex min-w-0 flex-col'>
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
              {text && (
                <p className='whitespace-pre-line break-words'>{text}</p>
              )}
              <div className='mt-1 flex flex-col gap-2'>
                {images && (
                  <ImagePreview
                    tweet={true}
                    imagesPreview={images}
                    previewCount={images.length}
                  />
                )}
                {!modal && (
                  <TweetStats2
                    reply={reply}
                    userId={userId}
                    isOwner={isOwner}
                    tweetId={tweetId}
                    userLikes={userLikes}
                    userReplies={userReplies}
                    userRetweets={userRetweets}
                    openModal={!parent ? openModal : undefined}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
