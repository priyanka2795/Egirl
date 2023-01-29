import { useState, useEffect } from 'react';
import {
  useUser,
  useSupabaseClient,
  Session
} from '@supabase/auth-helpers-react';
import { Database } from '../../../api/types/supabase';
import { getUsername } from '../../../api/profile/users';
type Users = Database['public']['Tables']['users']['Row'];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Users['username']>('');
  const [password, setPassword] = useState<Users['password']>('');

  useEffect(() => {
    getUsername(setLoading, setUsername);
  }, [session]);

  return (
    <div className='form-widget'>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='text'
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button className='button primary block' disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button
          className='button block'
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
