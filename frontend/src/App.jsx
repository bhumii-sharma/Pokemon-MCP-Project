import React from 'react';
import SearchBox from './components/SearchBox';
import CompareBox from './components/CompareBox';
import CounterSuggestions from './components/CounterSuggestions';
import TeamGenerator from './components/TeamGenerator';
import './index.css';

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Pokémon Toolkit</h1>
      <SearchBox />
      <CompareBox />
      <CounterSuggestions />
      <TeamGenerator />
    </div>
  );
}
