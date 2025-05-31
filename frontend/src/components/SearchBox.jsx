import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import CounterSuggestion from './CounterSuggestions';

export default function SearchBox({ mode = 'info' }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    setResult(null);
    if (!query) return;

    try {
      const endpoint =
        mode === 'counter'
          ? `http://127.0.0.1:8000/counters/${query.toLowerCase()}`
          : `http://127.0.0.1:8000/api/pokemon/${query.toLowerCase()}`;
      const res = await fetch(endpoint);

      if (!res.ok) throw new Error('Not found');
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError('Pokémon not found or server error.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Pokémon name..."
          className="flex-1 border p-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" onClick={fetchData}>
          Search
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {result && mode === 'info' && <PokemonCard pokemon={result} />}
      {result && mode === 'counter' && <CounterSuggestion counters={result} />}
    </div>
  );
}
