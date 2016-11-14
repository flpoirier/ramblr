export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const EDIT_USER = "EDIT_USER";

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const editUser = (user, success) => ({
  type: EDIT_USER,
  user,
  success
});
