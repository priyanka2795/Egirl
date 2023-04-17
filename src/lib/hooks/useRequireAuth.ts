import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { User } from '@lib/types/user';

export function useRequireAuth(redirectUrl?: string): User | null {
  const { replace } = useRouter();

  // useEffect(() => {
  //   if (!loading && !user) void replace(redirectUrl ?? '/');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user, loading]);

  // return user;
  return null;
}
