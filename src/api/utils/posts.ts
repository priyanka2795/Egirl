import { getCharactersByIds } from './characters';
/// Getters

// Get posts, with fiilters for user_ids, character_ids
export async function getPosts(
  is_character: boolean,
  limit: number,
  client: any,
  user_ids?: string,
  character_ids?: string
) {
  // TODO: add in random character id filter?

  let data: any;
  let error: any;
  let status: any;

  let clientData: any;
  let clientError: any;
  let clientStatus: any;

  if (is_character) {
    if (character_ids) {
      // Get all posts for a character
      let { data, error, status } = await client
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
        )
        .filter('is_character_post', 'eq', true)
        .filter('character_id', 'in', character_ids)
        .order('created_at', { ascending: false })
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    } else {
      // Get all posts for characters
      let { data, error, status } = await client
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
        )
        .filter('is_character_post', 'eq', true)
        .order('created_at', { ascending: false })
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    }
  } else {
    if (user_ids) {
      // Get all posts for a user
      let { data, error, status } = await client
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
        )
        .filter('is_character_post', 'eq', false)
        .filter('user_id', 'in', user_ids)
        .order('created_at', { ascending: false })
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    } else {
      // Get all posts for users
      let { data, error, status } = await client
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
        )
        .filter('is_character_post', 'eq', false)
        .order('created_at', { ascending: false })
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    }
  }

  if (clientError && clientStatus !== 406) {
    console.log("in getPosts(), this is err: ", clientError)
    throw error;
  }

  let final_post_likes: any = {};
  let final_comments: any = {};
  let final_media: any = {};
  let final_profile_tags: any = {};

  // Get all post likes - likes & super likes
  // Alo comments
  for (let i = 0; i < clientData.length; i++) {
    const post_id = clientData[i].id;
    const post_likes: any = await getPostLikes(post_id, client);
    const total_post_likes = post_likes.reduce(
      (count: number[], like: any) => {
        if (like.is_like && !like.is_super) {
          return [count[0] + 1, count[1]];
        }
        if (like.is_like && like.is_super) {
          return [count[0] + 1, count[1] + 1];
        }
        if (!like.is_like && like.is_super) {
          return [count[0], count[1] + 1];
        }
        return count;
      },
      [0, 0]
    );

    const comments: any = await getPostComments(post_id, client);
    const total_comments = comments.length;

    const media = await getPostMedia(post_id, client);

    const profile_tag_ids = clientData[0]['profile_tag_ids'];

    const profile_tags = await getProfileTagsByProfileTagIds(
      '(' + profile_tag_ids.join(',') + ')',
      client
    );

    final_post_likes[i] = {
      post_likes,
      total_post_likes
    };

    final_comments[i] = {
      comments,
      total_comments
    };

    final_media[i] = media;

    final_profile_tags[i] = profile_tags;
  }

  let characterIds = clientData.map((post: any) => post.character_id);
  characterIds = '(' + characterIds.join(',') + ')';
  let characterData = await getCharactersByIds(characterIds, client);

  // final combo
  for (let i = 0; i < clientData.length; i++) {
    const character_id = clientData[i].character_id;
    const character = characterData['data'].find(
      (character: any) => character.id === character_id
    );
    clientData[i]['character_profile_pic_url'] = character['profile_picture'];
    clientData[i]['character_name'] = character['display_name'];
    clientData[i]['num_likes'] = final_post_likes[i]['total_post_likes'][0];
    clientData[i]['num_comments'] = final_comments[i]['total_comments'];
    clientData[i]['img_url'] = final_media[i]['media_url'];
    clientData[i]['profile_tags'] = final_profile_tags[i];
    clientData[i]['comments'] = final_comments[i]['comments'];
  }

  return clientData
}

// Get posts by profile tags
export async function getPostsByProfileTags(
  profile_tags: string,
  limit: number,
  client: any
) {

  let clientData: any;
  let clientError: any;
  let clientStatus: any;

  let { data, error, status } = await client
    .from('posts')
    .select(
      `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
    )
    .filter('is_character_post', 'eq', true)
    .filter('profile_tag_ids', 'cs', profile_tags)
    .limit(limit);
  if ((error && status !== 406) || !data) {
    console.log('Error getting posts by profile tags: ', error);
    throw error;
  }

  clientData = data;
  clientError = error;
  clientStatus = status;

  let final_post_likes: any = {};
  let final_comments: any = {};
  let final_media: any = {};
  let final_profile_tags: any = {};

  // Get all post likes - likes & super likes
  // Alo comments
  for (let i = 0; i < clientData.length; i++) {
    const post_id = clientData[i].id;
    const post_likes: any = await getPostLikes(post_id, client);
    const total_post_likes = post_likes.reduce(
      (count: number[], like: any) => {
        if (like.is_like && !like.is_super) {
          return [count[0] + 1, count[1]];
        }
        if (like.is_like && like.is_super) {
          return [count[0] + 1, count[1] + 1];
        }
        if (!like.is_like && like.is_super) {
          return [count[0], count[1] + 1];
        }
        return count;
      },
      [0, 0]
    );

    const comments: any = await getPostComments(post_id, client);
    const total_comments = comments.length;

    const media = await getPostMedia(post_id, client);

    const profile_tag_ids = data[0]['profile_tag_ids'];

    const profile_tags = await getProfileTagsByProfileTagIds(
      '(' + profile_tag_ids.join(',') + ')',
      client
    );

    final_post_likes[i] = {
      post_likes,
      total_post_likes
    };

    final_comments[i] = {
      comments,
      total_comments
    };

    final_media[i] = media;

    final_profile_tags[i] = profile_tags;
  }

  let characterIds = clientData.map((post: any) => post.character_id);
  characterIds = '(' + characterIds.join(',') + ')';
  let characterData = await getCharactersByIds(characterIds, client);

  // final combo
  for (let i = 0; i < clientData.length; i++) {
    const character_id = clientData[i].character_id;
    const character = characterData['data'].find(
      (character: any) => character.id === character_id
      );
    clientData[i]['character_profile_pic_url'] = character['profile_picture'];
    clientData[i]['character_name'] = character['display_name'];
    clientData[i]['num_likes'] = final_post_likes[i]['total_post_likes'][0];
    clientData[i]['num_comments'] = final_comments[i]['total_comments'];
    clientData[i]['img_url'] = final_media[i]['media_url'];
    clientData[i]['profile_tags'] = final_profile_tags[i];
    clientData[i]['comments'] = final_comments[i]['comments'];
  }

  return clientData;
}

// Get post likes
export async function getPostLikes(post_id: number, client: any) {
  let { data, error, status } = await client
    .from('post_likes')
    .select(`post_id, user_id, is_like, is_super, created_at`)
    .filter('post_id', 'eq', post_id)
    .filter('is_like', 'eq', true);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get post comments
export async function getPostComments(post_id: number, client: any) {
  let { data, error, status } = await client
    .from('comments')
    .select(`id, post_id, user_id, description, created_at`)
    .filter('post_id', 'eq', post_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get post by post id
export async function getPost(post_id: number, client: any) {
  let { data, error, status } = await client
    .from('posts')
    .select(
      `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
    )
    .filter('post_id', 'eq', post_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get posts by character id
export async function getPostsByCharacterId(character_id: number, client: any) {
  let { data, error, status } = await client
    .from('posts')
    .select(`title, description, is_ppv`)
    .filter('character_id', 'eq', character_id)
    .limit(10);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get post media
export async function getPostMedia(post_id: number, client: any) {
  let { data, error, status } = await client
    .from('media')
    .select(`id, post_id, media_type, media_url, created_at`)
    .filter('post_id', 'eq', post_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get info tags by info tag ids
export async function getProfileTagsByProfileTagIds(
  profile_tag_ids: string,
  client: any
) {
  let { data, error, status } = await client
    .from('profile_tags')
    .select(`id, name, created_at`)
    .filter('id', 'in', profile_tag_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

//getPosts(true, 20, '()', '(1)').then((res) => console.log(res));

// Get posts by post id
export async function getPostsByPostIds(post_ids: string, client: any) {
  let { data, error, status } = await client
    .from('posts')
    .select(
      `id, user_id, character_id, title, description, is_ppv, profile_tag_ids, created_at`
    )
    .filter('id', 'in', post_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

// Get posts liked by user
export async function getPostsLikedByUser(user_id: string, client: any) {
  let { data, error, status } = await client
    .from('post_likes')
    .select(`post_id`)
    .filter('user_id', 'eq', user_id)
    .filter('is_like', 'eq', true);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  let post_ids = data.map((post: any) => post.post_id);

  let posts = await getPostsByPostIds('(' + post_ids.join(',') + ')', client);
  return posts;
}

/// Setters

// Create post
export async function createPost(
  user_id: number,
  character_id: number,
  title: string,
  description: string,
  prompt_description: string,
  is_ppv: boolean,
  is_character_post: boolean,
  profile_tag_ids: number[],
  client: any
) {
  let postData = {
    user_id,
    character_id,
    title,
    description,
    prompt_description,
    is_ppv,
    is_character_post,
    profile_tag_ids
  };
  let { data, error, status } = await client.from('posts').insert([postData]);

  if (error && status !== 201) {
    throw error;
  }

  return postData;
}
