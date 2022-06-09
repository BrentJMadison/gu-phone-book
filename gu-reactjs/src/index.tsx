import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./CONTEXTS/Store";
import App from "./App";


/**
 * Entry point of program. Wraps application in phone book store provider.
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
