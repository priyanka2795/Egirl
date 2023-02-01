import { supabaseClient } from '../../config/supabaseClient';

export async function getPosts(
  is_character: boolean,
  user_id?: string,
  character_id?: number
) {
  // TODO: add in random character id filter?

  let data: any;
  let error: any;
  let status: any;

  if (is_character) {
    if (character_id) {
      // Get all posts for a character
      let { data, error, status } = await supabaseClient
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, hashtag_ids, infotag_ids, created_at`
        )
        .filter('is_character', 'eq', true)
        .filter('character_id', 'eq', character_id);
    } else {
      // Get all posts for characters
      let { data, error, status } = await supabaseClient
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, hashtag_ids, infotag_ids, created_at`
        )
        .filter('is_character', 'eq', true);
    }
  } else {
    if (user_id) {
      // Get all posts for a user
      let { data, error, status } = await supabaseClient
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, hashtag_ids, infotag_ids, created_at`
        )
        .filter('is_character', 'eq', false)
        .filter('user_id', 'eq', user_id);
    } else {
      // Get all posts for users
      let { data, error, status } = await supabaseClient
        .from('posts')
        .select(
          `id, user_id, character_id, title, description, is_ppv, hashtags_id, infotags_id, created_at`
        )
        .filter('is_character', 'eq', false);
    }
  }

  if ((error && status !== 406) || !data) {
    throw error;
  }

  let final_post_likes: any = {};
  let final_comments: any = {};
  let final_media: any = {};
  let final_infotags: any = {};
  let final_hashtags: any = {};

  // Get all post likes - likes & super likes
  // Alo comments
  for (let i = 0; i < data.length; i++) {
    const post_id = data[i].id;
    const post_likes: any = await getPostLikes(post_id);
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

    const comments: any = await getPostComments(post_id);
    const total_comments = comments.length;

    const media = await getPostMedia(post_id);

    const infotags = await getInfoTagsByInfoTagIds(data[0]['infotag_ids']);
    const hashtags = await getHashTagsByHashTagIds(data[0]['hashtag_ids']);

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
    final_hashtags[i] = hashtags;
  }

  return {
    data,
    final_post_likes,
    final_comments,
    final_media,
    final_infotags,
    final_hashtags
  };
}

export async function getPostLikes(post_id: number) {
  let { data, error, status } = await supabaseClient
    .from('post_likes')
    .select(`post_id, user_id, is_like, is_super, created_at`)
    .filter('post_id', 'eq', post_id)
    .filter('is_like', 'eq', true);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getPostComments(post_id: number) {
  let { data, error, status } = await supabaseClient
    .from('comments')
    .select(`id, post_id, user_id, description, created_at`)
    .filter('post_id', 'eq', post_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getPostsByCharacterId(character_id: number) {
  let { data, error, status } = await supabaseClient
    .from('posts')
    .select(`title, description, is_ppv`)
    .filter('character_id', 'eq', character_id)
    .limit(10);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getPostMedia(post_id: number) {
  let { data, error, status } = await supabaseClient
    .from('media')
    .select(`id, post_id, media_type, media_url, created_at`)
    .filter('post_id', 'eq', post_id);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getInfoTagsByInfoTagIds(infotag_ids: number[]) {
  let { data, error, status } = await supabaseClient
    .from('infotags')
    .select(`id, created_by, name, created_at`)
    .filter('id', 'in', infotag_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

export async function getHashTagsByHashTagIds(hashtag_ids: number[]) {
  let { data, error, status } = await supabaseClient
    .from('hashtags')
    .select(`id, created_by, name, created_at`)
    .filter('id', 'in', hashtag_ids);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

getPosts(true, '', 1).then((res) => console.log(res));
