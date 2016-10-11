export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const createPost = (post, success) => ({
  type: CREATE_POST,
  post,
  success
});

export const deletePost = (post, success) => ({
  type: DELETE_POST,
  post,
  success
});

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});
