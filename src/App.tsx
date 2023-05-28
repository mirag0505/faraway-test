
import "./App.css";
import { FC } from "react";
import { CustomLayout } from "./components/CustomLayout";
import { Route, Routes } from "react-router-dom";
import { Editor } from "./components/Editor";
import {HomePage} from "./pages/HomePage.tsx";
export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/people/:peopleId" element={<Editor />} />
      </Route>
    </Routes>
  );
};
