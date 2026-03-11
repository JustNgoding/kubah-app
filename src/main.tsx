import "./index.css";
import App from "./App.tsx";
// import { BrowserRouter, Route, Routes } from "react-router";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import { createHead, UnheadProvider } from "@unhead/react/server";

export const createRoot = ViteReactSSG(
  <UnheadProvider value={createHead()}>
    <App />
  </UnheadProvider>,
);
