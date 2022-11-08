// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 23423;

if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}

let a = 1;
if (a !== 0) {
    console.log(true);
} else {
    console.log(false);
}

a = 0;
if (a !== 0) {
    console.log(true);
} else {
    console.log(false);
}

a = -3;
if (a !== 0) {
    console.log(true);
} else {
    console.log(false);
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 35;

if (time > 44 && time < 60) {
    console.log('4');
} else if (time > 29 && time < 45) {
    console.log('3');
} else if (time > 14 && time < 30) {
    console.log('2');
} else if (time >= 0 && time < 15) {
    console.log('1');
} else {
    console.log('Error. Wrong time.')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 16;

if (day > 19 && day < 32) {
    console.log('3');
} else if (day > 9 && day < 20) {
    console.log('2');
} else if (day >= 0 && day < 10) {
    console.log('1');
} else {
    console.log('Error. Wrong day.')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let plane = +prompt('Plan day?');

switch (plane) {
    case 1 :
        console.log('Sunday');
        break;
    case 2 :
        console.log('Monday');
        break;
    case 3 :
        console.log('Tuesday');
        break;
    case 4 :
        console.log('Wednesday');
        break;
    case 5 :
        console.log('Thursday');
        break;
    case 6 :
        console.log('Friday');
        break;
    case 7 :
        console.log('Saturday');
        break;
    default :
        console.log('Error. Wrong day.')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('First number')
let num2 = +prompt('Second number')

if (num1 > num2) {
    console.log(num1 + ' bigger');
} else if (num2 > num1){
    console.log(num2 + ' bigger');
} else if (num1 === num2){
    console.log(num1 + ' and ' + num2 + ' Equal')
} else {
    console.log('Error!')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let q = 0;
if (q === 0 || q === false || q === undefined || q === null || q === '') {
    q = 'default';
}

console.log(q)