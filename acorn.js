const acorn = require('acorn');
const fs = require('fs');
const path = require('path');
const file = fs.readFileSync(path.join(__dirname, 'build', 'bundle.js'));
const outputFilePath = path.join(__dirname, 'parsedOutput.json');

const result = acorn.parse(file, {ecmaVersion: 6});
const stringified = JSON.stringify(result);

fs.writeFileSync(outputFilePath, stringified, 'utf8');