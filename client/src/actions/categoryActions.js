import axios from "axios";
import { NEW_SUBCATEGORY } from "./types";
import { GET_SUBCATEGORIES } from "./types";

export const newSubcategory = (title, category) => dispatch => {
  const data = { title, category };
  axios
    .post(`http://localhost:8000/api/categories/${category}`, data)
    .then(res => {})
    .catch(err =>
      dispatch({
        type: NEW_SUBCATEGORY,
        payload: null
      })
    );
};

export const getSubcategories = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/categories/${handle}`)
    .then(res => {
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: null
      })
    );
};
