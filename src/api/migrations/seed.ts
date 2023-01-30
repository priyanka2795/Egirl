import { supabaseClient } from '../../config/supabaseClient';

async function generateProfile() {
  const { error } = await supabaseClient.from('profile').insert({
    user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
    username: 'chrisPbacon',
    display_name: 'Chris P. Bacon',
    bio: '',
    location: '',
    created_at: '2016-07-24T03:32:45.678Z'
  });

  if (error) {
    console.log(error);
  }
}
generateProfile();
