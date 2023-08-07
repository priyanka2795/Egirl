import React, { ReactNode, useState } from 'react';
import Sidebar from '../common/Sidebar';
import Characters from './Characters';
import ChatScreen from './ChatScreen';

import TestSidebar from './TestSidebar';
import { Modal } from '@components/modal/modal';
import StartConversation from './StartConversation';

const Messages = () => {
  const [chartScreenView, setChartScreenView] = useState('Default view');
  const [modalView, setModalView] = useState(false);
  const [startConversationModal, setStartConversationModal] = useState(false);
  const [selectUserState, setSelectUserState] = useState('');
  const [shrinkSidebar, setShrinkSidebar] = useState(false);
  console.log(chartScreenView, 'chartScreenView');
  const handleCloseModal = () => {
    setModalView(!modalView);
    setChartScreenView('Default view');
  };
  const handleCloseConversationModal = () => {
    setStartConversationModal(!startConversationModal);
  };

  // const handleSeletedUser = (e:any) => {
  //   setSelectUserState(e);
  //   setStartConversationModal(false);

  //   console.log(e.target , "test ")
  // };
  if(selectUserState === "One More Mika"){
    console.log('new chat')
  }

  const handleSidebarWidth = () => {
    setShrinkSidebar(!shrinkSidebar);
    console.log('reduce');
  };
  // console.log(selectUserState , "re check")

  return (
    <>
      <main className='flex max-w-full min-h-screen mx-auto'>
        {selectUserState === '' ? (
          <>
         
            <Characters
              shrinkSidebar={shrinkSidebar}
              selectUserState={selectUserState}
            />
            <StartConversation
              startConversationModal={startConversationModal}
              handleCloseConversationModal={handleCloseConversationModal}
              userSelected={setSelectUserState}
            />
          </>
        ) :
        selectUserState === 'One More Mika' ? 
        <>
        <Characters /> 
        <ChatScreen 
        selectUserState={selectUserState}
                // chartScreenView={chartScreenView}
                // setChartScreenView={setChartScreenView}
              />
        </>
        :
        (
          <>
            {chartScreenView === 'FullScreen view' ? (            
              sessionStorage.setItem("sideBarCollapse" , "true")
            ) : (         
                <Characters />             
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
                modalOverlayStyle='!bg-black/80'
                closeModal={handleCloseModal}
              >
                <ChatScreen
                  chartScreenView={chartScreenView}
                  chatScreenClassName='!rounded-none max-h-[90vh]'
                  chatScreenMsgClassName='!max-h-[62vh] overflow-y-scroll custom-scroll-bar'
                  setChartScreenView={setChartScreenView}
                />
              </Modal> 
            ) : (
              <ChatScreen
                // chatScreenClassName={`ml-[80px]`}
                chartScreenView={chartScreenView}
                setChartScreenView={setChartScreenView}
              />
            )}
          </>
        )
        
      
      }
      </main>
    </>
  );
};

export default Messages;
