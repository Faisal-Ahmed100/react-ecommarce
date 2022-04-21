import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { UserContextProvider } from "./context/contextApi";
import "./index.css";
import store from "./redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserContextProvider>
);
