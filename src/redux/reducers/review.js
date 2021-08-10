import { GET_REVIEWS_BAD, GET_REVIEWS_OK, GET_REVIEWS_REQ } from "../actions";

export default (state, action) => {
  switch (action.type) {
  case GET_REVIEWS_REQ:
    break;

  case GET_REVIEWS_OK:
    break;

  case GET_REVIEWS_BAD:
    break;

  default:
    return state;
  }
};
