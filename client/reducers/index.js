import { combineReducers } from "redux";
import campusReducer from "./campusReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer,
});

export default rootReducer;



