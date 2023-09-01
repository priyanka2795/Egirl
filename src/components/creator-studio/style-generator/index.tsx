import React from 'react'
import StyleBeingGenerated from './StyleBeingGenerated'
import StyleGenerator from './StyleGenerator'
import StyleGeneratorNext from './StyleGeneratorNext'
import GeneratedStyle from './GeneratedStyle'

const StyleGeneratorIndex = () => {
  return (
    <div className="flex flex-col gap-5">
      <StyleBeingGenerated />
      <StyleGenerator />
      <StyleGeneratorNext />
      <GeneratedStyle />
    </div>
  )
}

export default StyleGeneratorIndex