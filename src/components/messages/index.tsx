import React, { ReactNode, useEffect, useState } from 'react';
import Sidebar from '../common/Sidebar';
import Characters from './Characters';
import ChatScreen from './ChatScreen';

import TestSidebar from './TestSidebar';
import { Modal } from '@components/modal/modal';
import StartConversation from './StartConversation';
import Cookies from 'js-cookie';
import { getRooms } from 'services/services';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';

const Messages = () => {
  const dispatch = useAppDispatch();
  const [chartScreenView, setChartScreenView] = useState('Default view');
  const [chatViewStyle, setChatViewStyle] = useState('Inline chat');
  const [modalView, setModalView] = useState(false);
  const [startConversationModal, setStartConversationModal] = useState(false);
  const [selectUserState, setSelectUserState] = useState('');
  const [shrinkSidebar, setShrinkSidebar] = useState(false);
  
  const handleCloseModal = () => {
    setModalView(!modalView);
    setChartScreenView('Default view');
  };
  const handleCloseConversationModal = () => {
    setStartConversationModal(!startConversationModal);
  };

  const handleSidebarWidth = () => {
    setShrinkSidebar(!shrinkSidebar);
  };
  //========= get rooms api ==========
  const token: any = Cookies.get('accessToken');
  const refreshTokenData: any = useAppSelector(
    (state) => state.tokenRefresh?.tokenData
  );
  const [roomData, setRoomData] = useState([]);
  const  [selectedRoom, setSelectedRoom] = useState('')
  useEffect(() => {
    if (refreshTokenData) {
      Cookies.set('accessToken', refreshTokenData);
    }
    getRooms(token)
      .then((res: any) => {
        console.log('get rooms res--', res);
        setRoomData(res?.data);
        if (res?.response?.status === 401) {
          dispatch(tokenRefresh());
        }
      })
      .catch((err) => {
        console.log('get rooms err---', err);
      });
  }, [refreshTokenData]);
  //========= get rooms api ==========
  
  
  console.log(chatViewStyle,':chatViewStyle',chartScreenView,': chartScreenView')
  return (
    <>
      <main className='flex max-w-full min-h-screen mx-auto'>
        {selectUserState === '' ? (
          <>
            <Characters
              shrinkSidebar={shrinkSidebar}
              selectUserState={selectUserState}
              roomData={roomData}
              setSelectedRoom={setSelectedRoom}
            />
            {
              selectedRoom === '' ?  
              <StartConversation
              startConversationModal={startConversationModal}
              handleCloseConversationModal={handleCloseConversationModal}
              userSelected={setSelectUserState}
            />
            : selectedRoom === 'One More Mika' &&
            <ChatScreen
              selectUserState={selectUserState}
              chatViewStyle={chatViewStyle}
              setChatViewStyle={setChatViewStyle}
              chartScreenView={chartScreenView}
              setChartScreenView={setChartScreenView}
            />
            }
           
          </>
        ) : selectUserState === 'One More Mika' ? (
          <>
            <Characters roomData={roomData} setSelectedRoom={setSelectedRoom} />
            <ChatScreen
              selectUserState={selectUserState}
              chatViewStyle={chatViewStyle}
              setChatViewStyle={setChatViewStyle}
              chartScreenView={chartScreenView}
              setChartScreenView={setChartScreenView}
            />
          </>
        ) : (
          <>
            {chartScreenView === 'FullScreen view' ? (
              sessionStorage.setItem('sideBarCollapse', 'true')
            ) : (
              <Characters roomData={roomData} />
            )}

            {chartScreenView === 'Default view' ? (
              <ChatScreen
                chartScreenView={chartScreenView}
                setChartScreenView={setChartScreenView}
                chatViewStyle={chatViewStyle}
                setChatViewStyle={setChatViewStyle}
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
                  chatViewStyle={chatViewStyle}
                  setChatViewStyle={setChatViewStyle}
                />
              </Modal>
            ) : (
              <ChatScreen
                // chatScreenClassName={`ml-[80px]`}
                chartScreenView={chartScreenView}
                setChartScreenView={setChartScreenView}
                chatViewStyle={chatViewStyle}
                setChatViewStyle={setChatViewStyle}
              />
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Messages;
