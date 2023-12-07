import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import xMark from '@/assets/xmark (1).webp';
import cameraOverlay from '@/assets/white-camera.webp';
import InputFieldDesign from '@components/common/InputFieldDesign';
import ProfileDropdown from '@components/common/ProfileDropdown';
import DeleteProfileModal from '@components/common/DeleteProfileModal';
import AddImagesModal from '@components/creator-studio/style-generator/AddImagesModal';
import {
  updateCharacter
} from 'services/services';
import Cookies from 'js-cookie';
import EditProfileThumbnail from '@components/home/EditProfileThumbnail';

interface EditProfileModalProps {
  closeState: React.Dispatch<React.SetStateAction<boolean>>;
  setUserDetails?: any;
  userDetails?: any;
  bannerData: any;
  updateCharacterToggle: boolean;
  setUpdateCharacterToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileModal = ({
  closeState,
  setUserDetails,
  userDetails,
  bannerData,
  updateCharacterToggle,
  setUpdateCharacterToggle
}: EditProfileModalProps) => {
  const tabs = ['Profile view', 'Explore view'];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [profileEdit, setProfileEdit] = useState<boolean>(false);
  const [deleteProfileState, setDeleteProfileState] = useState<boolean>(false);
  const [updateProfileState, setUpdateProfileState] = useState<boolean>(false);
  const accessToken = Cookies.get('accessToken');
  const token = `${accessToken}`;

  const [updateProfileThumbnail, setUpdateProfileThumbnail] =
    useState<boolean>(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleSave = async () => {
    try {
      const response: any = await updateCharacter(userDetails, token);
      console.log('Character update successfully!', response);
      setUpdateCharacterToggle(!updateCharacterToggle);
    } catch (error) {
      console.error('Error update character:', error);
    }
    closeState(false);
  };

  useEffect(() => {
    if (bannerData) {
      const {
        id: character_id,
        username,
        display_name,
        bio,
        location,
        profile_picture_media_id ,
        profile_banner_media_id,
        profile_tags
      } = bannerData;

      setUserDetails({
        character_id,
        username,
        display_name,
        bio,
        location,
        profile_picture_media_id : 2,
        profile_banner_media_id : 2,
        profile_tags
      });
    }
  }, [bannerData]);


  return (
    <>
      <Modal
        open={true}
        modalClassName='flex flex-col w-full rounded-[20px] h-max bg-[#1A1A1A] max-w-[468px] relative'
        closeModal={() => closeState(false)}
        modalOverlayStyle='!bg-black/80'
      >
        <div className='flex justify-between border-b border-white/[0.08] p-6'>
          <div className='font-bold text-[18px] leading-6 text-white'>
            Edit profile
          </div>
          <button onClick={() => closeState(false)}>
            <Image src={xMark} alt={''} className='h-[24px] w-[24px]' />
          </button>
        </div>
        <div className='flex items-center gap-4 px-6 pt-6 pb-3'>
          <div
            className='relative h-[72px] w-[72px] cursor-pointer '
            onClick={() => {
              setProfileEdit(!profileEdit);
            }}
          >
            <img
              src={
                croppedImage ||
                'https://www.signivis.com/img/custom/avatars/member-avatar-01.png'
              }
              alt=''
              className='h-[72px] w-[72px] rounded-full'
            />
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
              <div className='flex h-[32px] w-[32px] items-center justify-center rounded-[100px] bg-black bg-opacity-60'>
                <Image
                  src={cameraOverlay}
                  className='h-[16px] w-[16px] object-contain'
                  alt=''
                />
              </div>
            </div>

            <div className='absolute'>
              {profileEdit && (
                <ProfileDropdown
                  setProfileEdit={setProfileEdit}
                  deleteProfileState={deleteProfileState}
                  setDeleteProfileState={setDeleteProfileState}
                  setUpdateProfileState={setUpdateProfileState}
                  setUpdateProfileThumbnail={setUpdateProfileThumbnail}
                />
              )}
            </div>
          </div>

          <div className='flex flex-col gap-[2px]'>
            <div className='font-bold text-[15px] leading-5 text-white'>
              Profile photo
            </div>
            <div className='font-normal text-[14px] leading-[18px] text-[#979797]'>
              Click on the photo to edit
            </div>
          </div>
        </div>
        <div className='flex gap-3 border-b border-white/[0.08] px-6 pb-4 pt-2'>
          {tabs.map((item, index) => {
            return (
              <div
                key={index}
                className={`text-bold flex w-1/2 cursor-pointer items-center justify-center rounded-[12px] px-4 py-2 text-[15px] leading-5 ${
                  activeTab === index
                    ? 'bg-white/[0.16] text-white'
                    : 'bg-transparent text-[#979797]'
                }`}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className='flex flex-col gap-6 px-6 pt-3 pb-6'>
          <div className='flex flex-col gap-4'>
            <InputFieldDesign
              labelName='Name'
              inputType='text'
              inputPlaceholder='Mika-chan'
              value={userDetails?.display_name}
              onChange={(value: any) =>
                setUserDetails((prev: any) => ({
                  ...prev,
                  display_name: value
                }))
              }
            />

            <InputFieldDesign
              labelName='Username'
              inputType='text'
              inputPlaceholder='mikachan'
              value={userDetails?.username}
              onChange={(value: any) =>
                setUserDetails((prev: any) => ({ ...prev, username: value }))
              }
            />

            <InputFieldDesign
              labelName='Profile Tags'
              inputType='text'
              inputPlaceholder='Add profile tags'
              value={userDetails?.profile_tags}
              // onChange={(value: any) =>
              //   setUserDetails((prev: any) => ({
              //     ...prev,
              //     profile_tags: value
              //   }))
              // }
              onChange={(value: any) =>
                setUserDetails((prev: any) => ({
                  ...prev,
                  profile_tags: typeof value === 'string' ? [value] : value
                }))
              }
            />

            <InputFieldDesign
              labelName='Select location'
              inputType='dropdown'
              inputPlaceholder='Tokyo'
              value={userDetails?.location}
              onChange={(value: any) =>
                setUserDetails((prev: any) => ({
                  ...prev,
                  location: value
                }))
              }
            />

            <InputFieldDesign
              labelName='Bio'
              inputType='textarea'
              inputPlaceholder='Shy fox girl looking for adventure ·冒険を探している恥ずかしがり屋のキツ ...'
              value={userDetails?.bio}
              onChange={(value: any) =>
                setUserDetails((prev: any) => ({
                  ...prev,
                  bio: value
                }))
              }
            />

            <div className='flex gap-3 '>
              <button
                className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] border border-white border-opacity-30 px-5'
                onClick={() => closeState(false)}
              >
                <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                  Cancel
                </div>
              </button>

              <button
                className='inline-flex h-12 w-[204px] items-center justify-center gap-2 rounded-[14px] bg-[#5848BC] px-5'
                onClick={() => handleSave()}
              >
                <div className="font-bold font-['Open Sans'] text-base leading-snug text-white">
                  Save
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {deleteProfileState && (
        <Modal
          open={true}
          modalClassName='flex flex-col w-full rounded-[14px] items-start h-max bg-[#1A1A1A] max-w-[468px] relative'
          closeModal={() => setDeleteProfileState(!deleteProfileState)}
          modalOverlayStyle='!bg-black/80'
        >
          <DeleteProfileModal
            setDeleteProfileState={setDeleteProfileState}
            deleteProfileState={deleteProfileState}
            setCroppedImage={setCroppedImage}
          />
        </Modal>
      )}
      {updateProfileState && (
        <AddImagesModal
          setUpdateProfileState={setUpdateProfileState}
          setCroppedImage={setCroppedImage}
          updateProfileState={updateProfileState}
        />
      )}
      {updateProfileThumbnail && (
        <Modal
          open={true}
          modalClassName='flex flex-col w-full rounded-[14px] items-start h-max bg-[#1A1A1A] max-w-[484px] relative'
          closeModal={() => setUpdateProfileThumbnail(!updateProfileThumbnail)}
          modalOverlayStyle='!bg-black/80'
        >
          <EditProfileThumbnail
            setUpdateProfileThumbnail={setUpdateProfileThumbnail}
            croppedImage={croppedImage}
            setCroppedImage={setCroppedImage}
          />
        </Modal>
      )}
    </>
  );
};

export default EditProfileModal;
