import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Editor } from "./components/Editor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/people/:peopleId",
    element: <Editor />,
  },
]);
