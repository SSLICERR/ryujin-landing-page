import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Impressum from "./pages/impressum.jsx";
import WebsiteStats from "./pages/websiteStats.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/ryujin-landing-page" element={<App />} />
        <Route path="/ryujin-landing-page/imprint" element={<Impressum />} />
        <Route path="/ryujin-landing-page/stats" element={<WebsiteStats />} />
      </Routes>
    </Router>
  </StrictMode>
);
