import { GET_THREADS, NEW_THREAD } from "../actions/types";

const initialState = {
  threads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_THREADS:
      return {
        ...state,
        threads: action.payload
      };
      case NEW_THREAD:
        return {
          ...state,
          threads :[...state.threads,action.payload]
        }
    default:
      return state;
  }
}
