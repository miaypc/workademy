import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const allReducers = combineReducers({
  course: courseReducer,
});
export default allReducers;
