import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../../public/assets/vi-image-1.png'
import image2 from '../../../../public/assets/vi-image-2.png'
import image3 from '../../../../public/assets/vi-image-3.png'
import image4 from '../../../../public/assets/vi-image-4.png'
import image5 from '../../../../public/assets/vi-image-5.png'
import image6 from '../../../../public/assets/vi-image-6.png'
import image7 from '../../../../public/assets/vi-image-7.png'
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
interface VIMainImageBlock {
  ToggleMenu: any;
}
const VIMainImageBlock = ({ ToggleMenu }: VIMainImageBlock) => {
  const [allImages, setAllImages] = useState(images);
  const [showDropDown, setShowDropDown] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editAlbum, setEditAlbum] = useState(false);
  const [albumDetails, setAlbumDetails] = useState(false);
  const [deleteImageModal, setDeleteImageModal] = useState(false)
  const [moveAlbumModal, setMoveAlbumModal] = useState(false)


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

  // const MyDelete = (ind: any) => {
  //   const myData = allImages.filter((item: any, index: number, array: any) => index !== ind);
  //   console.log(myData,'myData');

  // }


  const dropdownRef = useRef(null);
  
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
      <div className='grid grid-cols-3 gap-3' ref={dropdownRef}>
        {ToggleMenu ?
          <>
            {images.map((item, index) => (
              <div key={index} className='relative group w-full h-full' >
                <Image className='w-full object-cover ' src={item.image} alt={''} />
                <div className=' absolute bottom-[7px] flex justify-between items-end bg-gradient-to-t to-[#00000000] from-[#000000CC] h-[150px] w-full px-5 pb-3 font-semibold'>
                  <p>Fantasy world & nature</p>
                  <p>4</p>
                </div>
                <div className='cursor-pointer invisible w-[30px] h-[30px] flex items-center justify-center group-hover:visible group-hover:opacity-100 absolute top-[7px] right-[7px] rounded-full bg-black/[0.48]' onClick={() => { AlbumImageToggle(index) }}>
                  <Image className='' src={threeDots} alt={''} />
                </div>
                {showDropDown === index && (
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
          </>
          : <>
            {allImages.map((item, index) => (
              <div className='relative group w-full h-full' key={index} >
                <Image className='w-full object-cover ' src={item.image} alt={''} />
                <div className='cursor-pointer invisible w-[30px] h-[30px] flex items-center justify-center group-hover:visible group-hover:opacity-100 absolute top-[7px] right-[7px] rounded-full bg-black/[0.48]' onClick={() => AllImageToggle(index)}>
                  <Image className='' src={threeDots} alt={''} />
                </div>
                {allImage === index && (
                  <div className='absolute top-12 right-3 z-50' >
                    <ViewImagesDropDown DeleteImage={DeleteImage} />
                  </div>
                )}
              </div>
            ))}
          </>
        }
      </div>

      {deleteModal && <AlbumDelete DeleteModal={setDeleteModal} Heading={'Delete album'} Content={'Are you sure you want to delete the'} Name={'Fantasy world & nature'} />}
      {editAlbum && <EditAlbum CloseModal={setEditAlbum} />}
      {albumDetails && <AlbumDetailsModal CloseModal={setAlbumDetails} />}

      {deleteImageModal && <AlbumDelete DeleteModal={setDeleteImageModal} Heading={'Delete image'} Content={'Are you sure you want to delete the image?'} Name />}
      {moveAlbumModal && <MoveAlbumModal MoveModalClose={setMoveAlbumModal} />}
    </>


  )
}

export default VIMainImageBlock;
