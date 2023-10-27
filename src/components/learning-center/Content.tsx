import React, { useState, useEffect } from 'react';
import SocialMediaContent from './SocialMediaContent';

interface ContentProps {
  contentData: any;
}
function Content({ contentData }: ContentProps) {
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
    <div className='right-23 fixed bg-[#070707]'>
      <div className='text-[13px] uppercase text-[#515151]'>Contents</div>
      <div className='mt-2 leading-8'>
        {contentData.map((ele: any, index: number) => {
          return (
            <div
              key={index}
              className={`${
                getLocation === ele.id
                  ? 'border-l-[1px] border-white'
                  : 'border-l-[1px] border-white/[0.12]'
              }  pl-3 text-[15px] text-[#979797]`}
            >
              <a href={ele.id}>{ele.title}</a>
            </div>
          );
        })}
      </div>
      <SocialMediaContent />
    </div>
  );
}

export default Content;
