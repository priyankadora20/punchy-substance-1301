//Write the ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";
export const getRequest = () => {
  return {
    type: types.GET_REQUEST,
  };
};
export const getSuccess = (payload) => {
  return {
    type: types.GET_SUCCESS,
    payload,
  };
};

export const getFailure = () => {
  return {
    type: types.GET_FAILURE,
  };
};
export const postRequest = () => {
  return {
    type: types.POST_REQUEST,
  };
};
export const postSuccess = (payload) => {
  return {
    type: types.POST_SUCCESS,
    payload,
  };
};

export const postFailure = () => {
  return {
    type: types.POST_FAILURE,
  };
};

export const adminData = () => (dispatch) => {
  
  dispatch(getRequest());
  return axios
    .get("https://wild-tan-puffer-veil.cyclic.app/backend")
    .then((res) => {
      console.log(res.data);
      return dispatch(getSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getFailure());
    });
};

export const addData = (payload) => (dispatch) => {
  dispatch(postRequest());
  return axios
    .post("https://wild-tan-puffer-veil.cyclic.app/backend/addproduct", payload)
    .then((res) => {
      console.log(res);
      return dispatch(postSuccess());
    })
    .catch((err) => {
      dispatch(postFailure());
    });
};
