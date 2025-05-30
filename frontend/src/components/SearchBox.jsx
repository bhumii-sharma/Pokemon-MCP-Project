import React, { useState } from "react";
import axios from "axios";

const SearchBox = () => {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/pokemon/${name.toLowerCase()}`);
      setPokemon(res.data);
    } catch (err) {
      setPokemon(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Search Pokémon</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter Pokémon name"
          className="border p-2 rounded w-full"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {pokemon && (
        <div className="bg-white shadow rounded p-4 max-w-md">
          <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
          <p><strong>Type:</strong> {pokemon.types.join(", ")}</p>
          <p><strong>Stats:</strong></p>
          <ul className="ml-4 list-disc">
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <li key={stat}>
                {stat}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
