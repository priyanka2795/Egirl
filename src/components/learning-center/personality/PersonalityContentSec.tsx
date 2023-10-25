import React, { useState, useEffect } from 'react';
import SocialMediaContent from '../SocialMediaContent';
const PersonalityContentSec = () => {
  const [getLocation, setGetLocation] = useState('');
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setGetLocation(hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [getLocation]);

  return (
    <div className='relative z-[60] w-[990px]  py-2'>
      <div className='right-23 fixed bg-[#070707]'>
        <div className='text-[13px] uppercase text-[#515151]'>Contents</div>
        <div className='mt-2 leading-8'>
          <div
            className={`${
              getLocation === '#character_profile'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-3 text-[15px] text-[#979797]`}
          >
            <a href='#character_profile'>What is a character Profile?</a>
          </div>
          <div
            className={`${
              getLocation === '#how_it_work'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-3 text-[15px] text-[#979797]`}
          >
            <a href='#how_it_work'>How it works?</a>
          </div>
          <div
            className={`${
              getLocation === '#base_type'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-3 text-[15px] text-[#979797]`}
          >
            <a href='#base_type'>Base type</a>
          </div>
          <div
            className={`${
              getLocation === '#roleplay'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-6 text-[15px] text-[#979797]`}
          >
            <a href='#roleplay'>Roleplay</a>
          </div>
          <div
            className={`${
              getLocation === '#conversational'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-6 text-[15px] text-[#979797]`}
          >
            <a href='#conversational'>Conversational</a>
          </div>
          <div
            className={`${
              getLocation === '#likes'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-3 text-[15px] text-[#979797]`}
          >
            <a href='#likes'>Likes</a>
          </div>
          <div
            className={`${
              getLocation === '#traits'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-3 text-[15px] text-[#979797]`}
          >
            <a href='#traits'>Traits</a>
          </div>
          <div
            className={`${
              getLocation === '#description'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-3 text-[15px] text-[#979797]`}
          >
            <a href='#description'>Description</a>
          </div>
          <div
            className={`${
              getLocation === '#general_desc'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-6 text-[15px] text-[#979797]`}
          >
            <a href='#general_desc'>General Description</a>
          </div>
          <div
            className={`${
              getLocation === '#world_desc'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-6 text-[15px] text-[#979797]`}
          >
            <a href='#world_desc'>World Description</a>
          </div>
          <div
            className={`${
              getLocation === '#why_is_so_important'
                ? 'border-l-[1px] border-white'
                : 'border-l-[1px] border-white/[0.12]'
            }  pl-9 text-[15px] text-[#979797]`}
          >
            <a href='#why_is_so_important'>Why is this so important?</a>
          </div>
        </div>
        <SocialMediaContent/>
      </div>
    </div>
  );
};

export default PersonalityContentSec;
// right-23 fixed bg-[#070707]
