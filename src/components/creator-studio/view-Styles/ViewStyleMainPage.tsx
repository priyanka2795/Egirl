import React, { useState } from 'react';
import ViewStylesTab from './ViewStylesTab';
import ViewStyleAlbums from './ViewStyleAlbums';
import ViewStyleAllImages from './ViewStyleAllImages';
import Generatedstyle from './Generatedstyle';

const ViewStyleMainPage = () => {
  const [generatedStyle, setGeneratedStyle] = useState(false);
  return (
    <>
    <div className="flex items-center justify-between">
      <div className="text-[22px] font-bold leading-8 text-[#FFFFFF]">View Styles</div>
      <button className="cursor-pointer bg-[#5848BC] flex items-center justify-center h-10 gap-1.5 rounded-xl px-4 py-[10px]">Generate Style</button>
    </div>
    {generatedStyle ? 
    <Generatedstyle /> :
    <>
    <ViewStylesTab component={'mainPage'} setGeneratedStyle={setGeneratedStyle} generatedStyle={generatedStyle} />
    <ViewStyleAlbums setGeneratedStyle={setGeneratedStyle} />
    <ViewStyleAllImages />
    </>
    }
    
    </>
  )
}

export default ViewStyleMainPage
