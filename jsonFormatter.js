// jsonFormatter.js
const fs = require('fs');

const input = process.argv[2];
if (!input) return console.error('Usage: node jsonFormatter.js <file.json or JSON string>');

let data;
try {
  if (fs.existsSync(input)) data = JSON.parse(fs.readFileSync(input, 'utf-8'));
  else data = JSON.parse(input);
} catch (e) {
  return console.error('Invalid JSON', e.message);
}

console.log(JSON.stringify(data, null, 2));
