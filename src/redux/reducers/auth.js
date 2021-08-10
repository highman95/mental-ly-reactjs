import {
  SIGNUP_VERIFY_BAD,
  SIGNUP_VERIFY_OK,
  SIGNUP_VERIFY_REQ,
  SIGN_IN_BAD,
  SIGN_IN_OK,
  SIGN_IN_REQ,
  SIGN_OUT_BAD,
  SIGN_OUT_OK,
  SIGN_OUT_REQ,
  SIGN_UP_BAD,
  SIGN_UP_OK,
  SIGN_UP_REQ,
} from "../actions";

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SIGN_IN_REQ:
    return {};

  case SIGN_IN_OK:
    return {};

  case SIGN_IN_BAD:
    return {};

  case SIGN_OUT_REQ:
    return {};

  case SIGN_OUT_OK:
    return {};

  case SIGN_OUT_BAD:
    return {};

  case SIGN_UP_REQ:
    return {};

  case SIGN_UP_OK:
    return {};

  case SIGN_UP_BAD:
    return {};

  case SIGNUP_VERIFY_REQ:
    return {};

  case SIGNUP_VERIFY_OK:
    return {};

  case SIGNUP_VERIFY_BAD:
    return {};

  default:
    return state;
  }
};
