import {
  GET_PROFILE_BAD,
  GET_PROFILE_OK,
  GET_PROFILE_REQ,
  GET_USERS_BAD,
  GET_USERS_OK,
  GET_USERS_REQ,
  GET_USER_APPOINTMENTS_BAD,
  GET_USER_APPOINTMENTS_OK,
  GET_USER_APPOINTMENTS_REQ,
} from "../actions";

export default (state, action) => {
  switch (action.type) {
  case GET_USERS_REQ:
    return {};

  case GET_USERS_OK:
    return {};

  case GET_USERS_BAD:
    return {};

  case GET_PROFILE_REQ:
    return {};

  case GET_PROFILE_OK:
    return {};

  case GET_PROFILE_BAD:
    return {};

  case GET_USER_APPOINTMENTS_REQ:
    return {};

  case GET_USER_APPOINTMENTS_OK:
    return {};

  case GET_USER_APPOINTMENTS_BAD:
    return {};

  default:
    return state;
  }
};
