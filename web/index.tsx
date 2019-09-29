import "antd/lib/button/style/css";
import "antd/lib/col/style/css";
import "antd/lib/modal/style/css";
import "antd/lib/row/style/css";
import "antd/lib/tabs/style/css";
import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Api } from "./api/api";
import "./index.scss";
import Routes from "./routes";
import { configureStore } from "./store/store";

Api.Initialize({ host: "localhost:3000", protocol: "http" });
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
