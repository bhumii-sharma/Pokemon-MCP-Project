import React, { useState } from "react";
import axios from "axios";

const TeamGenerator = () => {
  const [input, setInput] = useState("");
  const [team, setTeam] = useState([]);

  const handleGenerate = async () => {
    try {
      const res = await axios.post("/api/generate_team", { input });
      setTeam(res.data);
    } catch {
      setTeam([]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Generate Team</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Describe your needs"
          className="border p-2 rounded w-full"
        />
        <button onClick={handleGenerate} className="bg-indigo-600 text-white px-4 py-2 rounded">
          Generate
        </button>
      </div>

      {team.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map(poke => (
            <div key={poke.name} className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-semibold capitalize">{poke.name}</h3>
              <p><strong>Type:</strong> {poke.types.join(", ")}</p>
              <p><strong>Stats:</strong></p>
              <ul className="ml-4 list-disc">
                {Object.entries(poke.stats).map(([stat, val]) => (
                  <li key={stat}>{stat}: {val}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamGenerator;
