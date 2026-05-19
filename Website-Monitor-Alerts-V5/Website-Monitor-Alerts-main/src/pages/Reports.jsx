function Reports() {
  return (
    <div>
      <h2>Automated Status Reports</h2>

      <div className="card">
        <p><strong>Date Range:</strong> Last 30 Days</p>
        <p>Total Uptime: 99.98%</p>
        <p>Total Downtime: 8 minutes</p>
        <p>Incidents: 2</p>
      </div>

      <div className="card large">
        <h3>Downtime Timeline</h3>
        <div className="chart">📊 Bar / Gantt Chart</div>
      </div>

      <div className="buttons">
        <button>Export PDF</button>
        <button>Export CSV</button>
      </div>
    </div>
  );
}

export default Reports;
