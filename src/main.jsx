import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Impressum from "./pages/impressum.jsx";
import WebsiteStats from "./pages/websiteStats.jsx";
import NotFound from "./pages/notfound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/imprint" element={<Impressum />} />
        <Route path="/stats" element={<WebsiteStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
