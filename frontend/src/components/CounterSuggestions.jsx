import React from 'react';
import PokemonCard from './PokemonCard';

export default function CounterSuggestion({ counters }) {
  if (!counters || counters.length === 0) {
    return <p className="text-gray-600">No counter suggestions found.</p>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-blue-600">Suggested Counters:</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {counters.map((counter, index) => (
          <PokemonCard key={index} pokemon={counter} />
        ))}
      </div>
    </div>
  );
}
