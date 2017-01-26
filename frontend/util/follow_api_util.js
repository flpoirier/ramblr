export const follow = (user, success) => {
  $.ajax({
    method: 'POST',
    url: `api/users/${user.id}/follow`,
    success
  });
};

export const unfollow = (user, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/users/${user.id}/follow`,
    success
  });
};

export const fetchFollows = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/follows',
    success
  });
};
