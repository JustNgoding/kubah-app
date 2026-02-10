import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DomeType from "./DomeType.tsx";
import DomeShape from "./DomeShape.tsx";
import DomeDesign from "./DomeDesign.tsx";
import CellingMotif from "./CellingMotif.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dome-type" element={<DomeType />} />
      <Route path="/dome-shape" element={<DomeShape />} />
      <Route path="/dome-design" element={<DomeDesign />} />
      <Route path="/celling-motif" element={<CellingMotif />} />
    </Routes>
  </BrowserRouter>,
);
