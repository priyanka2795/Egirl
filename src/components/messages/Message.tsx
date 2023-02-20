import cn from 'clsx';
import type { ReactNode } from 'react';

type MessageProps = {
  message: string;
  sender: string;
};

export function Message({ message, sender }: MessageProps): JSX.Element {
  return (
    <div
      className={`w-min select-none rounded p-4 ${
        sender == 'character' ? 'bg-gray-400' : 'self-end bg-blue-400'
      }`}
    >
      <div className='ml-full w-max'>{message}</div>
    </div>
  );
}
