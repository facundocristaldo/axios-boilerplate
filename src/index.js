import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

//Interceptors help us to have a middleware before the request is sent
//for example to add authorization header just here, and will apply to all requests
axios.interceptors.request.use(
  (request) => {
    console.log("request", request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
//We can also intercept responses
axios.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//we can also define defaults configs
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

//we can also define common headers or just to some http verb
axios.defaults.headers.common["Authorization"] = "Auth token";
axios.defaults.headers.post["content-type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
