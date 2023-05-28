import React, { ReactNode } from 'react';
import Sidebar from '../common/Sidebar';
import Characters from './Characters';
import ChatScreen from './ChatScreen';

import TestSidebar from './TestSidebar';

const Messages = () => {
  return (
    <>
      <main className='fixed bottom-0 left-0 right-0 top-0 mx-auto flex min-h-screen max-w-[1276px]'>
        {/* mx-auto flex min-h-screen max-w-7xl */}
        {/* <TestSidebar /> */}
        <Sidebar />
        <Characters />
        <ChatScreen />
      </main>
    </>
  );
};

export default Messages;
