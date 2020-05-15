/* Object literal enhancement is the opposite of destructuring. It is the process of restruc‐
turing or putting back together. With object literal enhancement, we can grab vari‐
ables from the global scope and turn them into an object: */

const name1 = 'Onesmus';
const job1 = 'Developer';
const status1 = false;

const personInfo1 = {name1, job1, status1};

console.log(personInfo1);

// ===============================================================================
// ===============================================================================

//! Also create object methods with object literal enhancement and including functions:

const user = 'Muna';
const hobby = 'Watching Series';

const print = function() {
    console.log(`${this.user} likes ${this.hobby}`);
}

const userDetails = {user, hobby, print};

console.log(userDetails);

userDetails.print();

//! Notice we use this to access the object keys.