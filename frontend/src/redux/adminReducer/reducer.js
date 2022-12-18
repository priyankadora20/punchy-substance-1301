// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";
const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
