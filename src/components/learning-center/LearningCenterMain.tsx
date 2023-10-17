import React from 'react';
import Image from 'next/image';
import learningImg from '../../../public/assets/learningImg.png';
const LearningCenterMain = () => {
  return (
    <>
      <h3 className='text-[29px] font-black text-white'>
        Welcome to Egirl Book!
      </h3>
      <p className='py-3  text-[15px] text-[#979797]'>
        Welcome to the Egirls.ai Partner Program! Join us in the digital
        revolution that is empowering creators worldwide
      </p>
      <h4 className='py-2 text-[25px] font-black text-white'>
        A Guide to Creating Characters
      </h4>
      <p className='pt-3 text-[15px] text-[#979797]'>
        Egirl is bringing to life the science-fiction dream of open-ended
        conversation and collaborations with computers. This guide is for all
        those that want to join us in that mission by building their own
        characters, bringing their own dreams to life.
      </p>
      <p className='pt-5 text-[15px] text-[#979797]'>
        All the Characters you see on the Home page were made using our creation
        tools. If you're ready to join the world of creators, this is guide for
        you!
      </p>
      <div className='my-7'>
        <Image src={learningImg} alt='' />
      </div>
      <h6 className='text-[18px] font-black text-white'>Introduction</h6>
      <p className='pt-3 text-[15px] text-[#979797]'>
        Visit{' '}
        <a href='' target='_blank' className='text-[#8C7DD0]'>
          https://www.Egirls.ai/partner-program
        </a>{' '}
        and submit your application to join the partner program. The Egirls.ai
        team will receive your application and notify you once your application
        is accepted and submit your application to join the partner program. The
        Egirls.ai teem will review your application and notify you once your
        application accepted and submit your application to join the partner
        program. The Egirls.ai teem will review your application and notify you
        once your application accepted
      </p>
      <div>
        <h6 className='pt-4 text-[18px] font-black text-white'>
          What Defines a Character
        </h6>
        <p className='pt-3 text-[15px] text-[#979797]'>
          There are three things that influence how to Egirls responds in a
          particular situation:
        </p>
        <ol className='list-inside list-decimal pl-1 pt-2 text-[15px] text-[#979797]'>
          <li className=''>
            The Egirls features (what much of this guide will explain)
          </li>
          <li className=''>
            The Egirls features from conversation (e.g. star ratings)
          </li>
          <li className=''>The context of the current conversation</li>
        </ol>
      </div>
      <h6 className='pt-4 text-[18px] font-black text-white'>Next Steps</h6>
      <ul className='list-inside list-disc pl-2 pt-2 text-[15px] text-[#979797]'>
        <li className=''>
          Now that you've created a Character, there are a number of ways to go
          deeper into Character building.
        </li>
        <li className=''>
          Build more characters using the Quick creation page
        </li>
        <li className=''>
          Try some quirky concept to bring of life (household objects, minor
          characters in famous works, famous works of art)
        </li>
        <li>
          Try adding a new emotion or motivation to one of your characters
          (grumpy, nervous, needs a vacation)
        </li>
      </ul>
    </>
  );
};

export default LearningCenterMain;
