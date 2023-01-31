import { supabaseClient } from '../../config/supabaseClient';

export async function getPosts() {
  // TODO: add in random character id filter instead of limit 10

  let { data, error, status } = await supabaseClient
    .from('posts')
    .select(
      `id, title, description, is_ppv, hashtags_id, infotags_id, created_at`
    )
    .limit(10);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  let final_post_likes: any = {};
  let final_comments: any = {};

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

    final_post_likes[i] = {
      post_likes,
      total_post_likes
    };

    final_comments[i] = {
      comments,
      total_comments
    };
  }

  console.log('this is data: ', data);
  console.log('this is final_post_likes: ', final_post_likes);
  console.log('this is final_comments: ', final_comments);

  return { data, final_post_likes, final_comments };
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

export async function getPostsByCharacter(character_id: number) {
  let { data, error, status } = await supabaseClient
    .from('posts')
    .select(`title, description, is_ppv`)
    .filter('character', 'eq', character_id)
    .limit(10);

  if ((error && status !== 406) || !data) {
    throw error;
  }

  return data;
}

getPosts();
