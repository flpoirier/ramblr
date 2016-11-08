export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const EDIT_POST = "EDIT_POST";
export const GET_POST = "GET_POST";

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

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const editPost = (post, success) => ({
  type: EDIT_POST,
  post,
  success
});

export const getPost = (post) => ({
  type: GET_POST,
  post
});
