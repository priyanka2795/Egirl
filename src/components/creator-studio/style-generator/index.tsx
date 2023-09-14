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
    <div className="flex flex-col gap-5">
      {generatedStyle ? 
      viewStyleGenerated ? <Generatedstyle /> : 
      <GeneratedStyle setGeneratedStyle={setGeneratedStyle} setViewStyleGenerated={setViewStyleGenerated} /> :
      <>
      <StyleBeingGenerated setGeneratedStyle={setGeneratedStyle} />
      {styleGeneratorNext ? 
      <StyleGeneratorNext setStyleGeneratorNext={setStyleGeneratorNext} /> : 
      <StyleGenerator setStyleGeneratorNext={setStyleGeneratorNext} />
      }
      </>
      }
      
    </div>
  )
}

export default StyleGeneratorIndex