type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1399_12420)'>
      <path
        d='M16 0L11.6364 11.6364L0 16L11.6364 20.3636L16 32L20.3636 20.3636L32 16L20.3636 11.6364L16 0Z'
        fill='#7362C6'
      />
    </g>
    <defs>
      <clipPath id='clip0_1399_12420'>
        <rect
          width='32'
          height='32'
          fill='white'
          transform='translate(32) rotate(90)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
