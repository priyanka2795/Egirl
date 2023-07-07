import Image from 'next/image';
import React from 'react';
import NoResultFound from './NoResultFound';
import ImageRequestModal from './ImageRequestModal';

interface MessageData {
  name: string;
  username: string;
}

const messages: MessageData[] = [
  {
    name: 'One More Mika',
    username: '@sheisannaquigley'
  },
  {
    name: 'Mika',
    username: '@sheisannaquigley'
  },
  {
    name: 'Mika-chan',
    username: '@sheisannaquigley'
  }
];

type props = {
  userSelected: () => void;
};

const UserList = ({ userSelected }: props) => {
  return (
    <div>
      {messages.map((message) => (
        <div
          className='mb-6 flex cursor-pointer items-center'
          onClick={userSelected}
        >
          <Image
            key={0}
            src='/dummy-char.png'
            alt={`Character Profile Picture`}
            width={68}
            height={68}
            className='rounded-full'
          />
          <div className='ml-4'>
            <h4 className='font-white text-sm font-semibold leading-[18px] text-[#fff]'>
              {message.name}
            </h4>
            <div className='text-smibold text-[14px] leading-[18px] text-[#979797]'>
              {message.username}
            </div>
          </div>
        </div>
      ))}
      {/* <NoResultFound />
      <ImageRequestModal /> */}
    </div>
  );
};

export default UserList;
