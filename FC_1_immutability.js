/* To mutate is to change, so to be immutable is to be unchangeable. In a functional pro‐
gram, data is immutable. It never changes.
If you need to share your birth certificate with the public, but want to redact or
remove private information, you essentially have two choices: you can take a big
Sharpie to your original birth certificate and cross out your private data, or you can
find a copy machine. Finding a copy machine, making a copy of your birth certificate,
and writing all over that copy with that big Sharpie would be preferable. This way you
can have a redacted birth certificate to share and your original that is still intact.
This is how immutable data works in an application. Instead of changing the original
data structures, we build changed copies of those data structures and use them
instead.
To understand how immutability works, let’s take a look at what it means to mutate
data. Consider an object that represents the color lawn :*/

let color_lawn = {
title: "lawn",
color: "#00FF00",
rating: 0
}

/* We could build a function that would rate colors, and use that function to change the
rating of the color object: */

function rateColor(color, rating) {
color.rating = rating
return color
}
console.log(rateColor(color_lawn, 5).rating)  // 5
console.log(color_lawn.rating)                // 5

/* In JavaScript, function arguments are references to the actual data. Setting the color’s
rating like this is bad because it changes or mutates the original color object. (Imagine
if you tasked a business with redacting and sharing your birth certificate and they
returned your original birth certificate with black marker covering the important
details. You’d hope that a business would have the common sense to make a copy of
your birth certificate and return the original unharmed.) We can rewrite the rate
Color function so that it does not harm the original goods (the color object): */

var rateColor = function(color, rating) {
return Object.assign({}, color, {rating:rating})
}
console.log(rateColor(color_lawn, 5).rating)   //5
console.log(color_lawn.rating)                 //4

/* machine; it takes a blank object, copies the color to that object, and overwrites the
rating on the copy. Now we can have a newly rated color object without having to
change the original.
We can write the same function using an ES6 arrow function along with the ES7
object spread operator. This rateColor function uses the spread operator to copy the
color into a new object and then overwrite its rating: */

const rateColor = (color, rating) =>
({
...color,
rating
})

/* This emerging JavaScript version of the rateColor function is exactly the same as the
previous one. It treats color as an immutable object, does so with less syntax, and
looks a little bit cleaner. Notice that we wrap the returned object in parentheses. With
arrow functions, this is a required step since the arrow can’t just point to an object’s
curly braces.
Let’s consider an array of color names: */

let list = [
    { title: "Rad Red"},
    { title: "Lawn"},
    { title: "Party Pink"}
]

// We could create a function that will add colors to that array using Array.push :

var addColor = function(title, colors) {
colors.push({ title: title })
return colors;
}

console.log(addColor("Glam Green", list).length)
console.log(list.length)

/* However, Array.push is not an immutable function. This addColor function changes
the original array by adding another field to it. In order to keep the colors array
immutable, we must use Array.concat instead: */

const addColor = (title, array) => array.concat({title})
console.log(addColor("Glam Green", list).length)   //4
console.log(list.length)                           //3

/* Array.concat concatenates arrays. In this case, it takes a new object, with a new color
title, and adds it to a copy of the original array.
You can also use the ES6 spread operator to concatenate arrays in the same way it can
be used to copy objects. Here is the emerging JavaScript equivalent of the previous
addColor function: */

const addColor = (title, list) => [...list, {title}]

/* This function copies the original list to a new array and then adds a new object con‐
taining the color’s title to that copy. It is immutable. */