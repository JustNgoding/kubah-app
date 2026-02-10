import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DomeType from "./DomeType.tsx";
import DomeShape from "./DomeShape.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dome-type" element={<DomeType />} />
      <Route path="/dome-shape" element={<DomeShape />} />
    </Routes>
  </BrowserRouter>,
);
