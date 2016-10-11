export const LIKE_POST = "LIKE_POST";
export const DISLIKE_POST = "DISLIKE_POST";

export const likePost = (like, success) => ({
  type: LIKE_POST,
  like,
  success
});

export const dislikePost = (like, success) => ({
  type: DISLIKE_POST,
  like,
  success
});
