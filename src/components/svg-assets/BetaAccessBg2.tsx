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
        d='M332.06 292.027L369.559 286.576C479.52 270.593 579.953 351.247 588.084 462.065C591.266 505.429 579.596 548.585 554.993 584.435L538.978 607.771C475.901 699.682 363.157 743.841 254.437 719.218L59.7908 675.134C1.76994 661.993 -35.585 605.459 -24.9176 546.932C-15.2987 494.159 30.6738 455.808 84.3168 455.808H97.7694C145.217 455.808 188.717 429.392 210.599 387.292L217.966 373.12C240.737 329.308 283.198 299.129 332.06 292.027Z'
        fill='#5848BC'
        fill-opacity='0.24'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_482_11266'
        x='-350.734'
        y='-39.4458'
        width='1263.33'
        height='1089.4'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feGaussianBlur
          stdDeviation='162'
          result='effect1_foregroundBlur_482_11266'
        />
      </filter>
    </defs>
  </svg>
);

export default BetaAccessBg;
