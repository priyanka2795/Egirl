import React from 'react'
import StyleBeingGenerated from './StyleBeingGenerated'
import StyleGenerator from './StyleGenerator'

const StyleGeneratorIndex = () => {
  return (
    <div className="flex flex-col gap-5">
      <StyleBeingGenerated />
      <StyleGenerator />
    </div>
  )
}

export default StyleGeneratorIndex