var numbers = [1, 2, 3, 4, 5];

var sum = 0;

function adder(number) {
    sum += number;
}

numbers.forEach(adder);

console.log(sum);


var colours = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },

]
var t;

colours.reduce(function (prev, primaryColor) {
    prev.push(primaryColor.color);
    t = prev;
    return prev;
}, []);



var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
trips.forEach(function (entry) {
    console.log(entry);
});

var totalDistance = trips.reduce(function (total, trip) {
    return total += trip.distance;
}, 0);

console.log(totalDistance);

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];


var deskTypes = desks.reduce(function (add, deskType) {
    if (deskType.type == 'sitting') {
        add.sitting += 1;
    }
    if (deskType.type == 'standing') {
        add.standing += 1;
    }
    return add;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);


var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    // check if number is in the array we are building 
    return array.reduce(function (arr, arrElement) {
        if (!arr.find(function (temp) { return temp === arrElement })) {
            arr.push(arrElement);
        }
        return arr;
    }, []);
}


//unique(numbers)
console.log(unique(numbers));

let colourA = 'red';
console.log(colourA);



/* Enhanced Object Literals */
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };

}


const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'The Cave', price: 15 }
];
const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');
bookShop.inventory;


/* Enhanced Object Literals */
const color = 'red';

const Car = {
    color,
    drive() {
        return 'Vroom!';
    },
    getColor() {
        return this.color;
    }
};

let c = Car;
console.log(c.drive());

function makeAjexReturn(url, method = 'GET') {
    return method;
}

console.log(makeAjexReturn('google.com'))
console.log(makeAjexReturn('google.com', 'POST'))

/* Rest and Spread Operator */
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);

}

addNumbers(1, 2, 3, 4, 5);

const defaultColours = ['red', 'green'];
const userFavColour = ['orange', 'yellow'];

defaultColours.concat(userFavColour);
[...defaultColours, ...userFavColour]

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

validateShoppingList('bread', 'eggs');


/* Destructuring */
let expense = {
    type: 'Business',
    amount: '45'
}

const { type, amount } = expense;
type;
amount;

var savedFile = {
    extension: 'jpg',
    name: 'post',
    size: 1080
}

function fileSummary({ name, extension, size }, { color }) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile, { color: 'red' }));

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [name1, ...rest] = companies;
console.log(name1);
console.log(rest);

const points = [
    [4, 5],
    [10, 1],
    [0, 8]
]

points.map(([x, y]) => {
    return { x, y };
});

const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});

classesAsObject;

/*  Recursion example with destructuring */
function double([number, ...rest]) {
    return number === undefined ? [] : [number * 2, ...double(rest)];
}

/* function double([number, ...rest]) {
    if (number === undefined) {
        return []
    } else {
        return [number * 2, ...double(rest)];
    }
} */

double([1, 2, 3])



/* Classes */
class Car2 {
    constructor({ title }) {
        this.title = title;
    }
    drive() {
        return 'Vroom!';
    }
}


class Toyota extends Car2 {
    constructor(options) {
        super({ options });
        this.colour = options.colour;
    }

    honk() {
        return 'beep'
    }
}

const toyota = new Toyota({ colour: 'red', title: 'X' });
'---';
toyota.honk();
toyota.drive();

/* example */
/* 1) You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster 

2) Create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10 */

class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}

class Snake extends Monster {
    constructor(options) {
        super({ options });
    }

    bite(Snake) {
        Snake.health = Snake.health - 10;
    }
}

const snake1 = new Snake({ name: 'Max' });
const snake2 = new Snake({ name: 'Ruby' });
snake2.bite(snake1);
snake1;


/* Generators */
function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalkd

    // go into the store with cash
    const stuffFromStore = yield 'cash';

    // walking to laundry place
    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes]
}

// stuff in the storexs
const gen = shopping();

//leaving our house
gen.next()
// walked into the store
// walking up and down the aisles
// purchase our stuff

gen.next('groceries');
gen.next('clean clothes')


/*   Team example */
const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Jack',
    engineer: 'Dave'
};

function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let teamMember of teamIterator(engineeringTeam)) {
    names.push(teamMember);
}

names;

/* Genarator Delegation - running multiple generators together */

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
}

const engineeringTeam2 = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Jack',
    engineer: 'Dave'
};


function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = testingTeamIterator(testingTeam)
    yield* testingTeamGenerator; //generator delegation
    //yield team.testingTeam.lead;
}
 
function* testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const teamNames = [];
for (let teamMember of teamIterator(engineeringTeam2)) {
    teamNames.push(teamMember);
}

teamNames;


/* Using Symbol.Iterator  */
const testingTeamSI = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}


function* teamIteratorSI(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeamSI;
}

const teamNamesSI = [];
for (let teamMember of teamIteratorSI(engineeringTeam)) {
    teamNamesSI.push(teamMember);
}

teamNames;



const engineeringTeam3 = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Jack',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

const teamNames2 = [];
for (let teamMember of engineeringTeam3) {
    teamNames2.push(teamMember);
}


/* Promises and Fetches */

/* 
Promise -> 3 states
unresolved - waiting for something to finish
resolved - something finished and it all went okay
rejected - something finished and something went bad 

after promise is created, we can register callback functions with 'then' (status = resolved) or 'catch' (status = rejected) 
*/
 
/* 
promise = new Promise(() => { 
    return; 
});
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined */

/* 
promise = new Promise((resolve, reject) => { 
    reject(); 
});
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: undefined 

promise.catch(() => {
    console.log('something went wrong');
}) */

/* 
promise = new Promise((resolve, reject) => { 
    resolve(); 
});
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined 

promise.then(() => {
    console.log('something went right');
}).then(() => {
    console.log('something else also went right');
}) */

/* 
promise = new Promise((resolve, reject) => { 
    setTimeOut( () => {
        reject();
    }, 3000); 
});

promise 
    .then(() => console.log('finally finished!')) 
    .then(() => console.log('i also finished!')) 
    .catch(() => console.log('woops!!'))  
*/


