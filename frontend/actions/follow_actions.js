export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const GET_FOLLOWS = "GET_FOLLOWS";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";

export const followUser = (user, success) => ({
  type: FOLLOW_USER,
  user,
  success
});

export const unfollowUser = (user, success) => ({
  type: UNFOLLOW_USER,
  user,
  success
});

export const getFollows = (success) => ({
  type: GET_FOLLOWS,
  success
});

export const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});
