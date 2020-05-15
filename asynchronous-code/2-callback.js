// A callback is a function that is passed to another function.
// When the first function is done, it will run the second function.

function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 10) + 1);
}

// You can see that is is super easy to modify the original function to work with callbacks.

// Again, let’s try to print the letters A, B, C, D in that order:

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {
        printString("D", () => {});
      });
    });
  });
}

printAll();

// Well, the code is a lot uglier now, but at least it works! Each time you call printAll, you get the same result.

// The problem with callbacks is it creates something called “Callback Hell.” Basically,
// you start nesting functions within functions within functions, and it starts to get really hard to read the code.
