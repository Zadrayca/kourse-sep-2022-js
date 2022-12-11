// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const arrFunc = [];
const allElem = Array.from(document.getElementsByTagName('*'));
let index = 0;
let lenClass = 0;
getNameFunc = function () {
    for (const item of allElem) {
        if (item.classList.item(index) !== null && arrFunc.includes(item.classList.item(index)) === false) {
            arrFunc.push(item.classList.item(index));
            if (lenClass <= item.classList.length){
                lenClass = item.classList.length;
            }
        }
    }
    index++;
    if(index < lenClass){
        return getNameFunc()
    }
}

getNameFunc()

console.log(arrFunc);

//////////////////////////////////
//  Другий варіант.
//////////////////////////////////

let count = 0;

const classArr = [];

getClass = function (count){
    const allElem1 = Array.from(document.getElementsByTagName('*'));

    if (count >= allElem1.length) {
        return;
    } else {
        const object = allElem1[count];

        if (object.classList.length) {
            object.classList.forEach(className =>{
                if (classArr.includes(className) === false) classArr.push(className);
            })
        }
        count++;
        getClass(count);
    }
}

getClass(count)

console.log(classArr);