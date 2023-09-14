import React, { useState } from 'react';
import ViewStylesTab from './ViewStylesTab';
import ViewStyleAlbums from './ViewStyleAlbums';
import ViewStyleAllImages from './ViewStyleAllImages';
import Generatedstyle from './Generatedstyle';
import Addedstyle from './AddedStyle';
import Postedstyle from './PostedStyle';
import FavoriteStyles from './FavoriteStyles';
import PlatformStyles from './PlatformStyles';
import ViewStyleMainPageOption from './ViewStyleMainPageOption';

const ViewStyleMainPage = () => {
  const [generatedStyle, setGeneratedStyle] = useState(false);
  const [addedStyle, setAddedStyle] = useState(false);
  const [postedStyle, setPostedStyle] = useState(false);
  const tabContent = ['Your Styles', 'Favorite Styles', 'Platform Styles'];
  const [exploreSelectedTab, setExploreSelected] = useState('Your Styles');
  const [mainPageOption, setMainPageOption] = useState(false);
  return (
    <>
    {mainPageOption ? 
    <>
    <ViewStyleMainPageOption />
    <div className='px-6 py-6 rounded-[16px] bg-[#121212] mt-5'>
    <ViewStyleAllImages option={'option'} />
    </div>
    </> : 
    <>
    <div className="flex items-center justify-between">
      <div className="text-[22px] font-bold leading-8 text-[#FFFFFF]" onClick={() => {setMainPageOption(true)}}>View Styles</div>
      <button className="cursor-pointer bg-[#5848BC] flex items-center justify-center h-10 gap-1.5 rounded-xl px-4 py-[10px]">Generate Style</button>
    </div>
    {generatedStyle ? 
    <Generatedstyle setGeneratedStyle={setGeneratedStyle} /> : 
    addedStyle ? 
    <Addedstyle setAddedStyle={setAddedStyle} /> :
    postedStyle ? 
    <Postedstyle setPostedStyle={setPostedStyle} /> :
    <>
    <ViewStylesTab component={'mainPage'} tabContent={tabContent} exploreSelectedTab={exploreSelectedTab} setExploreSelected={setExploreSelected} />
    {exploreSelectedTab === 'Your Styles' ? 
    <>
    <ViewStyleAlbums setGeneratedStyle={setGeneratedStyle} setAddedStyle={setAddedStyle} setPostedStyle={setPostedStyle} />
    <ViewStyleAllImages />
    </> :
    exploreSelectedTab === 'Favorite Styles' ?
    <FavoriteStyles /> : 
    <PlatformStyles />
  }
    </>
    }
    </>
    }
    </>
    
  
  )
}

export default ViewStyleMainPage
