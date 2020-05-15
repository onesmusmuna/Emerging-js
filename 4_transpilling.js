/* Not all web browsers support ES6, and even those that do don’t support everything.
The only way to be sure that your ES6 code will work is to convert it to ES5 code
before running it in the browser. This process is called transpiling. One of the most
popular tools for transpiling is Babel. */

const add1 = (x=5, y=10) => console.log(x+y);

// ! After we run the transpiler on this code, here is what the output will look like:

" use strict "

var add2 = function () {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];

    var y = arguments.length <= 0 || arguments[1] === undefined ? 10 : arguments[1];

    return console.log(x+y);
}

add1();
add2();

/* The transpiler added a “use strict” declaration to run in strict mode. The variables x
and y are defaulted using the arguments array */

/* You can transpile JavaScript directly in the browser using the inline Babel transpiler.
You just include the browser.js file, and any scripts with type="text/babel" will be
converted (even though Babel 6 is the current version of Babel, only the CDN for
Babel 5 will work): */

// This approach means that the browser does the transpiling at run‐time. 
//! This is not a good idea for production because it will slow
// your application down a lot.