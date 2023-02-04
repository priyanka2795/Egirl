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
          `id, user_id, character_id, title, description, is_ppv, infotag_ids, created_at`
        )
        .filter('is_character_post', 'eq', true)
        .filter('character_id', 'in', character_ids)
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    } else {
      // Get all posts for characters
      let { data, error, status } = await client
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, infotag_ids, created_at`
        )
        .filter('is_character_post', 'eq', true)
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
          `id, user_id, character_id, title, description, is_ppv, infotag_ids, created_at`
        )
        .filter('is_character_post', 'eq', false)
        .filter('user_id', 'in', user_ids)
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    } else {
      // Get all posts for users
      let { data, error, status } = await client
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, hashtags_id, infotags_id, created_at`
        )
        .filter('is_character_post', 'eq', false)
        .limit(limit);
      clientData = data;
      clientError = error;
      clientStatus = status;
    }
  }

  if (clientError && clientStatus !== 406) {
    throw error;
  }

  let final_post_likes: any = {};
  let final_comments: any = {};
  let final_media: any = {};
  let final_infotags: any = {};

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

    const infotag_ids = clientData[0]['infotag_ids'];

    const infotags = await getInfoTagsByInfoTagIds(
      '(' + infotag_ids.join(',') + ')',
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

    final_infotags[i] = infotags;
  }

  return {
    clientData,
    final_post_likes,
    final_comments,
    final_media,
    final_infotags
  };
}

export async function getPostsByInfoTags(
  infotags: string,
  limit: number,
  client: any
) {
  let { data, error, status } = await client
    .from('posts')
    .select(
      `id, user_id, character_id, title, description, is_ppv, infotag_ids, created_at`
    )
    .filter('is_character_post', 'eq', true)
    .filter('infotag_ids', 'cs', infotags)
    .limit(limit);
  if ((error && status !== 406) || !data) {
    throw error;
  }

  let final_post_likes: any = {};
  let final_comments: any = {};
  let final_media: any = {};
  let final_infotags: any = {};

  // Get all post likes - likes & super likes
  // Alo comments
  for (let i = 0; i < data.length; i++) {
    const post_id = data[i].id;
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

    const infotag_ids = data[0]['infotag_ids'];

    const infotags = await getInfoTagsByInfoTagIds(
      '(' + infotag_ids.join(',') + ')',
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

    final_infotags[i] = infotags;
  }

  return {
    data,
    final_post_likes,
    final_comments,
    final_media,
    final_infotags
  };
}

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

export async function getPost(post_id: number, client: any) {
  let { data, error, status } = await client
    .from('posts')
    .select(
      `id, user_id, character_id, title, description, is_ppv, hashtags_id, infotags_id, created_at`
    )
    .filter('post_id', 'eq', post_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

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

export async function getInfoTagsByInfoTagIds(
  infotag_ids: string,
  client: any
) {
  let { data, error, status } = await client
    .from('infotags')
    .select(`id, created_by, name, created_at`)
    .filter('id', 'in', infotag_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

//getPosts(true, 20, '()', '(1)').then((res) => console.log(res));
