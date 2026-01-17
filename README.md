# Puzzle Platform

An interactive 3D puzzle simulator built with React and Three.js, featuring a fully functional Rubik's Cube with smooth animations and intuitive controls.

## Features

- **Interactive 3D Rubik's Cube** - Multiple size variants (2×2, 3×3, 4×4, 5×5)
- **Smooth Animations** - Fluid layer rotations with snap-to-90° mechanics
- **Intuitive Controls** - Click and drag faces to rotate, drag background to orbit camera
- **Performance Timer** - Track your solving time and move count
- **Responsive Design** - Works on desktop and mobile devices
- **Touch Support** - Pinch to zoom, touch to rotate
- **Extensible Architecture** - Built with OOP principles for easy puzzle additions

## Controls

| Action | Control |
|--------|---------|
| Rotate layer | Click and drag a cube face |
| Rotate camera | Drag the background |
| Zoom in/out | Scroll wheel or pinch (mobile) |
| Scramble | Click "Scramble" button |
| Reset | Click "Reset" button |
| Change size | Select from dropdown menu |

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/puzzle-platform.git

# Navigate to project directory
cd puzzle-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
puzzle-platform/
├── index.html                        # Entry HTML file
├── src/
│   ├── core/                         # Framework core
│   │   ├── base/
│   │   │   └── TwistyPuzzle.js       # Abstract puzzle base class
│   │   ├── valueObjects/
│   │   │   ├── ColorScheme.js        # Color scheme abstraction
│   │   │   ├── GridPosition.js       # Immutable 3D position
│   │   │   └── Rotation.js           # Rotation operation
│   │   └── strategies/
│   │       ├── RotationStrategy.js   # Rotation calculation strategy
│   │       └── RubiksCubeRotationStrategy.js
│   ├── puzzles/                      # Puzzle implementations
│   │   ├── colorSchemes/
│   │   │   └── StandardRubiksCubeColors.js
│   │   └── RubiksCube.js             # Rubik's Cube implementation
│   ├── rendering/                    # Three.js rendering
│   │   ├── CameraController.js       # Camera orbit controls
│   │   └── PuzzleRenderer.js         # 3D scene renderer
│   ├── components/                   # React UI components
│   │   ├── App.jsx                   # Main app component
│   │   ├── PuzzleRendererComponent.jsx
│   │   ├── StatsPanel.jsx
│   │   ├── Instructions.jsx
│   │   ├── PuzzleSelector.jsx
│   │   └── ControlButtons.jsx
│   ├── index.jsx                     # React entry point
│   └── index.css                     # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Architecture

The project follows **Object-Oriented Design Principles**:

### Design Patterns Used

- **Strategy Pattern** - Rotation calculation strategies
- **Template Method** - Abstract TwistyPuzzle base class
- **Dependency Injection** - ColorScheme and RotationStrategy injection
- **Value Objects** - Immutable GridPosition, Rotation, ColorScheme
- **Composition** - Renderer composes CameraController

### Core Abstractions

#### TwistyPuzzle (Abstract Base Class)
All puzzles extend this class and implement:
- `createInitialState()` - Initialize puzzle state
- `isSolved()` - Check if puzzle is solved
- `createPieceMeshes()` - Generate 3D visualization
- `applyRotation()` - Apply state transformations
- `getRotationFromDrag()` - Handle user interactions

#### PuzzleRenderer
Manages the Three.js scene, camera, lighting, and user interactions. Handles:
- Scene setup and rendering loop
- Mouse/touch event handling
- Animation system
- Layer rotation mechanics

#### CameraController
Encapsulates camera positioning with spherical coordinates:
- Orbit rotation (theta, phi)
- Zoom in/out
- Distance constraints

## Adding New Puzzles

The architecture makes it easy to add new twisty puzzles:

```javascript
// src/puzzles/YourPuzzle.js
import { TwistyPuzzle } from '../core/base/TwistyPuzzle';

export class YourPuzzle extends TwistyPuzzle {
  getName() { return "Your Puzzle"; }
  getDefaultSize() { return 3; }
  getSizeVariants() { return [/* variants */]; }
  
  createInitialState(size) { /* ... */ }
  isSolved(state) { /* ... */ }
  createPieceMeshes(group, state) { /* ... */ }
  applyRotation(state, rotation, turns) { /* ... */ }
  // ... implement other abstract methods
}
```

Then register it in `PuzzleTypeSelector.jsx`.

## Technologies

- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## License

MIT License - feel free to use this project for learning or building your own puzzle platform!

## Contributing

Contributions are welcome! Feel free to:
- Add new puzzle types (Pyraminx, Megaminx, Square-1, etc.)
- Improve animations and visual effects
- Optimize performance
- Add new features (solve algorithms, hint system, etc.)

## Acknowledgments

- Inspired by classic Rubik's Cube simulators
- Built with modern web technologies
- Designed with extensibility in mind

---

Made with care and lots of cube rotations