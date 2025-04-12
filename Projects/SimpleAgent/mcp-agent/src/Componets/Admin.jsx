import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

function AdminDashboard() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    socket.on("agents", (agentsList) => {
      setAgents(agentsList);
    });

    return () => {
      socket.off("agents");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Connected Agents</h2>
        <ul>
          {agents.map((agent) => (
            <li key={agent.id} className="border-b py-3 flex justify-between">
              <span>Agent ID: {agent.id}</span>
              <span className={`font-semibold ${agent.busy ? 'text-red-500' : 'text-green-500'}`}>
                {agent.busy ? 'Busy' : 'Free'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
