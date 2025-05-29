import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Info from './pages/Info';
import Compare from './pages/Compare';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 font-sans">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Pokémon MCP</h1>
          <nav className="space-x-4">
            <NavLink to="/info" className={({ isActive }) => isActive ? 'text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-700'}>Info</NavLink>
            <NavLink to="/compare" className={({ isActive }) => isActive ? 'text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-700'}>Compare</NavLink>
            <NavLink to="/team" className={({ isActive }) => isActive ? 'text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-700'}>Team</NavLink>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/info" element={<Info />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
