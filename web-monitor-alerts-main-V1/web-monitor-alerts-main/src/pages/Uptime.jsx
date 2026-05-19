function Uptime() {
  return (
    <div>
      <h2>Real-Time Monitoring</h2>

      <div className="card">
        <p><strong>Website:</strong> example.com</p>
        <p><strong>Status:</strong> <span className="green">● Online</span></p>
        <p><strong>Last Check:</strong> 30 seconds ago</p>
      </div>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Response Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>US (Virginia)</td>
              <td>220 ms</td>
              <td className="green">Online</td>
            </tr>
            <tr>
              <td>Europe (Frankfurt)</td>
              <td>240 ms</td>
              <td className="green">Online</td>
            </tr>
            <tr>
              <td>Asia (Singapore)</td>
              <td>310 ms</td>
              <td className="green">Online</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Uptime;
