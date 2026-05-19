function Alerts() {
  return (
    <div>
      <h2>Automated Alerts</h2>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Page</th>
              <th>Severity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>  
              <td>08:21 AM</td>
              <td>/index.html</td>
              <td className="red">High</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>07:55 AM</td>
              <td>/login</td>
              <td className="orange">Medium</td>
              <td><button>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Alerts;
