
import React, { useState } from 'react';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [logs, setLogs] = useState([]);
  const [agents, setAgents] = useState([
    { id: 1, name: "Agent A", status: "Running" },
    { id: 2, name: "Agent B", status: "Stopped" },
    { id: 3, name: "Agent C", status: "Running" }
  ]);

  const handleStart = (id) => alert("Start agent " + id);
  const handleStop = (id) => alert("Stop agent " + id);
  const handleRestart = (id) => alert("Restart agent " + id);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">ReportWise Agent Dashboard</h1>
        <button onClick={() => setApiKey(prompt("Enter API Key"))} className="bg-blue-600 text-white px-3 py-1 rounded">Set API Key</button>
      </div>

      <div className="grid gap-4 mb-6">
        {agents.map(agent => (
          <div key={agent.id} className="p-4 border rounded shadow bg-gray-100 dark:bg-gray-800">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{agent.name}</h2>
                <p>Status: <span className={`font-bold ${agent.status === 'Running' ? 'text-green-500' : 'text-red-500'}`}>{agent.status}</span></p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleStart(agent.id)} className="bg-green-600 text-white px-3 py-1 rounded">Start</button>
                <button onClick={() => handleStop(agent.id)} className="bg-red-600 text-white px-3 py-1 rounded">Stop</button>
                <button onClick={() => handleRestart(agent.id)} className="bg-yellow-500 text-white px-3 py-1 rounded">Restart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded h-40 overflow-y-scroll">
        <h3 className="font-semibold mb-2">Logs (Auto-scroll)</h3>
        {logs.length === 0 ? <p className="italic text-sm">No logs yet...</p> : logs.map((log, i) => <p key={i}>{log}</p>)}
      </div>
    </div>
  );
}

export default App;
