import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Authenticator({ children }: any) {
  const token: any = Cookies.get('accessToken');
  const router = useRouter();
  console.log(router.pathname);
  const loginRoutes = ['/login', '/signup'];
  const homeRoutes = [
    '/home',
    '/explore',
    '/messages',
    '/lists',
    '/add-card',
    '/referrals',
    '/creator-studio',
    '/analytics',
    '/view-images',
    '/image-generator',
    '/personality',
    '/voice',
    '/gifts',
    '/view-style',
    '/style-generator',
    '/marketplace'
  ];
  useEffect(()=>{
    if(!token){
        for(let path of homeRoutes){
            if(router.pathname.includes(path)){
                router.push('/')
            }
        }
    }else{
        
    }
  },[token])
  return <div>{children}</div>;
}

export default Authenticator;
