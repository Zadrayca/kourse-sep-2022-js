// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        users.forEach(user => {
            let fatherDiv = document.getElementById('father');

            let fullUserDiv = document.createElement('div');
            fullUserDiv.classList.add('fullUser');
            let userDiv = document.createElement('div');
            let hrefDiv = document.createElement('div');
            let hrefA = document.createElement('a');
            userDiv.innerText = `id: ${user.id} name: ${user.name}`;
            hrefA.innerText = 'details about user';
            hrefA.href = `user-details.html?id=${user.id}`;

            hrefDiv.appendChild(hrefA);
            fullUserDiv.append(userDiv, hrefDiv);
            fatherDiv.appendChild(fullUserDiv);
        })

    })