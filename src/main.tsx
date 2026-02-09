import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import JenisKubah from "./JenisKubah.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/jenis-kubah" element={<JenisKubah />} />
    </Routes>
  </BrowserRouter>,
);
