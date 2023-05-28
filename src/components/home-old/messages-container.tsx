import cn from 'clsx';
import type { ReactNode } from 'react';

type MainContainerProps = {
  children: ReactNode;
  className?: string;
};

export function MessagesContainer({
  children,
  className
}: MainContainerProps): JSX.Element {
  return (
    <main
      className={cn(
        `hover-animation min-h-screenf flex w-full max-w-6xl flex-col border-x-0
     border-light-border  dark:border-dark-border xs:border-x`,
        className
      )}
    >
      {children}
    </main>
  );
}
