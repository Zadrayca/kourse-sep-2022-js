// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


const addGoods = document.forms.addGoods;

const formBtn = document.getElementById('formBtn');

function save(event) {
    event.preventDefault();

    let listOfGoods = JSON.parse(localStorage.getItem('listOfGoods')) || [];

    // console.log(listOfGoods);

    let newGoods = listOfGoods.length ?
        {
            id: listOfGoods[listOfGoods.length - 1].id + 1,
            name: addGoods.goodsName.value,
            amount: addGoods.goodsAmount.value,
            price: addGoods.goodsPrice.value,
            picture: addGoods.goodsPicture.value
        } :
        {
            id: 0,
            name: addGoods.goodsName.value,
            amount: addGoods.goodsAmount.value,
            price: addGoods.goodsPrice.value,
            picture: addGoods.goodsPicture.value
        }

    // console.log(newGoods);

    let include = listOfGoods.find(goods =>
        goods.name === newGoods.name &&
        goods.amount === newGoods.amount &&
        goods.price === newGoods.price &&
        goods.picture === newGoods.picture
    );

    if (include) {
        console.log('include');
    } else {
        listOfGoods.push(newGoods);
    }
    localStorage.setItem('listOfGoods', JSON.stringify(listOfGoods));


    // console.log(listOfGoods);
}

formBtn.onclick = save;

