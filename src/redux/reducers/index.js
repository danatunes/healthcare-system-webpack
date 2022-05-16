import { combineReducers } from "redux";
import user from "./user";
import clinic from "./clinic";
import doctors from "./doctors";
import doctor from "./doctor";

const rootReducer = combineReducers({
  user,
  clinic,
  doctors,
  doctor,
});

export default rootReducer;
