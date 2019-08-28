import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  Authentication: "guest",
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        Authentication: action.payload.type,
        user: action.payload
      };
    default:
      return state;
  }
}
