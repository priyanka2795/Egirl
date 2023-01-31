import { supabaseClient } from '../../config/supabaseClient';

async function profile() {
  const data = [
    {
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      username: 'chrisPbacon',
      display_name: 'Chris P. Bacon',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      user_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      username: 'sauceGuy',
      display_name: 'Sauce Y. Guy',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      user_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      username: 'hurrrr',
      display_name: 'Hurrrr Durrrr. Murrrr',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('profile').insert(data);

  if (error) {
    console.log(error);
  }
}
profile();

async function creators() {
  const data = [
    {
      id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('creators').insert(data);

  if (error) {
    console.log(error);
  }
}
creators();

async function characters() {
  const data = [
    {
      id: 1,
      username: 'user_character1',
      display_name: 'character1',
      is_verified: true,
      bio: 'insert bio here',
      creator_id: 1,
      profile_picture: 'www.character-image.com',
      profile_banner_picture: 'www.character-imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      username: 'user_character2',
      display_name: 'character2',
      is_verified: false,
      bio: 'insert bio here',
      creator_id: 2,
      profile_picture: 'www.character-image.com',
      profile_banner_picture: 'www.character-imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      username: 'user_character3',
      display_name: 'character3',
      is_verified: false,
      bio: 'insert bio here',
      creator_id: 3,
      profile_picture: 'www.character-image.com',
      profile_banner_picture: 'www.character-imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('characters').insert(data);

  if (error) {
    console.log(error);
  }
}
characters();

async function user_subscriptions() {
  const data = [
    {
      id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      character_id: 1,
      subscription_tier: 'TIER 1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      character_id: 2,
      subscription_tier: 'TIER 2',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      character_id: 3,
      subscription_tier: 'TIER 3',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient
    .from('user_subscriptions')
    .insert(data);

  if (error) {
    console.log(error);
  }
}
user_subscriptions();

async function creator_subscriptions() {
  const data = [
    {
      id: 1,
      subscriber_id: 1,
      subscription_tier: 'TIER 1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      subscriber_id: 2,
      subscription_tier: 'TIER 3',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      subscriber_id: 3,
      subscription_tier: 'TIER 2',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient
    .from('creator_subscriptions')
    .insert(data);

  if (error) {
    console.log(error);
  }
}
creator_subscriptions();

async function followers() {
  const data = [
    {
      id: 1,
      follower_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      follower_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      follower_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('followers').insert(data);

  if (error) {
    console.log(error);
  }
}
followers();

async function hashtags() {
  const data = [
    {
      id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      follower_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      follower_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('followers').insert(data);

  if (error) {
    console.log(error);
  }
}
hashtags();

async function info_tags() {
  const data = [
    {
      id: 1,
      name: 'dom',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      name: 'kinky',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      name: 'bdsm',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('followers').insert(data);

  if (error) {
    console.log(error);
  }
}
info_tags();
