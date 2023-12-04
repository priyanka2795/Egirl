import React, { Children, useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import NotificationModal from './Sidebar/NotificationModal';
import AddCardSidebar from './Sidebar/AddCards/AddCard';
import { useRouter } from 'next/router';
import { log } from 'console';

const Layout = ({ children }: any) => {
  const [activeMoreMenuItem, setActiveMoreMenuItem] = useState<string>('');
  const [activeItem, setActiveItem] = useState('');
  const router = useRouter();
  console.log({activeItem});
  
  const activeRoute = router.pathname;
  const handleActiveItem = (item: string) => {    
    setActiveItem(item)
  }
  return (
    <React.Fragment>
      <main className='mx-auto flex h-screen min-h-screen max-w-[1320px] overflow-hidden'>
        <div className='sticky top-0 z-[81] flex h-screen bg-[#070707]'>
          <Sidebar
            activeMoreOption={activeMoreMenuItem}
            moreOptionItem={setActiveMoreMenuItem}
            activeItem={handleActiveItem}
          />
        </div>

        <div
          className={`main-content-scroller relative h-screen flex-grow ${
            activeItem === 'messages' && activeRoute === '/messages'
              ? 'overflow-y-hidden'
              : 'overflow-y-auto'
          } overflow-x-hidden bg-main-background lg:min-w-[600px] `}
        >
          <NotificationModal selectedMoreOption={activeMoreMenuItem} setActiveMoreMenuItem={setActiveMoreMenuItem} />
          {/* {activeItem === 'Add Card' && (
            <AddCardSidebar seletedAddCard={activeItem}  SetseletedAddCard ={setActiveItem}/>
          )} */}
          {/* {activeItem === 'Add Card' && (
            <AddCardSidebar seletedAddCard={activItem} />
          )} */}
    

          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;