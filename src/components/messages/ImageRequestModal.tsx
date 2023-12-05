//@ts-nocheck
import React, { useState } from 'react';
import RandomImageToggle from '../common/Toggler';
import CloseIcon from './svg/close-icon.svg';

type ImageRequestModal = {
  closeModal?: () => void;
  setImageRequestMsg?: any;
};

const ImageRequestModal = ({ closeModal, setImageRequestMsg }: ImageRequestModal) => {
  const imageFilterText = ['Clothes', 'Accessories', 'Poses', 'Locations'];
  const clothes = ['Red Dress', 'White sneakers', 'Blue Jeans', 'Denim shorts', 'Plaid shirt', 'Striped socks', 'Cargo pants', 'Knit beanie'];
  const [randomImageState, setRandomImageState] = useState(false);
  const [imageRequestTab, setImageRequestTab] = useState('Clothes');
 
  const handleImageRequestTab = (e: any) => {
    setImageRequestTab(e.target.textContent);
    console.log(e.target.textContent, 'get target');
  };

  return (
    <div className='flex flex-col items-center justify-start h-max rounded-2xl bg-zinc-900'>
      <div className='inline-flex items-start self-stretch justify-start gap-2 p-6 border-b border-white border-opacity-10'>
        <div className='inline-flex flex-col items-start justify-start gap-1 shrink grow basis-0'>
          <div className='w-[286px] text-[18px] font-bold leading-normal text-white'>
            Image request
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <RandomImageToggle
            handleToggleState={() => setRandomImageState(!randomImageState)}
            toggleState={randomImageState}
            toggleText={'Random'}
          />
          <span className='h-5 border-l-[2px] border-white/10 text-xl text-white/10'></span>
          <CloseIcon onClick={closeModal}/>
        </div>
      </div>

      <div className='flex flex-col items-start self-stretch justify-start w-full h-max'>
        <div className='flex flex-col gap-5 px-6 pt-6 pb-5'>
          <div className='flex flex-col gap-2'>
            <div className='text-[#FFFFFF] text-[15px] font-bold leading-5'>Suggestions</div>
            <div className='text-[#979797] text-[14px] font-normal leading-[18px]'>Below are some popular suggestions to help you get started with creating an image request</div>
          </div>
          <div className='flex gap-3'>
                {imageFilterText.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(e) => handleImageRequestTab(e)}
                      className={`cursor-pointer rounded-xl px-4 py-2 font-bold text-[#979797] text-white ${
                        imageRequestTab === item ? 'bg-white bg-opacity-20' : ''
                      }`}
                    >
                      {item}
                    </div>
                  );
                })}
          </div>
          <div className='flex flex-wrap gap-[10px]'>
                {clothes.map((item) => {
                  return (
                    <div className='w-max px-4 py-3 rounded-full bg-white/[0.05] text-[#FFFFFF] text-[15px] font-normal leading-5'>{item}</div>
                  );
                })}
              </div>
        </div>

        <div className='flex flex-col w-full gap-4 px-6 pt-6'>
          <div className='text-[#FFFFFF] text-[15px] font-bold leading-5'>Request info</div>
          <div className='p-5 h-[124px] w-full rounded-[14px] bg-[#1A1A1A]  text-[#979797] text-[15px] font-normal leading-6'>Type a prompt ...</div>
        </div>

        <div className='inline-flex items-end self-stretch justify-end gap-3 p-6 bg-neutral-900'>
          <button
            className='rounded-2xl border border-white border-opacity-30 px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className='rounded-2xl bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
            onClick={() => {setImageRequestMsg(true), closeModal();}}
          >
            Send request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageRequestModal;














// import React, { useState } from 'react';
// import RandomImageToggle from './Toggler';
// import CloseIcon from './svg/close-icon.svg';
// import ImgIcon from './svg/img-icon.svg';
// import RandomImageIcon from './svg/random-img-icon.svg';
// import gridImg1 from '@/assets/messages/grid-img-6.png';
// import gridImg2 from '@/assets/messages/grid-img-7.png';
// import gridImg3 from '@/assets/messages/grid-img-8.png';
// import gridImg4 from '@/assets/messages/grid-img-9.png';
// import gridImg5 from '@/assets/messages/grid-img-10.png';
// import gridImg6 from '@/assets/messages/grid-img-11.png';
// import gridImg7 from '@/assets/messages/grid-img-12.png';
// import gridImg8 from '@/assets/messages/grid-img-13.png';
// import gridImg9 from '@/assets/messages/grid-img-14.png';
// import Image from 'next/image';

// type ImageRequestModal = {
//   closeModal?: () => void;
// };

// const ImageRequestModal = ({ closeModal }: ImageRequestModal) => {
//   const imageFilterText = ['Clothes', 'Accessories', 'Poses', 'Locations'];
//   const requestedImageTypes = [
//     { image: gridImg3, title: 'Red Dress' },
//     { image: gridImg4, title: 'Some access...' },
//     { image: gridImg9, title: 'Red Dress' },
//     { image: gridImg3, title: 'Red Dress' }
//   ];

//   const imageType = [
//     { image: gridImg1, title: 'Red Dress' },
//     { image: gridImg2, title: 'Shorts' },
//     { image: gridImg3, title: 'Red Dress' },
//     { image: gridImg4, title: 'Red Dress' },
//     { image: gridImg5, title: 'Red Dress' },
//     { image: gridImg6, title: 'Red Dress' },
//     { image: gridImg7, title: 'Red Dress' },
//     { image: gridImg8, title: 'Red Dress' }
//   ];
//   const [randomImageState, setRandomImageState] = useState(false);
//   const [imageRequestType, setImageRequestType] = useState(false);
//   const [imageRequestTab, setImageRequestTab] = useState('Clothes');
//   const handleImageRequestTab = (e: any) => {
//     setImageRequestTab(e.target.textContent);
//     console.log(e.target.textContent, 'get target');
//   };

//   return (
//     <div className='flex h-max w-[530px] flex-col items-center justify-start overflow-hidden rounded-2xl bg-zinc-900'>
//       <div className='inline-flex items-start self-stretch justify-start gap-2 p-6 border-b border-white border-opacity-10'>
//         <div className='inline-flex flex-col items-start justify-start gap-1 shrink grow basis-0'>
//           <div className='w-[286px] text-[18px] font-bold leading-normal text-white'>
//             Image request
//           </div>
//         </div>
//         <div className='flex items-center gap-4'>
//           <RandomImageToggle
//             handleToggleState={() => setRandomImageState(!randomImageState)}
//             toggleState={randomImageState}
//             toggleText={'Random'}
//           />
//           <span className='h-5 border-l-[2px] border-white/10 text-xl text-white/10'></span>
//           <CloseIcon />
//         </div>
//       </div>
//       <div className='flex flex-col items-start self-stretch justify-start h-max'>
//         {randomImageState === false ? (
//           <>
//             <div className='flex h-[338px] flex-col items-start justify-start gap-5 self-stretch px-6 pb-5'>
//               <div className='flex gap-3 mt-6'>
//                 {imageFilterText.map((item, index) => {
//                   return (
//                     <div
//                       key={index}
//                       onClick={(e) => handleImageRequestTab(e)}
//                       className={`cursor-pointer rounded-xl px-4 py-2 font-bold text-[#979797] text-white ${
//                         imageRequestTab === item ? 'bg-white bg-opacity-20' : ''
//                       }`}
//                     >
//                       {item}
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className='grid grid-cols-4 gap-[10px]'>
//                 {imageType.map((items, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className='relative cursor-pointer'
//                       onClick={() => setImageRequestType(true)}
//                     >
//                       <Image
//                         src={items.image}
//                         alt=''
//                         className='object-cover rounded-xl'
//                       />
//                       <p className='absolute bottom-[6px] left-0 h-max w-full bg-black/60 p-2 text-center  text-[13px] font-semibold'>
//                         {items.title}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className='flex flex-col items-start justify-start gap-2.5 self-stretch bg-neutral-900 px-6 pt-6'>
//               <div className='inline-flex items-start justify-start gap-3 self-stretch rounded-2xl bg-[#1A1A1A] p-5'>
//                 <div className='flex items-start justify-start gap-2.5 rounded-[100px] bg-white bg-opacity-5 p-3.5'>
//                   {/* <div className='relative w-5 h-5' /> */}
//                   <ImgIcon />
//                 </div>
//                 <div className='inline-flex flex-col items-start justify-start gap-3 shrink grow basis-0'>
//                   <div className='flex flex-col items-start justify-start gap-1.5 self-stretch'>
//                     <div className='self-stretch text-[14px] font-bold leading-none text-white'>
//                       Image request
//                     </div>

//                     {imageRequestType ? (
//                       <div className='mt-3 grid grid-cols-4 gap-[10px]'>
//                         {requestedImageTypes.map((items, index) => {
//                           return (
//                             <div
//                               key={index}
//                               className='flex flex-col'
//                               onClick={() =>
//                                 setImageRequestType(!imageRequestType)
//                               }
//                             >
//                               <Image
//                                 src={items.image}
//                                 alt=''
//                                 className='object-cover rounded-xl'
//                               />
//                               <p className='h-max w-full py-[6px] text-xs font-semibold'>
//                                 {items.title}
//                               </p>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     ) : (
//                       <div className='self-stretch text-[14px] font-normal leading-none text-neutral-400'>
//                         The selected styles will be displayed here.
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className='flex flex-col items-start justify-start gap-2.5 self-stretch bg-neutral-900 px-6 pt-6'>
//               <div className='inline-flex items-start justify-start gap-3 self-stretch rounded-2xl bg-[#1A1A1A] p-5'>
//                 <div className='flex items-start justify-start gap-2.5 rounded-[100px] bg-white bg-opacity-5 p-3.5'>
//                   {/* <div className='relative w-5 h-5' /> */}
//                   <RandomImageIcon />
//                 </div>
//                 <div className='inline-flex flex-col items-start justify-start gap-3 shrink grow basis-0'>
//                   <div className='flex flex-col items-start justify-start gap-1.5 self-stretch'>
//                     <div className='self-stretch text-[14px] font-bold leading-none text-white'>
//                       Random image request
//                     </div>
//                     <div className='self-stretch text-[14px] font-normal leading-none text-neutral-400'>
//                       Hey Mika-chan, can you send me a random picture of you?
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         <div className='inline-flex items-end self-stretch justify-end gap-3 p-6 bg-neutral-900'>
//           <button
//             className='rounded-2xl border border-white border-opacity-30 px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
//             onClick={closeModal}
//           >
//             Cancel
//           </button>
//           <button
//             className='rounded-2xl bg-[#5848BC] px-5 py-[13px] text-[16px] font-bold leading-snug text-white'
//             onClick={closeModal}
//           >
//             Send request
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageRequestModal;

