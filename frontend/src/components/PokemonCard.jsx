import React from "react";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="border p-2 rounded shadow">
      <h3 className="text-lg font-bold">{pokemon.name}</h3>
      <p>Type: {pokemon.type}</p>
      {/* Add more details as needed */}
    </div>
  );
}
