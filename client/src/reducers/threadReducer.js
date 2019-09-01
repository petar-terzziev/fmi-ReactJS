import { GET_THREAD } from "../actions/types";

const initialState = {
  thread: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_THREAD:
      return {
        ...state,
        thread: action.payload
      };
    default:
      return state;
  }
}
