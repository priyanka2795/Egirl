import { usersCollection } from '@lib/firebase/collections';
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
      infotag_ids: [1, 2],
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
      infotag_ids: [2, 3],
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
      infotag_ids: [1, 3],
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('characters').insert(data);

  if (error) {
    console.log(error);
  }
}

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

async function hashtags() {
  const data = [
    {
      id: 1,
      created_by: 1,
      name: 'hash1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      created_by: 2,
      name: 'hash2',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      created_by: 2,
      name: 'hash2',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('hashtags').insert(data);

  if (error) {
    console.log(error);
  }
}

async function infotags() {
  const data = [
    {
      id: 1,
      created_by: 1,
      name: 'dom',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      created_by: 2,
      name: 'kinky',
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      created_by: 3,
      name: 'bdsm',
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('infotags').insert(data);

  if (error) {
    console.log(error);
  }
}

async function posts() {
  const data = [
    {
      id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      character_id: 1,
      title: 'mod',
      description: 'this is a mod',
      prompt_description: 'todo',
      is_ppv: false,
      is_character_post: true,
      hashtag_ids: [1, 2],
      infotag_ids: [1, 2],
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      character_id: 2,
      title: 'dom',
      description: 'this is a dom',
      prompt_description: 'todo',
      is_ppv: true,
      is_character_post: true,
      hashtag_ids: [2, 3],
      infotag_ids: [2, 3],
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      character_id: 3,
      title: 'abc',
      description: 'this is a abc',
      prompt_description: 'todo',
      is_ppv: true,
      is_character_post: true,
      hashtags_id: [1, 3],
      infotags_id: [1, 3],
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('posts').insert(data);

  if (error) {
    console.log(error);
  }
}

async function media() {
  const data = [
    {
      id: 1,
      post_id: 1,
      media_type: 'jpg',
      media_url: 'https://www.google.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      post_id: 2,
      media_type: 'png',
      media_url: 'https://www.facebook.com',
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      post_id: 3,
      media_type: 'svg',
      media_url: 'https://www.twitter.com',
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('media').insert(data);

  if (error) {
    console.log(error);
  }
}

async function comments() {
  const data = [
    {
      id: 1,
      post_id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      description: 'sick bro',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      post_id: 2,
      user_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      description: 'tf boi',
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      post_id: 3,
      user_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      description: 'big titty goth gf',
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('comments').insert(data);

  if (error) {
    console.log(error);
  }
}

async function post_likes() {
  const data = [
    {
      id: 1,
      post_id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      is_like: true,
      is_super: false,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      post_id: 2,
      user_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      is_like: false,
      is_super: false,
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      post_id: 3,
      user_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      is_like: true,
      is_super: true,
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('post_likes').insert(data);

  if (error) {
    console.log(error);
  }
}

async function items() {
  const data = [
    {
      id: 1,
      name: 'item1',
      creator_id: 1,
      owner_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      price: 10.25,
      rarity: 'rare',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      name: 'item2',
      creator_id: 2,
      owner_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      price: 14.36,
      rarity: 'common',
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      name: 'item3',
      creator_id: 3,
      owner_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      price: 18.97,
      rarity: 'common',
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('items').insert(data);

  if (error) {
    console.log(error);
  }
}

async function bookmarks() {
  const data = [
    {
      id: 1,
      user_id: '1dd94d8b-c048-4b21-8571-583296db317e',
      post_id: 1,
      media_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'fc180fa6-465c-4a1e-b015-05f1004d4cf9',
      post_id: 2,
      media_id: 2,
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'f771cfea-d30e-4157-b2f4-793857033165',
      post_id: 3,
      media_id: 3,
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

  const { error } = await supabaseClient.from('bookmarks').insert(data);

  if (error) {
    console.log(error);
  }
}

async function main() {
  await profile();
  console.log('profile done');
  await creators();
  console.log('creators done');
  await characters();
  console.log('characters done');
  await user_subscriptions();
  console.log('user_subscriptions done');
  await creator_subscriptions();
  console.log('creator_subscriptions done');
  await followers();
  console.log('followers done');
  await hashtags();
  console.log('hashtags done');
  await infotags();
  console.log('infotags done');
  await posts();
  console.log('posts done');
  await media();
  console.log('media done');
  await comments();
  console.log('comments done');
  await post_likes();
  console.log('post_likes done');
  await items();
  console.log('items done');
  await bookmarks();
  console.log('bookmarks done');
}

main();
