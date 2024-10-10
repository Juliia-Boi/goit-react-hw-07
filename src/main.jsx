import ReactDOM from "react-dom/client";
import React from "react";
import "modern-normalize";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

