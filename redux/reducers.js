import { combineReducers } from "redux";
import * as types from "./types";

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_POSTS:
      return [...payload.data];
    // case types.ERROR:
    //   return [...payload.error];
    default:
      return state;
  }
};

const reducers = {
  // counter: counterReducer,
  // timer: timerReducer,
  posts: postsReducer,
};

export default combineReducers(reducers);
