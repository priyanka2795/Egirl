import React, { useState } from 'react'
import StyleBeingGenerated from './StyleBeingGenerated'
import StyleGenerator from './StyleGenerator'
import StyleGeneratorNext from './StyleGeneratorNext'
import GeneratedStyle from './GeneratedStyle'
import Generatedstyle from '../view-Styles/Generatedstyle'

const StyleGeneratorIndex = () => {
  const [generatedStyle, setGeneratedStyle] = useState(false);
  const [viewStyleGenerated, setViewStyleGenerated] = useState(false);
  const [styleGeneratorNext, setStyleGeneratorNext] = useState(false);
  return (
    <div>
      {generatedStyle ? 
      viewStyleGenerated ? 
      <div className='flex flex-col'>
      <div className="flex items-center justify-between">
        <div className="text-[22px] font-bold leading-8 text-[#FFFFFF]">View Styles</div>
        <button className="cursor-pointer bg-[#5848BC] flex items-center justify-center h-10 gap-1.5 rounded-xl px-4 py-[10px]">Generate Style</button>
      </div>
      <Generatedstyle setViewStyleGenerated={setViewStyleGenerated} ViewStyle={true} />
      </div> : 
      <GeneratedStyle setGeneratedStyle={setGeneratedStyle} setViewStyleGenerated={setViewStyleGenerated} /> :
      <div className='flex flex-col gap-5'>
      <StyleBeingGenerated setGeneratedStyle={setGeneratedStyle} />
      {styleGeneratorNext ? 
      <StyleGeneratorNext setStyleGeneratorNext={setStyleGeneratorNext} /> : 
      <StyleGenerator setStyleGeneratorNext={setStyleGeneratorNext} />
      }
      </div>
      }
      
    </div>
  )
}

export default StyleGeneratorIndex