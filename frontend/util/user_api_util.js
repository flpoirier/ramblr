export const fetchUsers = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/users',
    success
  });
};
