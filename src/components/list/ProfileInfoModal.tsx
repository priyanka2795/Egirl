import Image from 'next/image';
import React, { Dispatch, useEffect, useState } from 'react';
import userPenIcon from '@/assets/user-pen.webp';
import personalityIcon from '@/assets/user.webp';
import personalityWhiteIcon from '@/assets/user-white.webp';
import imagePlusIcon from '@/assets/image-plus.webp';
import imagePlusWhiteIcon from '@/assets/image-plus-white.webp';
import palette from '@/assets/palette.webp';
import paletteWhiteIcon from '@/assets/palette-white.webp';
import flag from '@/assets/flag.webp';
import flagWhite from '@/assets/flag-white.webp';
import circleInformation from '@/assets/circle-information-blue.webp';
import RightIcon from '@/assets/check-cs.webp';
import leftArrowIcon from '@/assets/left-arrow-grey.webp';
import ImageGeneratorIndex from '@components/creator-studio/image-generator';
import StyleGeneratorIndex from '@components/creator-studio/style-generator';
import ViewProfile from './finishStep/viewProfile';
import FinishStepModal from './finishStep/finishStepModal';
import CongratulationsImage from '@/assets/confetti_PNG87045 1.webp';
import Confetti from '@components/common/Confetti';
import PersonalityContent from '@components/creator-studio/personality/PersonalityContent';

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
const personalityValue = {
  baseType: '',
  Creativity: '',
  description: '',
  worldDescription: ''
};
interface ProfileInfoModal {
  setProfileInfoPage?: any;
  btnSteps?: any;
  setBtnSteps?: any;
  activeStep?: any;
  setActiveStep?: any;
  setUserGuide?: any;
}
const ProfileInfoModal = ({
  setProfileInfoPage,
  btnSteps,
  setBtnSteps,
  activeStep,
  setActiveStep,
  setUserGuide
}: ProfileInfoModal) => {
  const [form, setForm] = useState(initialValues);
  // const [btnSteps, setBtnSteps] = useState<boolean>(false);
  const [showProfileTagsHint, setShowProfileTagsHint] = useState(false);
  const [profileTagsMenu, setProfileTagsMenu] = useState(SearchData);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleInputChange = (e: any) => {
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

  const handleAddTag = (tagName: string) => {
    if (tagName && selectedTags.length < 4 && !selectedTags.includes(tagName)) {
      setSelectedTags([...selectedTags, tagName]);
      setForm({
        ...form,
        profileTags: ''
      });
    }
  };

  const handleRemoveTag = (tagName: any) => {
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

  // Stepper Code
  // Step 2
  const [personalityData, setPersonalityData] = useState(personalityValue);
  const personalityLength = Object.keys(personalityData).length;
  const [secondStep, setSecondStep] = useState('');
  const [threadStep, setThreadStep] = useState('');
  const [fourthStep, setFourthStep] = useState('');

  // const [activeStep, setActiveStep] = useState(4);

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    // if (activeStep >= 0 && activeStep <= 3) {
    //   setBtnSteps(false);
    // } else {
    // }
    // if (
    //   selectedTags.length != 4 &&
    //   secondStep.length != 5 &&
    //   threadStep.length != 4 &&
    //   fourthStep.length != 1
    // ) {
    //   setBtnSteps(true);
    // } else {
    //   setBtnSteps(false);
    // }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    if (
      selectedTags.length === 4 ||
      secondStep.length === 5 ||
      threadStep.length === 4 ||
      fourthStep.length === 1
    ) {
      setBtnSteps(true);
    } else {
      setBtnSteps(false);
    }
  };

  const [FinishStepCongrats, setFinishStepCongrats] = useState(false);

  const FinishStepCongratsModal = () => {
    setProfileInfoPage(false);
    setFinishStepCongrats(false);
  };
  // Stepper Code End
  return (
    <div className='relative flex h-screen flex-col bg-[#070707]'>
      {FinishStepCongrats && (
        <div className='absolute left-0 top-0 z-[9999999] h-screen'>
          {/* <Image
            src={CongratulationsImage}
            className='!h-full !w-full object-cover'
          /> */}
          <Confetti />
        </div>
      )}

      <div className='flex border-b border-white/[0.08] px-6 py-4'>
        <button
          className='font-bold flex items-center justify-center rounded-[12px] border border-white/[0.32] px-4 py-[10px] text-[14px] leading-5 text-white'
          onClick={() => {setUserGuide(false),setProfileInfoPage(false)}}
        >
          Save & Close
        </button>
      </div>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-6 rounded-[16px] px-[190px] pt-[48px]'>
          <div className='flex justify-center gap-4'>
            <div className='flex items-center gap-4'>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-white                  ${
                  activeStep === 0
                    ? 'bg-[#5848BC]'
                    : activeStep >= 1
                    ? 'bg-[#2EAA1B]'
                    : 'bg-[#FFFFFF14]' // Set a default color for other steps
                }                  
                  `}
              >
                {/* ${
                    activeStep === 0 ? 'bg-[#5848BC]' : 'bg-[#2EAA1B]'
                  } */}
                <Image
                  src={activeStep === 0 ? userPenIcon : RightIcon}
                  alt=''
                />
              </div>
              <div>
                <p className='text-[15px]'>
                  Profile info
                  <span className='pl-1 text-[#979797]'>
                    {selectedTags.length}/4
                  </span>
                </p>
                <div
                  className={`mt-1 h-1 w-[155px] rounded-xl ${
                    activeStep === 0 ? 'bg-[#5848BC]' : ''
                  } bg-opacity-[40%]`}
                >
                  <div
                    className={`h-1  ${
                      selectedTags.length == 1
                        ? 'w-[25%]'
                        : selectedTags.length == 2
                        ? 'w-[50%]'
                        : selectedTags.length == 3
                        ? 'w-[75%]'
                        : selectedTags.length == 4
                        ? 'w-[100%] '
                        : 'bg-[#5848BC]'
                    } ${
                      activeStep === 0 ? '' : '!bg-[#2EAA1B] w-full'
                    }w-0 rounded-xl bg-[#5848BC]  `}
                  ></div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${
                  activeStep === 1
                    ? 'bg-[#5848BC]'
                    : activeStep >= 1
                    ? 'bg-[#2EAA1B]'
                    : 'bg-[#FFFFFF14]' // Set a default color for other steps
                }
                  `}
              >
                <Image
                  src={
                    activeStep === 1
                      ? personalityWhiteIcon
                      : activeStep >= 1
                      ? RightIcon
                      : personalityIcon
                  }
                  alt=''
                  className='text-white'
                />
              </div>
              <div>
                <p className='text-[15px]'>
                  Personality
                  <span className='pl-1 text-[#979797]'>
                    {personalityLength}/5
                  </span>
                </p>
                <div
                  className={`mt-1 h-1 w-[155px] rounded-xl  ${
                    activeStep === 1
                      ? 'bg-[#5848BC] bg-opacity-[40%]'
                      : 'bg-[#FFFFFF1F]  '
                  }`}
                >
                  <div
                    className={`h-1 w-0 ${
                      activeStep === 1
                        ? 'bg-[#5848BC]'
                        : activeStep >= 1
                        ? 'w-full !bg-[#2EAA1B]'
                        : 'bg-[#5848BC]'
                    } rounded-xl`}
                  ></div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div
                className={`setup_character flex h-10 w-10 items-center justify-center rounded-full text-white 
                  ${
                    activeStep === 2
                      ? 'bg-[#5848BC]'
                      : activeStep >= 2
                      ? 'bg-[#2EAA1B]'
                      : 'bg-[#FFFFFF14]'
                  }
                  `}
              >
                <Image
                  src={
                    activeStep === 2
                      ? imagePlusWhiteIcon
                      : activeStep >= 2
                      ? RightIcon
                      : imagePlusIcon
                  }
                  alt=''
                  className='text-white'
                />
              </div>
              <div>
                <p className='text-[15px]'>
                  Images
                  <span className='pl-1 text-[#979797]'>
                    {threadStep.length}/4
                  </span>
                </p>
                <div
                  className={`mt-1 h-1 w-[155px] rounded-xl  ${
                    activeStep === 2
                      ? 'bg-[#5848BC] bg-opacity-[40%]'
                      : 'bg-[#FFFFFF1F]  '
                  }`}
                >
                  <div
                    className={`h-1 w-0 ${
                      threadStep.length == 1
                        ? 'w-[25%]'
                        : threadStep.length == 2
                        ? 'w-[50%]'
                        : threadStep.length == 3
                        ? 'w-[75%]'
                        : threadStep.length == 4
                        ? 'w-[100%]'
                        : 'w-0'
                    } ${
                      activeStep === 2
                        ? 'bg-[#5848BC]'
                        : activeStep >= 2
                        ? 'w-[100%] !bg-[#2EAA1B]'
                        : 'bg-[#5848BC]'
                    } rounded-xl `}
                  ></div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-white
                  ${
                    activeStep === 3
                      ? 'bg-[#5848BC]'
                      : activeStep >= 3
                      ? 'bg-[#2EAA1B]'
                      : 'bg-[#FFFFFF14]'
                  }`}
              >
                <Image
                  src={
                    activeStep === 3
                      ? paletteWhiteIcon
                      : activeStep >= 3
                      ? RightIcon
                      : palette
                  }
                  alt=''
                  className='text-white'
                />
              </div>
              <div>
                <p className='text-[15px]'>
                  Style
                  <span className='pl-1 text-[#979797]'>
                    {fourthStep.length}/1
                  </span>
                </p>
                <div
                  className={`mt-1 h-1 w-[155px] rounded-xl  ${
                    activeStep === 3
                      ? 'bg-[#5848BC] bg-opacity-[40%]'
                      : 'bg-[#FFFFFF1F]  '
                  }`}
                >
                  <div
                    className={`h-1 w-0 ${
                      fourthStep.length == 1 ? 'w-[100%] ' : 'w-0'
                    } ${
                      activeStep === 3
                        ? 'bg-[#5848BC]'
                        : activeStep >= 3
                        ? 'w-[100%] !bg-[#2EAA1B]'
                        : 'bg-[#5848BC]'
                    } rounded-xl `}
                  ></div>
                </div>
              </div>
            </div>

            <div className='flex gap-4'>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full  ${
                  activeStep === 4 ? 'active bg-[#5848BC] ' : 'bg-[#FFFFFF14] '
                }`}
              >
                <Image src={activeStep === 4 ? flagWhite : flag} alt='' />
              </div>
            </div>
          </div>
          <div className='m-auto flex w-full max-w-[965px] items-center gap-2 rounded-[12px] bg-[#5848BC1F]/[0.12] px-4 py-3'>
            <Image src={circleInformation} alt={''} />
            <div className='font-normal text-[13px] leading-[18px] text-[#7362C6]'>
              {activeStep === 0
                ? 'Set up a character profile. Explore view tab is a way that other users can find you in Egirls.'
                : activeStep === 1
                ? 'Add creativity, likes and traits to your character. You can also add some description.'
                : activeStep === 2
                ? 'Create images for what your Egirl will look like. We will use this as a reference for what your character will  look like in the future.'
                : activeStep === 3
                ? 'Add images you created from the image generator here to create a character style. This style will be used to generate future images of your character.'
                : activeStep === 4
                ? 'Select a profile picture and explore view images'
                : ''}
            </div>
          </div>
          {activeStep === 0 && (
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
                            autoComplete='off'
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
                    onChange={(e)=>handleInputChange(e)}
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
          )}
          <div>
            {activeStep === 1 && (
              <PersonalityContent
                SetBtnSteps={setBtnSteps}
                personalityData={personalityData}
                setPersonalityData={setPersonalityData}
              />
            )}
            {activeStep === 2 && <ImageGeneratorIndex />}
            {activeStep === 3 && <StyleGeneratorIndex />}
            {activeStep === 4 && (
              <div className='flex items-center justify-center'>
                <ViewProfile />
              </div>
            )}
          </div>
        </div>

        <div className='flex items-end justify-between px-6 pb-8'>
          <button
            className={`flex cursor-pointer items-center justify-center rounded-[14px] border-none bg-[#FFFFFF14] p-[13px] text-white ${
              activeStep === 0 ? 'invisible' : 'visible'
            }`}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <Image src={leftArrowIcon} />
          </button>
          {activeStep === 4 ? (
            <button
              className={`font-bold flex items-center justify-center gap-2 rounded-[14px] bg-[#5848BC]
         px-5 py-[13px] text-[16px] leading-[22px] text-white`}
              onClick={() => setFinishStepCongrats(true)}
            >
              <span>Finish</span> <Image src={RightIcon} />
            </button>
          ) : (
            <>
              {btnSteps ? (
                <button
                  className={`font-bold flex items-center justify-center rounded-[14px] bg-[#5848BC] px-5
               py-[13px] text-[16px] leading-[22px] text-white `}
                  onClick={handleNext}
                  disabled={activeStep === 4}
                >
                  Next
                </button>
              ) : (
                <div className='relative group'>
                  <button
                    className={`font-boldflex items-center justify-center rounded-[14px]
               bg-[#5848BC52] px-5 py-[13px] text-[16px] leading-[22px] text-[#FFFFFF52] `}
                  >
                    {' '}
                    Next
                  </button>
                  <div className='absolute right-0 z-50 transition-all transform -top-7 w-max -translate-x-0 -translate-y-2/4 '>
                    <div
                      className={` before:translate-[-50%,0] z-50 hidden rounded-lg bg-[#303030] px-3 py-1.5 group-hover:block `}
                    >
                      Please fill in the form to continue
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {FinishStepCongrats && (
        <FinishStepModal FinishStepCongratsModal={FinishStepCongratsModal} />
      )}
    </div>
  );
};

export default ProfileInfoModal;
