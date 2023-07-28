import React, { useState } from 'react';
import SubscriptionOptions from './SubscriptionOptions';
import DefaultTab from '@components/common/DefaultTab';
import CollectionOptions from './CollectionOptions';
import RemoveProfile from './RemoveProfile';
import EditCollectionModal from './EditCollectionModal';
import BookMarks from './BookMarks1';
import AddToCollectionModal from './AddToCollectionModal';
import BookMarks3 from './BookMarks3';
import BookMarks2 from './BookMarks2';
import BookMarkModal from './BookMarkModal';
import ClearBookMarkModal from './ClearBookMarkModal';
import CollectionCoverModal from './CollectionCoverModal';


const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState('Subscriptions');
  const tabContent = ['Subscriptions', 'Following', 'Bookmarks', 'Collections']; 
  const [profileSectionState , setProfileSectionState] = useState(false)
  return (
    <div>
      {/* <div onClick={() => setRemovePage(!removePage)}>Remove Page</div> */}
      {profileSectionState === true ? (
        <RemoveProfile backFromProfile={setProfileSectionState}/>
      ) : (
        <>
          <DefaultTab
            activeListTab={activeListTab}
            setActiveTab={setActiveListTab}
            tabContentArray={tabContent}
          />
          <div className='px-8 py-4'>
            {activeListTab === 'Subscriptions' ? (
              <SubscriptionOptions showProfile={setProfileSectionState}/>
            ) : activeListTab === 'Collections' ? (
              <CollectionOptions />
            ) : activeListTab === 'Bookmarks' ? (
              <BookMarks />
            ) : (
              <SubscriptionOptions showProfile={setProfileSectionState}/>
            )}
          </div>
        </>
      )}
      {/* <BookMarkModal /> */}
      {/* <ClearBookMarkModal/> */}
     
      {/* <CollectionCoverModal /> */}
    </div>
  );
};

export default ListIndex;
