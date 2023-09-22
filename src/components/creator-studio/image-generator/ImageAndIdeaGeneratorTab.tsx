import React, { useEffect, useRef, useState } from 'react';
import Information from '../../../../public/assets/circle-information2.png'
import Dots from '../../../../public/assets/dots-horizontal.png'
import ArrowUp from '../../../../public/assets/chevron-up2.png'
import ArrowDown from '../../../../public/assets/chevron-down2.png'
import CopyIcon from '../../../../public/assets/copy.png'
import GridVertical from '../../../../public/assets/dots-vertical.png'
import Image from 'next/image';
import Image1 from '../../../../public/assets/vi-image-1.png'
import Image2 from '../../../../public/assets/vi-image-2.png'
import Image3 from '../../../../public/assets/vi-image-3.png'
import Image4 from '../../../../public/assets/vi-image-4.png'
import Image5 from '../../../../public/assets/vi-image-5.png'
import EditImageGeneration from './editImagegeneration';
import Tooltip from '@components/common/tooltip';
import AlbumDelete from '../viewImages/albumDelete';
import SquareImage from '../../../../public/assets/image-square5.png';

const images = [
  { img: Image1 },
  { img: Image2 },
  { img: Image3 },
  { img: Image4 },
  { img: Image5 },
]
const tabContent = ['Image Generation', 'Idea Generation'];

const   ImageAndIdeaGeneratorTab = () => {
  let SessionData = sessionStorage.getItem("sideBarCollapseCS");
  const [activeTab, setActiveTab] = useState('Image Generation');
  const [imageGeneration, setImageGeneration] = useState(null);
  const [imageGenerationToggle, setImageGenerationToggle] = useState(null);
  const [editImageGeneration, setEditImageGeneration] = useState(false);
  const [deleteImageGeneration, setDeleteImageGeneration] = useState(false);
  const [imageGenerationAgain, setImageGenerationAgain] = useState([1]);
  const [deleteImageGenerationIndex, setDeleteImageGenerationIndex] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  // Idea Generation
  const [ideaGenerationInput, setIdeaGenerationInput] = useState('');
  const [allIdeaGeneration, setAllIdeaGeneration] = useState<any[]>([]);
  const [ideaGeneration, setIdeaGeneration] = useState(null);
  const [generatedIdeas, setGeneratedIdeas] = useState(false);

  // ImageGeneration 
  const ImageGenerationMenu = (index: any) => {
    setImageGenerationToggle((prev) => (prev === index ? null : index));
  }
  const imageGenerationAccordion = (index: any) => {
    setImageGeneration((prev) => (prev === index ? null : index));
  }
  const GenerationAgain = () => {
    setImageGenerationAgain([...imageGenerationAgain, imageGenerationAgain.push(+1)]);
    setImageGenerationToggle(null)
  }
  const DeleteGeneration = (ind: any) => {
    setDeleteImageGeneration(false);
    setImageGenerationAgain((oldValue: any[]) => {
      return oldValue.filter((item: any, index: number, array: any) => index !== ind)
    });
    setImageGenerationToggle(null)
  }

  // Idea Generation
  const HandleChange = (e: any) => {
    const { value } = e.target;
    setIdeaGenerationInput(value);
  }
  const GenerateIdea = () => {
    if (ideaGenerationInput === '') {
      alert('please Enter Idea')
    } else {
      setAllIdeaGeneration([...allIdeaGeneration, { name: ideaGenerationInput }])
      setIdeaGenerationInput('');
      setGeneratedIdeas(true)
    }
  }
  const IdeaGenerationAccordion = (index: any) => {
    setIdeaGeneration((prev) => (prev === index ? null : index));
  }

  // drag and drop Items 
  const [promptItems, setPromptItems] = useState(['Silver hair', 'Almond-shaped eyes', 'Lean and agile', 'Scarred cheek', 'Elegantly poised', 'Broad shoulders', 'Bald-headed', 'Enigmatic gaze']);
  const [colorChange, setColorChange] = useState();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };
  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };
  const drop = (e: any) => {
    const copyListItems = [...promptItems];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setPromptItems(copyListItems);
  };
  const SubmitData = (e: any) => {
    setColorChange(e)
  }




  return (
    <div className='flex flex-col p-6 gap-6 rounded-[14px] bg-[#121212]'>
      <div className='flex pb-5 border-b border-white/[0.08]'>
        <div className='flex gap-3'>
          {tabContent.map((item,index) => {
            return(
              <div key={index} className={`flex cursor-pointer items-center justify-center px-4 py-2 rounded-[12px] text-[15px] font-bold leading-5 ${activeIndex === index ? 'bg-white/[0.16] text-white' : 'bg-transparent text-[#979797]'}`} onClick={() => {setActiveIndex(index), setActiveTab(item)}}>{item}</div>
            );
          })}
        </div>
      </div>
      <div>
      {activeTab === 'Image Generation' ?
          // <div className="py-[80px] flex flex-col gap-4 justify-center w-full items-center">
          //   <div className="flex bg-white/[0.05] rounded-full w-max p-5">
          //     <Image src={SquareImage} alt={''} />
          //   </div>
          //   <p className="text-[14px] font-normal leading-[18px] text-[#979797]">Your image generations will be shown here</p>
          // </div>
          <div className='flex flex-col gap-3'>
            {imageGenerationAgain.map((items, index) => (
              <div className='rounded-[20px] border border-[#FFFFFF29]' key={index}>
                <div className='flex items-center justify-between p-6 cursor-pointer' >
                  <div className='w-full' onClick={() => imageGenerationAccordion(index)}>Anime, Photoreal, Artistic, Fantasy, Blue Jeans</div>
                  <div className='flex items-center gap-1 '>
                    <div className='relative'>
                      <button onClick={() => ImageGenerationMenu(index)}><Image src={Dots} alt={''} /></button>
                      {imageGenerationToggle === index &&
                        <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[218px] absolute right-0 top-8 z-50' >
                          <button className='flex items-center gap-2' onClick={() => { setEditImageGeneration(true), setImageGenerationToggle(null) }}>
                            <Image src={Pencil} className='w-[18px] h-[18px]' alt='' />
                            <p>Edit</p>
                          </button>
                          <button className='flex items-center gap-2' onClick={() => GenerationAgain()} >
                            <Image src={Refresh} className='w-[18px] h-[18px]' alt='' />
                            <p>Use again</p>
                          </button>
                          <button className='flex items-center gap-2' onClick={() => { setDeleteImageGenerationIndex(index), setDeleteImageGeneration(true) }}>
                            <Image src={Delete} className='w-[18px] h-[18px]' alt={''} />
                            <p>Delete</p>
                          </button>
                        </div>
                      }

                    </div>
                    <div onClick={() => imageGenerationAccordion(index)}>
                      {imageGeneration === index ? <Image src={ArrowUp} />
                        : <Image src={ArrowDown} />
                      }
                    </div>
                  </div>
                </div>
                {imageGeneration === index &&
                  <div className='border-t border-[#FFFFFF29] p-6'>
                    <div className='flex flex-wrap gap-2'>
                      {images.map((items) => (
                        <div className='rounded-2xl overflow-hidden w-[200px] h-[200px] '>
                          <Image src={items.img} />
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
          : activeTab === 'Idea Generation' ?
            <div className='flex flex-col gap-4 mt-6'>
              <div className='rounded-[14px] bg-[#FFFFFF0D] p-5'>
                <label htmlFor="prompt" className='text-[#FFFFFFCC] text-[13px] font-semibold mb-[6px]'>Type a prompt concept</label>
                <div className='flex items-center gap-4'>
                  <textarea id='prompt' placeholder='Start typing your idea' className='bg-[#FFFFFF0D] rounded-[14px] w-full h-[48px] border-none active:border-none focus:border-[#5848BC] focus:ring-0 resize-none text-white placeholder:text-[#979797] overflow-visible pt-[13px] ' value={ideaGenerationInput} name='prompt' onChange={(e) => HandleChange(e)}></textarea>
                  <button className='w-max rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-base font-bold flex-shrink-0' onClick={() => GenerateIdea()}>Generate Ideas</button>
                </div>
                <div className='flex items-center gap-2 mt-3'>
                  <Image src={Information} />
                  <p className='text-[#979797] text-[13px]'>Idea generation helps you come up with prompt ideas</p>
                </div>
              </div>
              {generatedIdeas &&
                <h5 className='text-[22px] font-bold'>Generated ideas</h5>
              }
              {allIdeaGeneration.map((item, index) => (
                <>
                  <div className='rounded-[20px] border border-[#FFFFFF29]'>
                    <div className='relative flex items-center justify-between gap-2 p-6 cursor-pointer group ' >
                      <div className={` break-all text-ellipsis truncate ${SessionData ? 'w-[761px]' : 'w-[570px]'}`} onClick={(e) => { IdeaGenerationAccordion(index) }}>{item.name}</div>
                      <div className='flex items-center gap-1 '>
                        <div className='relative'>
                          <button ><Image src={Dots} /></button>
                        </div>
                        <div onClick={() => IdeaGenerationAccordion(index)}>
                          {ideaGeneration === index ? <Image src={ArrowUp} />
                            : <Image src={ArrowDown} />
                          }
                        </div>
                      </div>
                      <div className='absolute bottom-  [85px] left-[27%] z-50 max-w-[280px]  text-center text-[12px] break-words'>
                        <Tooltip Text={item.name} />
                      </div>
                    </div>
                    {ideaGeneration === index &&
                      <div className='border-t border-[#FFFFFF29] p-6 relative pb-16' >
                        <div className='flex flex-wrap gap-2 '>
                          {promptItems.map((item, index) => (
                            <>
                              <div className={`${colorChange == item ? 'bg-[#5848BC]' : 'bg-[#FFFFFF14] '} px-[10px] py-[7px] rounded-[10px] flex gap-2 items-center cursor-pointer`}
                                onClick={() => SubmitData(item)}
                                onDragStart={(e) => dragStart(e, index)}
                                onDragEnter={(e) => dragEnter(e, index)}
                                onDragEnd={drop}
                                key={index}
                                draggable>
                                <div className='flex items-center gap-1' >
                                  <Image src={GridVertical} className='cursor-crosshair' />
                                  <p> {item}</p>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                        <div className='bg-[#FFFFFF14] px-4 py-[10px] rounded-xl flex gap-2 items-center absolute right-5 bottom-3 cursor-pointer'>
                          <Image src={CopyIcon} />
                          <p className='font-bold'>Copy prompt</p>
                        </div>
                      </div>
                    }

                  </div>
                </>

              ))}

            </div>
            : ''
        }
      </div>
      
        

      {editImageGeneration && <EditImageGeneration ImageGenerationClose={setEditImageGeneration} />
      }
      {
        deleteImageGeneration &&
        <AlbumDelete DeleteModal={setDeleteImageGeneration} Heading={'Delete generation'} Content={'Are you sure you want to delete the image generation?'} component={'ImageAndIdeaGeneratorTab'} deleteImageGenerationIndex={deleteImageGenerationIndex} DeleteGeneration={DeleteGeneration} />
      }
    </div >
  );
};

export default ImageAndIdeaGeneratorTab;



{/* <div className='bg-[#121212] rounded-[14px] pb-10 px-6'>
      <div className="border-b-white/[0.08]">
        <DefaultTab
          activeListTab={activeTab}
          setActiveTab={setActiveTab}
          tabContentArray={tabContent}
        /> */}
        {/* <div className="py-[80px] flex flex-col gap-4 justify-center w-full items-center">
          <div className="bg-white/[0.05] rounded-full w-max p-5">
            <SquareImage />
          </div>
          <p className="text-sm text-[#979797]">Your image generations will be shown here</p>
        </div> */}
    //     {activeTab === 'Image Generation' ?
    //       <div className='flex flex-col gap-3 mt-6'>
    //         {imageGenerationAgain.map((items, index) => (
    //           <div className='rounded-[20px] border border-[#FFFFFF29]' key={index}>
    //             <div className='flex items-center justify-between p-6 cursor-pointer' >
    //               <div className='w-full' onClick={() => imageGenerationAccordion(index)}>Anime, Photoreal, Artistic, Fantasy, Blue Jeans</div>
    //               <div className='flex items-center gap-1 '>
    //                 <div className='relative'>
    //                   <button onClick={() => ImageGenerationMenu(index)}><Image src={Dots} /></button>
    //                   {imageGenerationToggle === index &&
    //                     <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[218px] absolute right-0 top-8 z-50' >
    //                       <button className='flex items-center gap-2' onClick={() => { setEditImageGeneration(true), setImageGenerationToggle(null) }}>
    //                         <Image src={Pencil} className='w-[18px] h-[18px]' alt='' />
    //                         <p>Edit</p>
    //                       </button>
    //                       <button className='flex items-center gap-2' onClick={() => GenerationAgain()} >
    //                         <Image src={Refresh} className='w-[18px] h-[18px]' alt='' />
    //                         <p>Use again</p>
    //                       </button>
    //                       <button className='flex items-center gap-2' onClick={() => { setDeleteImageGenerationIndex(index), setDeleteImageGeneration(true) }}>
    //                         <Image src={Delete} className='w-[18px] h-[18px]' alt={''} />
    //                         <p>Delete</p>
    //                       </button>
    //                     </div>
    //                   }

    //                 </div>
    //                 <div onClick={() => imageGenerationAccordion(index)}>
    //                   {imageGeneration === index ? <Image src={ArrowUp} />
    //                     : <Image src={ArrowDown} />
    //                   }
    //                 </div>
    //               </div>
    //             </div>
    //             {imageGeneration === index &&
    //               <div className='border-t border-[#FFFFFF29] p-6'>
    //                 <div className='flex flex-wrap gap-2'>
    //                   {images.map((items) => (
    //                     <div className='rounded-2xl overflow-hidden w-[200px] h-[200px] '>
    //                       <Image src={items.img} />
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             }
    //           </div>
    //         ))}
    //       </div>
    //       : activeTab === 'Idea Generation' ?
    //         <div className='flex flex-col gap-4 mt-6'>
    //           <div className='rounded-[14px] bg-[#FFFFFF0D] p-5'>
    //             <label htmlFor="prompt" className='text-[#FFFFFFCC] text-[13px] font-semibold mb-[6px]'>Type a prompt concept</label>
    //             <div className='flex items-center gap-4'>
    //               <textarea id='prompt' placeholder='Start typing your idea' className='bg-[#FFFFFF0D] rounded-[14px] w-full h-[48px] border-none active:border-none focus:border-[#5848BC] focus:ring-0 resize-none text-white placeholder:text-[#979797] overflow-visible pt-[13px] ' value={ideaGenerationInput} name='prompt' onChange={(e) => HandleChange(e)}></textarea>
    //               <button className='w-max rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-base font-bold flex-shrink-0' onClick={() => GenerateIdea()}>Generate Ideas</button>
    //             </div>
    //             <div className='flex items-center gap-2 mt-3'>
    //               <Image src={Information} />
    //               <p className='text-[#979797] text-[13px]'>Idea generation helps you come up with prompt ideas</p>
    //             </div>
    //           </div>
    //           {generatedIdeas &&
    //             <h5 className='text-[22px] font-bold'>Generated ideas</h5>
    //           }
    //           {allIdeaGeneration.map((item, index) => (
    //             <>
    //               <div className='rounded-[20px] border border-[#FFFFFF29]'>
    //                 <div className='relative flex items-center justify-between gap-2 p-6 cursor-pointer group ' >
    //                   <div className={` break-all text-ellipsis truncate ${SessionData ? 'w-[761px]' : 'w-[570px]'}`} onClick={(e) => { IdeaGenerationAccordion(index) }}>{item.name}</div>
    //                   <div className='flex items-center gap-1 '>
    //                     <div className='relative'>
    //                       <button ><Image src={Dots} /></button>
    //                     </div>
    //                     <div onClick={() => IdeaGenerationAccordion(index)}>
    //                       {ideaGeneration === index ? <Image src={ArrowUp} />
    //                         : <Image src={ArrowDown} />
    //                       }
    //                     </div>
    //                   </div>
    //                   <div className='absolute bottom-  [85px] left-[27%] z-50 max-w-[280px]  text-center text-[12px] break-words'>
    //                     <Tooltip Text={item.name} />
    //                   </div>
    //                 </div>
    //                 {ideaGeneration === index &&
    //                   <div className='border-t border-[#FFFFFF29] p-6 relative pb-16' >
    //                     <div className='flex flex-wrap gap-2 '>
    //                       {promptItems.map((item, index) => (
    //                         <>
    //                           <div className={`${colorChange == item ? 'bg-[#5848BC]' : 'bg-[#FFFFFF14] '} px-[10px] py-[7px] rounded-[10px] flex gap-2 items-center cursor-pointer`}
    //                             onClick={() => SubmitData(item)}
    //                             onDragStart={(e) => dragStart(e, index)}
    //                             onDragEnter={(e) => dragEnter(e, index)}
    //                             onDragEnd={drop}
    //                             key={index}
    //                             draggable>
    //                             <div className='flex items-center gap-1' >
    //                               <Image src={GridVertical} className='cursor-crosshair' />
    //                               <p> {item}</p>
    //                             </div>
    //                           </div>
    //                         </>
    //                       ))}
    //                     </div>
    //                     <div className='bg-[#FFFFFF14] px-4 py-[10px] rounded-xl flex gap-2 items-center absolute right-5 bottom-3 cursor-pointer'>
    //                       <Image src={CopyIcon} />
    //                       <p className='font-bold'>Copy prompt</p>
    //                     </div>
    //                   </div>
    //                 }

    //               </div>
    //             </>

    //           ))}

    //         </div>
    //         : ''
    //     }
    //   </div>




    //   {editImageGeneration && <EditImageGeneration ImageGenerationClose={setEditImageGeneration} />
    //   }
    //   {
    //     deleteImageGeneration &&
    //     <AlbumDelete DeleteModal={setDeleteImageGeneration} Heading={'Delete generation'} Content={'Are you sure you want to delete the image generation?'} component={'ImageAndIdeaGeneratorTab'} deleteImageGenerationIndex={deleteImageGenerationIndex} DeleteGeneration={DeleteGeneration} />
    //   }
    // </div >
