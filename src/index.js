import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/game/:name" element={<Game></Game>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
