import React from "react";
import App from "app/app";
import { store } from "./store";
import { Provider } from "react-redux";

const Root = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default Root;
