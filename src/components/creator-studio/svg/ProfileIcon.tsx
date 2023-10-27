type SvgIconProps = {
  svgClasses?: string;
  strokeclasses?: string;
};

export default function HomeIcon({ svgClasses, strokeclasses }: SvgIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
    >
      <path
        d='M9.33333 25.3333C9.96364 22.2903 12.7089 20 16 20C19.2911 20 22.0364 22.2903 22.6667 25.3333M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16ZM18.6667 13.3333C18.6667 14.8061 17.4728 16 16 16C14.5272 16 13.3333 14.8061 13.3333 13.3333C13.3333 11.8606 14.5272 10.6667 16 10.6667C17.4728 10.6667 18.6667 11.8606 18.6667 13.3333Z'
        stroke='white'
        strokeOpacity='0.48'
        strokeWidth='2.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
