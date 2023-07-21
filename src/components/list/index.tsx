import React, { useState } from 'react';
import SubscriptionOptions from './SubscriptionOptions';
import DefaultTab from '@components/common/DefaultTab';
import CollectionOptions from './CollectionOptions';
import RemoveProfile from './RemoveProfile';
import EditCollectionModal from './EditCollectionModal';
import BookMarks from './BookMarks1';
import AddToCollectionModal from './AddToCollectionModal';

const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState('Subscriptions');
  const [removePage, setRemovePage] = useState(false);
  const tabContent = ['Subscriptions', 'Following', 'Bookmarks', 'Collections'];
  return (
    <div>
      <div onClick={() => setRemovePage(!removePage)}>Remove Page</div>
      {removePage === true ? (
        <RemoveProfile />
      ) : (
        <>
          <DefaultTab
            activeListTab={activeListTab}
            setActiveTab={setActiveListTab}
            tabContentArray={tabContent}
          />
          <div className='px-8 py-4'>
            {activeListTab === 'Subscriptions' ? (
              <SubscriptionOptions />
            ) : activeListTab === 'Collections' ? (
              <CollectionOptions />
            ) : activeListTab === 'Bookmarks' ? (
              <BookMarks />
            ) : (
              <SubscriptionOptions />
            )}
          </div>
        </>
      )}
      <AddToCollectionModal />
    </div>
  );
};

export default ListIndex;
