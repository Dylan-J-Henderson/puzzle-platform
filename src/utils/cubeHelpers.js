// Standard Rubik's cube colors
export const CUBE_COLORS = {
  white: '#FAFAFA',
  yellow: '#FFD500',
  red: '#C41E3A',
  orange: '#FF5800',
  blue: '#0046AD',
  green: '#009B48',
  black: '#111111',
};

// Face indices: 0=right, 1=left, 2=top, 3=bottom, 4=front, 5=back
export const FACE_COLORS = [
  CUBE_COLORS.red,    // Right (+X)
  CUBE_COLORS.orange, // Left (-X)
  CUBE_COLORS.white,  // Top (+Y)
  CUBE_COLORS.yellow, // Bottom (-Y)
  CUBE_COLORS.blue,   // Front (+Z)
  CUBE_COLORS.green,  // Back (-Z)
];

export const createCubieColors = (x, y, z, size) => {
  const half = (size - 1) / 2;
  const colors = [];

  // Right face (+X)
  colors.push(x === half ? CUBE_COLORS.red : CUBE_COLORS.black);
  // Left face (-X)
  colors.push(x === -half ? CUBE_COLORS.orange : CUBE_COLORS.black);
  // Top face (+Y)
  colors.push(y === half ? CUBE_COLORS.white : CUBE_COLORS.black);
  // Bottom face (-Y)
  colors.push(y === -half ? CUBE_COLORS.yellow : CUBE_COLORS.black);
  // Front face (+Z)
  colors.push(z === half ? CUBE_COLORS.blue : CUBE_COLORS.black);
  // Back face (-Z)
  colors.push(z === -half ? CUBE_COLORS.green : CUBE_COLORS.black);

  return colors;
};

export const generateScramble = (size, moves = 20) => {
  const axes = ['x', 'y', 'z'];
  const directions = [1, -1];
  const scramble = [];

  for (let i = 0; i < moves; i++) {
    const axis = axes[Math.floor(Math.random() * axes.length)];
    const layer = Math.floor(Math.random() * size);
    const direction = directions[Math.floor(Math.random() * directions.length)];
    scramble.push({ axis, layer, direction });
  }

  return scramble;
};

export const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

export const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
