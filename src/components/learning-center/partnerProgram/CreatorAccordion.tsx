import React, { useState } from 'react';
import Image from 'next/image';
import minus from '@/assets/minus.webp';
import plus from '@/assets/plus-gray.webp';

const data = [
  {
    title: 'For creators with an existing digital persona',
    text: [
      'Partnering with Egirls allows you to build an AI version of yourself or your digital persona.',
      'Tap into our state of the art machine learning models, and build an amazing experience for your fans.'
    ]
  },
  {
    title: 'For creators with an existing digital persona',
    text: [
      'Partnering with Egirls allows you to build an AI version of yourself or your digital persona.',
      'Build an Egirl from scratch right on our platform, having every tool we offer at your disposal'
    ]
  }
];
function CreatorAccordion() {
  const [show, setShow] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setShow((prev: number | null) => {
      return prev === index ? null : index;
    });
  };
  return (
    <>
      <div className='pt-8 text-[27px] font-black text-white' id='for_creators'>
        For Creators
      </div>
      <p className='text-[16px] text-[#979797]'>
        Start your onboarding journey with beginner-friendly tips that will have
        you create your own unique characters.
      </p>
      {data.map((e, index) => {
        return (
          <div
            className='my-4 min-w-[671px] rounded-[20px] border border-white/[0.08] bg-white/[0.07] p-5'
            key={index}
          >
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => handleToggle(index)}
            >
              <div className='text-[15px] font-black text-white'>{e.title}</div>
              <Image src={show === index ? minus : plus} alt='' />
            </div>
            {show === index ? (
              <ul className='ml-2 list-disc list-inside'>
                {e.text.map((ele, index) => {
                  return (
                    <li className='pt-3 text-[15px] text-[#979797]' key={index}>
                      {ele}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </>
  );
}

export default CreatorAccordion;
