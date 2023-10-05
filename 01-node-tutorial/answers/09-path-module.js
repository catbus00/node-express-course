const path = require('path');
const pathParts = ['Users', 'JaneDoe', 'example_path.js'];
const pathJoin = path.join(...pathParts);
console.log('09-path-module:', pathJoin);


