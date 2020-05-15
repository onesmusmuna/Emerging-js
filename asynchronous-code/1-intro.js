// A JavaScript function is a block of code designed to perform a particular task

function printAll(string) {
  setTimeout(() => console.log(string), Math.floor(Math.random() * 10) + 1);
}

printAll("A");
printAll("B");
printAll("C");
printAll("D");

// You will notice that A, B, and C print in a different and random order each time you call printAll!
// This is because these functions are asynchronous.
// Each function gets executed in order, but each one is independent with it’s own setTimeout.
// They won’t wait for the last function to finish before they start.

// This is super annoying, so let’s fix it with a callback.
