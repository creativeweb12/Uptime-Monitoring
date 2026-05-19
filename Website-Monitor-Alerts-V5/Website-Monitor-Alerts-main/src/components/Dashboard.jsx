import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      const newPoint = {
        time: new Date().toLocaleTimeString(),
        response: Math.floor(Math.random() * 200) + 100
      };

      setData(prev => [...prev.slice(-10), newPoint]);

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="dashboard-container">

      <h1 className="title">System Monitoring Dashboard</h1>

      {/* Status Cards */}

      <div className="card-grid">

        <div className="card">
          <h3>Website Status</h3>
          <p className="online">● www.example.com</p>
        </div>

        <div className="card">
          <h3>Total Uptime</h3>
          <p>99.98%</p>
        </div>

        <div className="card">
          <h3>Total Incidents</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Last Check</h3>
          <p>30 seconds ago</p>
        </div>

      </div>

      {/* Monitoring Graph */}

      <div className="chart-card">

        <h2>Real-Time Response Monitoring</h2>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="response"
              stroke="#4ade80"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Dashboard;