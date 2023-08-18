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
        d='M22 12H18L15 21L9 3L6 12H2'
        stroke='#515151'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}