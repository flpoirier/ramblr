export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const CREATE_POST = "CREATE_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const createPost = post => ({
  type: CREATE_POST,
  post
});
