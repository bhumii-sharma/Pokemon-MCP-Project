import React, { useState } from "react";
import axios from "axios";

const CompareBox = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [data, setData] = useState({});

  const handleCompare = async () => {
    try {
      const res1 = await axios.get(`/api/pokemon/${name1.toLowerCase()}`);
      const res2 = await axios.get(`/api/pokemon/${name2.toLowerCase()}`);
      setData({ one: res1.data, two: res2.data });
    } catch {
      setData({});
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Compare Pokémon</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={name1}
          onChange={e => setName1(e.target.value)}
          placeholder="First Pokémon"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={name2}
          onChange={e => setName2(e.target.value)}
          placeholder="Second Pokémon"
          className="border p-2 rounded w-full"
        />
        <button onClick={handleCompare} className="bg-green-600 text-white px-4 py-2 rounded">
          Compare
        </button>
      </div>

      {data.one && data.two && (
        <div className="grid grid-cols-2 gap-4">
          {[data.one, data.two].map((poke, idx) => (
            <div key={idx} className="bg-white shadow rounded p-4">
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

export default CompareBox;
