import HomeContent from '@components/home';
import React, { useEffect} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const accessToken = Cookies.get('accessToken');
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
