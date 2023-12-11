import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AuthenticatorProps {
  children: string;
 }

function Authenticator({ children }: AuthenticatorProps) {
  const token: string | undefined = Cookies.get('accessToken');
  const router = useRouter();
 
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

  useEffect(() => {
    if (!token) {
      for (let path of homeRoutes) {
        if (router.pathname.includes(path)) {
          router.push('/login');
        }
      }
    } else {
      for (let path of loginRoutes) {
        if (router.pathname.includes(path)) {
          router.push('/home');
        }
      }
    }
  }, [token]);

  return <>{children}</>;
}

export default Authenticator;