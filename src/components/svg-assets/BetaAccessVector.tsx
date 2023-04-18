import * as React from 'react';

const BetaAccessVector = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={573}
    height={272}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_482_11154)'>
      <path
        fill='url(#paint0_linear_482_11154)'
        fillOpacity='0.08'
        d='M539.869 179.162c40.815-116.4-84.554-221.147-191.842-160.285l-28.215 16.006a133.493 133.493 0 01-110.039 9.862L179.162 34.01C62.762-6.803-41.985 118.566 18.878 225.854l16.005 28.214a133.495 133.495 0 019.862 110.04L34.01 394.719c-40.814 116.4 84.555 221.146 191.843 160.284l28.214-16.005a133.494 133.494 0 01110.04-9.862l30.611 10.733c116.4 40.815 221.146-84.554 160.284-191.842l-16.005-28.215a133.492 133.492 0 01-9.862-110.039l10.733-30.611z'
      ></path>
    </g>
    <defs>
      <filter
        id='filter0_b_482_11154'
        width='617.884'
        height='617.884'
        x='-22.002'
        y='-22.002'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
        <feGaussianBlur
          in='BackgroundImageFix'
          stdDeviation='11.5'
        ></feGaussianBlur>
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_482_11154'
        ></feComposite>
        <feBlend
          in='SourceGraphic'
          in2='effect1_backgroundBlur_482_11154'
          result='shape'
        ></feBlend>
      </filter>
      <linearGradient
        id='paint0_linear_482_11154'
        x1='776.64'
        x2='-13.203'
        y1='86.89'
        y2='229.349'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#5848BC'></stop>
        <stop offset='1' stopColor='#5848BC' stopOpacity='0'></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default BetaAccessVector;
