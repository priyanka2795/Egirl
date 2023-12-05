//@ts-nocheck

import React, { useEffect, useRef, useState } from 'react';
import image1 from '@/assets/vi-image-1.webp';
import image2 from '@/assets/vi-image-2.webp';
import image3 from '@/assets/vi-image-3.webp';
import image4 from '@/assets/vi-image-4.webp';
import image5 from '@/assets/vi-image-5.webp';
import image6 from '@/assets/vi-image-6.webp';
import image7 from '@/assets/vi-image-7.webp';
import threeDots from '@/assets/dots-horizontal3.webp';
import Image from 'next/image';
import Delete from '@/assets/delete-icon.webp';
import Pencil from '@/assets/pencil.webp';
import Information from '@/assets/circle-information.webp';
import AlbumDelete from './albumDelete';
import EditAlbum from './editAlbum';
import AlbumDetailsModal from './albumDetailsModal';
import ViewImagesDropDown from './ViewImagesDropDown';
import MoveAlbumModal from './moveAlbumModal';
import { deleteImageGeneration } from 'services/services';
import Cookies from 'js-cookie';
import ImageInfoModal from '@components/common/ImageInfoModal';
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

interface VIMainImageBlock {
  ToggleMenu: boolean;
  SetAlbumImages: React.Dispatch<React.SetStateAction<boolean>>;
  AlbumData: any;
  allImgData: any;
  imageUpdate: boolean;
  setImageUpdate: any;
}

const VIMainImageBlock = ({
  ToggleMenu,
  SetAlbumImages,
  AlbumData,
  allImgData,
  imageUpdate,
  setImageUpdate
}: VIMainImageBlock) => {
  const [allImages, setAllImages] = useState(images);
  const [showDropDown, setShowDropDown] = useState<number | null>(null);
  const [allImage, setAllImage] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editAlbum, setEditAlbum] = useState<boolean>(false);
  const [albumDetails, setAlbumDetails] = useState<boolean>(false);
  const [deleteImageModal, setDeleteImageModal] = useState<boolean>(false);
  const [moveAlbumModal, setMoveAlbumModal] = useState<boolean>(false);
  const [sdImageId, setSdImageId] = useState<any>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [imageInfoPage, setImageInfoPage] = useState<boolean>(false);
  const [selectPrompt, setSelectPrompt] = useState<string[]>([]);
 

  const [imageInfoModal, setImageInfoModal] = useState(false);

  const AlbumImageToggle = (index: number) => {
    setShowDropDown((prev) => (prev === index ? null : index));
  };
  const AllImageToggle = (index: number, sd_img_id: number) => {
    setAllImage((prev) => (prev === index ? null : index));
    setSdImageId(sd_img_id);
  };

  let token: any = Cookies.get('accessToken');
  //----------- delete image generation ----------
  const deleteImgBySdId = () => {
    deleteImageGeneration(sdImageId, token)
      .then((res: any) => {
        console.log('delete image---', res);
        setImageUpdate(!imageUpdate);
      })
      .catch((err: any) => {
        console.log('delete image err---', err);
      });
  };
  //----------------------------------------------

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
                  className='object-cover w-full h-full rounded-2xl '
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
          {allImgData?.map((item: any, index: number) =>
            item?.media?.map((e: any, i: number) => {
              return (
                <div
                  className='sub-banner group relative h-full w-full rounded-[16px] bg-red-100'
                  key={index}
                >
                  <Image
                    className=' h-full !w-full rounded-2xl object-cover cursor-pointer'
                    src={image6}
                    alt={''}
                    onClick={()=>setImageInfoModal(true)}
                  />
                  <div
                    className='invisible absolute right-[7px] top-[7px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black/[0.48] group-hover:visible group-hover:opacity-100'
                    onClick={() => AllImageToggle(index, e.sd_image_id)}
                  >
                    <Image className='w-full h-full' src={threeDots} alt={''} />
                  </div>
                  {allImage === index && (
                    <div className='absolute z-50 right-3 top-12'>
                      <ViewImagesDropDown DeleteImage={DeleteImage} />
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {imageInfoModal && (
        <ImageInfoModal
          ImageInfoModal={imageInfoModal}
          setImageInfoModal={setImageInfoModal}
        />
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
          deleteImgBySdId={deleteImgBySdId}
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
