import HomeContent from '@components/home';
import React, { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import WelcomeStepsModal from './auth/welcomeSteps';
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

  console.log(signupCompletedState, 'signUpCompleted');
  return (
    <>
      <div>
        {signupCompletedState && (
          <>
            <p>Hello</p>
            <WelcomeStepsModal
              welcomeStepsModal={signupCompletedState}
              setWelcomeStepsModal={setSignupCompletedState}
              signUpCompleted={setSignupCompletedState}
            />
          </>
        )}
        {signupCompletedState === false && <HomeContent />}
      </div>
    </>
  );
}
