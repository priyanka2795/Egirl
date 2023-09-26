type SvgIconProps = {
  svgClasses?: string;
  strokeClasses?: string;
};

export default function HomeIcon({ svgClasses, strokeClasses }: SvgIconProps) {
  return (
    <svg
      className={svgClasses}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className={strokeClasses}
        d='M12 2L2 7L12 12L22 7L12 2Z'
        stroke='#515151'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        className={strokeClasses}
        d='M2 17L12 22L22 17'
        stroke='#515151'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        className={strokeClasses}
        d='M2 12L12 17L22 12'
        stroke='#515151'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
