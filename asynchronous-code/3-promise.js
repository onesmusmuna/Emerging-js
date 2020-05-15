//* Promises try to fix this nesting problem. Let’s change our function to use Promises

function printString(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string);
            resolve()
        },
        Math.floor(Math.random() * 10) + 1
        )
    })
}

// You can see that it still looks pretty similar. You wrap the whole function in a Promise, 
// and instead of calling the callback, you call resolve (or reject if there is an error). 
// The function returns this Promise object.

// Again, let’s try to print the letters A, B, C, D in that order:

function printAll () {
    printString('A')
    .then(() => printString('B'))
    .then(() => printString('C'))
    .then(() => printString('D'))
}

printAll();

// This is called a Promise Chain. 
// You can see that the code returns the result of the function (which will be a Promise), 
// and this gets sent to the next function in the chain.

