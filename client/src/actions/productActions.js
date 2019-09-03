import axios from "axios";

import { GET_PROFILE, GET_ERRORS } from "./types";

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

export const postproduct = (productData,history) => dispatch => {
  console.log(productData.body);
  axios
    .post(`http://localhost:8000/api/products/`, productData, {
      headers: { 'content-type': 'multipart/form-data' },
  })
    .then(res => history.push(`/markeplace`))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


