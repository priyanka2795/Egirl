import React, { Children, useState } from 'react';
import Sidebar from './Sidebar';
import NotificationModal from './Sidebar/NotificationModal';
import AddCardSidebar from './Sidebar/AddCards/AddCard';

const Layout = ({ children }: any) => {
  const [activeMoreMenuItem, setActiveMoreMenuItem] = useState('');
  const [activeItem ,setActiveItem] = useState('');
  console.log(activeItem,'activeItem');
  

  return (
    <React.Fragment>
      <main className='mx-auto flex h-screen min-h-screen max-w-[1320px] overflow-hidden'>
        <div className='sticky top-0 z-[81] flex h-screen bg-[#070707]'>
          <Sidebar
            activeMoreOption={activeMoreMenuItem}
            moreOptionItem={setActiveMoreMenuItem}
            activeItem={setActiveItem}
          />
        </div>

        <div className={`main-content-scroller relative h-screen flex-grow ${activeItem === 'messages'?'overflow-y-hidden' :"overflow-y-auto"} overflow-x-hidden bg-main-background lg:min-w-[600px] `}>
          <NotificationModal selectedMoreOption={activeMoreMenuItem} />   
          {activeItem === "Add Card" && 
          <AddCardSidebar seletedAddCard={activeItem}/>         
          }
            
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
