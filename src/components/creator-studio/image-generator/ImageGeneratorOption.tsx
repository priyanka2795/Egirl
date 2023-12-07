//@ts-nocheck

import React, { useEffect, useRef, useState } from 'react';
import ShuffleSvg from '@/assets/svgImages/shuffle.svg';
import PlusIconSvg from '@/assets/svgImages/plus-icon.svg';
import Toggle from '@components/common/Toggler';
import AddTagModal from './AddTagModal';
import { Modal } from '@components/modal/modal';
import ImageGallery from './ImageGallery';
import CloseIcon from '@/assets/svgImages/close-icon.svg';
import Question from '@/assets/circle-question.webp';
import ImageSquare from '@/assets/image-square2.webp';
import AddStyleModal from './AddStyleModal';
import Tooltip from '@components/common/tooltip';
import Image from 'next/image';
import SelectImage from './selectImage';
import InpaintingExample from './InpaintingExample';
import InpaintingModals from './inpaintingModals';
import Image1 from '@/assets/inpaint-Image.png';
import Edit from '@/assets/pen.svg';
import People from '@/assets/body.webp';
import PoseExample from './poseExample';
import PosingModal from './posingModal';
import ArrowRight from '@/assets/chevron-right.webp';
import PoseImage from '@/assets/poseimage3.webp';
import Grid from '@/assets/dots-vertical.webp';
import UserWhite from '@/assets/circle-user-white.webp';
import SearchIcon from '@/assets/search-alt (1).webp';
import RightIcon from '@/assets/check-cs.webp';
import DeleteIcon from '@/assets/delete-icon.webp';
import {
  getImageGeneration,
  postInpaintImage,
  postPoseImage,
  postPromptImage
} from 'services/services';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { tokenRefresh } from 'redux/api/RefreshTokenApi';
import { useRouter } from 'next/router';

const EditPromptName = [
  'Mica-chan',
  'Blue Jeans',
  'Gold Chain',
  'White Sunglasses',
  'Black top'
];
const PromptTagsSearch = [
  'Green top with white',
  'Green top with white collar',
  'Green top with white sleeve',
  'Green top with white flower and big cloud',
  'Green top with white belt',
  'Green top with white lines and hearts',
  'Green top with white, red and yellow spots'
];
const PromptTagsSearchAll = [
  {
    title: 'Suggestions',
    hint: ['Green top with white', 'Green top with white collar']
  },
  {
    title: 'Tags',
    hint: [
      'Green top with white sleeve',
      'Green top with white flower and big cloud',
      'Green top with white belt'
    ]
  },
  {
    title: 'Styles',
    hint: [
      'Green top with white lines and hearts',
      'Green top with white, red and yellow spots'
    ]
  }
];

interface ImageGeneratorOption {
  InpaintingToggle: boolean;
  PosingToggle: boolean;
  MyCharacterToggle: boolean;
  EditGeneration: boolean;
  EditTooltip: boolean;
  numOfImages?: number;
  setNumOfImages?:any;
  imageDimension?: any;
  setImageDimension?:any
  guidanceScale: number[];
  stepScale: number[];
}
const ImageGeneratorOption = ({
  InpaintingToggle,
  PosingToggle,
  MyCharacterToggle,
  EditGeneration,
  EditTooltip,
  numOfImages,
  setNumOfImages,
  imageDimension,
  setImageDimension,
  guidanceScale,
  stepScale
}: ImageGeneratorOption) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [prompt, setPrompt] = useState<boolean>(false);
  const [tagState, setTagState] = useState<boolean>(false);
  const [openGenre, setOpenGenre] = React.useState<boolean>(false);
  const [openStyle, setOpenStyle] = React.useState<boolean>(false);
  const [updateImgState, setUpdateImgState] = useState<boolean>(false)
  // Inpainting Modal
  const [inpaintingExample, setInpaintingExample] = useState<boolean>(false);
  const [selectImageModal, setSelectImageModal] = useState<boolean>(false);
  const [inpaintingModal, setInpaintingModal] = useState<boolean>(false);
  const [inpaintingCreated, setInpaintingCreated] = useState<boolean>(false);
  const [editInpainting, setEditInpainting] = useState<boolean>(false);
  const [selectInPaintImg, setSelectInPaintImg] = useState<any>({media_id:"", media_url:""})
  // Posing Modal
  const [posing, setPosing] = useState<boolean>(false);
  const [poseExample, setPoseExample] = useState<boolean>(false);
  const [posingCreated, setPosingCreated] = useState<boolean>(false);
  const [editPosing, setEditPosing] = useState<boolean>(false);

  const handleOpenGenre = () => setOpenGenre(true);
  const handleCloseGenre = () => setOpenGenre(false);

  // Prompt Box
  const [promptTags, setPromptTags] = useState([] as any);
  const [editPrompt, setEditPrompt] = useState(null);
  const [editPromptMenu, setEditPromptMenu] = useState(EditPromptName);
  const [editPromptMenuIndex, setEditPromptMenuIndex] =
    useState<string>('Blue Jeans');
  const [promptTagsHint, setPromptTagsHint] = useState(PromptTagsSearchAll);
  // const [promptTagsHint, setPromptTagsHint] = useState(PromptTagsSearch);
  const [promptHint, setPromptHint] = useState<string>('');
  const [negativePrompt, setNegativePrompt] = useState<string>('');
  const [savedDrawingImage, setSavedDrawingImage] = useState();

  const DeletePromptMenu = (item: string) => {
    setEditPromptMenu(
      editPromptMenu.filter((el: string, i: number) => el !== item)
    );
    setEditPrompt(null);
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    setEditPrompt(null);
    if (e.key === 'Enter') {
      const value = e.target.value;
      if (!value.trim()) return;
      setPromptTags([...promptTags, value]);
      setPromptHint('');
    } else if (e.key === 'Backspace' && promptHint === '') {
      // Backspace key pressed and promptHint is empty, edit the last tag
      const lastTagIndex = promptTags.length - 1;
      const lastTag = promptTags[lastTagIndex];
      setEditPrompt(lastTag);
      setPromptTags(promptTags.slice(0, -1));
      setPromptHint(lastTag);
    }
  }

  const EditPromptData = (item: null) => {
    setEditPrompt((prev) => (prev === item ? null : item));
  };

  function removeTag(index: number) {
    setPromptTags(promptTags.filter((el: string, i: number) => i !== index));
  }
  // Drag And Drop Item
  // const dragItem = useRef<number | null>();
  // const dragOverItem = useRef<number | null>();
  const dragItem = useRef<any>();
  const dragOverItem = useRef<any>();

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    setEditPrompt(null);
  };
  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragOverItem.current = position;
  };
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const copyListItems = [...promptTags];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setPromptTags(copyListItems);
  };

  // searchPromptMenu
  const [searchPromptMenu, setSearchPromptMenu] = useState('');
  const [showPromptMenu, setShowPromptMenu] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchPromptMenu(searchTerm);
    const filteredItems = EditPromptName.filter((user) =>
      user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEditPromptMenu(filteredItems);
  };

  const handleChangePromptHint = (e: any) => {
    const searchPrompt = e.target.value;
    setPromptHint(searchPrompt);

    const filteredItems = PromptTagsSearchAll.filter((item) => {
      return item.hint.some((hint) =>
        hint.toLowerCase().includes(searchPrompt.toLowerCase())
      );
    });

    setPromptTagsHint(filteredItems);
    setShowPromptMenu(filteredItems.length === 0);
  };

  const HandleTypeHint = (e: React.MouseEvent<HTMLElement>) => {
    const PromptHintText = (e.target as HTMLElement).innerText;
    const found = promptTags.find((Tags: string) => Tags === PromptHintText);
    setPromptHint(PromptHintText);

    if (PromptHintText === found) {
      setPromptHint('');
      alert('this value is already in adjust');
    } else {
      setPromptTags([...promptTags, PromptHintText]);
      setShowPromptMenu(true);
      setPromptHint('');
    }
  };
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  console.log('selectInPaintImg---', selectInPaintImg,savedDrawingImage);
  const svgString = `${savedDrawingImage}`;
  // Encode the SVG string to base64
  const base64SVG = btoa(svgString);
  // Create a base64 URL
  const base64URL = `data:image/svg+xml;base64,${base64SVG}`;
  console.log(base64URL);
  //====== prompt image api for image generation ========
  const token: any = Cookies.get('accessToken');
  const refreshTokenData: any = useAppSelector(
    (state) => state.tokenRefresh?.tokenData
  );

  useEffect(() => {
    if (refreshTokenData) {
      Cookies.set('accessToken', refreshTokenData);
    }
  }, [refreshTokenData, router.pathname]);

  const handleGenerate = () => {
    if (InpaintingToggle === true) {
      //------ inPainting image api ----
      const inPaintData = {
        base_image: {
          media_id: selectInPaintImg.media_id,
          media_url: selectInPaintImg.media_url
        },
        mask_image_base64_str: savedDrawingImage ?  base64URL : "",
        prompt: promptTags.map((ele: string, index: number) => {
          return {
            prompt_id: index,
            prompt_type: ele,
            prompt_value: 'string'
          };
        }),
        negative_prompt: negativePrompt,
        sd_image_model: 'SemiRealMix',
        height: imageDimension?.height,
        width: imageDimension?.width,
        guidance_scale: guidanceScale[0].toString(),
        inference_steps: stepScale[0].toString(),
        num_of_images: numOfImages
      };
      postInpaintImage(inPaintData, token)
        .then((res: any) => {
          console.log('inPaintImage res---', res);
          setUpdateImgState(!updateImgState)
          setNegativePrompt(" ")
          setPromptTags([])
          setNumOfImages()
          setImageDimension()
          if (res?.response?.status === 401) {
            dispatch(tokenRefresh());
          }
        })
        .catch((err) => {
          console.log('inPaintImage err---', err);
        });
    } else if (PosingToggle === true) {
      //----------- pose image api ---------
      const poseData = {
        preset_pose_image: {
          media_id: 0,
          media_url: 'string'
        },
        pose_image_base64_str: 'string',
        prompt: promptTags.map((ele: string, index: number) => {
          return {
            prompt_id: index,
            prompt_type: ele,
            prompt_value: 'string'
          };
        }),
        negative_prompt: negativePrompt,
        sd_image_model: 'SemiRealMix',
        height: imageDimension?.height,
        width: imageDimension?.width,
        guidance_scale: guidanceScale[0].toString(),
        inference_steps: stepScale[0].toString(),
        num_of_images: numOfImages
      };
      postPoseImage(poseData, token)
      .then((res:any)=>{
        console.log("pose image res---", res)
        setUpdateImgState(!updateImgState)
        setNegativePrompt(" ")
        setPromptTags([])
        setNumOfImages()
        setImageDimension()
        if (res?.response?.status === 401) {
          dispatch(tokenRefresh());
        }
      })
      .catch((err)=>{
        console.log("pose image err---", err)
      })
    } else {
      //------- prompt image api ------
      const promptData = {
        prompt: promptTags.map((ele: string, index: number) => {
          return {
            prompt_id: index,
            prompt_type: ele,
            prompt_value: 'string'
          };
        }),
        negative_prompt: negativePrompt,
        sd_image_model: 'SemiRealMix',
        height: imageDimension?.height,
        width: imageDimension?.width,
        guidance_scale: guidanceScale[0].toString(),
        inference_steps: stepScale[0].toString(),
        num_of_images: numOfImages
      };
      postPromptImage(promptData, token)
        .then((res: any) => {
          console.log('prompt image res---', res);
          setUpdateImgState(!updateImgState)
          setNegativePrompt(" ")
          setPromptTags([])
          setNumOfImages()
          setImageDimension()
          if (res?.response?.status === 401) {
            dispatch(tokenRefresh());
          }
        })
        .catch((err) => {
          console.log('prompt image err---', err);
        });
    }
  };

//---------------------------------------------------

//------------ get image generation api--------------
const [allImgData, setAllImgData] = useState([])
useEffect(()=>{
  getImageGeneration(1,10,token)
.then((res:any)=>{
  console.log("get image generation res----",res)
  setAllImgData(res?.data)
  if(res?.response?.status === 401){
    dispatch(tokenRefresh())
  }
})
.catch((err)=>{
  console.log("get image generation err---",err)
})
},[updateImgState,refreshTokenData])
//---------------------------------------------------

return (
    <>
      <div className='flex flex-col rounded-[14px] bg-[#121212]'>
        <div className='flex flex-col gap-6 p-6'>
          <div className='font-bold text-[22px] leading-8 text-white'>
            Image generator
          </div>
         
          
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div className='flex gap-3'>
                <div
                  onClick={handleOpenGenre}
                  className='flex w-[300px] items-center justify-between rounded-[14px] bg-white/[0.08] px-4 py-3 cursor-pointer'
                >
                  <p className='font-normal text-[15px] leading-6 text-[#979797]'>
                    Genre
                  </p>
                  <Image src={ArrowRight} className='w-full h-full' />
                </div>

                <div
                  onClick={() => setOpenStyle(true)}
                  className='font-bold flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px] text-[16px] leading-[22px] text-white'
                >
                  Add style
                  <PlusIconSvg />
                </div>

                <div
                  className='font-bold flex cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px] text-[16px] leading-[22px] text-white'
                  onClick={() => setTagState(!tagState)}
                >
                  Add tag
                  <PlusIconSvg />
                </div>
              </div>

              <div className='group relative flex w-12 cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-white bg-opacity-10 py-3'>
                <ShuffleSvg />
                {EditTooltip ? (
                  <div className='absolute z-50 -left-16 -top-12 w-max'>
                    <Tooltip Text={'Add a random prompt'} />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div
              className='flex h-auto min-h-[124px] w-full flex-wrap content-start items-start rounded-[14px] bg-[#0000007A] px-4 py-3'
              onClick={handleBoxClick}
            >
              <div className='flex flex-wrap items-center gap-2'>
                {MyCharacterToggle && (
                  <div className='flex cursor-pointer items-center gap-1 rounded-xl bg-[#403BAC] px-[10px] py-2'>
                    <Image src={UserWhite} className='w-full h-full' />
                    <p className='text-[14px]'>Mika-chan</p>
                  </div>
                )}
                {promptTags.map((tag: null, index: number) => (
                  <div className='relative bg-transparent' key={index}>
                    <div
                      className={`flex items-center ${
                        editPrompt === tag ? 'bg-[#403BAC]' : 'bg-[#FFFFFF29]'
                      } cursor-pointer gap-2 rounded-xl px-[10px] py-2`}
                      key={index}
                      onClick={() => EditPromptData(tag)}
                      onDragStart={(e) => dragStart(e, index)}
                      onDragEnter={(e) => dragEnter(e, index)}
                      onDragEnd={drop}
                      draggable
                    >
                      <Image src={Grid} className='w-full h-full' />
                      <span className='text'>{tag}</span>
                      {/* <span className="cursor-pointer" onClick={() => removeTag(index)}>&times;</span> */}
                    </div>
                    {editPrompt === tag && (
                      <div className='absolute left-0 top-12 z-50 h-auto w-[243px] rounded-[14px] bg-[#1A1A1A]'>
                        <div className='m-4 flex items-center justify-between gap-[6px] rounded-[10px] bg-[#FFFFFF0D] px-3'>
                          <Image
                            src={SearchIcon}
                            className='object-cover w-full h-full '
                          />
                          <input
                            type='text'
                            placeholder='Search'
                            className='h-10 w-[160px] rounded-[14px] border-none bg-transparent p-0 text-white placeholder:text-[#979797] focus:border-none focus:ring-0 active:border-none'
                            value={searchPromptMenu}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                          {editPromptMenu.map((items, index) => {
                            return (
                              <div
                                key={index}
                                className={`${
                                  editPromptMenuIndex === items
                                    ? 'bg-[#FFFFFF0D]'
                                    : ''
                                } flex cursor-pointer items-center justify-between px-4 py-[10px]`}
                                onClick={() => {
                                  setEditPromptMenuIndex(items);
                                }}
                              >
                                <p>{items}</p>
                                {editPromptMenuIndex === items ? (
                                  <Image
                                    src={RightIcon}
                                    className='w-full h-full'
                                  />
                                ) : (
                                  ''
                                )}
                              </div>
                            );
                          })}
                          <div className='px-4 py-[10px]'>
                            <button
                              className='font-bold flex w-full items-center justify-center gap-[6px] rounded-[10px] bg-[#FFFFFF14] py-[7px] text-[#979797]'
                              onClick={() =>
                                DeletePromptMenu(editPromptMenuIndex)
                              }
                            >
                              <Image
                                src={DeleteIcon}
                                className='w-full h-full'
                              />{' '}
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className='relative z-10 '>
                <input
                  onKeyDown={handleKeyDown}
                  type='text'
                  className='w-[150px] border-none bg-transparent focus:border-none focus:ring-0'
                  placeholder='Type a prompt ...'
                  value={promptHint}
                  onChange={handleChangePromptHint}
                  ref={inputRef}
                />
                {/* <textarea
                  name=''
                  id=''
                  onKeyDown={handleKeyDown}
                  placeholder='Type a prompt ...'
                  value={promptHint}
                  onChange={handleChangePromptHint}
                  className='w-full h-full bg-transparent border-none resize-none focus:border-none focus:ring-0'
                ></textarea> */}
                {showPromptMenu ? (
                  ''
                ) : (
                  <>
                    {promptHint === '' ? (
                      ''
                    ) : (
                      <div className='absolute w-max  overflow-hidden rounded-[14px] bg-[#1A1A1A] shadow-md'>
                        {promptTagsHint.map((items, index) => (
                          <div key={index} className=''>
                            <div className='border-b border-[#FFFFFF14] px-3 '>
                              <h5 className='p-2 text-[13px] font-[700] text-[#979797] '>
                                {items.title}
                              </h5>
                              <div className=''>
                                {items.hint.map((hints, index) => (
                                  <p
                                    key={index}
                                    className='mb-1 cursor-pointer rounded-lg px-2 py-1.5 hover:bg-[#FFFFFF29] [&>*:last-child]:border-b-0'
                                    onClick={(e) => HandleTypeHint(e)}
                                  >
                                    {hints}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* {promptTagsHint.map((items, index) => (
                          <div
                            key={index}
                            className='cursor-pointer rounded-lg p-2 hover:bg-[#FFFFFF0D]'
                            onClick={(e) => HandleTypeHint(e)}
                          >
                            {items}
                          </div>
                        ))} */}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            {prompt && (
              <div className='mb-6 flex flex-col gap-[6px]'>
                <label className='text-[#979797]' htmlFor='negative'>
                  Negative prompt
                </label>
                <input
                  type='text'
                  id='negative'
                  placeholder='Type a negative prompt...'
                  className='h-12 rounded-[14px] border-none bg-[#FFFFFF0D] px-4 text-white placeholder:text-[#979797] focus:border-[#5848BC] focus:ring-[#5848BC] active:border-[#5848BC]'
                  name='negative'
                  onChange={(e) => setNegativePrompt(e.target.value)}
                />
              </div>
            )}
            <Toggle
              handleToggleState={() => setPrompt(!prompt)}
              toggleState={prompt}
              toggleText={`Negative Prompt`}
              infoIcon={'hidden'}
              toggleClasses={'bg-[#383838]'}
              subHeading={true}
            />
            {InpaintingToggle && (
              <div className='py-6'>
                <div className='flex items-center gap-1 pb-3'>
                  <p className='font-bold text-[15px]'>Inpainting</p>
                  <div
                    className='cursor-pointer pt-1.5'
                    onClick={() => setInpaintingExample(true)}
                  >
                    <Image src={Question} className='w-full h-full' />
                  </div>
                </div>
                {inpaintingCreated ? (
                  <div className='flex items-center'>
                    <div className='sub-banner relative h-[140px] w-[140px]'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `     ${savedDrawingImage}       `
                        }}
                        className='overflow-hidden rounded-xl'
                        
                      />
                      {/* <img
                        src={SavedDrawingImage || ''}
                        alt=''
                        className='object-cover w-full h-full'
                      /> */}
                      <div
                        className='group absolute right-3 top-3 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#0000007A]'
                        onClick={() => {
                          setInpaintingModal(true), setEditInpainting(true);
                        }}
                      >
                        <Edit />
                        <div className='absolute -left-8 -top-12 w-max'>
                          <Tooltip Text={'Edit image'} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='flex items-center justify-center rounded-[14px] bg-[#1A1A1A] p-6'>
                    <div className='flex flex-col items-center gap-3'>
                      <div className='flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FFFFFF0D]'>
                        <Image
                          src={ImageSquare}
                          className='object-cover w-full h-full'
                        />{' '}
                      </div>
                      <p className='text-[13px] text-[#979797]'>
                        Choose an image you want to inpaint on
                      </p>
                      <button
                        className='font-bold rounded-xl bg-[#FFFFFF14] px-4 py-[10px]'
                        onClick={() => setSelectImageModal(true)}
                      >
                        Select image
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {PosingToggle && (
              <div className='py-6'>
                <div className='flex items-center gap-1 pb-3'>
                  <p className='font-bold text-[15px]'>Posing</p>
                  <div
                    className='cursor-pointer pt-1.5'
                    onClick={() => setPoseExample(true)}
                  >
                    <Image src={Question} className='w-full h-full' />
                  </div>
                </div>

                {posingCreated ? (
                  <div className='flex items-center'>
                    <div className='sub-banner relative h-[140px] w-[140px] rounded-[14px]'>
                      <Image
                        src={PoseImage}
                        className='h-full w-full rounded-[14px] object-cover'
                      />
                      <div
                        className='group absolute right-3 top-3 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#0000007A]'
                        onClick={() => {
                          setPosing(true), setEditPosing(true);
                        }}
                      >
                        <Edit />
                        <div className='absolute -left-8 -top-12 w-max '>
                          <Tooltip Text={'Edit image'} />
                        </div>
                      </div>
                      <div className='absolute bottom-0 left-0 flex h-[34px] w-full items-center justify-center rounded-b-[14px] bg-[#0000007A]'>
                        <p className='text-[13px] font-semibold'>
                          Default pose
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='flex items-center justify-center rounded-[14px] bg-[#1A1A1A] p-6'>
                    <div className='flex flex-col items-center gap-3'>
                      <div className='flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FFFFFF0D]'>
                        <Image
                          src={People}
                          className='object-cover w-full h-full'
                        />
                      </div>
                      <p className='text-[13px] text-[#979797]'>
                        Pose mode helps you put your Egirl in the pose of your
                        choosing.
                      </p>
                      <button
                        className='font-bold rounded-xl bg-[#FFFFFF14] px-4 py-[10px]'
                        onClick={() => setPosing(true)}
                      >
                        Add pose
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div>
          {EditGeneration ? (
            <div className='border-t border-white/[0.08] p-6'>
              <div
                className='font-bold ml-auto w-max cursor-pointer items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[13px] text-[16px] leading-[22px] text-white'
                onClick={handleGenerate}
              >
                Generate
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <Modal
        open={openGenre}
        closeModal={handleCloseGenre}
        modalOverlayStyle='!bg-black/80 '
        modalClassName={`bg-[#121212] flex  flex-col flex-start relative rounded-[20px]`}
      >
        <div className='flex flex-col items-start rounded-[20px] bg-[#121212] '>
          <div className='flex items-start gap-2.5 self-stretch border-b border-white/[0.08] border-b-white/[0.08] px-8 pb-6 pt-8'>
            <div className='flex w-full text-lg font-bold leading-6 decoration-white'>
              Genre
            </div>
            <div className='cursor-pointer' onClick={handleCloseGenre}>
              <CloseIcon />
            </div>
          </div>

          <ImageGallery />
          <div className='flex flex-row self-stretch gap-3 px-8 pt-4 pb-8'>
            <button
              onClick={handleCloseGenre}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-white/[0.32] px-5 py-[13px]'
            >
              Cancel
            </button>
            <button
              onClick={handleCloseGenre}
              className='font-bold flex h-[48px] w-[100%] items-center justify-center rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-5 py-[13px]'
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      {openStyle && <AddStyleModal SetOpenStyle={setOpenStyle} />}
      {tagState && <AddTagModal closeDeleteModal={setTagState} />}
      {/* Inpainting Modals */}

      {inpaintingExample && (
        <InpaintingExample CloseModal={setInpaintingExample} />
      )}
      {selectImageModal && (
        <SelectImage
          CloseModal={setSelectImageModal}
          SetInpaintingModal={setInpaintingModal}
          allImgData={allImgData}
          setSelectInPaintImg = {setSelectInPaintImg}
        />
      )}
      {inpaintingModal && (
        <InpaintingModals
          CloseInpaintingModal={setInpaintingModal}
          SetInpaintingCreated={setInpaintingCreated}
          EditInpainting={editInpainting}
          SavedDrawingImage={setSavedDrawingImage}
          setSelectImageModal={setSelectImageModal}
          selectInPaintImg={selectInPaintImg}
        />
      )}

      {/* Posing Modals */}
      {poseExample && <PoseExample PoseExampleClose={setPoseExample} />}
      {posing && (
        <PosingModal
          PosingClose={setPosing}
          SetPosingCreated={setPosingCreated}
          EditPosing={editPosing}
        />
      )}
    </>
  );
};

export default ImageGeneratorOption;
