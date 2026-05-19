import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function Monitoring() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      const newData = {
        time: new Date().toLocaleTimeString(),
        response: Math.floor(Math.random() * 200) + 100
      };

      setData(prev => [...prev.slice(-15), newData]);

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="content">

        <h1>Monitoring Dashboard</h1>
        <p className="subtitle">Real-Time Website Monitoring Graph</p>

        <div className="card">

          <p><b>Website:</b> example.com</p>
          <p><b>Status:</b> <span className="online">● Online</span></p>
          <p><b>Last Check:</b> Live</p>

        </div>

        <div className="chart">

          <h3>Response Time Monitoring</h3>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3"/>

              <XAxis dataKey="time"/>

              <YAxis/>

              <Tooltip/>

              <Line
                type="monotone"
                dataKey="response"
                stroke="#22c55e"
                strokeWidth={3}
                dot={false}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Monitoring;