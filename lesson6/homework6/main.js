// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.replaceAll(' ', '',))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';

let stringToarray = (str) => {
    return str.split(' ');
}

let arr = stringToarray(str2);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

num = num.map(value => value.toString());

console.log(num);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        nums.sort((a, b) => b - a);
    }
    return nums;
}

console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

coursesAndDurationArray = coursesAndDurationArray.filter(month => month.monthDuration > 5);
console.log(coursesAndDurationArray);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let color = ['red', 'black'];
let cards = [];

for (let i = 0; i < cardSuit.length; i++)
    for (let j = 0; j < value.length; j++)
        for (let k = 0; k < color.length; k++) {
            if (color[k] === 'red' && cardSuit[i] === 'diamond' || color[k] === 'red' && cardSuit[i] === 'heart') {

                let card = {cardSuit: cardSuit[i], value: value[j], color: color[k]};
                cards.push(card);
            } else if (color[k] === 'black' && cardSuit[i] === 'spade' || color[k] === 'black' && cardSuit[i] === 'clubs') {
                let card = {cardSuit: cardSuit[i], value: value[j], color: color[k]};
                cards.push(card);
            }
        }
cards.push({cardSuit: NaN, value: 'joker', color: NaN});
cards.push({cardSuit: NaN, value: 'joker', color: NaN});

console.log(cards);

console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace'));

console.log(cards.filter(card => card.value === '6'));

console.log(cards.filter(card => card.color === 'red'));

console.log(cards.filter(card => card.cardSuit === 'diamond'));

console.log(cards.filter(card => card.cardSuit === 'clubs' && card.value > 9 || card.cardSuit === 'clubs' && card.value > '9'));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let newCards = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(newCards);