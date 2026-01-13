// src/constants/puzzles.js
import RubiksMini from '../components/puzzles/rubiks-mini/RubiksMini';
import RubiksCube from '../components/puzzles/rubiks-cube/RubiksCube';
import RubiksRevenge from '../components/puzzles/rubiks-revenge/RubiksRevenge';
// Import other puzzles as you create them
// import Pyraminx from '../components/puzzles/pyraminx/Pyraminx';
// import Megaminx from '../components/puzzles/megaminx/Megaminx';

export const PUZZLES = {
  RUBIKS_MINI: {
    id: 'rubiks-mini',
    name: "Rubik's Mini",
    description: '2x2x2 classic puzzle',
    component: RubiksMini,
    icon: '🧊',
  },
  RUBIKS_CUBE: {
    id: 'rubiks-cube',
    name: "Rubik's Cube",
    description: '3x3x3 classic puzzle',
    component: RubiksCube,
    icon: '🧊',
  },
  RUBIKS_REVENGE: {
    id: 'rubiks-revenge',
    name: "Rubik's Revenge",
    description: '4x4x4 advanced puzzle',
    component: RubiksRevenge,
    icon: '🎲',
  }
};

export const getPuzzleById = (id) => {
  return Object.values(PUZZLES).find(puzzle => puzzle.id === id);
};

export const getAllPuzzles = () => {
  return Object.values(PUZZLES);
};