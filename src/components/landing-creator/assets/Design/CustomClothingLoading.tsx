type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='620'
    height='555'
    viewBox='0 0 620 555'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='67' y='205' width='110' height='52' rx='26' fill='#F5F5F5' />
    <rect x='444' y='489' width='117' height='52' rx='26' fill='#F5F5F5' />
    <path
      d='M63 524.5l210.563-225.985c16.451-17.656 45.956-9.649 51.225 13.901l12.389 55.368c5.266 23.536 34.743 31.552 51.203 13.924L594 161.5'
      stroke='#C4C4C4'
      strokeDasharray='8 8'
    />
    <g clipPath='url(#clip0_1567_19082)'>
      <rect x='207' y='204.5' width='306' height='251' rx='20' fill='#C4C4C4' />
      <path
        d='M330 299c0-8.837 7.163-16 16-16h124c8.837 0 16 7.163 16 16v157H330V299z'
        fill='#F5F5F5'
      />
    </g>
    <path
      d='M146 299c0-8.837 7.163-16 16-16h141.94c8.837 0 16 7.163 16 16v190c0 8.837-7.163 16-16 16H162c-8.837 0-16-7.163-16-16V299zM229 117c0-8.837 7.163-16 16-16h105.05c8.837 0 16 7.163 16 16v140c0 8.837-7.163 16-16 16H245c-8.837 0-16-7.163-16-16V117zM377 87c0-8.8366 7.163-16 16-16h127c8.837 0 16 7.1634 16 16v170c0 8.837-7.163 16-16 16H393c-8.837 0-16-7.163-16-16V87z'
      fill='#F5F5F5'
    />
    <defs>
      <clipPath id='clip0_1567_19082'>
        <rect x='207' y='204.5' width='306' height='251' rx='20' fill='#fff' />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
