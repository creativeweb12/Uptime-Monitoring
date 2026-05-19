import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <h2>MonitorSystem</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/monitoring">Monitoring</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/alerts">Alerts</Link>
      </nav>

    </div>
  );
}

export default Navbar;