//Constructor Function
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
}

// Membuat objek mobil dengan constructor function Car
const Car = new Car('Toyota', 'Silver', 200, 'to-1');
const Car = new Car('Honda', 'Black', 180, 'ho-1');
const Car = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }

Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

//class-membuat dengan class
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
    }

    drive() {
    console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
    console.log(`${this.brand} ${this.color} is turning`);
    }
}

  // Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }

Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/


//typeof-membuat dengan typeof
class Car {};
console.log(typeof Car);

/* Output
function
*/


//properti
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;   //bisa menggunakan>>> this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
}
    
const Car = new Car('BMW', 'red', 200, 'b-1');
const Car = new Car('Audi', 'blue', 220, 'a-1');
const Car = new Car('BMW', 'black', 250, 'b-2');
    
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/


//get set
class User {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

    get fullName() {
    return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);

user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);

/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/


//method
const car = new Car('BMW', 'red', 200);

car.drive();
car.turn('left');
car.reverse();

//member visibility (menggunakan '#')
class Car {
    #chassisNumber = null;

    constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
}

    get chassisNumber() {
    return this.#chassisNumber;
    }

    set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
    }

    // Methods
    drive() {
    console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}



//pewarisan
const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); // Error


//