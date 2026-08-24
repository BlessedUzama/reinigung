import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('src/assets/LAST.svg');
let svg = fs.readFileSync(svgPath, 'utf8');

// Strip any residual opacity attributes that cause muddy rendering
svg = svg.replace(/\s*opacity="[^"]*"/g, '');
svg = svg.replace(/\s*fill-opacity="[^"]*"/g, '');

// Exact high-contrast palette from lol_3.jpeg reference image
const NAVY  = '#083A6B';  // "OBAZEE CLEMENT", left 'O' loop, house roof & windows, leaf base
const CYAN  = '#00A3E0';  // "REINIGUNG", flanking lines, right 'C' loop, wave sweep
const SPARK = '#38BDF8';  // Sparkle stars, soap bubbles, leaf highlight

// Per-path color assignments (1-indexed based on exact coordinate bounds)
const colors = {
   1: NAVY,   // Outer 'O' loop & base
   2: CYAN,   // Right 'C' loop & wave sweep
   3: SPARK,  // Sparkle star
   4: SPARK,  // Sparkle star in 'O'
   5: NAVY,   // House roof
   6: SPARK,  // Sparkle star in roof
   7: SPARK,  // Sparkle star
   8: NAVY,   // 'O' (OBAZEE CLEMENT)
   9: NAVY,   // 'C' (OBAZEE CLEMENT)
  10: NAVY,   // 'B'
  11: NAVY,   // 'A'
  12: NAVY,   // 'Z'
  13: NAVY,   // 'E'
  14: NAVY,   // 'E'
  15: NAVY,   // 'L'
  16: NAVY,   // 'E'
  17: NAVY,   // 'M'
  18: NAVY,   // 'E'
  19: NAVY,   // 'N'
  20: NAVY,   // 'T'
  21: SPARK,  // Soap bubble
  22: SPARK,  // Sparkle star
  23: SPARK,  // Soap bubble
  24: SPARK,  // Sparkle star
  25: NAVY,   // Window pane 1
  26: NAVY,   // Window pane 2
  27: NAVY,   // Window pane 3
  28: NAVY,   // Window pane 4
  29: SPARK,  // Soap bubble in infinity loop
  30: SPARK,  // Soap bubble
  31: SPARK,  // Leaf highlight
  32: NAVY,   // Leaf base
  33: CYAN,   // 'G' (REINIGUNG)
  34: CYAN,   // 'G' (REINIGUNG)
  35: CYAN,   // 'R' (REINIGUNG)
  36: CYAN,   // 'E' (REINIGUNG)
  37: CYAN,   // 'I' (REINIGUNG)
  38: CYAN,   // 'N' (REINIGUNG)
  39: CYAN,   // 'I' (REINIGUNG)
  40: CYAN,   // 'U' (REINIGUNG)
  41: CYAN,   // 'N' (REINIGUNG)
  42: SPARK,  // Soap bubble at base
  43: CYAN,   // Left flanking divider line
  44: CYAN,   // Right flanking divider line
  45: SPARK   // Soap bubble at base
};

const parts = svg.split('<path ');
const header = `<?xml version="1.0" encoding="UTF-8"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="195 488 2352 518">`;

const recolored = parts.slice(1).map((seg, i) => {
  const pathNum = i + 1;
  const fill = colors[pathNum] || NAVY;
  return seg.replace(/fill="[^"]+"/, `fill="${fill}"`);
});

const newSvg = header + '\n<path ' + recolored.join('<path ');
fs.writeFileSync(svgPath, newSvg);

console.log('Successfully updated LAST.svg colors.');
