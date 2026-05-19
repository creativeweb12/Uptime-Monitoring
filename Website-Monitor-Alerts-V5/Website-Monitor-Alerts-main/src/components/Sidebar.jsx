import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>MonitorPro</h2>
      </div>

      <ul className="menu">

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/monitoring">Real-Time Monitoring</Link>
        </li>

        <li>
          <Link to="/reports">Status Reports</Link>
        </li>

        <li>
          <Link to="/alerts">Alerts</Link>
        </li>

        <li>
          <Link to="/team">Team Members</Link>
        </li>

        <li>
          <Link to="/api">Integrations API</Link>
        </li>

      </ul>

      <div className="status-footer">
        <p>● All systems operational</p>
      </div>

    </div>
  );
}

export default Sidebar;