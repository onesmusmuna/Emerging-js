// allow developers to declare default values for function arguments.

function logActivity1(name="Shane McConkey", activity="skiing") {
    console.log( `${name} loves ${activity}` )
}

const defaultPerson = {
    name: {
        first: 'Onesmus',
        last: 'Njoroge'
    },
    favActivity: 'riding Dirt bike' 
};

function logActivity2 (args=defaultPerson) {
    console.log(`${args.name.first} Loves to ${args.favActivity}`);
}

logActivity1();

logActivity2();