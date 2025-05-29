import { useEffect, useState } from 'react';

export default function Compare() {
  const [comparison, setComparison] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/compare?pokemon1=pikachu&pokemon2=bulbasaur')
      .then(res => res.json())
      .then(data => {
        console.log(data);      // for debugging
        setComparison(data);    // store in state
      })
      .catch(err => console.error('Error fetching comparison:', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Compare Pokémon</h2>
      {!comparison ? (
        <p>Loading comparison...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 bg-white rounded shadow p-4">
          <div>
            <h3 className="text-lg font-semibold">Pikachu</h3>
            <pre>{JSON.stringify(comparison.pokemon1, null, 2)}</pre>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bulbasaur</h3>
            <pre>{JSON.stringify(comparison.pokemon2, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
