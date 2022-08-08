/*
object orinted programming ? 

OOP - object orinted programing is a prigramming paradigm based on the concept of object.

we use object to model real-world abstract feture. 

object may contain data ( properties ) and code ( methods ). by using object we pack data and the corresponding behavio into the block; 
*/

class App {
    constructor() {
        this.name = "";
        this.age = "";
    }

    login() {
        // login logic
    }

    logout() {
        // logout logic
    }
}
/*
In OOP object are self-contained pieces/block of code;

OOP was develoed with the goal of orgnizing code, to make it more flexible and easier to maintain;

Classes - 
class like a bluprint from which we can create new objects.

*/

class User {
    login(password) {
        // login logic
    }

    sendMessage(str) {
        // send logic
    }
}

class UserOne extends User {
    constructor() {
        super();
    }

    userMessage() {
        // user message logic
    }
}

/*
Abstraction 
ignoring or hiding details that don't matter, allowing use to get and overview.


Encapsulation
keepgin peoperties and methods private inside the class, so they are not accessible from outside the class, some methods can be exposed as a public interface
*/

class Priv {
    #name;
    #email;
    #password;
}

/*
Inhetitance
Making all properties and methods of a certain a class availbale to a child class, this allow us to reuse common login and the model real-world relationships.

Polymorphism
A child class can overwirte a methos it inherited from a parent class. in a child class we can write a new method.
*/

/*
Object ( instance ) are instantianted from a class, which fuction like a blueprint. when we create new instance of the class this process called "INSTANTIANTION" 
  
PROTOTYPES IN JAVASCRIPT - 

all object are linked to a prototype object.
the prototype object contains methos and property and then all object can access those all property and methos which is linked to that prototype object. and the process called prototype inheritance


PROTOTYPE INHERITANCE: The prototype containes methods ( behavior ) that are accessible to all object linked to that prototype;
*/

/*
3 Way of implementing prototyp inheritance in javascript

1 - Constructor funtion
technique to create object from a function
this is how build-in object like array, mapes or sets are actully implemented.
*/

//  Constructor funtion is just a normal funtion but to meain defffince if we using the new keyword then we can create an object buy using this funtion. A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword. The purpose of a constructor is to create an object and set values if there are any object properties present.

const Person = function (name, birthYear) {
    // Instance Properties
    this.name = name;
    this.birthYear = birthYear;

    // console.log(this);
};

Person.prototype.calcAge = function () {
    const year = new Date().getFullYear();
    const getUserAge = year - this.birthYear;
    return getUserAge;
};

const user = new Person("dheeraj", 2000);

// user.calcAge();

// console.log(user instanceof Person);

/*
new oprator when we using in javascrip

1 - a new empty object is created
2 - the function was called and the function this keyword pointing that newly created object.
3 - newely created object linked to the prototype object.
4 - and the fucntion automatically return the object.
*/

// Constructor funtion
const GetMax = function (array) {
    this.array = array;
};

GetMax.prototype.Max = function () {
    let temp = this.array[0];
    this.array.filter((el) => {
        if (el > temp) {
            temp = el;
        }
    });
    return temp;
};

GetMax.prototype.loopMax = function () {
    let temp = this.array[0];
    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] > temp) {
            temp = this.array[i];
        }
    }
    return temp;
};

GetMax.prototype.reverse = function () {
    const reverserArr = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
        reverserArr.push(this.array[i]);
    }
    this.array = reverserArr;
    return this;
};

// static methods - we can access the methods only in perent class, new instance can't access this methos
GetMax.call = function () {
    console.log("hi!! this is a static methods");
};

const ar = [1, 2, 3, 4, 5, 6, 1, 2, 3, 9, 144, 12];
const max = new GetMax(ar);

// console.log(GetMax.prototype.constructor);
// console.log(max.reverse());
// console.log(max.Max());
// console.log(max.loopMax());

// console.log(max.__proto__ === GetMax.prototype);

/*
2 - es6 classes
Modern alternative to constructor function syntax;
*/

// class expression
// const Persion = class {}

// class declaration
class PersonCl {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.amount = [];
    }

    // methods will be added to .prototype peroperty
    get getAge() {
        const date = new Date().getFullYear() - this.birthYear;
        return date;
    }

    set add(moviment) {
        this.amount.push(moviment);
    }

    static getName() {
        console.log("hi");
    }
}

const dheeraj = new PersonCl("dheeraj", 2000);
dheeraj.add = 10;
// console.log(dheeraj);
// PersonCl.getName();

// 1 - classes are not hoisted
// 2 - classes are first-class citizes
// 3- classes areexecuted in strict mode

/*
3 - object.create();
the easiest and most straighforwart way to linking and object to prototype object.
*/

const PersonProto = {
    getAge() {
        const date = new Date().getFullYear() - this.birthYear;
        return date;
    },
};

const steven = Object.create(PersonProto);
steven.name = "steven";
steven.birthYear = 2000;
// console.log(steven.getAge());

// INheritance Between Classes: Constructor Function

const PersonConstructor = function (name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
};

PersonConstructor.prototype.getName = function () {
    return this.name;
};

const StudenConstrictor = function (name, birthYear, course) {
    // call the funtion with this keyword, and the call function the point the this keyword the the new object which is intance of the PersonCostructor function.
    PersonConstructor.call(this, name, birthYear);
    this.course = course;
};

// linking the prototype with object.create methods. the object.create a empty object and the set the prototype into the PersonConstructor object. after the empty object is return from the function we create a instance of the StudentContrutor object. and then we can use the  person object methods inside the studeon object.
StudenConstrictor.prototype = Object.create(PersonConstructor.prototype);

StudenConstrictor.prototype.introduction = function () {
    return `hello my name is ${this.name}..`;
};

const dh = new StudenConstrictor("dheeraj", 2000);
// console.log(dh.getName());
// console.log(dh.introduction());

// challange

const Car = function (name, speed, make) {
    this.name = name;
    this.speed = speed;
    this.make = make;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.getName = function () {
    return this.name;
};

Car.prototype.break = function () {
    this.speed -= 10;
    console.log(`${this.make} is goind at ${this.speed}  km/h`);
};

const Ev = function (name, speed, make, charge) {
    Car.call(this, name, speed, make);
    this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);
// Ev.prototype = Car.prototype;

// console.log(Ev.__proto__ === Car.__proto__);
// console.log(Ev.prototype.constructor);
// console.log(Car.prototype.constructor);

const tesla = new Ev("tesla", 120, 30, 70);

// console.log(tesla);

// console.log(tesla.getName());

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();

// Encapsulation: Protected properties and methods

class Account {
    // public fields
    // _movements = [];

    // private fildes
    #pin;
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
    }

    getOwner() {
        return this.owner;
    }

    withdrwa(value) {
        this.#movements.push(-value);
    }
}

const dhe = new Account("dheeraj", "rups", 111);
// console.log(dhe.getOwner());
// dhe.withdrwa(3000);
// dhe.withdrwa(3000);
// console.log(dhe);
// console.log(dhe.movements);
// console.log(dhe.#pin);
