type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10 0L7.27273 7.27273L0 10L7.27273 12.7273L10 20L12.7273 12.7273L20 10L12.7273 7.27273L10 0Z'
      fill='#5848BC'
    />
  </svg>
);

export default SvgComponent;
