// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    }
}

min(5, 10, 2);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }
}

max(5, 10, 2);
// - створити функцію яка повертає найбільше число з масиву

let arr1 = [155, 123, 44, 7, 32, 544, 555, 58, 69, 777, 12, 20];

let max_arr = (arr) => {
    let x = arr[0];
    for (let ar of arr) {
        if (x < ar) {
            x = ar;
        }
    }
    return x;
}

console.log(max_arr(arr1));
// - створити функцію яка повертає найменьше число з масиву

let min_arr = (arr) => {
    let x = arr[0];
    for (let ar of arr) {
        if (x > ar) {
            x = ar;
        }
    }
    return x;
}

console.log(min_arr(arr1));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let summ = (arr) => {
    let x = 0;
    for (let ar of arr) {
        x += ar;
    }
    return x;
}

console.log(summ(arr1));
// - Дано натуральное число n. Выведите все числа от 1 до n.

let print_list = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

print_list(13);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

let print_list2 = (a, b) => {
    if (a < b) {
        for (; a <= b; a++) {
            console.log(a);
        }
    } else {
        for (; a >= b; a--) {
            console.log(a);
        }
    }
}

print_list2(5, 14);

print_list2(23, 16);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let change = (arr, i) => {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    console.log(arr);
}
let arr2 = [155, 123, 44, 7, 32, 544, 555, 58, 69, 777, 12, 20];
change(arr2, 3);

// - Створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let arr3 = [155, 0, 123, 44, 0, 7, 32, 544, 0, 555, 58, 0, 0, 0, 0, 69, 777, 12, 20];

let zero = (a, b) => {
    if (b === 0) {
        return -1;
    }
}

console.log(arr3.sort(zero));
