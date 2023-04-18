import React from 'react';
import { StarIcon, Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { NextImage } from '@components/ui/next-image';
import ExperienceTheFuture from './assets/ExperienceTheFuture';
import HeaderImg from './assets/HeaderImg';

// const Header = () => {
//   return (
//     <div className='mt-[96px] w-full bg-[#F6F6F6] px-24 lg:px-[100px]'>
//       <div className='py-20'>
//         <div className='justify-center gap-[100px] xs:justify-center sm:grid sm:grid-cols-1 sm:justify-center md:grid md:grid-cols-2 md:justify-center md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
//           <div>
//             <div className='flex justify-center lg:justify-start'>
//               <div className='flex items-center rounded-[8px] bg-[#EAE8FD] px-[12px] py-[10px]'>
//                 <ExperienceTheFuture className='mr-2' />
//                 <div className='justify-centertext-[32px] flex items-center font-[500] text-[#5848BC] md:text-[24px] lg:text-[16px]'>
//                   experience the future
//                 </div>
//               </div>
//             </div>
//             <div className='pt-6 text-center lg:text-start'>
//               <span className='text-[104px] font-[600] text-black lg:text-[52px]'>
//                 YOUR FAVOURITE <span className='font-[500] italic'>EGIRLS</span>
//                 , ALL IN ONE PLACE
//               </span>
//             </div>
//             <button className='mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white'>
//               Join us
//             </button>
//           </div>
//           <div className='mt-15 pt-32 lg:mt-0 lg:pt-0'>
//             <div className='shrink-0'>
//               <NextImage
//                 width={700}
//                 height={650}
//                 src={'/assets/svgImages/landingUserWeb.svg'}
//                 alt={'landing user web'}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className='mt-[96px] w-full bg-[#F6F6F6] px-24 lg:px-[100px]'>
      <div className='justify-between xs:justify-center sm:grid sm:grid-cols-1 sm:justify-center md:grid md:grid-cols-2 md:justify-center md:max-xl:grid md:max-lg:grid-cols-1 lg:grid lg:grid-cols-2'>
        <div className='mt-[143px]'>
          <div className='flex justify-center lg:justify-start'>
            <div className='flex items-center rounded-[8px] bg-[#EAE8FD] px-[12px] py-[10px]'>
              <ExperienceTheFuture className='mr-2' />
              <div className='justify-centertext-[32px] flex items-center font-[500] text-[#5848BC] md:text-[24px] lg:text-[16px]'>
                experience the future
              </div>
            </div>
          </div>
          <div className='pt-6 text-center lg:text-start'>
            <span className='text-[104px] font-[600] text-black lg:text-[52px]'>
              YOUR FAVOURITE <br />
              <span className='font-[500] italic'>EGIRLS</span>, ALL IN ONE
              <br />
              PLACE
            </span>
          </div>
          <button className='mt-12 rounded-xl bg-[#5848BC] py-4 px-[30px] text-lg font-semibold text-white'>
            Join us
          </button>
        </div>
        <div className='mt-15 pt-32 lg:mt-0 lg:pt-0'>
          <div className='flex shrink-0 justify-end'>
            {/* <NextImage
              width={700}
              height={650}
              src={'/assets/svgImages/landingUserWeb.svg'}
              alt={'landing user web'}
            /> */}
            <HeaderImg className='mt-10 mb-[104px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
