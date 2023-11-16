import MessagesContent from '@components/messages';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { Database } from '../../types/database';
import { User, useSupabaseClient } from '@supabase/auth-helpers-react';
import Layout from '@components/common/Layout';
export default function Explore({ user }: { user: User }) {
  const supabase = useSupabaseClient<Database>();

  return (
    <>
      {/* <div>
        <MessagesContent />
      </div> */}
      <Layout>
       <MessagesContent />
      </Layout>
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
