import React, { ReactNode, useState } from 'react';
import Sidebar from '../common/Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Layout from '@components/common/Layout';
import useScroll from '../../../hooks/useScroll';
import SearchIcon from '../common/Search/SearchIcon';
import Image from 'next/image';
import Image1 from '../../../public/assets/messages/grid-img-15.png';
import Image2 from '../../../public/assets/messages/grid-img-2.png';
import Image3 from '../../../public/assets/messages/grid-img-1.png';

const SearchData = [
  {
    name: 'One More Mika',
    username: '@sheisannaquigley',
    img: Image1
  },
  {
    name: 'Mika',
    username: '@sheisannaquigley',
    img: Image2
  },
  {
    name: 'Mika-chan',
    username: '@sheisannaquigley',
    img: Image3
  }
];
const Home = () => {
  const [showForYou, setShowForYou] = useState(true);
  const [sticky, animate] = useScroll();
  const [bookmarksActive, setBookmarksActive] = useState<boolean>(false);
  const [toasts, setToasts] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const handleFeedSwitch = (feedType: string) => {
    if (feedType === 'forYou' && !showForYou) {
      setShowForYou(true);
    } else if (feedType === 'subscribed' && showForYou) {
      setShowForYou(false);
    }
  };
  const BookmarksActive = () => {
    setCopyLink(false);
    if (!bookmarksActive) {
      setToasts(!toasts);
      setTimeout(() => {
        setToasts(false);
      }, 1500);
    }
    setBookmarksActive(!bookmarksActive);
  };
  const handleShare = () => {
    if (!copyLink) {
      setToasts(!toasts);
      setTimeout(() => {
        setToasts(false);
        setCopyLink(false);
      }, 1500);
    }
    setCopyLink(true);
  };

  // searchPromptMenu
  const [searchInput, setSearchInput] = useState('');
  const [showUser, setShowUser] = useState(SearchData);
  const [username, setUserName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filteredItems = searchTerm
      ? SearchData.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : SearchData;

    setShowUser(filteredItems);
  };

  return (
    <>
      {/*  max-w-[1650px] */}
      {/* <main className=' mx-auto flex min-h-screen max-w-[1276px] '>
        <Sidebar />
        <Feed />
        <Widgets />
      </main> */}
      <Layout>
        <div className='max-w-[976px] pl-[20px]'>
          <div className='mb-5 mt-4 flex items-center justify-between gap-4 rounded-[14px] bg-main-bar'>
            <div className=' flex h-[64px] w-full max-w-[600px] items-center justify-between rounded-l-[14px]  pr-5'>
              <div
                onClick={() => handleFeedSwitch('forYou')}
                className={` ${
                  showForYou
                    ? 'border-b-[#8C7DD0] text-[#8C7DD0]'
                    : 'border-main-bar text-[#979797]'
                } font-light flex h-full w-1/2 cursor-pointer items-center justify-center rounded-l-[14px] border-b text-[15px] leading-5 transition duration-100`}
              >
                For you
              </div>
              <div
                onClick={() => handleFeedSwitch('subscribed')}
                className={` ${
                  !showForYou
                    ? 'border-b-[#8C7DD0] text-[#8C7DD0]'
                    : 'border-main-bar text-[#979797]'
                } font-light flex h-full w-1/2 cursor-pointer items-center justify-center border-b text-[15px] leading-5 transition duration-100`}
              >
                Subscriptions
              </div>
            </div>

            <div className='relative mr-2 w-full max-w-[370px] '>
              <div className='flex h-[64px] items-center justify-between rounded-r-[14px] bg-main-bar'>
                <div className='group relative mr-2 w-full'>
                  <div className='absolute left-4 top-3'>
                    <SearchIcon />
                  </div>
                  <input
                    value={searchInput}
                    onChange={handleInputChange}
                    className='py-auto font-light mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] leading-6 text-white transition duration-100 focus:ring-0 '
                    type='text'
                    placeholder='Search'
                  />
                </div>
              </div>
              {searchInput === '' ? (
                ''
              ) : (
                <div className='shadow-[0px 32px 96px 0px #00000066] absolute z-50 w-full rounded-[14px] border border-[#FFFFFF1C] bg-[#1A1A1A] pb-4 pt-2'>
                  {showUser.length === 0 ? (
                    <div className='flex flex-col items-center justify-center gap-2 px-6 py-[64px] text-center'>
                      <h2 className='text-lg font-[700]'>No Results Found</h2>
                      <p className='text-[15px]'>
                        Expand your search criteria to find relevant content
                        matching your interests
                      </p>
                    </div>
                  ) : null}
                  {showUser.map((items, index) => (
                    <div
                      className={`flex cursor-pointer items-center gap-4 px-6 py-3 ${
                        searchInput === items.name ? 'bg-[#272727]' : ''
                      }`}
                      key={index}
                      onClick={() => {
                        setSearchInput(items.name);
                      }}
                    >
                      <div className='h-[68px] w-[68px]'>
                        <Image
                          src={items.img}
                          className=' h-[68px] w-[68px] rounded-full'
                        />
                      </div>
                      <div>
                        <h2 className='text-[15px] font-[600] text-white'>
                          {items.name}
                        </h2>
                        <p className='text-sm text-[#979797]'>
                          {items.username}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='relative flex'>
          <Feed
            bookmarksActive={bookmarksActive}
            BookmarksActive={BookmarksActive}
            handleShare={handleShare}
          />
          <Widgets />
          {toasts && (
            <div className='fixed bottom-3 left-1/2  -translate-x-1/2 rounded-[14px] bg-[#1591F1] px-5 py-4 text-center transition-all'>
              <p className='text-[14px]'>
                {copyLink
                  ? 'Copied to clipboard'
                  : 'Post added to your bookmarks'}
                {copyLink ? (
                  ''
                ) : (
                  <span className='ml-2 cursor-pointer font-[700]'>View</span>
                )}
              </p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
