type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='8'
    height='9'
    viewBox='0 0 8 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect y='0.5' width='8' height='8' fill='url(#paint0_linear_810_1889)' />
    <defs>
      <linearGradient
        id='paint0_linear_810_1889'
        x1='1.33333'
        y1='1.58333'
        x2='6.75'
        y2='7.41667'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#2D91EF' />
        <stop offset='1' stop-color='#3E54E8' />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
