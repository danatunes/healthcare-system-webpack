import { combineReducers } from "redux";
import user from "./user";
import clinic from "./clinic";
import doctor from "./doctors";

const rootReducer = combineReducers({
  user,
  clinic,
  doctor,
});

export default rootReducer;
