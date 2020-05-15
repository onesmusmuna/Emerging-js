/* 
Module is a piece of reusable code that can easily be incorporated into
other JavaScript files.

There are two options when creating and exporting a module:
1. export multiple JavaScript objects from a single module
2. one JavaScript object per module.

export can be used to export any JavaScript type that will be consumed in another module

*/

export const print = () => console.log('Sup brah');
export const draw = () => console.log('Am an artist');
// OR
export default print;


/* Modules can be consumed in other JavaScript files using the import statement. Mod‐
ules with multiple exports can take advantage of object destructuring. Modules that
use export default are imported into a single variable */

import { print, draw } from './12_modules';
import print from './12_modules';

// You can scope module variables locally under different variable names:

import { print as p , draw as d } from './12_modules';

// You can also import everything into a single variable using *

import * as all from '12_modules';
