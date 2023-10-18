import { Modal } from '@components/modal/modal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import userPenIcon from '../../../public/assets/user-pen.png';
import personalityIcon from '../../../public/assets/user.png';
import imagePlusIcon from '../../../public/assets/image-plus.png';
import palette from '../../../public/assets/palette.png';
import flag from '../../../public/assets/flag.png';
import circleInformation from '../../../public/assets/circle-information-blue.png';
import Stepper from './Stepper';

// interface ProfileInfoModalProps {
//     closeModal: any;
// }
const SearchData = [
  {
    name: 'Semi-Realistic 1'
  },
  {
    name: 'Semi-Realistic 2'
  },
  {
    name: 'Semi-Realistic 3'
  }
];

const initialValues = {
  profileTags: '',
  location: '',
  bio: ''
};
const ProfileInfoModal = () => {
  const [form, setForm] = useState(initialValues);
  const [btnSteps, setBtnSteps] = useState(false);
  const [showProfileTagsHint, setShowProfileTagsHint] = useState(false);
  const [profileTagsMenu, setProfileTagsMenu] = useState(SearchData);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    if (name === 'profileTags') {
      const searchTerm = value.toLowerCase();
      const filteredItems = SearchData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      setProfileTagsMenu(filteredItems);

      if (filteredItems.length === 0) {
        setShowProfileTagsHint(true);
      } else {
        setShowProfileTagsHint(false);
      }
    }
  };
  useEffect(() => {
    if (form.location != '' && form.bio != '' && selectedTags.length === 4) {
      setBtnSteps(true);
    } else {
      setBtnSteps(false);
    }
  }, [form]);
  console.log(btnSteps, 'btnSteps');

  const handleAddTag = (tagName: string) => {
    if (tagName && selectedTags.length < 4 && !selectedTags.includes(tagName)) {
      setSelectedTags([...selectedTags, tagName]);
      setForm({
        ...form,
        profileTags: ''
      });
    }
  };

  const handleRemoveTag = (tagName) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagName);
    setSelectedTags(updatedTags);
  };

  const handleEnterKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const tagsArray = form.profileTags.split(',');
      handleAddTag(tagsArray[tagsArray.length - 1]);
    }
  };

  return (
    <div className='flex h-[900px] flex-col bg-[#070707]'>
      <div className='flex border-b border-white/[0.08] px-6 py-4'>
        <button className='font-bold flex items-center justify-center rounded-[12px] border border-white/[0.32] px-4 py-[10px] text-[14px] leading-5 text-white'>
          Save & Close
        </button>
      </div>
      {/* <Stepper /> */}
      <div className='flex h-full flex-col justify-between'>
        <div className='flex flex-col gap-6 rounded-[16px] px-[200px] pt-[48px]'>
          <div className='flex gap-4'>
            <div className='flex gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#5848BC]'>
                <Image src={userPenIcon} alt='' />
              </div>
              <div>
                <p className='text-[15px]'>
                  Profile info <span className='pl-1 text-[#979797]'>2/4</span>
                </p>
                <div className='mt-1 h-1 w-[155px] rounded-xl bg-[#5848BC] bg-opacity-[40%]'>
                  <div className='h-1 w-3/6 rounded-xl bg-[#5848BC] '></div>
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] '>
                <Image src={personalityIcon} alt='' />
              </div>
              <div>
                <p className='text-[15px]'>
                  Personality <span className='pl-1 text-[#979797]'>0/5</span>
                </p>
                <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
              </div>
            </div>
            <div className='flex gap-4 '>
              <div className='setup_character flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] '>
                <Image src={imagePlusIcon} alt='' />
              </div>
              <div>
                <p className='text-[15px]'>
                  Images <span className='pl-1 text-[#979797]'>0/4</span>
                </p>
                <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08]'>
                <Image src={palette} alt='' />
              </div>
              <div>
                <p className='text-[15px]'>
                  Style <span className='pl-1 text-[#979797]'>0/1</span>
                </p>
                <div className='mt-1 h-1 w-[155px] rounded-xl bg-white/[0.12]'></div>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08]'>
                <Image src={flag} alt='' />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2 rounded-[12px] bg-[#5848BC1F]/[0.12] px-4 py-3'>
            <Image src={circleInformation} alt={''} />
            <div className='font-normal text-[13px] leading-[18px] text-[#7362C6]'>
              Set up a character profile. Explore view tab is a way that other
              users can find you in Egirls.
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex h-max w-full max-w-[468px] flex-col gap-4 rounded-[20px] bg-[#1A1A1A] p-6'>
              <div className='flex flex-col gap-[6px]'>
                <div className='flex justify-between'>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    Profile Tags
                  </div>
                  <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                    {selectedTags.length}/4
                  </div>
                </div>
                {/* /''''''''''''''''''''''''''''''''''''  */}
                <div>
                  <div className='relative w-full rounded-[14px] bg-white/[0.05] px-4 py-2'>
                    <div className='flex flex-wrap items-center gap-1'>
                      {selectedTags.map((tag, index) => (
                        <div key={index} className='text-[15px]'>
                          {tag},
                          {/* <button
                            className='ml-2 cursor-pointer text-[12px] text-white'
                            onClick={() => handleRemoveTag(tag)}
                          >
                            x
                          </button> */}
                        </div>
                      ))}

                      <div className='relative'>
                        <input
                          type='text'
                          placeholder='Add tags...'
                          name='profileTags'
                          value={form.profileTags}
                          className='font-normal !autofill:bg-transparent border-none bg-transparent px-0 pl-1 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                          onChange={handleInputChange}
                          onKeyDown={handleEnterKeyPress}
                        />
                      </div>
                    </div>
                    {showProfileTagsHint ? (
                      ''
                    ) : (
                      <>
                        {form.profileTags !== '' && (
                          <div className='absolute left-0 top-[70px] flex w-[420px] flex-col gap-1 rounded-[14px] bg-[#272727] p-2 shadow-md'>
                            {profileTagsMenu.map((items, index) => (
                              <div
                                className={`cursor-pointer rounded-lg  px-3 py-2 text-[14px] ${
                                  form.profileTags === items.name
                                    ? 'bg-[#FFFFFF0D]'
                                    : ''
                                }`}
                                key={index}
                                onClick={() => {
                                  handleAddTag(items.name);
                                }}
                              >
                                {items.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                  Location (Optional)
                </div>
                <input
                  type='text'
                  placeholder='Type location...'
                  value={form.location}
                  className='font-normal rounded-[14px] border-none bg-white/[0.05] px-4 py-3 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                  onChange={handleInputChange}
                  name='location'
                />
              </div>

              <div className='flex flex-col gap-[6px]'>
                <div className='flex justify-between'>
                  <div className='text-[13px] font-semibold leading-[18px] text-[#979797]'>
                    Profile Tags
                  </div>
                  <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                    {form.bio.length}/160
                  </div>
                </div>
                <textarea
                  value={form.bio}
                  placeholder='Type something...'
                  className='font-normal h-[120px] resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] leading-6 text-white placeholder:text-[#979797] focus:ring-0'
                  onChange={handleInputChange}
                  name='bio'
                  maxLength={160}
                  // onChange={(event) =>
                  //   setForm({
                  //     ...form,
                  //     bio: event.target.value
                  //   })
                  // }
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-end justify-end px-6 pb-8'>
          <button
            className={`font-bold flex items-center justify-center rounded-[14px] ${
              btnSteps
                ? 'bg-[#5848BC] text-white'
                : 'bg-[#5848BC52] text-[#FFFFFF52]'
            } px-5 py-[13px] text-[16px] leading-[22px] `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoModal;
