import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SearchBox from './components/SearchBox';
import CompareBox from './components/CompareBox';
import CounterSuggestions from './components/CounterSuggestions';
import TeamGenerator from './components/TeamGenerator';
import PokemonInfoCard from './components/PokemonCard';
import './index.css'; // Tailwind CSS styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  const [view, setView] = useState('info');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Pokémon MCP Server</h1>
        <nav className="space-x-4">
          <button className="btn" onClick={() => setView('info')}>Info</button>
          <button className="btn" onClick={() => setView('compare')}>Compare</button>
          <button className="btn" onClick={() => setView('counter')}>Counters</button>
          <button className="btn" onClick={() => setView('team')}>Team Builder</button>
        </nav>
      </header>

      <main className="bg-white p-6 rounded-xl shadow">
        {view === 'info' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Pokémon Info Lookup</h2>
            <SearchBox mode="info" />
            <PokemonInfoCard /> {/* ✅ Move this here */}
          </>
        )}
        {view === 'compare' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Compare Two Pokémon</h2>
            <CompareBox />
          </>
        )}
        {view === 'counter' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Suggest Counters</h2>
            <SearchBox mode="counter" />
          </>
        )}
        {view === 'team' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Generate a Team</h2>
            <TeamGenerator />
          </>
        )}
      </main>
    </div>
  );
}
