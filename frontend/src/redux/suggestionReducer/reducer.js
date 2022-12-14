import * as types from "./actionType";
const initState = {
  suggestion: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.SUGGESTION_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.SUGGESTION_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggestion:payload,
        isError: false,
      };

    case types.SUGGESTION_DATA_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    default: {
      return state;
    }
  }
};
export {reducer};
