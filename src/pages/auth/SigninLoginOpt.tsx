import React from 'react';
import googleIcon from '../../../public/assets/google-icon.png';
import discordIcon from '../../../public/assets/discord-icon.png';
import facebookIcon from '../../../public/assets/facebook-icon.png';
import Image from 'next/image';
import Link from 'next/link';
import { discordCallback, discordLogin } from 'services/services';

interface SignInLoginOptProp {
  heading: string;
  pageName: string;
}

const SigninLoginOpt = ({ heading, pageName }: SignInLoginOptProp) => {
  const handleDiscordLogin = (index: number) => {
    if (index === 1) {
      discordLogin()
        .then((res: any) => {
          console.log('discord????--', res);
          if (res.status === 307) {
            const redirectedURL = res.headers.get('Location');
            console.log('Redirected URL:', redirectedURL);
            window.location.href = redirectedURL; 
          } else {
            console.log("reError????");
          }
        })
        .catch((err) => {
          console.log('discord????error--', err);
        });

    }
  };
  const buttonActionText = pageName === 'signup' ? 'Login with ' : 'Sign Up with ';

  const login = [
    {
      icon: googleIcon,
      text: buttonActionText + 'Google'
    },
    {
      icon: discordIcon,
      text: buttonActionText + 'Discord'
    },
    {
      icon: facebookIcon,
      text: buttonActionText + 'Facebook'
    }
  ];

  const userTypeText = pageName === 'signup' ? 'New user?' : 'Existing user?';

  return (
    <>
      <div className='font-bold text-[32px] leading-10 text-white'>
        {heading}
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          {login.map((item, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => handleDiscordLogin(index)}
                  className='flex w-full items-center justify-center gap-[10px] rounded-[16px] border border-white/[0.16] px-3 pb-[13px] pt-[11px]'
                >
                  <Image src={item.icon} alt={''} />
                  <div className='font-normal text-[15px] leading-5'>
                    {item.text}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
        <div className='flex gap-[6px]'>
          <div className='font-normal text-[15px] leading-5 text-white'>
            {userTypeText}
          </div>
          <Link href={`/${pageName}`}>
            <a className='font-normal cursor-pointer text-[15px] leading-5 text-[#5848BC]'>
              {pageName === 'login' ? 'Sign in' : 'Sign up'}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SigninLoginOpt;
