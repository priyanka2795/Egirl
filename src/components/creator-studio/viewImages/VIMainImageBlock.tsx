import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../../public/assets/vi-image-1.png';
import image2 from '../../../../public/assets/vi-image-2.png';
import image3 from '../../../../public/assets/vi-image-3.png';
import image4 from '../../../../public/assets/vi-image-4.png';
import image5 from '../../../../public/assets/vi-image-5.png';
import image6 from '../../../../public/assets/vi-image-6.png';
import image7 from '../../../../public/assets/vi-image-7.png';
import threeDots from '../../../../public/assets/dots-horizontal3.png';
import Image from 'next/image';
import Delete from '../../../../public/assets/delete-icon.png';
import Pencil from '../../../../public/assets/pencil.png';
import Information from '../../../../public/assets/circle-information.png';
import AlbumDelete from './albumDelete';
import EditAlbum from './editAlbum';
import AlbumDetailsModal from './albumDetailsModal';
import ViewImagesDropDown from './ViewImagesDropDown';
import MoveAlbumModal from './moveAlbumModal';
import EditImageGeneration from '../image-generator/editImagegeneration';
import { Modal } from '@components/modal/modal';
import girlPic from '../../../../public/assets/girl.png';
import Cross from '../../../../public/assets/svgImages/close-icon.svg';
import Info from '../svg/info.svg';
import Grid from '../../../../public/assets/dots-vertical.png';
import Copy from '../svg/Copy.svg';
import ImageInfoModal from './ImageInfoModal';

const images = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
  {
    image: image5
  },
  {
    image: image6
  },
  {
    image: image7
  },
  {
    image: image6
  }
];

const PromptTags = [
  'Silver hair',
  'Almond-shaped eyes',
  'Lean and agile',
  'Scarred cheek',
  'Elegantly poised',
  'Broad shoulders',
  'Bald-headed',
  'Enigmatic gaze'
];

interface VIMainImageBlock {
  ToggleMenu: boolean;
  SetAlbumImages: React.Dispatch<React.SetStateAction<boolean>>;
  AlbumData: any;
}

const VIMainImageBlock = ({
  ToggleMenu,
  SetAlbumImages,
  AlbumData,
}: VIMainImageBlock) => {
  const [allImages, setAllImages] = useState(images);
  const [showDropDown, setShowDropDown] = useState<number | null>(null);
  const [allImage, setAllImage] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editAlbum, setEditAlbum] = useState<boolean>(false);
  const [albumDetails, setAlbumDetails] = useState<boolean>(false);
  const [deleteImageModal, setDeleteImageModal] = useState<boolean>(false);
  const [moveAlbumModal, setMoveAlbumModal] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [imageInfoPage, setImageInfoPage] = useState<boolean>(false);
  const [showMorePrompt, setShowMorePrompt] = useState(false);
  const [selectPrompt, setSelectPrompt] = useState<string[]>([]);
  const tabContent = ['Prompt', 'Negative prompt'];
  const [exploreSelectedTab, setExploreSelected] = useState<string>('Prompt');

  const handleExploreSelected = (e: React.MouseEvent<HTMLElement>) => {
    setExploreSelected((e.target as HTMLElement).innerText);
  };

  const AlbumImageToggle = (index: number) => {
    setShowDropDown((prev) => (prev === index ? null : index));
  };
  const AllImageToggle = (index: number) => {
    setAllImage((prev) => (prev === index ? null : index));
  };
  const DeleteImage = (e: React.MouseEvent<HTMLElement>) => {
    const Data = (e.target as HTMLElement).innerText;
    if (Data === 'Delete') {
      setDeleteImageModal(true);
      setAllImage(null);
    } else if (Data === 'Move to album') {
      setMoveAlbumModal(true);
      setAllImage(null);
    } else {
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setAllImage(null);
      setShowDropDown(null);
    }
  };

  const SelectPrompts =(name:string)=>{
    if (selectPrompt.length > 2) {
      setSelectPrompt(selectPrompt.filter((item) => item !== name));
    } else {
      if (selectPrompt.includes(name)) {
        setSelectPrompt(selectPrompt.filter((item) => item !== name));
      } else {
        setSelectPrompt([...selectPrompt, name]);
      }
    }
  }

  // SEARCH---------------

  return (
    <>
      {ToggleMenu ? (
        <>
          <div className='grid grid-cols-3 gap-3' ref={dropdownRef}>
            {AlbumData.map((item: any) => (
              <div
                key={item.id}
                className='relative w-full h-full sub-banner group'
              >
                <Image
                  className='object-cover w-full '
                  src={item.image}
                  alt={''}
                />
                <div className=' absolute bottom-0 flex h-[150px] w-full bg-gradient-to-t from-[#000000CC] to-[#00000000] px-5 pb-3 font-semibold'>
                  <div className='flex items-end justify-between w-full '>
                    <p
                      className='cursor-pointer '
                      onClick={() => SetAlbumImages(true)}
                    >
                      {item.albumName}
                    </p>
                    <p
                      className='cursor-pointer '
                      onClick={() => SetAlbumImages(true)}
                    >
                      {item.albumImageCount}
                    </p>
                  </div>
                </div>
                <div
                  className='invisible absolute right-[7px] top-[7px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black/[0.48] group-hover:visible group-hover:opacity-100'
                  onClick={() => {
                    AlbumImageToggle(item.id);
                  }}
                >
                  <Image className='' src={threeDots} alt={''} />
                </div>
                {showDropDown === item.id && (
                  <div className='absolute right-2 top-10 z-50 flex w-[218px] flex-col gap-3 rounded-[14px] bg-[#1A1A1A] p-4'>
                    <button
                      className='flex items-center gap-2'
                      onClick={() => {
                        setEditAlbum(true), setShowDropDown(null);
                      }}
                    >
                      <Image
                        src={Pencil}
                        className='h-[18px] w-[18px]'
                        alt=''
                      />
                      <p>Edit</p>
                    </button>
                    <button
                      className='flex items-center gap-2'
                      onClick={() => {
                        setAlbumDetails(true), setShowDropDown(null);
                      }}
                    >
                      <Image
                        src={Information}
                        className='h-[18px] w-[18px]'
                        alt=''
                      />
                      <p>Details</p>
                    </button>
                    <button
                      className='flex items-center gap-2'
                      onClick={() => {
                        setDeleteModal(true), setShowDropDown(null);
                      }}
                    >
                      <Image
                        src={Delete}
                        className='h-[18px] w-[18px]'
                        alt={''}
                      />
                      <p>Delete</p>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='grid grid-cols-3 gap-3' ref={dropdownRef}>
          {allImages.map((item, index: number) => (
            <div
              className='sub-banner group relative h-full w-full rounded-[16px] bg-red-100 cursor-pointer'
              key={index}
              onClick={() => setImageInfoPage(true)}
            >
              <Image
                className=' h-full !w-full rounded-[16px] object-cover'
                src={item.image}
                alt={''}
              />
              <div
                className='invisible absolute right-[7px] top-[7px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black/[0.48] group-hover:visible group-hover:opacity-100'
                onClick={() => AllImageToggle(index)}
              >
                <Image className='w-full h-full' src={threeDots} alt={''} />
              </div>
              {allImage === index && (
                <div className='absolute z-50 right-3 top-12'>
                  <ViewImagesDropDown DeleteImage={DeleteImage} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {deleteModal && (
        <AlbumDelete
          DeleteModal={setDeleteModal}
          Heading={'Delete album'}
          Content={'Are you sure you want to delete the'}
          Name={'Fantasy world & nature'}
          LastName={'album?'}
        />
      )}
      {editAlbum && <EditAlbum CloseModal={setEditAlbum} />}
      {albumDetails && <AlbumDetailsModal CloseModal={setAlbumDetails} />}

      {deleteImageModal && (
        <AlbumDelete
          DeleteModal={setDeleteImageModal}
          Heading={'Delete image'}
          Content={'Are you sure you want to delete the image?'}
          Name=''
          LastName=''
        />
      )}
      {moveAlbumModal && <MoveAlbumModal MoveModalClose={setMoveAlbumModal} />}
      
      {imageInfoPage && (
        <ImageInfoModal setImageInfoPage={setImageInfoPage} />
      )}
    </>
  );
};

export default VIMainImageBlock;
