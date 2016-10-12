export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

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
