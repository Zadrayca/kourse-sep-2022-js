// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
const ua = 'ua';
console.log(ua);
let num1 = 1;
console.log(num1);
let num2 = 10;
console.log(num2);
let num3 = -999;
console.log(num3);
let num4 = 123;
console.log(num4);
const num5 = 3.14;
console.log(num5);
const num6 = 2.7;
console.log(num6);
let num7 = 17;
console.log(num7);
let bool1 = true;
console.log(bool1);
let bool2 = false;
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Konstiyantyn';
let middleName = 'Liashenko';
let lastName = 'Vitaliyovich';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

let firstName2 = prompt('name?');
let middleName2 = prompt('middle name?');
let age2 = +prompt('age?');
console.log(firstName2, middleName2, age2);
let person2 = firstName2 + ' ' + middleName2 + ' ' + age2;
console.log(person2);
person2 = `${firstName2} ${middleName2} ${age2}`;
console.log(person2);