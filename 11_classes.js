/* Previously in JavaScript, there were no official classes. Types were defined by func‐
tions. We had to create a function and then define methods on the function object
using the prototype: */

function Vacation(destination, duration) {
    this.destination = destination;
    this.duration = duration;
}

Vacation.prototype.print = function() {
    console.log(`Going to ${this.destination} for ${this.duration} days`);
}

const mara = new Vacation('Maasai Mara', 5);

mara.print();

class Holiday {
    constructor(destination, duration) {
        this.destination = destination;
        this.duration = duration;
    }

    print() {
        console.log(`Going to ${this.destination} for ${this.duration} days`);
    }
}

const dub = new Holiday('Dubai', 24);

dub.print();

// All class names should be capilalized.



// ====================================================================


/* Classes can also be extended. When a class is extended,
the subclass inherits the properties and methods of the superclass */

class Adventure extends Holiday {
    constructor(destination, duration, gear) {
        super(destination, duration);
        this.gear = gear;
    }

    print() {
        super.print();
        //console.log(`Bring your ${this.gear} `);
        console.log(`Bring your ${this.gear.join(' and your ')} `);
    }
}

const mtE = new Adventure('mt Everest', 14, ['Boots', 'Snow Jackets', 'Big bag']); 

mtE.print();