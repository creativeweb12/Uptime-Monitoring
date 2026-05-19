import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Monitoring from "./components/Monitoring";
import Reports from "./components/Reports";
import Alerts from "./components/Alerts";
import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard/>} />
        <Route path="/monitoring" element={<Monitoring/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/alerts" element={<Alerts/>} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;

