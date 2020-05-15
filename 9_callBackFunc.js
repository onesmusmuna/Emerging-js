/* The first thing we need to know is that in Javascript, functions are first-class objects. 
As such, we can work with them in the same way we work with other objects, 
like assigning them to variables and passing them as arguments into other functions. 
 */

/* 
A callback function is a function that is passed as an argument to another function, 
to be “called back” at a later time. 

A function that accepts other functions as arguments is called a higher-order function, 
which contains the logic for when the callback function gets executed.

*/

function createQuote(quote, callback) {
    let myQuote = `I will always say ${quote}`;
    callback(quote);    
}

function logQuote(quote) {
    console.log(quote);
}

createQuote('Talk is cheap, show me the code', logQuote);

/* Why use callbacks?
Most of the time we are creating programs and applications that operate in a synchronous manner. 
In other words, some of our operations are started only after the preceding ones have completed. 
Often when we request data from other sources, such as an external API, 
we don’t always know when our data will be served back. 
In these instances we want to wait for the response, 
but we don’t always want our entire application grinding to a halt while our data is being fetched. 
These situations are where callback functions come in handy. */