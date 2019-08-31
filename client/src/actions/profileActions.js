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

export const editprofil = (profileData,id,history) => dispatch => {
  console.log(profileData);
  axios
    .post(`http://localhost:8000/api/profile/edit/${id}`, profileData, {
      headers: { 'content-type': 'multipart/form-data' },
  })
    .then(res => history.push('/profile'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


