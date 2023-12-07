import React from 'react';
import logo from '@/assets/Logo-white.webp';
import Image from 'next/image';

const SigninTemplate = ({ children }: any) => {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-center'>
      <div
        className={`signin-page mx-8 my-[35px] flex h-[800px] justify-between `}
      >
        <div className='pt-[20px]'>
          <Image className='' src={logo} alt={''} />
        </div>
        <div className='self-center p-[54px]'>{children}</div>
      </div>
    </div>
  );
};

export default SigninTemplate;
