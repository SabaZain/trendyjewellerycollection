const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Capture the array definition
const arrayMatch = content.match(/export const products: Product\[\]\s*=\s*\[([\s\S]*?)\];/);
if (!arrayMatch) {
  console.error('Products array not found');
  process.exit(1);
}

let arrayText = arrayMatch[1];
// Remove line comments and block comments
arrayText = arrayText.replace(/\/\/.*$/gm, '');
arrayText = arrayText.replace(/\/\*[\s\S]*?\*\//g, '');
// Remove trailing commas before closing brace
arrayText = arrayText.replace(/,\s*\n\s*}/g, '\n}');

// Wrap in brackets to evaluate as array
let products;
try {
  products = eval('[' + arrayText + ']');
} catch (e) {
  console.error('Failed to parse products array:', e);
  process.exit(1);
}

// Sort by id
products.sort((a, b) => a.id - b.id);

// Convert back to formatted string
function formatObj(obj) {
  const lines = JSON.stringify(obj, null, 2).split('\n');
  return '    ' + lines.join('\n    ');
}

const formatted = products.map(formatObj).join(',\n');

const newArray = `export const products: Product[] = [\n${formatted}\n];`;

// Replace original array in file content
content = content.replace(/export const products: Product\[\]\s*=\s*\[[\s\S]*?\];/, newArray);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Sorted products array successfully');