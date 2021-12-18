import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./state/store/configureStore";
import { Provider } from "react-redux";
import "./index.css";

const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
  );
  
  // expose store when run in Cypress
  if (window.Cypress) {
    window.store = store;
  }