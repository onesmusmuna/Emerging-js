/* CommonJS is the module pattern that is supported by all versions of Node.js. 5 You
can still use these modules with Babel and webpack. With CommonJS, JavaScript
objects are exported using module.exports */

const print = () => console.log('Sup brah');
const draw = () => console.log('Am an artist');

module.exports = { print, draw };


/* 
CommonJS does not support an import statement. Instead, modules are imported
with the require function: */

const { print, draw } = require('./12_modules');
