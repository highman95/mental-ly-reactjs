import {
  GET_RECOMMENDATIONS_BAD,
  GET_RECOMMENDATIONS_OK,
  GET_RECOMMENDATIONS_REQ,
} from "../actions";

export default (state, action) => {
  switch (action.type) {
  case GET_RECOMMENDATIONS_REQ:
    return {};

  case GET_RECOMMENDATIONS_OK:
    return {};

  case GET_RECOMMENDATIONS_BAD:
    return {};

  default:
    return state;
  }
};
