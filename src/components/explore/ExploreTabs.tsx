import { Modal } from '@components/modal/modal';
import React, { useState } from 'react';
import SubscriptionModal from './SubscriptionModal';

interface props {
  // tabContentData: Array<String>;
  exploreTab: string;
  setExploreSelectedTab: any;
}

const ExploreTabs = ({ exploreTab, setExploreSelectedTab }: props) => {
  const tabContent = ['Swipe', 'Gallery'];
  const [exploreSelectedTab, setExploreSelected] = useState(exploreTab);
  const [subLeftModal, setsubLeftModal] = useState(false);
  // const [filterOptionShow, setFilterOptionShow] = useState(true);
  const handleExploreSelected = (e: any) => {
    setExploreSelected(e.target.innerText);
    setExploreSelectedTab(e.target.innerText);
  };
  console.log(exploreSelectedTab, 'test 1');
  return (
    <>
      <div className='border-b border-white border-opacity-10'>
        <div className='flex justify-between px-8 py-4'>
          <div className='flex items-start justify-start gap-3'>
            {tabContent.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={(e) => handleExploreSelected(e)}
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

          <div className='inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-white border-opacity-30 px-4 py-2.5'>
            <div
              className='text-sm font-bold leading-tight text-white'
              onClick={() => {
                setsubLeftModal(!subLeftModal);
              }}
            >
              2 subs left
            </div>
          </div>
          {subLeftModal && <SubscriptionModal closeState={setsubLeftModal} />}
        </div>
      </div>
    </>
  );
};

export default ExploreTabs;
