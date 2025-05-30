import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

export default function TeamGenerator() {
  const [input, setInput] = useState('');
  const [team, setTeam] = useState([]);
  const [error, setError] = useState(null);

  const handleGenerateTeam = async () => {
    setError(null);
    setTeam([]);

    const names = input
      .split(',')
      .map((name) => name.trim().toLowerCase())
      .filter((name) => name.length > 0);

    if (names.length === 0) {
      setError('Please enter at least one Pokémon name.');
      return;
    }

    try {
      const res = await fetch('http://127.0.0.1:8000/generate-team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pokemon: names }),
      });

      if (!res.ok) throw new Error('Team generation failed.');
      const data = await res.json();
      setTeam(data);
    } catch (err) {
      setError(err.message || 'Error generating team.');
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Team Generator</h3>
      <input
        type="text"
        placeholder="Enter Pokémon names separated by commas..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button className="btn" onClick={handleGenerateTeam}>
        Generate Team
      </button>

      {error && <p className="text-red-600">{error}</p>}

      {team.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {team.map((p, i) => (
            <PokemonCard key={i} pokemon={p} />
          ))}
        </div>
      )}
    </div>
  );
}
