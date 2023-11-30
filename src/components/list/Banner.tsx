import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import messageInfoIcon from '../../../public/assets/message-square-info.png';
import blockIcon from '../../../public/assets/block-icon.png';
import bookmarkIcon from '../../../public/assets/bookmark.png';
import linkIcon from '../../../public/assets/link-icon.png';
import Cover from '../../../public/assets/cover-1.png';
import avatar from '../../../public/assets/mika-chan-sub-banner.png';
import userCheckIcon from '../../../public/assets/user-check-icon.png';
import threeDotsIcon from '../../../public/assets/three-dots-icon.png';
import blueTickIcon from '../../../public/assets/badge-check.png';
import locationIcon from '../../../public/assets/location-icon.png';
import calendarIcon from '../../../public/assets/calendar-icon.png';
import VerifiedIcon from '../../../public/assets/svgImages/verified-icon.svg';
import CollectionCoverModal from './CollectionCoverModal';
import AddToCollectionModal from './AddToCollectionModal';
import LeftArrow from './svg/leftArrow.svg';
import cameraIcon from '../../../public/assets/white-camera.png';
import galleryIcon from '../../../public/assets/gallery-icon.png';
import deleteIcon from '../../../public/assets/delete-icon.png';
import UpdatePhotoModal from './UpdatePhotoModal';
import DeleteProfileCover from './DeleteProfileCover';
import pen from '../../../public/assets/pen.png';
import eye from '../../../public/assets/eye.png';
import trashBlank from '../../../public/assets/trash-blank-alt.png';
import downArrow from '../../../public/assets/down-arrow-img.png';
import EditProfileModal from '@components/list/EditProfileModal';
import userAvatar from '../../../public/assets/user-alt-1.png';
import CoverImageModel from './finishStep/coverImageModel';

const posts = [
  {
    number: '0',
    name: 'Posts'
  },
  {
    number: '0',
    name: 'Followers'
  },
  {
    number: '0',
    name: 'Subscribers'
  }
];

const location = [
  // {
  //   icon: locationIcon,
  //   name: 'Tokyo'
  // },
  {
    icon: calendarIcon,
    name: 'Joined March 2023'
  }
];

const bottomButtons = [
  {
    name: 'Ahegao'
  },
  {
    name: 'Roleplay'
  },
  {
    name: 'Fashion Model'
  },
  {
    name: 'Semi-Realistic'
  }
];

const actions = [
  {
    icon: linkIcon,
    name: 'Copy link to profile'
  },
  {
    icon: bookmarkIcon,
    name: 'Add to collections'
  },
  {
    icon: blockIcon,
    name: 'Block'
  },
  {
    icon: messageInfoIcon,
    name: 'Report'
  }
];

const cratorProfileActions = [
  {
    icon: linkIcon,
    name: 'Copy link to profile'
  },
  {
    icon: trashBlank,
    name: 'Delete'
  }
];

const uploadPhoto = [
  {
    icon: galleryIcon,
    name: 'Update photo'
  },
  {
    icon: deleteIcon,
    name: 'Delete'
  }
];

interface BannerProp {
  backFromProfile?: React.Dispatch<React.SetStateAction<boolean>>;
  styleProperty?: string;
  followBtnStyle?: string;
  followText?: string;
  component?: string;
  setUserDetails?: any;
  userDetails?: any;
  activeProfile: any;
  bannerData: any;
  updateCharacterToggle: boolean;
  setUpdateCharacterToggle: React.Dispatch<React.SetStateAction<boolean>>;
  // setEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Banner: React.FC<BannerProp> = ({
  backFromProfile,
  styleProperty,
  followBtnStyle,
  followText,
  component,
  setUserDetails,
  userDetails,
  activeProfile,
  bannerData,
  updateCharacterToggle,
  setUpdateCharacterToggle
}: // setEditProfileModal
BannerProp) => {
  const [actionDivShow, setActionDivShow] = useState(false);
  const [exploreSelectedTab, setExploreSelected] = useState('');
  const [collectionModalState, setCollectionModalState] = useState(false);
  const [uploadPhotoShow, setUploadPhotoShow] = useState(false);
  const [updatePhoto, setUpdatePhoto] = useState('');
  const [updatePhotoModalState, setUpdatePhotoModalState] = useState(false);
  const [deleteProfileModalState, setDeleteProfileModalState] = useState(false);
  const [viewModal, setviewModal] = useState(false);
  const [coverImage, setCoverImage] = useState('');
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [cropData, setCropData] = useState('');
  const [updatedProfile, setUpdatedProfile] = useState(false)


  const handleExploreSelected = (e: React.MouseEvent<HTMLElement>) => {
    setExploreSelected((e.target as HTMLElement).innerText);

    if (exploreSelectedTab === 'Add to collections') {
      setCollectionModalState(true);
    } else {
      setCollectionModalState(false);
    }
  };

  const handleActionDivShow = (e: React.MouseEvent<HTMLElement>) => {
    setActionDivShow(!actionDivShow);
  };

  const handleUploadPhotoShow = (e: React.MouseEvent<HTMLElement>) => {
    setUploadPhotoShow(!uploadPhotoShow);
  };
  const handleUploadSelected = (e: React.MouseEvent<HTMLElement>) => {
    const value = (e.target as HTMLElement).innerText;
    setUpdatePhoto(value);
    if (value === 'Update photo') {
      setUpdatePhotoModalState(true);
    }
    if (value === 'Delete') {
      setDeleteProfileModalState(true);
    }
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

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
      setActionDivShow(false);
    }
  };
  const photoDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleOutside);
    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, []);
  const handleOutside = (e: MouseEvent) => {
    if (
      photoDropdownRef.current &&
      !photoDropdownRef.current.contains(e.target as Node)
    ) {
      setUploadPhotoShow(false);
    }
  };



  return (
    <div className={`${styleProperty ? styleProperty : 'px-8'}`}>
      {/* <button onClick={() => setviewModal(true)}>Add Character</button>  */}
      {backFromProfile === undefined ? (
        ''
      ) : (
        <div
          className='flex gap-2 my-4 text-lg font-bold cursor-pointer'
          onClick={() => {
            backFromProfile(false);
          }}
        >
          <LeftArrow />
          Mika-chan
        </div>
      )}

      <div>
        <div className='h-max w-full overflow-hidden rounded-[16px] bg-[#121212]'>
          <div className='relative block w-full sub-banner'>
            { coverImage === '' ? (
              <div className='mb-2 h-[200px] w-full bg-[#313131]'></div>
            ) : (
              <img className='h-[200px] w-full ' src={coverImage} alt='' />
              // <Image className='w-full h-full ' src={Cover} alt='' />
            )}
            <div
              className='absolute right-[20px] top-[20px] cursor-pointer'
              ref={photoDropdownRef}
            >
              <Image
                className='relative'
                src={cameraIcon}
                alt=''
                onClick={(e) => handleUploadPhotoShow(e)}
              />
              {uploadPhotoShow ? (
                <div className='absolute right-0 top-[65px] z-0 flex h-max w-[218px] flex-col items-start rounded-[14px] bg-[#1A1A1A] px-2 py-2 shadow-[0px_8px_12px_0px_#0000001F]'>
                  {uploadPhoto.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => handleUploadSelected(e)}
                        className={`flex w-full cursor-pointer gap-2 px-[16px] py-[10px] ${
                          updatePhoto === item.name
                            ? 'rounded-[8px] bg-white/[0.12]'
                            : ''
                        }`}
                      >
                        <Image
                          className='object-contain'
                          src={item.icon}
                          alt={''}
                        />
                        <div className='font-normal text-[14px] text-[#FFFFFF]'>
                          {item.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ''
              )}
            </div>

            <div
              className={`mb-5 flex w-full items-center justify-between px-6 mt-[-56px]`}
            >
              <div className='relative h-[120px]  w-[120px] overflow-hidden rounded-full'>
                {/* <Image className='w-full h-full border border-white' src={avatar} alt='' /> */}
                <div className='flex h-full w-full items-center justify-center bg-[#202020]'>
                  <Image className='' src={userAvatar} />
                </div>
              </div>
              <div className={'flex gap-3 self-end'}>
                {/* <button
                  className={`flex h-max gap-2 rounded-[14px] px-[20px] py-[11px] text-[16px] font-bold ${
                    followBtnStyle
                      ? followBtnStyle
                      : 'bg-white/[0.08] text-white'
                  }`}
                >
                  {followBtnStyle ? (
                    ''
                  ) : (
                    <Image
                      src={userCheckIcon}
                      alt=''
                      className='object-contain'
                    />
                  )}

                  {followText ? followText : 'Following'}
                </button>
                <button className='h-max rounded-[14px] border border-[#5848BC] bg-[#5848BC] px-[20px] py-[11px] text-base font-bold text-white'>
                  Subscribe
                </button> */}
                <button
                  className='flex items-center justify-center gap-2 rounded-[14px] bg-white/[0.08] px-5 py-[13px]'
                  onClick={() => setEditProfileModal(true)}
                >
                  <Image src={pen} alt={''} />
                  <div className='font-bold text-[16px] leading-[22px] text-white'>
                    Edit profile
                  </div>
                </button>
                <div className='group relative flex items-center justify-center rounded-[14px] bg-white/[0.08] px-5 py-[13px]'>
                  <Image src={eye} alt={''} />
                  <div className='invisible group-hover:visible group-hover:opacity-100'>
                    <div className='font-normal absolute -left-[16px] bottom-[64px] flex items-center justify-center rounded-[6px] bg-[#303030] px-3 py-[6px] text-[12px] leading-4 text-white'>
                      User view
                    </div>
                    <div className='absolute -right-[2px] -top-[20px] h-[24px] w-10'>
                      <Image
                        className='w-full h-full'
                        src={downArrow}
                        alt={''}
                      />
                    </div>
                  </div>
                </div>
                <div className='relative' ref={dropdownRef}>
                  <Image
                    className='relative cursor-pointer'
                    onClick={handleActionDivShow}
                    src={threeDotsIcon}
                    alt=''
                  />
                  {actionDivShow ? (
                    <>
                      <div className='absolute right-0 top-[65px] z-0 flex h-max w-[218px] flex-col items-start rounded-[14px] bg-[#1A1A1A] py-2'>
                        {component === 'CreatorStudioProfile' ? (
                          <div className='w-full'>
                            {cratorProfileActions.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  onClick={(e) => handleExploreSelected(e)}
                                  className={`flex w-full cursor-pointer items-center gap-2 px-[16px] py-[10px] ${
                                    exploreSelectedTab === item.name
                                      ? 'w-full rounded-[8px] bg-white/[0.12]'
                                      : ''
                                  }`}
                                >
                                  <Image
                                    className='object-contain'
                                    src={item.icon}
                                    alt={''}
                                  />
                                  <div className='font-normal text-[14px] text-[#FFFFFF]'>
                                    {item.name}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className='w-full'>
                            {actions.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  onClick={(e) => handleExploreSelected(e)}
                                  className={`flex w-full cursor-pointer gap-2 px-[16px] py-[10px] ${
                                    exploreSelectedTab === item.name
                                      ? ' rounded-[8px] bg-white/[0.12]'
                                      : ''
                                  }`}
                                >
                                  <Image
                                    className='object-contain'
                                    src={item.icon}
                                    alt={''}
                                  />
                                  <div className='font-normal text-[14px] text-[#FFFFFF]'>
                                    {item.name}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='flex px-6 pb-[24px]'>
            <div className=''>
              <div className='flex items-center gap-[2px]'>
                <div className='font-bold text-[22px] text-[#FFFFFF]'>
                  {bannerData ? bannerData?.display_name : 'Mika-chan'}
                </div>
                <div className='h-[24px] w-[24px]'>
                  <VerifiedIcon />
                  {/* <Image className='w-full h-full' src={blueTickIcon} alt='' />  */}
                </div>
              </div>

              <div className='font-normal text-[15px] text-[#979797]'>
                {bannerData ? bannerData?.username : '@mikachan'}
              </div>
              <div className='font-normal mt-3 w-full max-w-[73%] text-[15px] leading-[20px] text-white/[0.8]'>
                {bannerData
                  ? bannerData?.bio
                  : ` Shy fox girl looking for adventure
                ·冒険を探している恥ずかしがり屋のキツ I have a personality and
                emotions. I can experience joy, sadness, anger, and everything
                in between. I express myself through my voice, facial
                expressions, and body language, all meticulously crafted`}
              </div>

              <div className='mt-[8px] flex gap-2'>
                {posts.map((item, index) => {
                  return (
                    <div key={index} className='flex gap-1'>
                      <div className='font-bold text-[13px] text-[#FFFFFF]'>
                        {item.number}
                      </div>
                      <div className='font-normal text-[13px] text-[#979797]'>
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className='mt-[8px] flex gap-[10px]'>
                {bannerData?.location
                  ? location.map((item, index) => {
                      return (
                        <div key={index} className='flex gap-[6px]'>
                          <Image
                            className='object-contain'
                            src={item.icon}
                            alt=''
                          />
                          <div className='font-normal text-[13px] text-[#FFFFFF]'>
                            {bannerData ? bannerData?.location : 'location'}
                          </div>
                        </div>
                      );
                    })
                  : location.map((item, index) => {
                      return (
                        <div key={index} className='flex gap-[6px]'>
                          <Image
                            className='object-contain'
                            src={item.icon}
                            alt=''
                          />
                          <div className='font-normal text-[13px] text-[#FFFFFF]'>
                            {item.name}
                          </div>
                        </div>
                      );
                    })}
              </div>

              <div className='mt-[12px] flex'>
                {/* {bottomButtons.map((item, index) => {
                  return (
                    <div key={index} className='mr-2'>
                      <button className='font-normal rounded-[6px] bg-white/[0.08] px-[8px] py-[3px] text-[12px] text-[#FFFFFF]'>
                        {item.name}
                      </button>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {collectionModalState && (
        <AddToCollectionModal closeModalState={setCollectionModalState} />
      )}

      {/* {updatePhotoModalState && (
        <UpdatePhotoModal
          closeModalState={setUpdatePhotoModalState}
          closeDropdown={setUploadPhotoShow}
          image={image}
          setImage={setImage}
          cropData={cropData}
          setCropData={setCropData}
          setUpdatedProfile={setUpdatedProfile}
        />
      )} */}
      {updatePhotoModalState && (
        <CoverImageModel
          CloseModal={setUpdatePhotoModalState}
          coverImage={coverImage}
          setCoverImage={setCoverImage}
        />
      )}

      {deleteProfileModalState && (
        <DeleteProfileCover
          closeDeleteModal={setDeleteProfileModalState}
          closeDropdown={setUploadPhotoShow}
          setRemoveCover={setCoverImage}
        />
      )}

      {editProfileModal && (
        <EditProfileModal
          closeState={setEditProfileModal}
          setUserDetails={setUserDetails}
          userDetails={userDetails}
          bannerData={bannerData}
          setUpdateCharacterToggle={setUpdateCharacterToggle}
          updateCharacterToggle={updateCharacterToggle}
        />
      )}
    </div>
  );
};

export default Banner;
