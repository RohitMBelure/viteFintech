import * as types from "./actionTypes";
import axios from "axios";

// const base_url = `http://localhost:8080`;
const base_url = `https://vite-fintech-backend.onrender.com`;

export const addUser = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_USERS_REQUEST });
  return axios
    .post(`${base_url}/users`, payload)
    .then((res) => {
      return dispatch({
        type: types.ADD_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_USERS_FAILURE, payload: err });
    });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });
  return axios
    .get(`${base_url}/users`)
    .then((res) => {
      return dispatch({
        type: types.GET_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_USERS_FAILURE, payload: err });
    });
};

export const login = (payload) => (dispatch) => {
  return dispatch({ type: types.LOGIN_USERS_SUCCESS, payload: payload });
};

export const logout = (payload) => (dispatch) => {
  return dispatch({ type: types.LOGOUT_USERS_SUCCESS, payload: payload });
};

export const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USERS_REQUEST });
  return axios
    .post(`${base_url}/registrations`, payload)
    .then((res) => {
      return dispatch({
        type: types.REGISTER_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.REGISTER_USERS_FAILURE, payload: err });
    });
};

export const getregistrations = () => (dispatch) => {
  dispatch({ type: types.GET_REGISTERED_USERS_REQUEST });
  return axios
    .get(`${base_url}/registrations`)
    .then((res) => {
      return dispatch({
        type: types.GET_REGISTERED_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_REGISTERED_USERS_FAILURE,
        payload: err,
      });
    });
};

export const updateregistrations = (id, payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: types.UPDATE_REGISTERED_USERS_REQUEST });
  return axios
    .patch(`${base_url}/registrations/${id}`, payload)
    .then((res) => {
      return dispatch({
        type: types.UPDATE_REGISTERED_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.UPDATE_REGISTERED_USERS_FAILURE,
        payload: err,
      });
    });
};

export const admin = (payload) => (dispatch) => {
  return dispatch({ type: types.ADMIN_USERS_SUCCESS, payload: payload });
};
