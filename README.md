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
- **Generic Popup System** - Flexible information popups with markdown support

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
│   ├── components/                   # React UI components
│   │   ├── ui/                       # Generic UI components
│   │   │   ├── InfoPopup.jsx         # Generic popup component
│   │   │   └── MarkdownRenderer.jsx  # Markdown parsing/rendering
│   │   ├── puzzle/                   # Puzzle-specific components
│   │   │   ├── PuzzleRendererComponent.jsx
│   │   │   ├── StatsPanel.jsx
│   │   │   ├── Instructions.jsx
│   │   │   ├── PuzzleSelector.jsx
│   │   │   └── ControlButtons.jsx
│   │   ├── popups/                   # Specific popup implementations
│   │   │   ├── DisclaimerPopup.jsx
│   │   │   └── SolvedPopup.jsx
│   │   └── App.jsx                   # Main app component
│   ├── config/                       # Configuration
│   │   └── popupStyles.js            # Popup type configurations and content
│   ├── content/                      # Static content files
│   │   ├── disclaimer.md
│   │   ├── welcome.md
│   │   └── instructions.md
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
│   ├── utils/                        # Utility classes
│   │   └── MarkdownParser.js         # Markdown parsing logic
│   ├── index.jsx                     # React entry point
│   └── index.css                     # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Architecture

The Puzzle Platform is built on **Object-Oriented Design Principles** to create a maintainable, extensible codebase that can easily accommodate new puzzle types and features.

### Design Patterns

The project leverages several proven design patterns:

- **Strategy Pattern** - Encapsulates rotation calculation logic in interchangeable strategies
- **Template Method** - Abstract TwistyPuzzle base class defines the puzzle framework
- **Dependency Injection** - ColorScheme and RotationStrategy are injected dependencies
- **Value Objects** - Immutable GridPosition, Rotation, and ColorScheme ensure data integrity
- **Composition** - PuzzleRenderer composes CameraController for separation of concerns
- **Factory Pattern** - Popup system creates instances based on type configuration

### Core Abstractions

#### TwistyPuzzle (Abstract Base Class)

The foundation of all puzzles. Each puzzle implementation extends this class and provides:

- `createInitialState()` - Initialize the puzzle's solved state
- `isSolved()` - Determine if the current state is solved
- `createPieceMeshes()` - Generate 3D visualization meshes
- `applyRotation()` - Apply state transformations for moves
- `getRotationFromDrag()` - Convert user interactions to rotations

This abstraction allows the renderer and UI to work with any puzzle type without knowing implementation details.

#### PuzzleRenderer

Manages the Three.js scene, camera, lighting, and all 3D interactions:

- Scene setup and animation loop
- Mouse/touch event handling
- Layer rotation mechanics and animations
- Transition effects (scramble, reset, size changes)

The renderer is puzzle-agnostic, delegating puzzle-specific logic to the TwistyPuzzle instance.

#### CameraController

Encapsulates camera positioning using spherical coordinates:

- Orbit rotation (theta and phi angles)
- Zoom control with distance constraints
- Smooth camera transitions
- Responsive to user input

This separation keeps camera logic independent from rendering concerns.

#### MarkdownParser

Converts markdown syntax into structured data for rendering:

- Headings (H1-H3)
- Bullet lists
- Paragraphs
- Extensible for additional markdown features

### UI Component System

#### InfoPopup (Generic Component)

A flexible popup system supporting multiple presentation types:

- **warning** - Yellow theme for disclaimers and cautions
- **info** - Blue theme for informational content
- **success** - Green theme for achievements
- **error** - Red theme for error messages

Features include:
- Type-based styling from centralized configuration
- Custom icons and button text per type
- Markdown content support for rich formatting
- Accessible and keyboard-friendly

#### MarkdownRenderer

Renders parsed markdown with consistent, theme-aware styling:

- Responsive typography scales appropriately
- Semantic HTML for accessibility
- Integrates with Tailwind CSS utilities

#### PuzzleSelector

Custom dropdown component for selecting puzzle size variants:

- Works consistently across all browsers (including Edge)
- Glassmorphism styling with smooth animations
- Closes automatically when clicking outside
- Disabled state during transitions

### State Management

The application uses React's built-in state management:

- **Puzzle State** - Current puzzle instance and size variant
- **Game State** - Move count, timer, scrambled/solved status
- **UI State** - Transition flags, popup visibility
- **Refs** - Direct access to PuzzleRenderer for method calls

State flows unidirectionally from App.jsx down to child components, with callbacks for state updates.

## Adding New Puzzles

The architecture is designed to make adding new puzzle types straightforward:

### 1. Create Your Puzzle Class

```javascript
// src/puzzles/YourPuzzle.js
import { TwistyPuzzle } from '../core/base/TwistyPuzzle';
import { YourColorScheme } from './colorSchemes/YourColorScheme';

export class YourPuzzle extends TwistyPuzzle {
  constructor() {
    super(new YourColorScheme(), new YourRotationStrategy());
  }

  getName() {
    return "Your Puzzle";
  }

  getDefaultSize() {
    return 3;
  }

  getSizeVariants() {
    return [
      { value: 2, label: "2×2 Mini" },
      { value: 3, label: "3×3 Standard" },
      { value: 4, label: "4×4 Master" }
    ];
  }

  createInitialState(size) {
    // Return initial solved state for this size
  }

  isSolved(state) {
    // Check if state represents a solved puzzle
  }

  createPieceMeshes(group, state) {
    // Create Three.js meshes and add to group
  }

  applyRotation(state, rotation, turns) {
    // Apply rotation to state and return new state
  }

  getRotationFromDrag(raycaster, pieces, camera) {
    // Convert user drag to rotation operation
  }

  getScrambleMoves(size) {
    // Return array of random rotation operations
  }
}
```

### 2. Create Color Scheme

```javascript
// src/puzzles/colorSchemes/YourColorScheme.js
import { ColorScheme } from '../../core/valueObjects/ColorScheme';

export class YourColorScheme extends ColorScheme {
  constructor() {
    super({
      face1: 0xff0000,
      face2: 0x00ff00,
      // ... define your colors
    });
  }
}
```

### 3. Create Rotation Strategy (if needed)

```javascript
// src/core/strategies/YourRotationStrategy.js
import { RotationStrategy } from './RotationStrategy';

export class YourRotationStrategy extends RotationStrategy {
  calculateAffectedPieces(state, rotation) {
    // Return array of piece indices affected by rotation
  }

  transformPosition(position, rotation, turns) {
    // Return new GridPosition after rotation
  }
}
```

### 4. Integrate into App

Update `App.jsx` to use your new puzzle:

```javascript
import { YourPuzzle } from '../puzzles/YourPuzzle';

const App = () => {
  const [puzzle, setPuzzle] = useState(() => new YourPuzzle());
  // ... rest of component
};
```

The existing UI components (PuzzleSelector, controls, stats) will automatically work with your new puzzle through the TwistyPuzzle interface.

## Adding New Popups

The popup system is designed for easy extension with markdown content support.

### 1. Create Content File

Create a markdown file with your content:

**For Disclaimer/Warning Content:**
```markdown
<!-- src/content/your-content.md -->
## Title

Introduction paragraph explaining the content.

### Feature Status:

- Feature 1: ✓ Fully implemented
- Feature 2: ✗ Not yet available
- Feature 3: ⚠️ Experimental

### Additional Information:

More details and context.
```

**Status Symbols:**
- ✓ (checkmark) - Feature is complete and functional
- ✗ (cross) - Feature is not implemented
- ⚠️ (warning) - Feature is partial or experimental

**For General Content:**
```markdown
<!-- src/content/your-content.md -->
## Your Title

Your content with **markdown** formatting support.

### Section:
- List items
- Multiple paragraphs
- Headings
```

### 2. Import in Configuration

```javascript
// src/config/popupStyles.js
import yourContent from '../content/your-content.md?raw';

export const CONTENT = {
  disclaimer: disclaimerContent,
  yourContent: yourContent
};
```

### 3. Create Popup Component

```javascript
// src/components/popups/YourPopup.jsx
import { InfoPopup } from '../ui/InfoPopup';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';
import { CONTENT } from '../../config/popupStyles';

export const YourPopup = ({ isVisible, onClose }) => {
  return (
    <InfoPopup
      type="info"  // or "warning", "success", "error"
      title="Your Title"
      icon="ℹ️"
      content={<MarkdownRenderer markdown={CONTENT.yourContent} />}
      isVisible={isVisible}
      onClose={onClose}
      buttonText="Got It"  // optional, defaults to "Close"
    />
  );
};
```

### 4. Use in Application

```javascript
// src/components/App.jsx
import { YourPopup } from './popups/YourPopup';

const App = () => {
  const [showYourPopup, setShowYourPopup] = useState(false);
  
  return (
    <div>
      <YourPopup 
        isVisible={showYourPopup} 
        onClose={() => setShowYourPopup(false)} 
      />
      {/* Rest of app */}
    </div>
  );
};
```

The InfoPopup component handles all styling, animations, and accessibility concerns automatically based on the `type` prop.

## Technologies

- **React 18** - Modern UI framework with hooks
- **Three.js** - WebGL-based 3D graphics library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

## Code Quality Principles

The project emphasizes clean, maintainable code:

- **Clean Code** - Readable, self-documenting, well-commented
- **SOLID Principles** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Design Patterns** - Proven architectural solutions
- **Type Safety** - Comprehensive JSDoc comments for IDE support
- **Separation of Concerns** - Clear boundaries between layers
- **DRY Principle** - Reusable components and utilities
- **Composition over Inheritance** - Flexible, maintainable designs

## Performance Considerations

- Efficient Three.js rendering with RequestAnimationFrame
- Immutable state objects prevent unnecessary re-renders
- Event handler cleanup to prevent memory leaks
- Optimized mesh creation and updates
- Smooth 60 FPS animations

## License

MIT License - feel free to use this project for learning or building your own puzzle platform!

## Contributing

Contributions are welcome! Consider adding:

- **New puzzle types** - Pyraminx, Megaminx, Square-1, Skewb, Clock
- **Improved animations** - More sophisticated transition effects
- **Performance optimizations** - Reduce draw calls, improve state management
- **New features** - Solve algorithms, hint system, move history, undo/redo
- **Enhanced popups** - More markdown features, images, videos
- **Additional UI** - Keyboard shortcuts, customizable themes, settings panel

### Development Guidelines

1. Follow existing code structure and naming conventions
2. Use class-based architecture for core logic, functional components for UI
3. Add comprehensive JSDoc comments for complex functions
4. Keep components focused and single-purpose
5. Use configuration files for styling and content
6. Write reusable, composable code
7. Test across browsers (Chrome, Firefox, Safari, Edge)
8. Ensure mobile responsiveness

## Future Roadmap

Potential enhancements:

- [ ] More puzzle types (Pyraminx, Megaminx, etc.)
- [ ] Solve algorithm visualization
- [ ] Move history and undo/redo
- [ ] Custom color schemes
- [ ] Multiplayer race mode
- [ ] Pattern database
- [ ] Tutorial mode for beginners
- [ ] Advanced statistics and analytics

## Acknowledgments

- Inspired by classic Rubik's Cube simulators
- Built with modern web technologies
- Designed with extensibility and education in mind

---

That's All Folks!