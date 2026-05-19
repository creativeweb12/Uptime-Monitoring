function Dashboard() {
  return (
    <div>
      <h2>Dashboard Overview</h2>

      <div className="grid-3">
        <div className="card">
          <h3>Uptime Status</h3>
          <p className="green">99.98% (30 days)</p>
        </div>

        <div className="card">
          <h3>Defacement Status</h3>
          <p className="green">No Issues Detected</p>
        </div>

        <div className="card">
          <h3>Alerts</h3>
          <p className="red">2 New</p>
        </div>
      </div>

      <div className="card large">
        <h3>Uptime Trend (24h / 7d / 30d)</h3>
        <div className="chart">📈 Line Chart</div>
      </div>

      <div className="card">
        <h3>Recent Events</h3>
        <ul>
          <li>10:42 AM - Site reachable (EU)</li>
          <li>09:01 AM - Content check passed</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
