import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on("task", (task) => {
      console.log("New Task received", task);

      setTasks((prev) => [...prev, task]);

      setTimeout(() => {
        const result = `Completed: ${task}`;
        console.log("Task completed, sending result...");
        socket.emit("taskCompleted", result);
      }, 3000);
    });

    socket.on("disconnect", () => {
      console.log("Not connected to MCP Server:");
    });

    return () => {
      socket.off("task");
      socket.off("disconnect");
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-4">INSANE AI Agent</h1>
        <p className="text-lg mb-2">Socket ID: {socket.id || 'Connecting...'}</p>

        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2">Assigned Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="border-b py-2">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
