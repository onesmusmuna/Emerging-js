/* The spread operator is three dots ( ... ) that perform several different tasks. First, the
spread operator allows us to combine the contents of arrays. For example, if we had
two arrays, we could make a third array that combines the two arrays into one: */

const begin = ['one', 'two', 'three'];
const second = ['four', 'five', 'six'];

const combined = [...begin, ...second];
// console.log(combined.join(`\n`));
// console.log(`\n`);



// ==================================================================================
// ==================================================================================

/* Let’s take a look at how the spread operator can help us deal with a problem. Using
the peaks array from the previous sample, let’s imagine that we wanted to grab the
last item from the array rather than the first. We could use the Array.reverse
method to reverse the array in combination with array destructuring: */

var peaks = ["Tallac", "Ralston", "Rose"]
var [last] = [...peaks].reverse()

// console.log(last) // Rose
// console.log(peaks.join(`,`)) // Tallac, Ralston, Rose

/* Since we used the spread operator to copy the array, the peaks array is still intact and
can be used later in its original form. */



// ==================================================================================

/* 
The spread operator can also be used to get some, or the rest, of the items in the
array: */

var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
var [first, ...rest] = lakes

// console.log(first); // Donner
// console.log(rest.join(", ")) // "Marlette, Fallen Leaf, Cascade"



// ==================================================================================
// ==================================================================================

/* We can also use the spread operator to collect function arguments as an array. Here,
we build a function that takes in n number of arguments using the spread operator,
and then uses those arguments to print some console messages: */

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

/* The spread operator can also be used for objects. 2 Using the spread operator with
objects is similar to using it with arrays. In this example, we’ll use it the same way we
combined two arrays into a third array, but instead of arrays, we’ll use objects: */

const morning = {
    breakfast: 'oatmeal',
    lunch: 'peanut'
}

const dinner = 'mac and cheese';

const packingMeals = {
    ...morning,
    dinner
}

console.log(packingMeals);
// { breakfast: 'oatmeal', lunch: 'peanut', dinner: 'mac and cheese' }



