const BASE_URL = 'http://127.0.0.1:8000'; // Update if backend runs elsewhere

export async function fetchPokemonInfo(name) {
  const response = await fetch(`${BASE_URL}/pokemon/info/${name}`);
  if (!response.ok) throw new Error('Pokémon not found');
  return response.json();
}

export async function comparePokemon(name1, name2) {
  const response = await fetch(`${BASE_URL}/pokemon/compare?pokemon1=${name1}&pokemon2=${name2}`);
  if (!response.ok) throw new Error('Comparison failed');
  return response.json();
}

export async function suggestCounters(name) {
  const response = await fetch(`${BASE_URL}/pokemon/counters/${name}`);
  if (!response.ok) throw new Error('Counter suggestion failed');
  return response.json();
}

export async function generateTeam(userInput) {
  const response = await fetch(`${BASE_URL}/pokemon/team`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: userInput }),
  });
  if (!response.ok) throw new Error('Team generation failed');
  return response.json();
}
