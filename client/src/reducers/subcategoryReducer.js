import { GET_SUBCATEGORIES, LOAD_SUBCATEGORIES } from "../actions/types";

const initialState = {
  subcategories: [],
  load : true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBCATEGORIES : 
    return {
      ...state,
      load: true

    }
    case GET_SUBCATEGORIES:
      return {
        ...state,
        subcategories: action.payload,
        load : false
      };
    default:
      return state;
  }
}
