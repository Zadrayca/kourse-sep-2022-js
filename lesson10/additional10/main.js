// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badWords = ['Barlog', 'Saruman', 'Sauron', 'Orc', 'Goblin'];

let btn = document.getElementById('btn');
btn.onclick = function () {
    let bad = document.getElementById('bad').value;
    if (badWords.includes(bad)) console.log('You shall not pass!'); // Варіант перевірки без циклу
    for (let badWord of badWords) { // Перевірка з циклом
        if (badWord === bad) {
            alert('You shall not pass!')
        }
    }
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    let bad = document.getElementById('bad2').value;
    for (let badWord of badWords) {
        if (bad.includes(badWord)) {
            alert('You shall not pass!')
        }
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function () {
    this.classList.toggle('collapse');
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
]

comments.forEach(item => {

    let commentsDiv = document.getElementById('comments');
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    let tittleH2 = document.createElement('h3');
    tittleH2.innerText = item.title;
    let bodyDiv = document.createElement('div');
    bodyDiv.innerText = item.body;
    bodyDiv.classList.add('body-comment');
    let btn = document.createElement('button');
    btn.innerText = 'hide comment body';

    btn.onclick = function () {
        bodyDiv.classList.toggle('hide-body');
    }


    commentDiv.append(tittleH2, bodyDiv, btn);
    commentsDiv.appendChild(commentDiv);
})

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btnHideDiv = document.getElementById('btnHide');

let btnHide = document.createElement('button');
btnHide.innerText = 'Hide me!';
btnHideDiv.appendChild(btnHide);

btnHide.onclick = function () {
    btnHide.classList.toggle('hide-btn');
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let click1 = function () {
    addEventListener('click', function (click) {
        // console.log(click);
        console.log('teg name: ' + click.target.localName);
        // console.log(click.target.classList);
        let classList = 'class: ';
        click.target.classList.forEach(item => {
            classList += ` ${item},`;
        })
        console.log(classList.slice(0, -1));
        console.log('id: ' + click.target.id);
        console.log(click.target.clientHeight + '*' + click.target.clientWidth + 'px');
    });
};

click1()

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let click2 = function () {
    let popup = document.createElement('div');
    let tegDiv = document.createElement('div');
    let classDiv = document.createElement('div');
    let idDiv = document.createElement('div');
    let hAndWDiv = document.createElement('div');

    addEventListener('click', function (click) {
        let text = 'class: ';
        popup.classList.add('popup');
        popup.classList.toggle('show_popup');
        tegDiv.innerText = 'teg name: ' + click.target.localName;
        click.target.classList.forEach(item => {
            text += item + ', ';
        })
        classDiv.innerText = text;
        idDiv.innerText = 'id: ' + click.target.id;
        hAndWDiv.innerText = click.target.clientHeight + '*' + click.target.clientWidth + 'px';
    });

    popup.append(tegDiv, classDiv, idDiv, hAndWDiv);
    document.body.appendChild(popup);
};

click2()


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let box1 = document.getElementById('filter1');
let box2 = document.getElementById('filter2');
let box3 = document.getElementById('filter3');

let boxFun = function (box) {
    box.onclick = function () {
    }
    return box.checked;
}

let nuser = [];

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

let chbox = function () {
    document.addEventListener('change', function () {
        let chk = event.target;
        console.log(chk, chk.tagName);

        if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {

            let userDiv = document.getElementById('userDiv');

            clearBox('userDiv');

            nuser = usersWithAddress.slice();
            console.log(nuser);
            if (boxFun(box1)) {
                nuser = nuser.filter(user => user.status === false);
            }
            if (boxFun(box2)) {
                nuser = nuser.filter(user => user.age >= 29);
            }
            if (boxFun(box3)) {
                nuser = nuser.filter(user => user.address.city === 'Kyiv');
            }

            nuser.forEach(item => {
                let addressDiv = document.createElement('div');
                let cloneDiv = document.createElement('div');
                let user3Div = document.createElement('div');
                user3Div.classList.add('item', 'user3');
                addressDiv.classList.add('item');
                cloneDiv.classList.add('item');

                for (let user in item) {
                    if (user === 'address') {
                        for (let key2 in item[user]) {
                            let address2Div = cloneDiv.cloneNode(true);
                            address2Div.innerText = `${key2}: ${item[user][key2]}`;
                            addressDiv.appendChild(address2Div);
                        }
                    } else {
                        let user2Div = cloneDiv.cloneNode(true);
                        user2Div.innerText = `${user}: ${item[user]}`;
                        user3Div.append(user2Div, addressDiv);
                        userDiv.append(user3Div);
                    }
                }
            })
        }
    })
}

chbox()


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)при нажатии вперед, вы переходите к дочернему элементу,
// при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента
// и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
//     лежащему с ним на одном уровне

let next = document.createElement('button');
next.classList.add('next', 'btn');
next.innerText = 'next';

let back = document.createElement('button');
back.classList.add('back', 'btn');
back.innerText = 'back';

let bodyChild = document.body.children[0];

let proV = function () {
    if (bodyChild.firstElementChild !== null) {
        bodyChild = bodyChild.firstElementChild;
        console.log('fff111');
    } else if (bodyChild.nextElementSibling !== null) {
        bodyChild = bodyChild.nextElementSibling;
        console.log('fff222');
    } else {
        bodyChild = bodyChild.parentElement;
        console.log('fff333');
        if (bodyChild.nextElementSibling !== null) {
            bodyChild = bodyChild.nextElementSibling;
            console.log('fff444');
            return null;
        } else {
            bodyChild = bodyChild.parentElement;
            bodyChild = bodyChild.nextElementSibling;
            return null;
        }
    }
}

let proV2 = function () {
    if (bodyChild.firstElementChild !== null) {
        bodyChild = bodyChild.lastElementChild;
    } else if (bodyChild.previousElementSibling !== null) {
        bodyChild = bodyChild.previousElementSibling;
    } else {
        bodyChild = bodyChild.parentElement;
        if (bodyChild.previousElementSibling !== null) {
            bodyChild = bodyChild.previousElementSibling
            return null;
        } else {
            bodyChild = bodyChild.parentElement;
            bodyChild = bodyChild.previousElementSibling;
            return null;
        }
    }

}

let popup = document.createElement('div');
let tegDiv = document.createElement('div');
let classDiv = document.createElement('div');
let idDiv = document.createElement('div');
let hAndWDiv = document.createElement('div');
let infoPop = function () {
    let text = 'class: ';
    popup.classList.add('popup');
    popup.classList.add('show_popup2');
    tegDiv.innerText = 'teg name: ' + bodyChild.localName;
    bodyChild.classList.forEach(item => {
        text += item + ', ';
    })
    classDiv.innerText = text;
    idDiv.innerText = 'id: ' + bodyChild.id;
    hAndWDiv.innerText = bodyChild.clientHeight + '*' + bodyChild.clientWidth + 'px';
}
popup.append(tegDiv, classDiv, idDiv, hAndWDiv);
document.body.appendChild(popup);

let nextFunc = function () {
    bodyChild.style.background = 'none';

    proV();
    infoPop()

    bodyChild.style.background = 'blue';
}

let backFunc = function () {
    bodyChild.style.background = 'none';

    proV2()
    infoPop()

    bodyChild.style.background = 'blue';
}

next.onclick = nextFunc;
back.onclick = backFunc;

document.body.append(next, back);


//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));                                     //Другий вариант
//////////////////////////////////////////////////////////////////////////////////////////////////////

let next2 = document.createElement('button');
next2.classList.add('next', 'btn');
next2.innerText = 'next2';

let back2 = document.createElement('button');
back2.classList.add('back', 'btn');
back2.innerText = 'back2';

let bodyChild2 = document.body.children[0];

// console.log(bodyChild2);

let check = -1;
let iter = 0;

const step = function (back) {

    if (back === -2) iter += back;

    if (iter > 52) iter = 0;
    if (iter < 0) iter = 52;

    function nextFunc2(arr, xxx) {
        arr.style.background = 'none';

        let children = arr.children;

        check++;
        if (iter === check) {
            // console.warn(children);
            // console.log(arr);
            // console.log(iter, check, 'qweqweqweqew');
            infoPop2(arr);
            arr.style.background = 'orange';

            return;

        } else{
            if (children.length !== 0 && check < iter) {
                // console.log(iter, check, 'zxczxczxc');
                // bodyChild2 = children[0];
                // console.log(arr);

                for (const child of children) {
                    // check++
                    // console.log(check, 'qqq');
                    // console.log(iter, check, 'zxc123123123zxczxc');

                    nextFunc2(child, check);
                }
            }
        }
    }

    nextFunc2(bodyChild2, check)

    iter++;
    check = -1;

    // return nextFunc2;
}


function backstep() {
    step(-2);
}

let popup2 = document.createElement('div');
let tegDiv2 = document.createElement('div');
let classDiv2 = document.createElement('div');
let idDiv2 = document.createElement('div');
let hAndWDiv2 = document.createElement('div');
let infoPop2 = function (bodyChild) {
    let text = 'class: ';
    popup2.classList.add('popup');
    popup2.classList.add('show_popup2', 'show_popup3');
    tegDiv2.innerText = 'teg name: ' + bodyChild.localName;
    bodyChild.classList.forEach(item => {
        text += item + ', ';
    })
    classDiv2.innerText = text;
    idDiv2.innerText = 'id: ' + bodyChild.id;
    hAndWDiv2.innerText = bodyChild.clientHeight + '*' + bodyChild.clientWidth + 'px';
}
popup2.append(tegDiv2, classDiv2, idDiv2, hAndWDiv2);
document.body.appendChild(popup2);


next2.onclick = step;
back2.onclick = backstep;

document.body.append(next2, back2);


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let imageDiv = document.createElement('div');
imageDiv.classList.add('imageDiv');
let leftBtn = document.createElement('button');
let rightBtn = document.createElement('button');
leftBtn.classList.add('btnKar', 'karL');
rightBtn.classList.add('btnKar', 'karR');
leftBtn.innerText = '<';
rightBtn.innerText = '>';

let imagee = document.createElement('img');
imagee.classList.add('imagee');

let imgBank = ['https://pngimg.com/uploads/simpsons/simpsons_PNG81.png',
    'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif', 'https://avatanplus.com/files/resources/mid/582dd00255e7715872f48930.png']
imagee.src = imgBank[0];

let slideCount = 0;
let nextImg = function (){
    if(slideCount < imgBank.length - 1){
        slideCount++;
        imagee.src = imgBank[slideCount];
    } else {
        slideCount = 0;
        imagee.src = imgBank[slideCount];
    }
}

let prevImg = function (){
    if(slideCount <= 0){
        slideCount = 2;
        imagee.src = imgBank[slideCount];
    } else {
        slideCount--;
        imagee.src = imgBank[slideCount];
    }
}

rightBtn.onclick = nextImg;
leftBtn.onclick = prevImg;

imageDiv.appendChild(imagee);
document.body.append(imageDiv, leftBtn, rightBtn);

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

document.onselectionchange = function (){
    styliString();
}

function styliString() {
    if (window.getSelection() === '') {
        return false;
    }
    document.onmouseup = function (){

        let range = window.getSelection().getRangeAt(0);
        let selectionContents = range.extractContents();
        let span = document.createElement("span");
        span.appendChild(selectionContents);
        span.setAttribute("class", "selected");
        span.style.backgroundColor = "yellow";
        span.style.color = "green";
        range.insertNode(span);
    }
}

//---------------------------------------------
// второй вариант - использовать - /*::selection { color: red; background-color: yellow; }*/
