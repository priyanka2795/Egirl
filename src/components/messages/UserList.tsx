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
  userSelected: any;
  searchTerm:any
};

const UserList = ({ userSelected,searchTerm }: props) => {
  
  const filteredMessages = messages.filter((message) =>
  message.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
        {filteredMessages.length > 0  ?
      <>
      {filteredMessages.map((message, index) => (              
            <div
              key={index}
              className='flex items-center mb-6 cursor-pointer'
              onClick={(e:any) => {userSelected(message.name) , console.log(message.name , "reupdate")}}
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
      </>
      :
      <NoResultFound /> }
      {/* <NoResultFound />
      <ImageRequestModal /> */}
    </div>
  );
};

export default UserList;
