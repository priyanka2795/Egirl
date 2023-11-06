import HomeContent from '@components/home';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import { Database } from '../../types/database';
import { User, useSupabaseClient } from '@supabase/auth-helpers-react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
export default function Home({ user }: { user: User }) {
  const router = useRouter();
  const supabase = useSupabaseClient<Database>();
  const accessToken = Cookies.get("accessToken")
  const refreshToken = Cookies.get("refreshToken")
useEffect(()=>{
  if(!accessToken ||!refreshToken){
    router.push('/auth/signin')
  }
},[accessToken,refreshToken])

return (
    <>
      <div>
        <HomeContent />
      </div>
    </>
  );
}

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   // Create authenticated Supabase Client
//   const supabase = createServerSupabaseClient(ctx);
//   // Check if we have a session
//   const {
//     data: { session }
//   } = await supabase.auth.getSession();
//   console.log('session: ', session);

//   if (!session)
//     return {
//       redirect: {
//         destination: '/auth/signin',
//         permanent: false
//       }
//     };

//   return {
//     props: {
//       initialSession: session,
//       user: session.user
//     }
//   };
// };
