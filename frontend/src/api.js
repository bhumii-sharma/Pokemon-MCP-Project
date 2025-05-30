import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Update if hosted elsewhere

export const searchPokemon = async (name) =>
  axios.get(`${BASE_URL}/pokemon/${name}`).then(res => res.data);

export const comparePokemon = async (names) =>
  axios.post(`${BASE_URL}/compare`, { names }).then(res => res.data);

export const suggestCounters = async (name) =>
  axios.get(`${BASE_URL}/counters/${name}`).then(res => res.data);

export const generateTeam = async (description) =>
  axios.post(`${BASE_URL}/generate-team`, { description }).then(res => res.data);
