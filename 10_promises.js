
{
    //! whats a promise
/* JavaScript is single threaded, meaning that two bits of script cannot run at the same time; 
they have to run one after another. In browsers, JavaScript shares a thread with a load of 
other stuff that differs from browser to browser. 
But typically JavaScript is in the same queue as painting, updating styles,
and handling user actions (such as highlighting text and interacting with form controls). 
Activity in one of these things delays the others. */

/* As a human being, you're multithreaded. You can type with multiple fingers, 
you can drive and hold a conversation at the same time. 
The only blocking function we have to deal with is sneezing, 
where all current activity must be suspended for the duration of the sneeze. 
That's pretty annoying, especially when you're driving and trying to hold a conversation. 
You don't want to write code that's sneezy. */

    //? Basics of promises
/* A promise can only succeed or fail once. It cannot succeed or fail twice, 
neither can it switch from success to failure or vice versa.

If a promise has succeeded or failed and you later add a success/failure callback, 
the correct callback will be called, even though the event took place earlier. */

    //! Promise terminology
/* fulfilled - The action relating to the promise succeeded
rejected - The action relating to the promise failed
pending - Hasn't fulfilled or rejected yet
settled - Has fulfilled or rejected */


}

var prom = new Promise(function() {
    // DO something. possibly async 
    
    if (/* Everything turned out fine */ null) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});

{

/* The promise constructor takes one argument, 
which is the callback function with two parameters, resolve and reject.
Do something within the callback, perhaps async, 
then call resolve if everything worked, otherwise call reject. */

/* it's customary, but not required, to reject with an Error object. 
The benefit of Error objects is they capture a stack trace, making debugging tools more helpful. */

}

prom.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});

{

/* then() takes two arguments, a callback for a success case, and another for the failure case.
Both are optional, so you can add a callback for the success or failure case only. */

}

{   //* Additional intel of promises

/* The function passed to new Promise is called the executor. When new Promise is created, 
the executor runs automatically. */

//resolve and reject are callbacks provided by JavaScript.Our code is only inside the executor.

//! The promise object returned by the new Promise constructor has these 2 internal properties:
/* 
-> state — initially "pending", then changes to either "fulfilled" when resolve is called 
or "rejected" when reject is called.

-> result — initially undefined, then changes to value when resolve(value) called 
or error when reject(error) is called. */

}
