import * as types from "./types";
import * as Api from "../services/api";

export const getPosts = () => (dispatch) =>
  Api.getPosts()
    .then((data) =>
      dispatch({
        type: types.GET_POSTS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: types.ERROR,
        payload: error,
      })
    );
