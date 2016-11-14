export const fetchUsers = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/users',
    success
  });
};

export const updateUser = (user, success) => {
  let id = user.id;
  $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    dataType: "json",
    contentType: false,
    processData: false,
    data: user,
    success
  });
};
