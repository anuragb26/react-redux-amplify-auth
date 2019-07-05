export const USER_LOGIN_INITIATE = "USER_LOGIN_INITIATE";
export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const userLoginInitiate = userCredentials => ({
  type: USER_LOGIN_INITIATE,
  payload: { userCredentials }
});

export const userLoginStart = () => ({
  type: USER_LOGIN_START
});

export const userLoginSuccess = userInfo => ({
  type: USER_LOGIN_SUCCESS,
  payload: userInfo
});

export const userLoginFailure = error => ({
  type: USER_LOGIN_FAILURE,
  error
});
