import axios from "axios";

import { GET_PRODUCTS, GET_ERRORS } from "./types";

export const getProducts = () => dispatch => {
  axios
    .get(`http://localhost:8000/api/products/`)
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_PRODUCTS,
        payload: null
      })
    );
};

export const postproduct = (productData, history) => dispatch => {
  console.log(productData.body);
  axios
    .post(`http://localhost:8000/api/products/`, productData, {
      headers: { "content-type": "multipart/form-data" }
    })
    .then(res => history.push(`/marketplace`))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
