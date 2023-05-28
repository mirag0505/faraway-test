import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store.ts";
import { App } from "./App.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter
            basename={import.meta.env.DEV ? '/' : '/faraway-test/'}
        >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
