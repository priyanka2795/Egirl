import * as React from 'react';

const BetaAccessBg = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={630}
    height={800}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_f_482_11266)'>
      <path
        fill='#5848BC'
        fillOpacity='0.24'
        d='M332.06 292.027l37.499-5.451c109.961-15.983 210.394 64.671 218.525 175.489a191.495 191.495 0 01-33.091 122.37l-16.015 23.336c-63.077 91.911-175.821 136.07-284.541 111.447L59.791 675.134C1.77 661.993-35.585 605.459-24.918 546.932c9.62-52.773 55.592-91.124 109.235-91.124h13.452c47.448 0 90.948-26.416 112.83-68.516l7.367-14.172a153.461 153.461 0 01114.094-81.093z'
      ></path>
    </g>
    <defs>
      <filter
        id='filter0_f_482_11266'
        width='1263.33'
        height='1089.4'
        x='-350.734'
        y='-39.446'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
        <feBlend
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        ></feBlend>
        <feGaussianBlur
          result='effect1_foregroundBlur_482_11266'
          stdDeviation='162'
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default BetaAccessBg;
