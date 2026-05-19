import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Uptime from "./pages/Uptime";
import Defacement from "./pages/Defacement";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/uptime" element={<Uptime />} />
          <Route path="/defacement" element={<Defacement />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
