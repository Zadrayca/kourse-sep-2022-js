// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули


let boxDiv = document.getElementById('box1');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        value.forEach(item => {

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item1')
            const idDiv = document.createElement('div');
            idDiv.innerText = `id: ${item.id}`;
            const nameDiv = document.createElement('div');
            nameDiv.innerText = `name: ${item.name}`;

            let aDetails = document.createElement('a');
            aDetails.href = `user-details.html?id=${item.id}`;

            let buttonDetails = document.createElement('button');
            buttonDetails.innerText = 'User-Details';

            aDetails.appendChild(buttonDetails);
            itemDiv.append(idDiv, nameDiv, aDetails);
            boxDiv.append(itemDiv);

        })
    })


// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки
//     (дати фон. марджини і тд)