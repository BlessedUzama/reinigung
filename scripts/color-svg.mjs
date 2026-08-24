import fs from 'fs';
const svg = fs.readFileSync('src/assets/LAST.svg', 'utf8');
const parts = svg.split('<path ');

const colored = parts.map((segment, idx) => {
  if (idx === 0) return segment;

  const txMatch = segment.match(/translate\(([^,)]+),([^)]+)\)/);
  const x = txMatch ? parseFloat(txMatch[1]) : 0;
  const y = txMatch ? parseFloat(txMatch[2]) : 0;

  let color;
  if (y >= 840 && x > 1400) {
    // REINIGUNG row + tagline -> accent blue
    color = '#0ea5e9';
  } else if (y >= 670 && y < 840 && x > 1300) {
    // OBAZEE CLEMENT row -> primary dark blue
    color = '#074b90';
  } else if (x > 1100 && x < 1200 && y < 700) {
    // Small sparkle/star near text start -> accent blue
    color = '#0ea5e9';
  } else {
    // Emblem area (OC icon, swoosh, cleaning tools) -> primary dark blue
    color = '#074b90';
  }

  return segment.replace('fill="#000000"', 'fill="' + color + '"');
});

const result = colored.join('<path ');
fs.writeFileSync('src/assets/LAST.svg', result);
console.log('Done! SVG brand colors applied.');
