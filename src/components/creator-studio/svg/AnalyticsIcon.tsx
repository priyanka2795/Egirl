type SvgIconProps = {
  svgClasses?: string;
  strokeclasses?: string;
};

export default function HomeIcon({ svgClasses, strokeclasses }: SvgIconProps) {
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
        className={strokeclasses}
        d='M22 12H18L15 21L9 3L6 12H2'
        stroke='#515151'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
