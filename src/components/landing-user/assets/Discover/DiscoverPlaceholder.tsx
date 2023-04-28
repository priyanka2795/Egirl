type Props = {
  [key: string]: any;
};
const SvgComponent = (props: Props) => (
  <svg
    width='398'
    height='540'
    viewBox='0 0 398 540'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='397.33' height='466' rx='16' fill='#E7E7E7' />
    <rect y='486' width='220' height='24' rx='12' fill='#C4C4C4' />
    <rect y='524' width='141' height='16' rx='8' fill='#E7E7E7' />
  </svg>
);

export default SvgComponent;
