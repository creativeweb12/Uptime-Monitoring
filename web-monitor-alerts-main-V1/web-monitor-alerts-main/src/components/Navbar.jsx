import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MonitorX</div>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/uptime">Monitoring</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/alerts">Alerts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
