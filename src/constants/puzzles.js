// src/constants/puzzles.js
import RubiksCube from '../components/puzzles/rubiks-cube/RubiksCube';
import RubiksRevenge from '../components/puzzles/rubiks-revenge/RubiksRevenge';
// Import other puzzles as you create them
// import Pyraminx from '../components/puzzles/pyraminx/Pyraminx';
// import Megaminx from '../components/puzzles/megaminx/Megaminx';

export const PUZZLES = {
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
  },
  // Add more puzzles here as you build them
  // PYRAMINX: {
  //   id: 'pyraminx',
  //   name: 'Pyraminx',
  //   description: 'Tetrahedral twisty puzzle',
  //   component: Pyraminx,
  //   icon: '🔺',
  // },
  // MEGAMINX: {
  //   id: 'megaminx',
  //   name: 'Megaminx',
  //   description: 'Dodecahedral puzzle',
  //   component: Megaminx,
  //   icon: '⬢',
  // },
};

export const getPuzzleById = (id) => {
  return Object.values(PUZZLES).find(puzzle => puzzle.id === id);
};

export const getAllPuzzles = () => {
  return Object.values(PUZZLES);
};