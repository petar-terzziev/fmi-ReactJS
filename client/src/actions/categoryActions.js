import axios from "axios";
import { NEW_SUBCATEGORY } from "./types";
import { GET_SUBCATEGORIES } from "./types";
import { GET_THREADS } from "./types";
import { NEW_THREAD } from "./types";

export const newSubcategory = (title, category) => dispatch => {
  console.log("adding subcategory " + title + " in " + category);
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post(`localhost:8000/api/categories/${category}`, { title, category })
    .then(res => {
      console.log("added" + title);
    })
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

export const newThread = (title, user, category) => dispatch => {
  console.log("adding thread " + title + " by " + user + " in " + category);
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post(`http://localhost:8000/api/categories/${category}`, { title, user })
    .then(res => {
      console.log("added" + title);
    })
    .catch(err =>
      dispatch({
        type: NEW_THREAD,
        payload: null
      })
    );
};

export const getThreads = handle => dispatch => {
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
