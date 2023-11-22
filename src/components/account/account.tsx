import { useState, useEffect } from 'react';
import { getUsername } from '../../api/profile/users';


export default function Account() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   getUsername(setLoading, setUsername);
  // }, [session]);

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
        <button className='block button primary' disabled={loading}>
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button
          className='block button'
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
