import axios from "axios";
import { GET_THREADS } from "./types";
import { NEW_THREAD } from "./types";

export const getThreads = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/threads/${handle}`)
    .then(res => {
      dispatch({
        type: GET_THREADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_THREADS,
        payload: null
      })
    );
};

export const newThread = (title, author, subcategory) => dispatch => {
  console.log(
    "adding thread " + title + " by " + author + " in " + subcategory
  );
  //axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post(`http://localhost:8000/api/threads/${subcategory}`, {
      title,
      author,
      subcategory
    })
    .then(res => {
      console.log("added " + title);
    })
    .catch(err =>
      dispatch({
        type: NEW_THREAD,
        payload: null
      })
    );
};
