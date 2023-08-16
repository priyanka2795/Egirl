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
        d='M18 9V3M21 6H15M11 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V13M14.2647 15.9375L12.5967 14.2834C11.7917 13.4851 11.3893 13.086 10.9274 12.9401C10.5212 12.8118 10.0846 12.8165 9.68132 12.9536C9.22271 13.1095 8.82898 13.5172 8.04152 14.3326L4.26034 18.2177M14.2647 15.9375L14.6061 15.599C15.412 14.7998 15.815 14.4002 16.2773 14.2543C16.6839 14.126 17.1209 14.1311 17.5244 14.2687C17.9833 14.4251 18.3769 14.8339 19.1643 15.6514L19.9912 16.5M14.2647 15.9375L18 19.8174'
        stroke='#515151'
        stroke-width='1.8'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
