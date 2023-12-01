//@ts-nocheck

import { useRequireAuth } from '@lib/hooks/useRequireAuth';
import { Aside } from '@components/aside/aside';
import { AsideTrends } from '@components/aside/aside-trends';
import { Suggestions } from '@components/aside/suggestions';
import { Placeholder } from '@components/common-old/placeholder';
import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export function ProtectedLayout({ children }: LayoutProps): JSX.Element {
  // comment out protected layout
  // const user = useRequireAuth();

  // if (!user) return <Placeholder />;

  return <>{children}</>;
}

export function HomeLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideTrends />
        <Suggestions />
      </Aside>
    </>
  );
}

export function BookmarkLayout({ children }: LayoutProps): JSX.Element {
  return <>{children}</>;
}

export function BlankLayout({ children }: LayoutProps): JSX.Element {
  return <>{children}</>;
}

export function UserLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        {/* <Suggestions />
        <AsideTrends /> */}
      </Aside>
    </>
  );
}

export function TrendsLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <Suggestions />
      </Aside>
    </>
  );
}

export function PeopleLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Aside>
        <AsideTrends />
      </Aside>
    </>
  );
}
