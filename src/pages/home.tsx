import HomeContent from '@components/home';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import WelcomeStepsModal from './auth/WelcomeSteps';
export default function Home() {
  const router = useRouter();
  const accessToken = Cookies.get('accessToken');
  const signUpUserId = Cookies.get('signUpUserId');
  const [welcomeStepsModal, setWelcomeStepsModal] = useState<boolean>(false);
   useEffect(()=>{
    if(signUpUserId){
      setWelcomeStepsModal(true) 
    }
  }, [signUpUserId]);

  useEffect(() => {
    if (!accessToken) {
      router.push('/login');
    }
  }, [accessToken]);

  return (
    <>
      <div>
       {welcomeStepsModal === true ? ''  :
        <HomeContent /> 
        } 
     </div>
     {welcomeStepsModal && (
        <WelcomeStepsModal
          welcomeStepsModal={welcomeStepsModal}
          setWelcomeStepsModal={setWelcomeStepsModal}
        />
      )}
    </>
  );
}
