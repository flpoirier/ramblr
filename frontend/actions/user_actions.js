export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});
