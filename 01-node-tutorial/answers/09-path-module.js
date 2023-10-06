const path = require('path');
const pathParts = ['Users', 'JaneDoe', 'example_path.js'];
const pathJoin = path.join(...pathParts);
console.log('09-path-module:', pathJoin);


console.log('09-path-module:', path.sep)
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log('09-path-module:', filePath)
const base = path.basename(filePath)
console.log('09-path-module:', base)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log('09-path-module:', absolute)
