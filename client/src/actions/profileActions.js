import axios from "axios";

import { GET_PROFILE } from "./types";

export const getProfile = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/profile/${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};
