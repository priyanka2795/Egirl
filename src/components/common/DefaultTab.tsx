//@ts-nocheck
import Image from 'next/image';
import React, { useState } from 'react';
import ClearBookMarkModal from '@components/list/ClearBookMarkModal';

interface DefaultTabProp {
  activeListTab?: string;
  setActiveTab?: any;
  tabContentArray?: string[];
  component?:any;
  setShowSubscriptionOption?: any;
  setShowFollowing?: any;
  setShowBookmark?: any;
  setShowCollections?: any;
  setShowRealistic?: any;
}
const DefaultTab = ({
  activeListTab,
  setActiveTab,
  tabContentArray,
  component,
  setShowSubscriptionOption,
  setShowFollowing,
  setShowBookmark,
  setShowCollections,
  setShowRealistic
}: DefaultTabProp) => {
  const [exploreSelectedTab, setExploreSelected] = useState(activeListTab);

  const handleExploreSelected = (item:string) => {
    // setShowRealistic(false);
    setExploreSelected(item);
    setActiveTab(item);
    if(item === 'Subscriptions') {
      setShowFollowing(false);
      setShowBookmark(false);
      setShowCollections(false);
    } else if(item === 'Following') {
      setShowSubscriptionOption(false);
      setShowBookmark(false);
      setShowCollections(false);
    } else if(item === 'Bookmarks') {
      setShowSubscriptionOption(false);
      setShowFollowing(false);
      setShowCollections(false);
    } else {
      // setShowSubscriptionOption(false);
      // setShowFollowing(false);
      // setShowBookmark(false);
    }
  };
  return (
    <div className='flex items-center justify-between border-b border-white border-opacity-10'>
      <div className={`flex justify-between w-full ${component === 'ListIndex' ? 'px-8 pt-4 pb-3' : ' px-8 py-4'}`}>
        <div className='flex items-start justify-start gap-3'>
          {tabContentArray.map((items: string, index: number) => {
            return (
              <div
                key={index}
                onClick={(e) => handleExploreSelected(items)}
                className={`flex cursor-pointer gap-2.5 rounded-xl px-4 py-2 text-[15px] font-bold ${
                  exploreSelectedTab === items
                    ? ' bg-white bg-opacity-20 text-white  '
                    : 'text-neutral-400'
                }`}
              >
                {items}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DefaultTab;
