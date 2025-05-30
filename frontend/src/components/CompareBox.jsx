import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

export default function CompareView() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    setError(null);
    setPokemon1(null);
    setPokemon2(null);

    if (!name1 || !name2) {
      setError('Please enter both Pokémon names.');
      return;
    }

    try {
      const res1 = await fetch(`http://127.0.0.1:8000/pokemon/${name1.toLowerCase()}`);
      const res2 = await fetch(`http://127.0.0.1:8000/pokemon/${name2.toLowerCase()}`);

      if (!res1.ok || !res2.ok) throw new Error('One or both Pokémon not found.');

      const data1 = await res1.json();
      const data2 = await res2.json();

      setPokemon1(data1);
      setPokemon2(data2);
    } catch (err) {
      setError(err.message || 'Error fetching Pokémon data.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="First Pokémon name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Second Pokémon name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
      </div>
      <button className="btn" onClick={fetchPokemon}>Compare</button>

      {error && <p className="text-red-600">{error}</p>}

      {(pokemon1 && pokemon2) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PokemonCard pokemon={pokemon1} />
          <PokemonCard pokemon={pokemon2} />
        </div>
      )}
    </div>
  );
}
