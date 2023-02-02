export const getHomePostsSubscribedTo = async (userId: string, client: any) => {
  let { data: posts, error } = await client.from('posts').select('title');
  return {
    data: posts
  };
};
