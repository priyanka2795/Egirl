import HomeContent from '@components/home';
import React, { useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const accessToken = Cookies.get("accessToken")
  const refreshToken = Cookies.get("refreshToken")
// useEffect(()=>{
//   if(!accessToken){
//     router.push('/login')
//   }
// },[accessToken])

return (
    <>
      <div>
        <HomeContent />
      </div>
    </>
  );
}

