import { useRef, useEffect, useState } from 'react';
import cn from 'clsx';
import { Dialog } from '@headlessui/react';
import { Button } from '@components/ui/button';
import { CustomIcon } from '@components/ui/custom-icon';
import { createCustomList } from 'api/lists/lists';
import Image from 'next/image';
import { RequestItem } from './RequestItem';

type ImageRequestModalProps = {
  title: string;
  useIcon?: boolean;
  description: string;
  mainBtnLabel: string;
  focusOnMainBtn?: boolean;
  mainBtnClassName?: string;
  secondaryBtnLabel?: string;
  secondaryBtnClassName?: string;
  action: () => void;
  closeModal: () => void;
};

export function ImageRequestModal({
  title,
  useIcon,
  description,
  mainBtnLabel,
  focusOnMainBtn,
  mainBtnClassName,
  secondaryBtnLabel,
  secondaryBtnClassName,
  action,
  closeModal
}: ImageRequestModalProps): JSX.Element {


  const mainBtn = useRef<HTMLButtonElement>(null);

  const [listName, setListName] = useState('');

  const onChangeListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  useEffect(() => {
    if (!focusOnMainBtn) return;
    const timeoutId = setTimeout(() => mainBtn.current?.focus(), 50);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const createList = async () => {
    action();
  };

  return (
    <div className='flex flex-col gap-6'>
      {/* <div className='flex flex-col gap-4'>
        {useIcon && (
          <i className='mx-auto'>
            <CustomIcon
              className='w-10 h-10 text-accent-blue dark:text-twitter-icon'
              iconName='TwitterIcon'
            />
          </i>
        )}
        <div className='flex flex-col gap-2'>
          <Dialog.Title className='text-xl font-bold'>{title}</Dialog.Title>
          <Dialog.Description className='text-light-secondary dark:text-dark-secondary'>
            {description}
          </Dialog.Description>
        </div>
      </div> */}
      <div className='flex flex-col items-center gap-y-3 '>
        <h3 className='text-sm font-semibold text-black'>Clothes</h3>
        <div className='flex gap-x-4'>
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={false}
            onSelect={() => {}}
          />
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={false}
            onSelect={() => {}}
          />
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={true}
            onSelect={() => {}}
          />
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={false}
            onSelect={() => {}}
          />
        </div>
        <h3 className='text-sm font-semibold text-black'>Locations</h3>
        <div className='flex gap-x-4'>
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={true}
            onSelect={() => {}}
          />
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={false}
            onSelect={() => {}}
          />
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={false}
            onSelect={() => {}}
          />
          <RequestItem
            src='https://pbs.twimg.com/media/D-Qr5eVUwAAV7cV.jpg'
            alt='alt'
            selected={false}
            onSelect={() => {}}
          />
        </div>
        <h3 className='font-semibold text-black'>Cost: $1.00</h3>
      </div>
      <div className='flex flex-col gap-3 inner:font-bold'>
        <p className='w-full p-4 text-sm text-gray-400 bg-gray-100 rounded'>
          Hey sexy, can you send me a pic of you...
        </p>
        <p className='w-full p-4 text-sm text-gray-400 bg-gray-100 rounded'>
          Wearing a <span className='text-gray-800'>black mini skirt</span>{' '}
          while at <span className='text-gray-800'>the beach</span>?
        </p>
        <button
          onClick={() => {
            action();
          }}
          className='w-full p-2 bg-blue-400 rounded-full'
        >
          Send
        </button>
      </div>
    </div>
  );
}
