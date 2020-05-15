/* The destructuring assignment allows you to locally scope fields within an object and
to declare which values will be used. */

const burger1 = {
    top1: 'bun',
    top2: 'Mushrooms',
    top3: 'Mustard',
    top4: 'lettuce'
}

let { top2, top3} = burger1;

console.log(`${top2} \n ${top3} \n`);
// The code pulls bread and meat out of the object and creates local variables for them.

//! We can also destructure incoming function arguments.

const lordify1 = p => {
    console.log(`Lord ${p.names[1]} of ${p.lands[1]}`);
}

const regularPeople = {
    names: ['Onesmus', 'Muna'],
    lands: ['Wessex', 'Kategat']
}

lordify1(regularPeople);

//! Instead of using dot notation syntax to dig into objects, we can destructure the values we need

const lordify2 = ({names}) => {
    console.log(`Lord ${regularPeople.names[0]} of ${regularPeople.lands[0]}`);
    console.log();
    
}

lordify2(regularPeople);

// ======================================================================================
// ======================================================================================

//! Values can also be destructured from arrays.

const arr = ['cow', 'elephant', 'Eagle'];

const [domestic] = arr;
const [,,bird] = arr; 

console.log(`${domestic} \n${bird}`);

