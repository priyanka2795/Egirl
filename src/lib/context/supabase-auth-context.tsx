import React, { createContext, useContext, useEffect, useState } from 'react';

import { Session, User } from '@supabase/auth-helpers-nextjs';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export const SupabaseAuthContext = createContext<{
  user: User | null;
  session: Session | null;
}>({
  user: null,
  session: null
});

const SupabaseAuthContextProvider = (props: any) => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        setUserSession(session);
        setUser(session?.user ?? null);

        // if (session?.user) {
        //   router.push('/home2');
        // }
      }
    );

    return () => {
      authListener.subscription;
    };
  }, []);

  const value = {
    userSession,
    user
  };
  return <SupabaseAuthContext.Provider value={value} {...props} />;
};

export default SupabaseAuthContextProvider;
