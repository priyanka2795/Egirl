import React, { useRef, useState } from 'react';
import ShuffleSvg from '../../../../public/assets/svgImages/shuffle.svg';
import PlusIconSvg from '../../../../public/assets/svgImages/plus-icon.svg';
import Toggle from '@components/common/Toggler';
import AddTagModal from './AddTagModal';
import { Modal } from '@components/modal/modal';
import ImageGallery from './ImageGallery';
import CloseIcon from '../../../../public/assets/svgImages/close-icon.svg';
import Question from '../../../../public/assets/circle-question.png';
import ImageSquare from '../../../../public/assets/image-square2.png';
import AddStyleModal from './AddStyleModal';
import Tooltip from '@components/common/tooltip';
import Image from 'next/image';
import SelectImage from './selectImage';
import InpaintingExample from './InpaintingExample';
import InpaintingModals from './inpaintingModals';
import Image1 from '../../../../public/assets/inpaint-Image.png';
import Edit from '../../../../public/assets/pen.svg';
import People from '../../../../public/assets/body.png';
import PoseExample from './poseExample';
import PosingModal from './posingModal';
import ArrowRight from '../../../../public/assets/chevron-right.png';
import PoseImage from '../../../../public/assets/poseimage3.png';
import Grid from '../../../../public/assets/dots-vertical.png';
import UserWhite from '../../../../public/assets/circle-user-white.png';
import SearchIcon from '../../../../public/assets/search-alt (1).png';
import RightIcon from '../../../../public/assets/check-cs.png';
import DeleteIcon from '../../../../public/assets/delete-icon.png';

const EditPromptName = ['Mica-chan', 'Blue Jeans', 'Gold Chain', 'White Sunglasses', 'Black top'];
const PromptTagsSearch = ['Green top with white', 'Green top with white collar', 'Green top with white sleeve', 'Green top with white flower and big cloud', 'Green top with white belt', 'Green top with white lines and hearts', 'Green top with white, red and yellow spots'];

interface ImageGeneratorOption {
  InpaintingToggle: any;
  PosingToggle: any;
  MyCharacterToggle: any;
  EditGeneration: any;
  EditTooltip:any
}
const ImageGeneratorOption = ({ InpaintingToggle, PosingToggle, MyCharacterToggle, EditGeneration,EditTooltip}: ImageGeneratorOption) => {
  const [prompt, setPrompt] = useState(false);
  const [tagState, setTagState] = useState(false);
  const [openGenre, setOpenGenre] = React.useState(false);
  const [openStyle, setOpenStyle] = React.useState(false);
  // Inpainting Modal
  const [inpaintingExample, setInpaintingExample] = useState(false)
  const [selectImageModal, setSelectImageModal] = useState(false)
  const [inpaintingModal, setInpaintingModal] = useState(false);
  const [inpaintingCreated, setInpaintingCreated] = useState(false)
  const [editInpainting, setEditInpainting] = useState(false)
  // Posing Modal
  const [posing, setPosing] = useState(false)
  const [poseExample, setPoseExample] = useState(false)
  const [posingCreated, setPosingCreated] = useState(false)
  const [editPosing, setEditPosing] = useState(false)

  const handleOpenGenre = () => setOpenGenre(true);
  const handleCloseGenre = () => setOpenGenre(false);

  // Prompt Box
  const [promptTags, setPromptTags] = useState([] as any)
  const [editPrompt, setEditPrompt] = useState(null)
  const [editPromptMenu, setEditPromptMenu] = useState(EditPromptName)
  const [editPromptMenuIndex, setEditPromptMenuIndex] = useState('Blue Jeans');
  const [promptTagsHint, setPromptTagsHint] = useState(PromptTagsSearch);
  const [promptHint, setPromptHint] = useState('');


  const DeletePromptMenu = (item: any) => {
    setEditPromptMenu(editPromptMenu.filter((el: any, i: any) => el !== item))
  }

  function handleKeyDown(e: any) {
    setEditPrompt(null);
    const found = promptTags.find((Tags: any) => Tags == promptHint);
    if (promptHint === found) {
      if (e.key === 'Enter') {
        setPromptHint('');
        alert('this value is already in adjust');
      }
    } else {
      if (e.key === 'Enter') {
        setPromptHint('')
      }
      if (e.key !== 'Enter') return
      const value = e.target.value
      if (!value.trim()) return
      setPromptTags([...promptTags, value])
      e.target.value = ''
    }

  }

  const EditPromptData = (item: any) => {
    setEditPrompt((prev) => (prev === item ? null : item));
  }

  function removeTag(index: any) {
    setPromptTags(promptTags.filter((el: any, i: any) => i !== index))
  }
  // Drag And Drop Item 
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
    setEditPrompt(null)
  };
  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };
  const drop = (e: any) => {
    const copyListItems = [...promptTags];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setPromptTags(copyListItems);
  };

  // searchPromptMenu
  const [searchPromptMenu, setSearchPromptMenu] = useState('')
  const handleInputChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearchPromptMenu(searchTerm);
    const filteredItems = EditPromptName.filter((user) =>
      user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEditPromptMenu(filteredItems);
  }
  const handleChangePromptHint = (e: any) => {
    const searchPrompt = e.target.value;
    setPromptHint(searchPrompt);
    const filteredItems = PromptTagsSearch.filter((Prompt) =>
      Prompt.toLowerCase().includes(searchPrompt.toLowerCase())
    );
    setPromptTagsHint(filteredItems);
  }

  return (
    <>
      <div className=' p-4'>
        <div className='flex justify-between gap-4 pb-7 '>
          <div className='flex gap-4'>
            <div
              onClick={handleOpenGenre}
              className='flex justify-between h-max w-[300px] items-center gap-2.5 rounded-[14px] bg-white bg-opacity-5 px-4 py-[13px]'
            >
              <p className='text-[15px] font-normal leading-normal text-neutral-400'>Genre</p>
              <Image src={ArrowRight} className='w-full h-full' />
            </div>

            <div
              onClick={() => setOpenStyle(true)}
              className='flex h-max w-[142px] cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 text-base font-bold text-white'>
              Add style <PlusIconSvg />
            </div>

            <div
              className='flex h-max w-[130px] cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 px-5 py-3 text-base font-bold text-white'
              onClick={() => setTagState(!tagState)}
            >
              Add tag <PlusIconSvg />
            </div>
          </div>

          <div className='flex w-12 cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 py-3 relative group'>
            <ShuffleSvg />
            {EditTooltip ?
              <div className='absolute -top-12 w-max -left-16 z-50'>
                <Tooltip Text={'Add a random prompt'} />
              </div> : ''}
          </div>
        </div>
        <div className="bg-[#0000007A] mb-6 py-3 px-4 h-[124px] rounded-[14px] w-full flex items-start flex-wrap content-start">
          <div className='flex items-center flex-wrap gap-2'>
            {MyCharacterToggle &&
              <div className='bg-[#403BAC] flex items-center gap-1 rounded-xl px-[10px] py-2 cursor-pointer'>
                <Image src={UserWhite} className='w-full h-full' />
                <p className='text-[14px]'>Mika-chan</p>
              </div>
            }
            {promptTags.map((tag: any, index: any) => (
              <div className='relative bg-transparent'>
                <div className={`flex items-center ${editPrompt === tag ? 'bg-[#403BAC]' : 'bg-[#FFFFFF29]'} gap-2 rounded-xl px-[10px] py-2 cursor-pointer`}
                  key={index}
                  onClick={() => EditPromptData(tag)}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={drop}
                  draggable>
                  <Image src={Grid} className='w-full h-full' />
                  <span className="text">{tag}</span>
                  {/* <span className="cursor-pointer" onClick={() => removeTag(index)}>&times;</span> */}
                </div>
                {editPrompt === tag &&
                  <div className='bg-[#1A1A1A] w-[243px] h-auto rounded-[14px] absolute top-12 left-0 z-50'>
                    <div className='bg-[#FFFFFF0D] gap-[6px] m-4 px-3 rounded-[10px] flex items-center justify-between'>
                      <Image src={SearchIcon} className='w-full h-full object-cover ' />
                      <input type="text" placeholder='Search' className='bg-transparent rounded-[14px] h-10 p-0 border-none active:border-none focus:border-none focus:ring-0 text-white placeholder:text-[#979797] w-[160px]' value={searchPromptMenu}
                        onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                      {editPromptMenu.map((items, index) => (
                        <div className={`${editPromptMenuIndex === items ? 'bg-[#FFFFFF0D]' : ''} px-4 py-[10px] flex justify-between items-center cursor-pointer`} onClick={() => { setEditPromptMenuIndex(items) }}>
                          <p>{items}</p>
                          {editPromptMenuIndex === items ? <Image src={RightIcon} className='w-full h-full' /> : ''}
                        </div>
                      ))}
                      <div className='py-[10px] px-4'>
                        <button className='bg-[#FFFFFF14] w-full rounded-[10px] py-[7px] flex items-center justify-center font-bold text-[#979797] gap-[6px]' onClick={() => DeletePromptMenu(editPromptMenuIndex)}>
                          <Image src={DeleteIcon} className='w-full h-full' /> Delete</button>
                      </div>
                    </div>
                  </div>}
              </div>
            ))}
          </div>
          <div className='relative'>
            <input onKeyDown={handleKeyDown} type="text" className="w-[150px] bg-transparent border-none focus:border-none focus:ring-0" placeholder='Type a prompt ...' value={promptHint} onChange={handleChangePromptHint} />
            <div className='bg-[#1A1A1A] rounded-[14px] shadow-md'>
              {promptHint === '' ? '' :
                <>{promptTagsHint.map((items) => (
                  <p className='px-4 py-[10px]'>{items}</p>
                ))}
                </>}
            </div>
          </div>
        </div>

        {prompt &&
          <div className='flex flex-col gap-[6px] mb-6'>
            <label className='text-[#979797]' htmlFor="negative">Negative prompt</label>
            <input type="text" id='negative' placeholder='Type a negative prompt...' className='bg-[#FFFFFF0D] rounded-[14px] h-12 px-4 border-none active:border-[#5848BC] focus:border-[#5848BC] focus:ring-[#5848BC] text-white placeholder:text-[#979797]' name='negative' />
          </div>
        }
        <Toggle
          handleToggleState={() => setPrompt(!prompt)}
          toggleState={prompt}
          toggleText={`Negative Prompt`}
          infoIcon={'hidden'}
          toggleClasses={'bg-[#383838]'}
          subHeading={true}
        />
        {InpaintingToggle &&
          <div className='py-6'>
            <div className='flex gap-1 items-center pb-3'>
              <p className='text-[15px] font-bold'>Inpainting</p>
              <div className='cursor-pointer pt-1.5' onClick={() => setInpaintingExample(true)}><Image src={Question} className='w-full h-full' /></div>
            </div>
            {inpaintingCreated ?
              <div className='flex items-center'>
                <div className='w-[140px] h-[140px] sub-banner relative'>
                  <Image src={Image1} className='w-full h-full object-cover rounded-[14px]' />
                  <div className='absolute bg-[#0000007A] cursor-pointer flex items-center justify-center w-[30px] h-[30px] rounded-full top-3 right-3 group' onClick={() => { setInpaintingModal(true), setEditInpainting(true) }}>
                    <Edit />
                    <div className='absolute -top-12 -left-8 w-max'>
                      <Tooltip Text={'Edit image'} />
                    </div>
                  </div>
                </div>
              </div>
              : <div className='flex justify-center items-center bg-[#1A1A1A] rounded-[14px] p-6'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='w-[56px] h-[56px] bg-[#FFFFFF0D] flex items-center justify-center rounded-full'>
                    <Image src={ImageSquare} className='w-full h-full object-cover' />                    </div>
                  <p className='text-[#979797] text-[13px]'>Choose an image you want to inpaint on</p>
                  <button className='bg-[#FFFFFF14] rounded-xl px-4 py-[10px] font-bold' onClick={() => setSelectImageModal(true)}>Select image</button>
                </div>
              </div>
            }
          </div>
        }

        {PosingToggle &&
          <div className='py-6'>
            <div className='flex gap-1 items-center pb-3'>
              <p className='text-[15px] font-bold'>Posing</p>
              <div className='cursor-pointer pt-1.5' onClick={() => setPoseExample(true)}><Image src={Question} className='w-full h-full' /></div>
            </div>

            {posingCreated ? <div className='flex items-center'>
              <div className='w-[140px] h-[140px] sub-banner rounded-[14px] relative'>
                <Image src={PoseImage} className='w-full h-full object-cover rounded-[14px]' />
                <div className='absolute bg-[#0000007A] cursor-pointer flex items-center justify-center w-[30px] h-[30px] rounded-full top-3 right-3 group' onClick={() => { setPosing(true), setEditPosing(true) }}>
                  <Edit />
                  <div className='absolute -top-12 -left-8 w-max '>
                    <Tooltip Text={'Edit image'} />
                  </div>
                </div>
                <div className='h-[34px] bg-[#0000007A] absolute bottom-0 left-0 w-full flex justify-center items-center rounded-b-[14px]'>
                  <p className='font-semibold text-[13px]'>Default pose</p>
                </div>
              </div>
            </div> :
              <div className='flex justify-center items-center bg-[#1A1A1A] rounded-[14px] p-6'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='w-[56px] h-[56px] bg-[#FFFFFF0D] flex items-center justify-center rounded-full'>
                    <Image src={People} className='w-full h-full object-cover' /></div>
                  <p className='text-[#979797] text-[13px]'>Pose mode helps you put your Egirl in the pose of your choosing.</p>
                  <button className='bg-[#FFFFFF14] rounded-xl px-4 py-[10px] font-bold' onClick={() => setPosing(true)}>Add pose</button>
                </div>
              </div>
            }
          </div>
        }

      </div>
      {EditGeneration ?
        <div className='p-4 border-t border-white/[0.08]'>
          <div className='ml-auto w-max rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-base font-bold'>
            Generate
          </div>
        </div> : ''}

      {tagState && <AddTagModal closeDeleteModal={setTagState} />}
      <Modal
        open={openGenre}
        closeModal={handleCloseGenre}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex  flex-col flex-start relative rounded-[20px]`}
      >
        <div className='flex flex-col items-start rounded-[20px] bg-[#121212] '>
          <div className='flex items-start gap-2.5 self-stretch border-b-white/[0.08] px-8 border-white/[0.08] border-b pb-6 pt-8'>
            <div className='flex w-full text-lg font-bold leading-6 decoration-white'>
              Genre
            </div>
            <div onClick={handleCloseGenre}>
              <CloseIcon />
            </div>
          </div>

          <ImageGallery />
          <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
            <button
              onClick={handleCloseGenre}
              className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px] font-bold'
            >
              Cancel
            </button>
            <button
              onClick={handleCloseGenre}
              className='flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px] font-bold'
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
      {openStyle && <AddStyleModal SetOpenStyle={setOpenStyle} />}

      {/* Inpainting Modals */}

      {inpaintingExample &&
        <InpaintingExample CloseModal={setInpaintingExample} />
      }
      {selectImageModal &&
        <SelectImage CloseModal={setSelectImageModal} SetInpaintingModal={setInpaintingModal} />
      }
      {inpaintingModal &&
        <InpaintingModals CloseInpaintingModal={setInpaintingModal} SetInpaintingCreated={setInpaintingCreated} EditInpainting={editInpainting} />}

      {/* Posing Modals */}
      {poseExample && <PoseExample PoseExampleClose={setPoseExample} />}
      {posing && <PosingModal PosingClose={setPosing} SetPosingCreated={setPosingCreated} EditPosing={editPosing} />}

    </>
  );
};

export default ImageGeneratorOption;
