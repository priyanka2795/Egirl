//@ts-nocheck

import Link from 'next/link';
import { UserAvatar } from '@components/user/user-avatar';
import { FollowButton } from '@components/ui/follow-button';
import { UserTooltip } from './user-tooltip';
import { UserName } from './user-name';
import { UserFollowing } from './user-following';
import { UserUsername } from './user-username';
import type { User } from '@lib/types/user';
import { NextImage } from '@components/ui/next-image';

type UserCardProps = User & {
  modal?: boolean;
  follow?: boolean;
  customName?: string;
  customTwitterHandle?: string;
  customSrcUrl?: string;
  customUrl?: string;
  customAlt?: string;
};

export function UserCard(user: UserCardProps): JSX.Element {
  const { id, bio, name, modal, follow, username, verified, photoURL } = user;
  const size = 10;
  const pictureSize = 100;

  const src =
    user.customSrcUrl || 'https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg';
  const url =
    user.customUrl ||
    'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png';
  const alt = user.customAlt || name;

  return (
    // <Link href={`/user/${username}`}>
    //   <a
    //     className='accent-tab hover-animation grid grid-cols-[auto,1fr] gap-3 px-4
    //                py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5 h-40'
    //   >
    //     {/* <div>
    //     <div>
    //       <NextImage
    //         useSkeleton
    //         width={pictureSize * 2}
    //         height={pictureSize}
    //         src={src}
    //         alt={alt}
    //         key={src}
    //       />
    //     </div>

    //     <div className='flex items-end'>
    //       <div className='mr-6'>
    //         <UserTooltip avatar {...user} modal={modal}>
    //           <UserAvatar src={photoURL} alt={name} username={username} />
    //         </UserTooltip>
    //       </div>
    //       <div className='flex flex-col gap-1 truncate xs:overflow-visible'>
    //         <div className='flex items-center justify-between gap-2 truncate xs:overflow-visible'>
    //           <div className='flex flex-col justify-center truncate xs:overflow-visible xs:whitespace-normal'>
    //             <UserTooltip {...user} modal={modal}>
    //               <UserName
    //                 className='-mb-1'
    //                 name={name}
    //                 username={username}
    //                 verified={verified}
    //               />
    //             </UserTooltip>
    //             <div className='flex items-center gap-1 text-light-secondary dark:text-dark-secondary'>
    //               <UserTooltip {...user} modal={modal}>
    //                 <UserUsername username={username} />
    //               </UserTooltip>
    //               {follow && <UserFollowing userTargetId={id} />}
    //             </div>
    //           </div>
    //           <FollowButton userTargetId={id} userTargetUsername={username} />
    //         </div>
    //         {follow && bio && <p className='whitespace-normal'>{bio}</p>}
    //       </div>
    //     </div>
    //     </div> */}

    //   </a>
    // </Link>
    <>
      <div className='shadow-lg'>
        <div className='relative'>
          <div className=''>
            <NextImage
              width={350}
              height={175}
              src={url}
              alt={alt}
              key={url}
              imgClassName='rounded-lg'
            />
          </div>
          <div className='h-15 absolute bottom-1 grid w-full justify-items-center bg-black bg-opacity-20'>
            <span className='text-lg font-semibold uppercase text-white'>
              {user.customName || 'E Girl - 1'}
            </span>
            <span className='text-md text-whiteuppercase'>
              {user.customTwitterHandle || '@egirl'}
            </span>
          </div>
          <div className='absolute left-2 bottom-10'>
            <div className=''>
              <div className='flex w-full'>
                <UserTooltip avatar {...user} modal={modal}>
                  <UserAvatar src={src} alt={name} username={username} />
                </UserTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
