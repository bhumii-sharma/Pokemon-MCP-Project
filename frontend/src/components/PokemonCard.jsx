import { useState } from "react";

export default function PokemonInfoCard() {
  const [pokemonName, setPokemonName] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchPokemonInfo = async () => {
    setError("");
    setData(null);
    try {
      const res = await fetch(`http://127.0.0.1:8000/pokemon/info?name=${pokemonName.toLowerCase()}`);
      if (!res.ok) {
        throw new Error("Pokémon not found");
      }
      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pokémon Info</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={fetchPokemonInfo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold capitalize mb-2">{data.name}</h2>
          {data.sprite && <img src={data.sprite} alt={data.name} className="w-24 h-24 mx-auto" />}
          <p className="mt-2"><strong>Types:</strong> {data.types.join(", ")}</p>
          <div className="mt-2">
            <strong>Stats:</strong>
            <ul className="list-disc list-inside">
              {Object.entries(data.stats).map(([key, val]) => (
                <li key={key} className="capitalize">{key}: {val}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
