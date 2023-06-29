import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
