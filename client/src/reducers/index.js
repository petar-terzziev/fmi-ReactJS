import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import subcategoryReducer from "./subcategoryReducer";
import threadsReducer from "./threadsReducer";
import threadReducer from "./threadReducer";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  subcategories: subcategoryReducer,
  threads: threadsReducer,
  thread: threadReducer,
  products: productReducer,
  searchResults: searchReducer
});
