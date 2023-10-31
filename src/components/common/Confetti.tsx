import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confettii from 'react-confetti'
const Confetti = () => {
    // const { width, height } = useWindowSize()
    const height =window.innerHeight*2;
    const width =window.innerWidth;
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
