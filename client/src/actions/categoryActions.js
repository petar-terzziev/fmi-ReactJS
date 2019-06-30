import axios from "axios";

import { GET_CATEGORIES } from "./types";
import { GET_SUBCATEGORIES } from "./types";
import { GET_THREADS } from "./types";

export const getCategories = () => dispatch => {
  axios
    .get(`http://localhost:8000/api/categories/`)
    .then(res =>
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: null
      })
    );
};

export const getSubcategories = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/categories/${handle}`)
    .then(res =>
      dispatch({
        type: GET_THREADS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_THREADS,
        payload: null
      })
    );
};

export const getThreads = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/categories/${handle}`)
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CATEGORIES,
        payload: null
      })
    );
};
