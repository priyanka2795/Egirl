type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1380_8372)'>
      <path
        d='M12 0L8.72727 8.72727L0 12L8.72727 15.2727L12 24L15.2727 15.2727L24 12L15.2727 8.72727L12 0Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_1380_8372'>
        <rect
          width='24'
          height='24'
          fill='white'
          transform='translate(24) rotate(90)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
