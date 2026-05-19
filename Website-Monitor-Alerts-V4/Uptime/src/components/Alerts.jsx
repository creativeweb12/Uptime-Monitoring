function Alerts() {

  return (
    <div className="page">

      <h2>Defacement Alerts</h2>

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
            <td>High</td>
            <td>View</td>
          </tr>

          <tr>
            <td>07:55 AM</td>
            <td>/login</td>
            <td>Medium</td>
            <td>View</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Alerts;