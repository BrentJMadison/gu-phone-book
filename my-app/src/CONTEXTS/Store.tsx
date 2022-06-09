import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./index";

const initialState = {
  phoneBookLines: [],
  crudOperation: "view",
  currentLine: {
    id: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
  },
};

const middleware = [thunk];
const Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
