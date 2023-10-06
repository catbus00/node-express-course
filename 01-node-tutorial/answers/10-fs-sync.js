const {readFileSync, writeFileSync} = require('fs');
const path = './temporary/fileA.txt';
writeFileSync(path, 'First Line\n');
writeFileSync(path, 'Second Line\n', { flag: 'a' });
writeFileSync(path, 'Third Line\n', { flag: 'a' });

const readLines= readFileSync(path, 'utf8');
console.log('10-fs-sync.js:', readLines)
