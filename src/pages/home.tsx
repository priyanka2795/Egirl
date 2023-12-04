import HomeContent from '@components/home';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const accessToken = Cookies.get('accessToken');
  const refreshToken = Cookies.get('refreshToken');
  const signUpCompleted = sessionStorage.getItem('SignUpCompleted');

  console.log('signUpCompleted:', signUpCompleted);
  const [signupCompletedState, setSignupCompletedState] = useState(
    signUpCompleted ? true : false
  );
  useEffect(() => {
    setSignupCompletedState(signUpCompleted ? true : false);
  }, [signUpCompleted]);

  console.log('sdff');
  useEffect(() => {
    if (!accessToken) {
      router.push('/login');
    }
  }, [accessToken]);

  return (
    <>
      <div>
        <HomeContent />
      </div>
    </>
  );
}
