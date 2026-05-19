function Defacement() {
  return (
    <div>
      <h2>Content Integrity Monitoring</h2>

      <div className="card">
        <p><strong>Status:</strong> <span className="green">● Clean</span></p>
        <p><strong>Last Scan:</strong> 5 minutes ago</p>
      </div>

      <div className="card">
        <h4>Monitored Elements</h4>
        <ul>
          <li>✔ HTML Structure</li>
          <li>✔ JavaScript Files</li>
          <li>✔ Page Text Content</li>
          <li>✔ External Script Injections</li>
        </ul>
      </div>
    </div>
  );
}

export default Defacement;
