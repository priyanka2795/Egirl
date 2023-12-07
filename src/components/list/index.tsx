import React, { useState } from 'react';
import SubscriptionOptions from './SubscriptionOptions';
import DefaultTab from '@components/common/DefaultTab';
import CollectionOptions from './CollectionOptions';
import RemoveProfile from './RemoveProfile';
import BookMarks from './BookMarks1';
import Following from './Following';
import heartIcon from '@/assets/heart-with-plus.webp';
import SubscriptionInitialPage from './SubscriptionInitialPage';
import heartIconSubscription from '@/assets/heart-with-plus-grey.webp';
import userCheck from '@/assets/user-check (1).webp';
import bookmark from '@/assets/bookmark (2).webp';
import folderImage from '@/assets/folder-image.webp';
import RealisticPage from './RealisticPage';
const ListIndex = () => {
  const [activeListTab, setActiveListTab] = useState('Subscriptions');
  const tabContent = ['Subscriptions', 'Following', 'Bookmarks', 'Collections'];
  const [profileSectionState, setProfileSectionState] = useState(false);
  const [showSubscriptionOption, setShowSubscriptionOption] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showBookmark, setShowBookmark] = useState(false);
  const [showCollections, setShowCollections] = useState(false);
  const [showRealistic, setShowRealistic] = useState(false);
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
            component={'ListIndex'}
            setShowSubscriptionOption={setShowSubscriptionOption}
            setShowFollowing={setShowFollowing}
            setShowBookmark={setShowBookmark}
            setShowCollections={setShowCollections}
            setShowRealistic={setShowRealistic}
          />
          <div className='h-[100vh] px-8 py-4'>
            {activeListTab === 'Subscriptions' ? (
              showSubscriptionOption ? (
                <SubscriptionOptions showProfile={setProfileSectionState} />
              ) : (
                <SubscriptionInitialPage
                  showContent={setShowSubscriptionOption}
                  image={heartIconSubscription}
                  text={'Check out explore tab to see more'}
                  buttonText={'Explore'}
                />
              )
            ) : activeListTab === 'Following' ? (
              showFollowing ? (
                <SubscriptionOptions showProfile={setProfileSectionState} />
              ) : (
                <SubscriptionInitialPage
                  showContent={setShowFollowing}
                  image={userCheck}
                  text={'Check out explore tab to see more'}
                  buttonText={'Explore'}
                />
              )
            ) : activeListTab === 'Collections' ? (
              showCollections ? (
                showRealistic ? (
                  <RealisticPage
                    showProfile={setProfileSectionState}
                    setShowRealistic={setShowRealistic}
                  />
                ) : (
                  <CollectionOptions setShowRealistic={setShowRealistic} />
                )
              ) : (
                <SubscriptionInitialPage
                  showContent={setShowCollections}
                  image={folderImage}
                  text={'You have not any collection '}
                  buttonText={'Create a collection'}
                />
              )
            ) : activeListTab === 'Bookmarks' ? (
              showBookmark ? (
                <BookMarks />
              ) : (
                <SubscriptionInitialPage
                  showContent={setShowBookmark}
                  image={bookmark}
                  component={'bookmarks'}
                  text={'You don’t have any bookmarks, check out explore'}
                  buttonText={'Explore'}
                />
              )
            ) : (
              <Following icon={heartIcon} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ListIndex;
