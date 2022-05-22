import { combineReducers } from "redux";
import user from "./user";
import clinic from "./clinic";
import doctors from "./doctors";
import doctor from "./doctor";
import patients from "./patients";

const rootReducer = combineReducers({
  user,
  clinic,
  doctors,
  doctor,
  patients,
});

export default rootReducer;
