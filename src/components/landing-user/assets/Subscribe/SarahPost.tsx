type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='349'
    height='414'
    viewBox='0 0 349 414'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <g clipPath='url(#clip0_1286_17299)'>
      <rect width='349' height='414' rx='12' fill='#E7E7E7' />
      <path
        fill='url(#pattern00099ladslfldlfjhuuuyqwqqadsjgflkjhu4i3)'
        d='M-38-5h425v425H-38z'
      />
    </g>
    <defs>
      <clipPath id='clip0_1286_17299'>
        <rect width='349' height='414' rx='12' fill='#fff' />
      </clipPath>
      <pattern
        id='pattern00099ladslfldlfjhuuuyqwqqadsjgflkjhu4i3'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use xlinkHref='#image0_1286_17299' transform='scale(.00098)' />
      </pattern>
      <image
        id='image0_1286_17299'
        width='1024'
        height='1024'
      />
    </defs>
  </svg>
);

export default SvgComponent;