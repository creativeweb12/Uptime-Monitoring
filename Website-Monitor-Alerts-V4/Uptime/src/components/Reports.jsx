function Reports() {
  return (
    <div className="page">

      <h2>Automated Status Reports</h2>

      <div className="card">
        <p>Total Uptime: 99.98%</p>
        <p>Total Downtime: 8 minutes</p>
        <p>Incidents: 2</p>
      </div>

      <div className="card">
        <button>Export PDF</button>
        <button>Export CSV</button>
      </div>

    </div>
  );
}

export default Reports;