import React from 'react';
import PersonalityS1 from './PersonalityS1';
import PersonalityLikeSection from './PersonalityLikeSection';
import PersonalityTraitsSection from './PersonalityTraitsSection';
import Image from 'next/image';
import circleInformation from '@/assets/circle-information.webp';
import {  updateCharacterPersonality } from 'services/services';

interface PersonalityContent {
  SetBtnSteps?: any;
  personalityData?: any;
  setPersonalityData?: any;
  handleSavePersonality?:any;
  personalityAPIData?:any
}
const PersonalityContent = ({
  SetBtnSteps,
  personalityData,
  setPersonalityData,
  handleSavePersonality,
  personalityAPIData
}: PersonalityContent) => {
  const HandleChange = (e: any) => {
    const { name, value } = e.target;
    setPersonalityData((prevData: any) => ({
      ...prevData,
      [name]: value
    }));
  };
  const updateCharacterApi = async (data: any, token: string | null) => {
    try {
      const response = await updateCharacterPersonality( data, token);
      console.log('Character updated successfully!', response);
      return response;
    } catch (error) {
      console.error('Error updating character:', error);
      throw error;
    }
  };


  // useEffect(() => {
  //   if (
  //     personalityData.base_type !== '' &&
  //     personalityData.creativity !== 0 &&
  //     personalityData.description !== '' &&
  //     personalityData.worldDescription !== ''
  //   ) {
  //     SetBtnSteps(true);
  //   } else {
  //     SetBtnSteps(false);
  //   }
  // }, [personalityData]);
  

  return (
    <>
      <div className='flex flex-col items-start self-stretch gap-4'>
        <PersonalityS1
          setPersonalityData={setPersonalityData}
        />

        <PersonalityLikeSection
          setPersonalityData={setPersonalityData}
          personalityData={personalityData}
        />

        <PersonalityTraitsSection
          setPersonalityData={setPersonalityData}
          personalityData={personalityData}
        />

        <div className='flex w-full flex-col gap-4 rounded-[14px] bg-[#121212] p-6'>
          <div className='flex gap-[6px]'>
            <div className='font-bold text-[18px] leading-6 text-[#FFFFFF]'>
              Descriptions
            </div>
            <div className='w-4 h-4'>
              <Image
                className='w-full h-full'
                src={circleInformation}
                alt={''}
              />
            </div>
          </div>
          <div className='flex w-full gap-4'>
            <div className='flex w-1/2 flex-col gap-[6px]'>
              <div className='flex justify-between'>
                <div className='text-[13px] font-[500] leading-[18px] text-[#979797]'>
                  Description
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                  {personalityData?.general_description?.length}/2000
                </div>
              </div>
              <textarea
                className='font-normal h-[135px] resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] leading-6 text-white placeholder-[#979797] focus:ring-0'
                placeholder='Enter a description here...'
                name='general_description'
                value={personalityData.general_description}
                onChange={HandleChange}
                maxLength={2000}
              ></textarea>
            </div>
            <div className='flex w-1/2 flex-col gap-[6px]'>
              <div className='flex justify-between'>
                <div className='text-[13px] font-[500] leading-[18px] text-[#979797]'>
                  World Description
                </div>
                <div className='font-normal text-[14px] leading-[18px] text-[#515151]'>
                  {personalityData?.world_description?.length}/2000  
                </div>
              </div>
              <textarea
                className='font-normal h-[135px] resize-none rounded-[14px] border-none bg-white/[0.05] py-3 pl-4 pr-3 text-[15px] leading-6 text-white placeholder-[#979797] focus:ring-0'
                placeholder='Enter a world description here...'
                name='world_description'
                value={personalityData.world_description}
                onChange={HandleChange}
                maxLength={2000}
              ></textarea>
            </div>
          </div>
          {personalityAPIData ? <div className='font-bold ml-auto w-max items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[10px] text-[16px] leading-[22px] text-white'>
            Update
          </div> : <div onClick={handleSavePersonality} className='font-bold cursor-pointer ml-auto w-max items-center justify-center rounded-[14px] bg-[#5848BC] px-5 py-[10px] text-[16px] leading-[22px] text-white'>
            Save
          </div>}
         
        </div>
      </div>
    </>
  );
};

export default PersonalityContent;
