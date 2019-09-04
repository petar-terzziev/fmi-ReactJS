import {
  GET_PROFILE,
  GET_PROFILES,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialState = {
  profile: null
};

export default function(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
