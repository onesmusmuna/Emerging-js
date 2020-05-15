/* A pure function is a function that returns a value that is computed based on its argu‐
ments. Pure functions take at least one argument and always return a value or
another function. They do not cause side effects, set global variables, or change any‐
thing about application state. They treat their arguments as immutable data.
In order to understand pure functions, let’s first take a look at an impure function: */

var frederick = {
name: "Frederick Douglass",
canRead: false,
canWrite: false
}

function selfEducate() {
frederick.canRead = true
frederick.canWrite = true
return frederick
}

selfEducate()
console.log( frederick )
// {name: "Frederick Douglass", canRead: true, canWrite: true}

/* The selfEducate function is not a pure function. It does not take any arguments, and
it does not return a value or a function. It also changes a variable outside of its scope:
Frederick . Once the selfEducate function is invoked, something about the “world”
has changed. It causes side effects: */

const frederick = {
name: "Frederick Douglass",
canRead: false,
canWrite: false
}
const selfEducate = (person) => {
person.canRead = true
person.canWrite = true
return person
}
console.log( selfEducate(frederick) )
console.log( frederick )
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: true, canWrite: true}

/* Pure Functions Are Testable
Pure functions are naturally testable. They do not change anything
about their environment or “world,” and therefore do not require a
complicated test setup or teardown. Everything a pure function
needs to operate it accesses via arguments. When testing a pure
function, you control the arguments, and thus you can estimate the
outcome. */

/* This selfEducate function is also impure: it causes side effects. Invoking this func‐
tion mutates the objects that are sent to it. If we could treat the arguments sent to this
function as immutable data, then we would have a pure function.
Let’s have this function take an argument: */

const frederick = {
name: "Frederick Douglass",
canRead: false,
canWrite: false
}

const selfEducate = person =>
({
...person,
canRead: true,
canWrite: true
})

console.log( selfEducate(frederick) )
console.log( frederick )
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}

/* Finally, this version of selfEducate is a pure function. It computes a value based on
the argument that was sent to it: the person . It returns a new person object without
mutating the argument sent to it and therefore has no side effects.
Now let’s examine an impure function that mutates the DOM: */

function Header(text) {
let h1 = document.createElement('h1');
h1.innerText = text;
document.body.appendChild(h1);
}

Header("Header() caused side effects");

/* The Header function creates a heading—one element with specific text and adds it to
the DOM. This function is impure. It does not return a function or a value, and it
causes side effects: a changed DOM.
In React, the UI is expressed with pure functions. In the following sample, Header is a
pure function that can be used to create heading—one elements just like in the previ‐
ous example. However, this function on its own does not cause side effects because it
does not mutate the DOM. This function will create a heading-one element, and it is
up to some other part of the application to use that element to change the DOM: */

const Header = (props) => <h1>{props.title}</h1>

/* Pure functions are another core concept of functional programming. They will make
your life much easier because they will not affect your application’s state. When writ‐
ing functions, try to follow these three rules:
1. The function should take in at least one argument.
2. The function should return a value or another function.
3. The function should not change or mutate any of its arguments. */