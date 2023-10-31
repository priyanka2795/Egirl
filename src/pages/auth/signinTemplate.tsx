import React from 'react';

import { useRouter } from 'next/router';
import bgImage from '../../../public/assets/sign-in-bg-img.png';
import logo from '../../../public/assets/Logo-white.png';
import Image from 'next/image';
import googleIcon from '../../../public/assets/google-icon.png';
import discordIcon from '../../../public/assets/discord-icon.png';
import facebookIcon from '../../../public/assets/facebook-icon.png';
import vector1 from '../../../public/assets/Vector 1.png';
import vector2 from '../../../public/assets/Vector 2.png';
import Link from 'next/link';


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
