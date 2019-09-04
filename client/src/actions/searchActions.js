import axios from "axios";
import { SEARCH } from "./types";
export const search = data => dispatch => {
  console.log("searching..");
  axios
    .get(`http://localhost:8000/api/search/${data.type}/${data.value}`)
    .then(res => {
      dispatch({
        type: SEARCH,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: SEARCH,
        payload: err
      })
    );
};
