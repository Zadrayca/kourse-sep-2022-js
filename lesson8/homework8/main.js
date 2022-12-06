// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];

for (let i = 0; i < 10; i++) {
    users.push(new User(i, 'sdasd', 'asdasdas', 'asdasd@gmail.com', 80935558877));
}

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

/// Зробив по спаданню, оскільки масив початково побудовано по зростанню.

console.log(users.sort((a, b) => b.id - a.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];

for (let i = 0; i < 10; i++) {
    let orders = [];
    let value = Math.floor(Math.random() * (10 - 1)) + 1;
    for (let j = 0; j < value; j++) {
        orders.push(Math.floor(Math.random() * (10 - 1)) + 1)
    }
    clients.push(new Client(i, 'sdasd', 'asdasdas', 'asdasd@gmail.com', 80935558877, orders));
}

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    }

    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function' && typeof this[carKey] !== 'object') {
                console.log(`${carKey} ${this[carKey]}`);
            } else if (typeof this[carKey] === 'object') {
                console.log(`${carKey} ${this[carKey].name}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('Jeep', 'GM', 2010, 200, 3);

car.drive();

car.increaseMaxSpeed(50);

car.changeYear(2020);

car.addDriver({name: 'Jonny'});

car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {

    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    }

    info() {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function' && typeof this[carKey] !== 'object') {
                console.log(`${carKey} ${this[carKey]}`);
            } else if (typeof this[carKey] === 'object') {
                console.log(`${carKey} ${this[carKey].name}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }

}

let car2 = new Car1('Ford', 'GM', 1990, 210, 2);

car2.drive();

car2.increaseMaxSpeed(50);

car2.changeYear(2015);

car2.addDriver({name: 'Smith'});

car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.

function Cinderella(name, age, legSize){
    this.name = name;
    this.age = age;
    this.legSize = legSize;
}

// Створити масив з 10 попелюшок.

let cinderellas = [];
for (let i = 0; i < 10; i++) {
    let sinAge = Math.floor(Math.random() * (35 - 18)) + 18;
    let leg = Math.floor(Math.random() * (45 - 35)) + 35;
    cinderellas.push(new Cinderella(`Cinderella ${i}`, sinAge, leg));
}

console.log(cinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let princeCharming = new Prince('Charles', 74, 43);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let cinderella of cinderellas) {
    if (cinderella.legSize === princeCharming.shoe) {
        console.log(`${cinderella.name} i ${princeCharming.name} Жили довго та щасливо!`);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(`${cinderellas.find(cinderella => cinderella.legSize === princeCharming.shoe).name} i ${princeCharming.name} Жили довго та щасливо!`);