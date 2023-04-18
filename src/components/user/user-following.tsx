type UserFollowingProps = {
  userTargetId: string;
};

export function UserFollowing({
  userTargetId
}: UserFollowingProps): JSX.Element | null {
  // const isOwner =
  //   user?.id !== userTargetId && user?.followers.includes(userTargetId);

  // if (!isOwner) return null;

  return (
    <p className='rounded bg-main-search-background px-1 text-xs'>
      Follows you
    </p>
  );
}
