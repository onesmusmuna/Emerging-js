/* The function keyword is removed. We also remove return because the arrow points to what
should be returned. Another benefit is that if the function only takes one argument,
we can remove the parentheses around the arguments. */

const lordify1 = firstname => console.log(`${firstname} of Wessex`);

const lordify2 = (firstname, land) => console.log(`Lord ${firstname} of ${land}`);

const lordify3 = (firstname, land) => {

    if (!firstname) {
        throw new Error('A first name is required to Lordify');
    } 
    if (!land) {
        throw new Error('A lord must have Land');
    }
    return console.log(`${firstname} of ${land}`);
}

lordify1('Onesmus');
lordify2('Onesmus the second', 'Wessex');
lordify3('Onesmus the third', 'Utopia');

