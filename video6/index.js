import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const logAction = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log(
        `caught in the middleware ${JSON.stringify(store.getState())}`
      );
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
