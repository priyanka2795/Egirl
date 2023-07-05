import React, { ReactNode, useState } from 'react';
import Sidebar from '../common/Sidebar';
import Characters from './Characters';
import ChatScreen from './ChatScreen';

import TestSidebar from './TestSidebar';
import { Modal } from '@components/modal/modal';

const Messages = () => {
  const [chartScreenView, setChartScreenView] = useState('Default view');
  const [modalView, setModalView] = useState(false);
  console.log(chartScreenView, 'chartScreenView');
  const handleCloseModal = () => {
    setModalView(!modalView);
    setChartScreenView('Default view');
  };

  return (
    <>
      <main className='fixed bottom-0 left-0 right-0 top-0 mx-auto flex min-h-screen max-w-[1276px]'>
        {/* mx-auto flex min-h-screen max-w-7xl */}
        {/* <TestSidebar /> */}
        {chartScreenView === 'Expanded view' ? (
          <Sidebar
            sideBarClasses={'!w-[88px]'}
            sideBarLogoClasses={'!hidden'}
            sideBarMenuText={'!hidden'}
            sideBarMenuArrowClasses={'rotate-180'}
          />
        ) : (
          <>
            <Sidebar />
            <Characters />
          </>
        )}

        {chartScreenView === 'Default view' ? (
          <ChatScreen
            chartScreenView={chartScreenView}
            setChartScreenView={setChartScreenView}
          />
        ) : chartScreenView === 'Focused view' ? (
          <Modal
            open={true}
            modalClassName='flex flex-col gap-6 max-w-xl bg-main-background w-full p-0 max-h-[90vh] min-w-[800px] relative'
            closeModal={handleCloseModal}
          >
            <ChatScreen
              chatScreenClassName='!rounded-none max-h-[90vh]'
              chatScreenMsgClassName='!max-h-[62vh] overflow-y-scroll custom-scroll-bar'
              setChartScreenView={setChartScreenView}
            />
          </Modal>
        ) : (
          <ChatScreen
            chatScreenClassName={`ml-[100px]`}
            chartScreenView={chartScreenView}
            setChartScreenView={setChartScreenView}
          />
        )}
      </main>
    </>
  );
};

export default Messages;
