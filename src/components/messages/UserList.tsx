import Image from 'next/image';
import React from 'react';
import NoResultFound from './NoResultFound';
import ImageRequestModal from './ImageRequestModal';
import { createRoom } from 'services/services';
import Cookies from 'js-cookie';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

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
};

const UserList = ({ userSelected }: props) => {
  const token: any = Cookies.get('accessT');
  const dispatch = useAppDispatch();

  // ------ create room api -----------
  const handleCreateRoom = ()=>{
    let data = {
      character_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
    };
    createRoom(data, token)
      .then((res:any) => {
        console.log('create room res---', res);
        if (res?.response?.status === 401) {
          dispatch(tokenRefresh());
        }
      })
      .catch((err) => {
        console.log('create room err---', err);
      });
  }
  //-----------------------------------
  return (
    <div>
      {messages.map((message, index) => (
        <div
          key={index}
          className='flex items-center mb-6 cursor-pointer'
          onClick={(e: any) => {
            userSelected(message.name), console.log(message.name, 'reupdate');
          }}
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
