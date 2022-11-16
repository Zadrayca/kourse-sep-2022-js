// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function space(a, b) {
    return a * b;
}

console.log(space(5, 15));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let round = (r) => {
    return 3.14 * (r ** 2);
}
console.log(round(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cilinder = (h, r) => {
    return 2 * 3.14 * r * (h + r);
}
console.log(cilinder(7, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 123, 44, 'qwe', 'asd', '544', 555, true, false, 'qwe123', 988, '999'];

let print = (mass) => {
    for (let unit of mass) {
        console.log(unit)
    }
}
print(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let par = (text) => {
    document.write(`<p>${text}</p>`);
}

par('Lorem ipsum dolor.');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list = (arg) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${arg}</li>`);
    }
    document.write(`</ul>`);
}

list('qwerty');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list2 = (arg, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${arg}</li>`);
    }
    document.write(`</ul>`);
}

list2('qwerty', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let list3 = (arg) => {
    document.write(`<ul>`);
    for (let ar of arg) {
        document.write(`<li>${ar}</li>`);
    }
    document.write(`</ul>`);
}

list3(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

let pobj = (mass) => {
    for (let user of mass) {
        document.write(`<div>id: ${user.id}, name: ${user.name}, age: ${user.age}</div>`);
    }
}
pobj(users);
// - створити функцію яка повертає найменьше число з масиву

let min = (arr) => {
    let x = arr[0];
    for (let ar of arr) {
        if (x > ar) {
            x = ar;
        }
    }
    return x;
}

let arr2 = [155, 123, 44, 7, 32, 544, 555, 58, 69, 777, 12, 20];

console.log(min(arr2));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let summ = (arr) => {
    let x = 0;
    for (let ar of arr) {
        x += ar;
    }
    return x;
}

console.log(summ(arr2));