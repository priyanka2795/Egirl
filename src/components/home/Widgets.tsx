import SearchIcon from './SearchIcon.svg';
import useScroll from '../../../hooks/useScroll';
import YouMightLike from './YouMightLike';

export default function Widgets() {
  const [sticky, animate] = useScroll();

  return (
    <div className='hidden bg-main-background lg:inline xl:w-[376px]'>
      <div
        className={`sticky z-50  ${
          sticky && animate ? 'top-0' : '-top-[108px]'
        } h-[108px] max-w-[376px] bg-main-background transition-all duration-[300ms] ease-in lg:min-w-[376px]`}
      >
        <div className='mr-2 w-full max-w-[376px] pb-5 pt-6'>
          <div className='flex h-[64px] items-center justify-between rounded-r-[14px] bg-main-bar'>
            <div className='relative mr-2 w-full'>
              <div className='absolute left-4 top-3'>
                <SearchIcon />
              </div>
              <input
                className='py-auto mr-2 h-[48px] w-full rounded-[14px] border-none bg-[#1E1E1E] pl-[50px] text-[15px] font-light leading-6 text-[#979797]'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`sticky  ${
          sticky && animate ? 'top-[108px]' : 'top-4'
        } max-w-[376px] transition-all duration-300 ease-in `}
      >
        <YouMightLike />
      </div> */}
      <div className={`sticky top-0 max-w-[376px] `}>
        <YouMightLike />
      </div>
    </div>
  );
}

// used to have margin left of 8 (32px)
// <div className='ml-8 hidden space-y-5 bg-orange-400 lg:inline xl:w-[600px]'>
