import React, { useState } from 'react';
import SubscriptionOptions from './SubscriptionOptions';
import DefaultTab from '@components/common/DefaultTab';
import CollectionOptions from './CollectionOptions';
import RemoveProfile from './RemoveProfile';
import BookMarks from './BookMarks1';
import Following from './Following';
import heartIcon from '../../../public/assets/heart-with-plus.png'

const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState('Subscriptions');
  const tabContent = ['Subscriptions', 'Following', 'Bookmarks', 'Collections']; 
  const [profileSectionState , setProfileSectionState] = useState(false)
  return (
    <div>
      {profileSectionState === true ? (
        <RemoveProfile backFromProfile={setProfileSectionState} />
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
              <Following icon={heartIcon}/>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ListIndex;
