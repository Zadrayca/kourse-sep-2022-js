// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


const fatherDiv = document.getElementById('father');
const favoriteBtn = document.createElement('button');
favoriteBtn.innerText = 'To favorites';

const favoriteA = document.createElement('a');
favoriteA.href = "favorites.html";

favoriteA.appendChild(favoriteBtn);

fatherDiv.appendChild(favoriteA);

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function checkFavorites(user) {

    // favorites.includes(user) - не спрацьовує, тому довелося через find()

    return favorites.find(item =>
        item.name === user.name &&
        item.age === user.age &&
        item.status === user.status);
}

users.forEach(user => {
    let userDiv = document.createElement('div');
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('itemDiv');
    userDiv.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    let btn = document.createElement('button');

    if (checkFavorites(user)) {
        btn.innerText = 'added';
        btn.style.backgroundColor = 'gray';
    } else {
        btn.innerText = 'add to favorites';
    }

    btn.onclick = function () {

        if (checkFavorites(user)) {
            console.log('include')
        } else {
            favorites.push(user);
            btn.innerText = 'added';
            btn.style.backgroundColor = 'gray';
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    itemDiv.append(userDiv, btn);

    fatherDiv.appendChild(itemDiv);
})