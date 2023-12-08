import HomeContent from '@components/home';
import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import WelcomeStepsModal from './auth/WelcomeSteps';
export default function Home() {
  const signUpUserId = Cookies.get('signUpUserId');
  const [welcomeStepsModal, setWelcomeStepsModal] = useState<boolean>(false);
   useEffect(()=>{
    if(signUpUserId){
      setWelcomeStepsModal(true) 
    }
  },[signUpUserId])
  
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