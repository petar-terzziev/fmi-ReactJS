import { SEARCH } from "../actions/types";

const initialState = {
  threads: [],
  products: [],
  profiles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...initialState,
        threads: action.payload.threads,
        products: action.payload.products,
        profiles: action.payload.profiles
      };
    default:
      return initialState;
  }
}
