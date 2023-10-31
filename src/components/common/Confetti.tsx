import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confettii from 'react-confetti'
const Confetti = () => {
    const { width, height } = useWindowSize()
  return (
    <div>
        <Confettii
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={400}
    />
    </div>
  )
}

export default Confetti
