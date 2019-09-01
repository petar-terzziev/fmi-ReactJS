import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import subcategoryReducer from "./subcategoryReducer";
import threadsReducer from "./threadsReducer";
import threadReducer from "./threadReducer";
export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  subcategories: subcategoryReducer,
  threads: threadsReducer,
  thread: threadReducer
});
