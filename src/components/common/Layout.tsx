import React, { Children, useState } from 'react';
import Sidebar from './Sidebar';
import NotificationModal from './Sidebar/NotificationModal';

const Layout = ({ children }: any) => {
  const [activeMoreMenuItem, setActiveMoreMenuItem] = useState('');
  return (
    <React.Fragment>
      <main className='mx-auto flex h-screen min-h-screen max-w-[1320px]'>
        <div className='sticky top-0 flex h-screen'>
          <Sidebar
            activeMoreOption={activeMoreMenuItem}
            moreOptionItem={setActiveMoreMenuItem}
          />
        </div>

      
          
          <div className='main-content-scroller flex-grow overflow-y-auto bg-main-background lg:min-w-[600px]  h-screen'>
            
          {activeMoreMenuItem === 'Notifications' ? (
            <div className={`absolute z-[100] ml-0 transition duration-150 ease-out `}>
              <NotificationModal />
            </div>
         ) : null} 
           
            {children}
          </div>
          
        
      </main>
    </React.Fragment>
  );
};

export default Layout;
