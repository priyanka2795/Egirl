

async function profile() {
  const data = [
    {
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      username: 'chrisPbacon',
      display_name: 'Chris P. Bacon',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      username: 'sauceGuy',
      display_name: 'Sauce Y. Guy',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      username: 'hurrrr',
      display_name: 'Hurrrr Durrrr. Murrrr',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      username: 'htest',
      display_name: 'Sup',
      bio: '',
      location: '',
      profile_picture: 'www.image.com',
      profile_banner_picture: 'www.imagebanner.com',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function creators() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      is_verified: true,
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

  
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
      character_profile_tag_ids: [1, 2],
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
      character_profile_tag_ids: [2, 3],
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
      character_profile_tag_ids: [1, 3],
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function subscriptions() {
  const data = [
    {
      id: 1,
      subscription_name: 'basic package',
      subscription_price: 4.99,
      stripe_product_id: 'stripe product id 1',
      subscription_tier: 'TIER 1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      subscription_name: 'medium package',
      subscription_price: 14.99,
      stripe_product_id: 'stripe product id 2',
      subscription_tier: 'TIER 2',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      subscription_name: 'large package',
      subscription_price: 24.99,
      stripe_product_id: 'stripe product id 3',
      subscription_tier: 'TIER 3',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      subscription_name: 'creator basic package',
      subscription_price: 9.99,
      stripe_product_id: 'stripe product id 4',
      subscription_tier: 'TIER 4',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 5,
      subscription_name: 'creator medium package',
      subscription_price: 19.99,
      stripe_product_id: 'stripe product id 5',
      subscription_tier: 'TIER 5',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 6,
      subscription_name: 'creator large package',
      subscription_price: 29.99,
      stripe_product_id: 'stripe product id 6',
      subscription_tier: 'TIER 6',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

 
}

async function user_subscriptions() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      character_id: 1,
      subscription_id: 1,
      stripe_subscription_id: 'stripe subscription id 1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      character_id: 2,
      subscription_id: 2,
      stripe_subscription_id: 'stripe subscription id 2',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      character_id: 3,
      subscription_id: 3,
      stripe_subscription_id: 'stripe subscription id 3',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      character_id: 2,
      subscription_id: 4,
      stripe_subscription_id: 'stripe subscription id 4',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];
}

async function creator_subscriptions() {
  const data = [
    {
      id: 1,
      subscriber_id: 1,
      subscription_id: 4,
      stripe_subscription_id: 'stripe creator subscription id 1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      subscriber_id: 2,
      subscription_id: 5,
      stripe_subscription_id: 'stripe creator subscription id 2',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      subscriber_id: 3,
      subscription_id: 6,
      stripe_subscription_id: 'stripe creator subscription id 3',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function followers() {
  const data = [
    {
      id: 1,
      follower_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      follower_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      follower_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      follower_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      followed_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}


async function posts() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      character_id: 1,
      title: 'mod',
      description: 'this is a mod',
      prompt_description: 'todo',
      is_ppv: false,
      is_character_post: true,
      infotag_ids: [1, 2],
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      character_id: 2,
      title: 'dom',
      description: 'this is a dom',
      prompt_description: 'todo',
      is_ppv: true,
      is_character_post: true,
      infotag_ids: [2, 3],
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      character_id: 3,
      title: 'abc',
      description: 'this is a abc',
      prompt_description: 'todo',
      is_ppv: true,
      is_character_post: true,
      infotag_ids: [1, 3],
      created_at: '2018-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      character_id: 3,
      title: 'xyz',
      description: 'this is a xyz',
      prompt_description: 'todo',
      is_ppv: true,
      is_character_post: true,
      infotag_ids: [1, 3],
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];


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


}

async function comments() {
  const data = [
    {
      id: 1,
      post_id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      description: 'sick bro',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      post_id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      description: 'tf boi',
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      post_id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      description: 'big titty goth gf',
      created_at: '2018-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      post_id: 3,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      description: 'loooool',
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

}

async function post_likes() {
  const data = [
    {
      id: 1,
      post_id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      is_like: true,
      is_super: false,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      post_id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      is_like: false,
      is_super: false,
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      post_id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      is_like: true,
      is_super: true,
      created_at: '2018-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      post_id: 3,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      is_like: true,
      is_super: true,
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

}

async function items() {
  const data = [
    {
      id: 1,
      name: 'item1',
      creator_id: 1,
      owner_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      price: 10.25,
      rarity: 'rare',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      name: 'item2',
      creator_id: 2,
      owner_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      price: 14.36,
      rarity: 'common',
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      name: 'item3',
      creator_id: 3,
      owner_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      price: 18.97,
      rarity: 'common',
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

}

async function bookmarks() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      post_id: 1,
      media_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      post_id: 2,
      media_id: 2,
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      post_id: 3,
      media_id: 3,
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

}

async function interests() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      infotag_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      infotag_id: 2,
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      infotag_id: 3,
      created_at: '2018-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      infotag_id: 2,
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

}

async function lists() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      list_name: 'furries',
      character_ids: [1, 2],
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      list_name: 'ooooffff',
      character_ids: [2, 3],
      created_at: '2017-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      list_name: 'wowza',
      character_ids: [1, 3],
      created_at: '2018-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      list_name: 'myList',
      character_ids: [1, 2, 3],
      created_at: '2018-07-24T03:32:45.678Z'
    }
  ];

}

async function user_blocks() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      blocked_profile_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      blocked_character_id: 2,
      blocked_reason_title: 'blocked_reason1',
      blocked_description: 'blocked_description1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      blocked_profile_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      blocked_character_id: 3,
      blocked_reason_title: 'blocked_reason2',
      blocked_description: 'blocked_description2',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function user_reports() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      reported_profile_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      reported_character_id: 2,
      reported_reason_title: 'report_reason1',
      reported_description: 'report_description1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      reported_profile_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      reported_character_id: 3,
      reported_reason_title: 'report_reason2',
      reported_description: 'report_description2',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function messages_user_to_character() {
  const data = [
    {
      id: 1,
      room_id: 1,
      sender_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      recipient_id: 1,
      message: 'hey bb what is up',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      room_id: 2,
      sender_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      recipient_id: 1,
      message: 'yo this is a 2nd message',
      created_at: '2016-07-24T03:32:46.678Z'
    },
    {
      id: 3,
      room_id: 1,
      sender_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      recipient_id: 2,
      message: 'it is morbin time',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function messages_character_to_user() {
  const data = [
    {
      id: 1,
      room_id: 1,
      sender_id: 1,
      recipient_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      message: 'hey uwu uwu something something',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      room_id: 2,
      sender_id: 2,
      recipient_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      message: 'did u like my uwu?',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function prepaid_dollars() {
  const data = [
    {
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      prepaid_dollar_amount: 1000.95
    },
    {
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      prepaid_dollar_amount: 1000000.69
    }
  ];

}

async function user_transactions() {
  const data = [
    {
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      transaction_amount: 50.41,
      transaction_description: 'character subscription',
      stripe_transaction_id: 'stripe transaction id 1',
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      transaction_amount: 842.23,
      transaction_description: 'character subscription',
      stripe_transaction_id: 'stripe transaction id 2',
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

async function rooms() {
  const data = [
    {
      id: 1,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      character_id: 1,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 2,
      user_id: 'e05b8c71-a5e0-41c5-96e7-549c0d7a4a04',
      character_id: 2,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 3,
      user_id: 'd692bc5c-5df1-408f-9d18-a14afc8216ed',
      character_id: 3,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 4,
      user_id: 'a0e83fdc-039c-46cf-9d3d-ff515aaa7bfd',
      character_id: 2,
      created_at: '2016-07-24T03:32:45.678Z'
    },
    {
      id: 5,
      user_id: 'e8a2be37-76f6-4ebb-bfd8-b9e370046a41',
      character_id: 2,
      created_at: '2016-07-24T03:32:45.678Z'
    }
  ];

}

// Updated profile tags

async function profile_tags() {
  const data = [
    {
      id: 1,
      name: 'cat girl',
      created_at: '2023-01-23T03:32:45.678Z'
    },
    {
      id: 2,
      name: 'blue eyes',
      created_at: '2023-01-24T03:32:45.678Z'
    },
    {
      id: 3,
      name: 'red hair',
      created_at: '2023-01-25T03:32:45.678Z'
    }
  ];

}

async function main() {
  await profile();
  console.log('profile done');

  await creators();
  console.log('creators done');

  await characters();
  console.log('characters done');

  await subscriptions();
  console.log(subscriptions);

  await user_subscriptions();
  console.log('user_subscriptions done');

  await creator_subscriptions();
  console.log('creator_subscriptions done');

  await followers();
  console.log('followers done');

  ////await infotags();
  ////console.log('infotags done');

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

  await interests();
  console.log('interests done');

  await lists();
  console.log('lists done');

  await user_blocks();
  console.log('user_blocks done');

  await user_reports();
  console.log('user_reports done');

  await messages_user_to_character();
  console.log('messages_user_to_character done');

  await messages_character_to_user();
  console.log('messages_character_to_user done');

  await prepaid_dollars();
  console.log('prepaid_dollars done');

  await user_transactions();
  console.log('user_transactions done');

  await rooms();
  console.log('rooms done');

  await profile_tags();
  console.log('profile_tags done');
}

main();

export {}
