import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appointment from "./reducers/appointment";
import authentication from "./reducers/auth";
import recommendation from "./reducers/recommendation";
import review from "./reducers/review";
import user from "./reducers/user";

export default configureStore({
  reducer: combineReducers({
    appointment,
    authentication,
    recommendation,
    review,
    user,
  }),
});
