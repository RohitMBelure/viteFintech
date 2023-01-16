import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isActive: false,
  users: [],
  registrations: [],
  isAdmin: false,
  adminDetail: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.ADD_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case types.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.LOGIN_USERS_SUCCESS:
      return {
        ...state,
        isActive: payload,
      };
    case types.LOGOUT_USERS_SUCCESS:
      return {
        ...state,
        isActive: payload,
      };
    case types.REGISTER_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.REGISTER_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_REGISTERED_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_REGISTERED_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registrations: payload,
      };
    case types.GET_REGISTERED_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.UPDATE_REGISTERED_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_REGISTERED_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_REGISTERED_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADMIN_USERS_SUCCESS:
      return {
        ...state,
        isAdmin: true,
        adminDetail: payload,
      };
    default:
      return state;
  }
};
