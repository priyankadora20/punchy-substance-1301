// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";
const initialState = {
  isAuth: false,
  isSign: false,
  isAdmin:false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        isLoading: true,
        token: "",
        isError: false,
        isAuth: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        isLoading: false,
        token: payload.token,
        isAdmin: payload.userType === "admin" ? true : false,
        isError: false,
        isAuth: true,
      };
    case types.LOGIN_FAILURE:
      return {
        isLoading: false,
        token: "",
        isError: true,
        isAuth: false,
      };
    case types.SIGNUP_REQUEST:
      return {
        isLoading: true,
        token: "",
        isError: false,
        isAuth: false,
      };
    case types.SIGNUP_SUCCESS:
      return {
        isLoading: false,
        isSign: true,
        isError: false,
      };
    case types.SIGNUP_FAILURE:
      return {
        isLoading: false,
        token: "",
        isError: true,
        isAuth: false,
      };
    default:
      return state;
  }
};

export { reducer };
