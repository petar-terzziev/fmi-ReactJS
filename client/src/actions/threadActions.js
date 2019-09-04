import axios from "axios";
import {
  GET_THREADS,
  GET_THREAD,
  NEW_THREAD,
  NEW_COMMENT,
  GET_COMMENTS,
  SEARCH_THREADS
} from "./types";

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

export const searchThreads = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/threads/search/${handle}`)
    .then(res => {
      dispatch({
        type: SEARCH_THREADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: SEARCH_THREADS,
        payload: err
      })
    );
};

export const newThread = (title, author, content, subcategory) => dispatch => {
  console.log(
    "adding thread " + title + " by " + author + " in " + subcategory
  );
  //axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post(`http://localhost:8000/api/threads/${subcategory}`, {
      title,
      author,
      content,
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

export const getThread = handle => dispatch => {
  axios
    .get(`http://localhost:8000/api/thread/${handle}`)
    .then(res => {
      dispatch({
        type: GET_THREAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_THREAD,
        payload: null
      })
    );
};

export const newComment = (author_id, thread_id, content) => dispatch => {
  axios
    .post(`http://localhost:8000/api/comments/${thread_id}`, {
      author_id,
      content
    })
    .then(res => {
      console.log("res:", res);
    })
    .catch(err =>
      dispatch({
        type: NEW_COMMENT,
        payload: null
      })
    );
};

export const getComments = thread_id => dispatch => {
  axios
    .get(`http://localhost:8000/api/comments/${thread_id}`)
    .then(res => {
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: NEW_COMMENT,
        payload: null
      })
    );
};
