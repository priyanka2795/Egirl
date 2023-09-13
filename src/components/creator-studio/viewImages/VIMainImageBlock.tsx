import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../../public/assets/vi-image-1.png'
import image2 from '../../../../public/assets/vi-image-2.png'
import image3 from '../../../../public/assets/vi-image-3.png'
import image4 from '../../../../public/assets/vi-image-4.png'
import image5 from '../../../../public/assets/vi-image-5.png'
import image6 from '../../../../public/assets/vi-image-6.png'
import image7 from '../../../../public/assets/vi-image-7.png'
import AlbumImg from '../../../../public/assets/album1.png'
import AlbumImg1 from '../../../../public/assets/album2.png'
import AlbumImg2 from '../../../../public/assets/album3.png'
import AlbumImg3 from '../../../../public/assets/album4.png'
import threeDots from '../../../../public/assets/dots-horizontal3.png'
import Image from 'next/image';
import Delete from '../../../../public/assets/delete-icon.png';
import Pencil from '../../../../public/assets/pencil.png';
import Information from '../../../../public/assets/circle-information.png';
import AlbumDelete from './albumDelete';
import EditAlbum from './editAlbum';
import AlbumDetailsModal from './albumDetailsModal';
import ViewImagesDropDown from './ViewImagesDropDown';
import MoveAlbumModal from './moveAlbumModal';
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
  },
];

const album = [
  {
   id:1,
   image: image5,
   albumName: "Giant dog chasing a bunch of ...",
   albumImageCount: '8'
  },
  {
    id:2,
    image: image4,
    albumName: "Fantasy world & nature",
    albumImageCount: '4'
  },
  {
    id:3,
    image: AlbumImg1,
    albumName: "Fantasy world & nature",
    albumImageCount: '5'
  },
  {
    id:4,
    image: AlbumImg2,
    albumName: "Fantasy world & nature",
    albumImageCount: '4'
  },
  {
    id:5,
    image: AlbumImg3,
    albumName: "Fantasy world & nature",
    albumImageCount: '4'
  },
  {
    id:6,
    image: AlbumImg,
    albumName: "Fantasy world & nature",
    albumImageCount: '4'
  }
];
interface VIMainImageBlock {
  ToggleMenu: any;
  SetAlbumImages: any;
}
const VIMainImageBlock = ({ ToggleMenu, SetAlbumImages }: VIMainImageBlock) => {
  const [allImages, setAllImages] = useState(images);
  const [showDropDown, setShowDropDown] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editAlbum, setEditAlbum] = useState(false);
  const [albumDetails, setAlbumDetails] = useState(false);
  const [deleteImageModal, setDeleteImageModal] = useState(false)
  const [moveAlbumModal, setMoveAlbumModal] = useState(false)

  const dropdownRef = useRef(null);

  const AlbumImageToggle = (index: any) => {
    setShowDropDown((prev) => (prev === index ? null : index));
  }
  const AllImageToggle = (index: any) => {
    setAllImage((prev) => (prev === index ? null : index));

  }
  const DeleteImage = (e: any) => {
    const Data = e.target.innerText;
    if (Data === 'Delete') {
      setDeleteImageModal(true);
      setAllImage(null);
    } else if (Data === 'Move to album') {
      setMoveAlbumModal(true);
      setAllImage(null);
    } else {

    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setAllImage(null);
      setShowDropDown(null);
    }
  };

  return (
    <>
      {ToggleMenu ?
        <>
          <div className='grid grid-cols-3 gap-3' ref={dropdownRef}>
            {album.map((item) => (
              <div key={item.id} className='relative w-full h-full group sub-banner' >
                <Image className='object-cover w-full ' src={item.image} alt={''} />
                <div className=' absolute bottom-0 bg-gradient-to-t to-[#00000000] from-[#000000CC] h-[150px] w-full px-5 pb-3 font-semibold flex'  >
                  <div className='flex items-end justify-between w-full '>
                    <p className='cursor-pointer ' onClick={() => SetAlbumImages(true)}>{item.albumName}</p>
                    <p className='cursor-pointer ' onClick={() => SetAlbumImages(true)}>{item.albumImageCount}</p>
                  </div>
                </div>
                <div className='cursor-pointer invisible w-[30px] h-[30px] flex items-center justify-center group-hover:visible group-hover:opacity-100 absolute top-[7px] right-[7px] rounded-full bg-black/[0.48]' onClick={() => { AlbumImageToggle(item.id) }}>
                  <Image className='' src={threeDots} alt={''} />
                </div>
                {showDropDown === item.id && (
                  <div className='bg-[#1A1A1A] p-4 flex flex-col gap-3 rounded-[14px] w-[218px] absolute right-2 top-10 z-50' >
                    <button className='flex items-center gap-2' onClick={() => { setEditAlbum(true), setShowDropDown(null) }}>
                      <Image src={Pencil} className='w-[18px] h-[18px]' alt='' />
                      <p>Edit</p>
                    </button>
                    <button className='flex items-center gap-2' onClick={() => { setAlbumDetails(true), setShowDropDown(null) }}>
                      <Image src={Information} className='w-[18px] h-[18px]' alt='' />
                      <p>Details</p>
                    </button>
                    <button className='flex items-center gap-2' onClick={() => { (setDeleteModal(true)), setShowDropDown(null) }}>
                      <Image src={Delete} className='w-[18px] h-[18px]' alt={''} />
                      <p>Delete</p>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
        : <>



          <div className='grid grid-cols-3 gap-2' ref={dropdownRef}>
            {allImages.map((item, index) => (
              <div className='relative w-full h-full bg-red-100 group sub-banner ' key={index} >
                <Image className=' object-cover !w-full h-full' src={item.image} alt={''} />
                <div className='cursor-pointer invisible w-[30px] h-[30px] flex items-center justify-center group-hover:visible group-hover:opacity-100 absolute top-[7px] right-[7px] rounded-full bg-black/[0.48]' onClick={() => AllImageToggle(index)}>
                  <Image className='w-full h-full' src={threeDots} alt={''} />
                </div>
                {allImage === index && (
                  <div className='absolute z-50 top-12 right-3' >
                    <ViewImagesDropDown DeleteImage={DeleteImage} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      }

      {deleteModal && <AlbumDelete DeleteModal={setDeleteModal} Heading={'Delete album'} Content={'Are you sure you want to delete the'} Name={'Fantasy world & nature'} LastName={"album?"} />}
      {editAlbum && <EditAlbum CloseModal={setEditAlbum} />}
      {albumDetails && <AlbumDetailsModal CloseModal={setAlbumDetails} />}

      {deleteImageModal && <AlbumDelete DeleteModal={setDeleteImageModal} Heading={'Delete image'} Content={'Are you sure you want to delete the image?'} Name LastName />}
      {moveAlbumModal && <MoveAlbumModal MoveModalClose={setMoveAlbumModal} />}



    </>


  )
}

export default VIMainImageBlock;
