import React from 'react';
import Image from 'next/image';

const Test = () => {
  return (
    <div>
      <Image
        src={'/assets2/UserLanding/SarahPost/SarahPost2x.png'}
        layout='responsive'
        width={349}
        height={414}
      />
    </div>
  );
};

export default Test;
