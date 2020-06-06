import api from "../api";
import {
  GET_THREADS,
  GET_THREAD,
  NEW_THREAD,
  NEW_COMMENT,
  GET_COMMENTS
} from "./types";

export const getThreads = handle => dispatch => {
  api
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

export const newThread = (title, author, content, subcategory) => dispatch => {
  api
    .post(`http://localhost:8000/api/threads/${subcategory}`, {
      title,
      author,
      content,
      subcategory
    })
    .then(res => {
      dispatch({
        type: NEW_THREAD,
        payload: {"title": title, "author": author}
      })
      
    })
    .catch(err =>
      dispatch({
        type: NEW_THREAD,
        payload: null
      })
    );
};

export const getThread = handle => dispatch => {
  api
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

export const newComment = (author_id, thread_id, content,uname) => dispatch => {
  console.log(api.defaults.headers.common);
  api
    .post(`http://localhost:8000/api/comments/${thread_id}`, {
      author_id,
      content
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: NEW_COMMENT,
        payload: {"author": uname, "content": res.data.content}
      })
      
    })
    .catch(err =>
      dispatch({
        type: NEW_COMMENT,
        payload: null
      })
    );
};

export const getComments = thread_id => dispatch => {
  api
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
