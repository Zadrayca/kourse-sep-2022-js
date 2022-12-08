// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsonsDiv = document.getElementById('simpsons');

simpsons.forEach(simpson => {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member');

    let nameDiv = document.createElement('div');
    nameDiv.innerText = `name: ${simpson.name}`;
    let surnameDiv = document.createElement('div');
    surnameDiv.innerText = `surname: ${simpson.surname}`;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = `age: ${simpson.age}`;
    let infoDiv = document.createElement('div');
    infoDiv.innerText = `info: ${simpson.info}`;
    let photoDiv = document.createElement('div');
    let imgSim = document.createElement('img');
    imgSim.src = simpson.photo;
    photoDiv.append(imgSim);

    simpsonDiv.append(nameDiv, surnameDiv, ageDiv, infoDiv, photoDiv);
    simpsonsDiv.appendChild(simpsonDiv);
})


// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules:
            ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let coursesDiv = document.getElementById('courses');

coursesArray.forEach(course => {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.innerText = `title: ${course.title}`;

    let durationDiv = document.createElement('div');
    durationDiv.classList.add('duration');

    let monthDiv = document.createElement('div');
    monthDiv.classList.add('month');
    monthDiv.innerText = `monthDuration: ${course.monthDuration}`;

    let hourDiv = document.createElement('div');
    hourDiv.classList.add('hour');
    hourDiv.innerText = `hourDuration: ${course.hourDuration}`;

    durationDiv.append(monthDiv, hourDiv);

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules');
    course.modules.forEach(module => {
        let moduleDiv = document.createElement('div');
        moduleDiv.classList.add('module');
        moduleDiv.innerText = `module: ${module}`;
        modulesDiv.append(moduleDiv);
    })

    courseDiv.append(titleDiv, durationDiv, modulesDiv)
    coursesDiv.appendChild(courseDiv);
})


// ------------------


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'blue';
block.style.color = 'red';
block.style.fontSize = '25px';
block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nobis!';
document.body.appendChild(block);

let block2 = block.cloneNode(true);
document.body.appendChild(block2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu')[0];
arr.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
})

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let courses2Div = document.getElementById('course2');

coursesAndDurationArray.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('course2');
    itemDiv.innerText = `title: ${item.title}. Month duration: ${item.monthDuration}`;

    courses2Div.appendChild(itemDiv);
})


// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let courses3Div = document.getElementById('course3');

coursesAndDurationArray2.forEach(value => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    newDiv.append(h1, p);
    courses3Div.appendChild(newDiv);
})

// -----------

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на
// кнопку зникав елемент з id="text".

let textDiv = document.getElementById('text');
textDiv.innerText = 'Hide me';

let btnElem = document.getElementById('btn');
btnElem.innerText = 'Hide Btn';

let counter = 1;

function hide() {
    if (counter % 2 !== 0) {
        textDiv.style.display = 'none';
        btnElem.innerText = 'Show Btn';
        counter++
    } else {
        textDiv.style.display = 'flex';
        btnElem.innerText = 'Hide Btn';
        counter++
    }
}

btnElem.onclick = hide;

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let formElem = document.forms.f1;

let inputElement = document.createElement('input');

let btnElem2 = document.createElement('button');
btnElem2.innerText = 'Input age!';

formElem.append(inputElement, btnElem2);

function check(event) {
    event.preventDefault();
    if (inputElement.value < 18) {
        alert('Ти не пройдеш!');
    } else if (inputElement.value > 17) {
        alert('Welcome!!!');
    }
}

btnElem2.onclick = check;

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let formElem2 = document.forms.f2;

let inputElement1 = document.createElement('input');
let inputElement2 = document.createElement('input');
let inputElement3 = document.createElement('input');

let btnElem3 = document.createElement('button');
btnElem3.innerText = 'Input!';

formElem2.append(inputElement1, inputElement2, inputElement3, btnElem3);

let outputDiv = document.getElementById('output');

function check2(event) {
    event.preventDefault();

    for (let i = 0; i < inputElement1.value; i++) {
        let divElement = document.createElement('div');
        divElement.style.display = 'flex';
        divElement.style.flexDirection = 'row';
        divElement.style.columnGap = '15px';
        for (let j = 0; j < inputElement2.value; j++) {
            let divElement2 = document.createElement('div');
            divElement2.style.border = '1px solid black';
            divElement2.innerText = inputElement3.value;
            divElement.append(divElement2);
        }

        outputDiv.append(divElement);
    }
}

btnElem3.onclick = check2;