import React, { useState } from "react";
import axios from "axios";

const CounterSuggestions = () => {
  const [name, setName] = useState("");
  const [counters, setCounters] = useState([]);

  const handleSuggest = async () => {
    try {
      const res = await axios.get(`/api/counters/${name.toLowerCase()}`);
      setCounters(res.data);
    } catch {
      setCounters([]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Counter Suggestions</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter Pokémon name"
          className="border p-2 rounded w-full"
        />
        <button onClick={handleSuggest} className="bg-purple-600 text-white px-4 py-2 rounded">
          Suggest
        </button>
      </div>

      {counters.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {counters.map(poke => (
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

export default CounterSuggestions;
