import {
  GET_APPOINTMENTS_BAD,
  GET_APPOINTMENTS_OK,
  GET_APPOINTMENTS_REQ,
  GET_APPOINTMENT_BAD,
  GET_APPOINTMENT_OK,
  GET_APPOINTMENT_REQ,
} from "../actions";

export default (state, action) => {
  switch (action.type) {
  case GET_APPOINTMENT_REQ:
    return {};

  case GET_APPOINTMENT_OK:
    return {};

  case GET_APPOINTMENT_BAD:
    return {};

  case GET_APPOINTMENTS_REQ:
    return {};

  case GET_APPOINTMENTS_OK:
    return {};

  case GET_APPOINTMENTS_BAD:
    return {};

  default:
    return state;
  }
};
