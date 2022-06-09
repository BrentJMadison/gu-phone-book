import { combineReducers } from "redux";
import phoneBookLines from "./phoneBookLines";
import crudOperation from "./crudOperation";
import currentLine from "./currentLine";

export default combineReducers({
  phoneBookLines,
  crudOperation,
  currentLine,
});
