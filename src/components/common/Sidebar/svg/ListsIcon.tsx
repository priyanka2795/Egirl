type SvgIconProps = {
  svgClasses?: string;
  strokeclasses?: string;
};

export default function ListsIcon({ svgClasses, strokeclasses }: SvgIconProps) {
  return (
    // <svg
    //   className={svgClasses}
    //   width='24'
    //   height='24'
    //   viewBox='0 0 24 24'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    // >
    //   <path
    //     className={strokeclasses}
    //     d='M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 18L5 21V6.2Z'
    //     strokeWidth='1.8'
    //     strokeLinecap='round'
    //     strokeLinejoin='round'
    //   />
    // </svg>
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
        d='M3 4.5C3 3.12 4.12 2 5.5 2H18.5C19.88 2 21 3.12 21 4.5V19.5C21 20.88 19.88 22 18.5 22H5.5C4.12 22 3 20.88 3 19.5V4.5ZM5.5 4C5.22 4 5 4.22 5 4.5V19.5C5 19.78 5.22 20 5.5 20H18.5C18.78 20 19 19.78 19 19.5V4.5C19 4.22 18.78 4 18.5 4H5.5Z'
        fill='#515151'
      />
      <path
        className={strokeclasses}
        d='M9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z'
        fill='#515151'
      />
      <path
        className={strokeclasses}
        d='M15 12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12Z'
        fill='#515151'
      />
    </svg>
  );
}
