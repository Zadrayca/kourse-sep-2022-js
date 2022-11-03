// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 123, 44, 'qwe', 'asd', '544', 555, 'qwe123', 988, '999'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'title1',
    pageCount: 355,
    genre: 'historical'
};
let book2 = {
    title: 'title2',
    pageCount: 633,
    genre: 'fantasy'
};
let book3 = {
    title: 'title3',
    pageCount: 188,
    genre: 'detective'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'title4',
    pageCount: 800,
    genre: 'detective',
    authors: [
        {name: 'qweqw', age: 32},
        {name: 'asdasd', age: 54}]
};
let book5 = {
    title: 'title5',
    pageCount: 458,
    genre: 'fantasy',
    authors: [
        {name: 'dfdfgdf', age: 42},
        {name: 'ytuiyui', age: 73}]
};
let book6 = {
    title: 'title6',
    pageCount: 358,
    genre: 'historical',
    authors: [
        {name: 'vbnvbnv', age: 23},
        {name: 'lkl;kl;', age: 98}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let allUsers = [
    {name: 'qwe', username: 'sdfadsfsd', password: 55487},
    {name: 'asd', username: 'sdf', password: 456462652},
    {name: 'zxc', username: 'dsfsd', password: 5678458567},
    {name: 'dsfd', username: 'cvbcvbc', password: 26542564},
    {name: 'retegfe', username: 'fdser', password: 786467},
    {name: 'fcdvfvb', username: 'cxvxbrf', password: 2456456},
    {name: 'asdfsadf', username: 'tythge', password: 3453453},
    {name: 'sdfsdf', username: 'dsfsd', password: 865786},
    {name: 'wqewe', username: 'qweqweqwe', password: 35434536},
    {name: '1sdfasdf', username: 'cvzxczzxcbcvbc', password: 436573576}
];

console.log(allUsers[0].password);
console.log(allUsers[1].password);
console.log(allUsers[2].password);
console.log(allUsers[3].password);
console.log(allUsers[4].password);
console.log(allUsers[5].password);
console.log(allUsers[6].password);
console.log(allUsers[7].password);
console.log(allUsers[8].password);
console.log(allUsers[9].password);