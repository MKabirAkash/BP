import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import rootReducer from "./redux/store.js";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;

const defaultHeaders = axios.defaults.headers;
defaultHeaders["cache-control"] = "no-cache";
defaultHeaders["Content-Type"] = "application/json";
defaultHeaders["Accept"] = "application/json";
defaultHeaders["api-key"] = import.meta.env.VITE_APP_API_KEY; // @todo: possibly need to remove later.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
