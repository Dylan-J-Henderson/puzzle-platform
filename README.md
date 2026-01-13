# 3D Puzzle Simulator

An interactive 3D puzzle simulator built with React and Three.js. Currently features a fully functional Rubik's Cube with plans to add more twisty puzzles.

## Features

- **Interactive 3D Visualization**: Drag to rotate the puzzle and view from any angle
- **Timer System**: Track your solve times with a precise timer
- **Move History**: Visual overlay showing your recent moves
- **Scramble Function**: Generate random scrambles with smooth animations
- **Reset Function**: Quickly return to solved state
- **Extensible Architecture**: Easily add new puzzle types

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/3d-puzzle-simulator.git

# Navigate to project directory
cd 3d-puzzle-simulator

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Viewport.jsx            # 3D rendering viewport
│   ├── Timer.jsx               # Timer display and controls
│   ├── ControlPanel.jsx        # Movement buttons and controls
│   └── MoveHistoryOverlay.jsx  # Move history display
├── puzzles/            # Puzzle implementations
│   ├── RubiksCube.js          # Rubik's Cube 3x3x3
│   └── puzzleFactory.js       # Factory for creating puzzles
├── utils/              # Utility functions
│   ├── animations.js          # Animation helpers
│   └── formatters.js          # Formatting utilities
├── hooks/              # Custom React hooks
│   └── useTimer.js            # Timer logic
└── App.jsx             # Main application component
```

## Adding New Puzzles

To add a new puzzle type:

1. **Create a new puzzle class** in `src/puzzles/`:

```javascript
// src/puzzles/YourPuzzle.js
import * as THREE from 'three';

export class YourPuzzle {
  constructor() {
    this.group = new THREE.Group();
    this.pieces = [];
    this.moves = {
      'Move1': { axis: 'x', layer: 1, direction: 1 },
      // Define your moves
    };
    this.initialize();
  }

  initialize() {
    // Create your puzzle geometry
  }

  getGroup() {
    return this.group;
  }

  getMoves() {
    return Object.keys(this.moves);
  }

  getMoveConfig(move) {
    return this.moves[move];
  }

  rotateFace(axis, layer, direction, instant = false) {
    // Implement rotation logic
  }

  checkIfSolved() {
    // Implement solve detection
  }

  reset() {
    // Reset to solved state
  }

  generateScramble(length) {
    // Generate scramble sequence
  }
}
```

2. **Register in puzzleFactory.js**:

```javascript
import YourPuzzle from './YourPuzzle';

export const createPuzzle = (type) => {
  switch (type) {
    case 'rubiks-cube':
      return new RubiksCube();
    case 'your-puzzle':
      return new YourPuzzle();
    default:
      return new RubiksCube();
  }
};

export const getPuzzleTypes = () => {
  return [
    { id: 'rubiks-cube', name: "Rubik's Cube (3x3x3)" },
    { id: 'your-puzzle', name: 'Your Puzzle Name' },
  ];
};
```

3. **Update App.jsx** to use your puzzle:

```javascript
const puzzleInstance = createPuzzle('your-puzzle');
```

## Puzzle Interface

All puzzles must implement the following interface:

- `getGroup()` - Returns the THREE.Group containing the puzzle
- `getMoves()` - Returns array of available move notations
- `getMoveConfig(move)` - Returns { axis, layer, direction } for a move
- `rotateFace(axis, layer, direction, instant)` - Executes a rotation
- `checkIfSolved()` - Returns boolean indicating if puzzle is solved
- `reset()` - Resets puzzle to solved state
- `generateScramble(length)` - Returns array of scramble moves

## Technologies Used

- **React** - UI framework
- **Three.js** - 3D graphics
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Controls

- **Mouse Drag** - Rotate the puzzle view
- **Movement Buttons** - Execute puzzle moves
- **Scramble** - Generate and apply a random scramble
- **Reset** - Return to solved state
- **Start Timer** - Begin timing (available after scramble)

## Move Notation

Standard Rubik's Cube notation:
- `R` - Right face clockwise
- `R'` - Right face counter-clockwise
- `L` - Left face clockwise
- `L'` - Left face counter-clockwise
- `U` - Up face clockwise
- `U'` - Up face counter-clockwise
- `D` - Down face clockwise
- `D'` - Down face counter-clockwise
- `F` - Front face clockwise
- `F'` - Front face counter-clockwise
- `B` - Back face clockwise
- `B'` - Back face counter-clockwise

## Roadmap

- [ ] Add Pyraminx puzzle
- [ ] Add Megaminx puzzle
- [ ] Add 2x2x2 cube
- [ ] Add 4x4x4 cube
- [ ] Save/load scrambles
- [ ] Statistics tracking
- [ ] Puzzle selector UI
- [ ] Custom color schemes
- [ ] Algorithm trainer mode

## License

None

## Acknowledgments

- Three.js documentation and community
- Rubik's Cube community for move notation standards