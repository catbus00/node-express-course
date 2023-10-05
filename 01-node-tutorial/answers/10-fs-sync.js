const fs = require('fs');
const path = './temporary/fileA.txt';
fs.writeFileSync(path, 'First Line\n');
fs.writeFileSync(path, 'Second Line\n', { flag: 'a' });
fs.writeFileSync(path, 'Third Line\n', { flag: 'a' });

const readLines= fs.readFileSync(path, 'utf8');
console.log('10-fs-sync.js:', readLines)



