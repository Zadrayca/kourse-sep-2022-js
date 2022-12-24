
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

users.forEach(user => {
    let userDiv = document.createElement('div');
    // userDiv.innerText = JSON.stringify(user);
    userDiv.innerText = `name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    let btn = document.createElement('button');
    btn.innerText = 'add to favorites';
    btn.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        // favorites.includes(user) - не спрацьовує, тому довелося через find()

        let include = favorites.find(item => item.name === user.name && item.age === user.age && item.status === user.status);

        if (include){
            console.log('include')
        } else {
            favorites.push(user);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    userDiv.appendChild(btn);

    fatherDiv.appendChild(userDiv);
})