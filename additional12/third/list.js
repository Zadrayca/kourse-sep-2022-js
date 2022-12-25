const delAllBtn = document.getElementById('delAllBtn');

delAllBtn.onclick = delAllGoods;

const goodsListDiv = document.getElementById('goodsListDiv');

let listOfGoods = JSON.parse(localStorage.getItem('listOfGoods')) || [];

// console.log(listOfGoods);

function cleanGoods() {
    goodsListDiv.innerHTML = '';
}

function printGoods() {
    listOfGoods.forEach(goods => {

        let goodsDiv = document.createElement('div');
        goodsDiv.classList.add('goodsDiv')

        let goodsIdDiv = document.createElement('div');
        goodsIdDiv.innerText = goods.id;
        goodsIdDiv.style.display = 'none';

        let goodsTextDiv = document.createElement('div');
        goodsTextDiv.classList.add('goodsTextDiv')

        let goodsNameDiv = document.createElement('div');
        goodsNameDiv.innerText = `Goods name: ${goods.name}`;

        let goodsAmountDiv = document.createElement('div');
        goodsAmountDiv.innerText = `Goods amount: ${goods.amount}`;

        let goodsPriceDiv = document.createElement('div');
        goodsPriceDiv.innerText = `Goods price: ${goods.price}`;

        let goodsPictureDiv = document.createElement('div');
        let goodsPicture = document.createElement('img');
        goodsPicture.src = goods.picture;
        goodsPictureDiv.appendChild(goodsPicture);

        let oneGoodsDelDiv = document.createElement('div');
        let oneGoodsDelBtn = document.createElement('button');
        oneGoodsDelBtn.id = 'oneGoodsDelBtn';
        oneGoodsDelBtn.innerText = 'Delete this goods.';
        oneGoodsDelDiv.appendChild(oneGoodsDelBtn);

        oneGoodsDelDiv.onclick = oneGoodsDel;

        goodsTextDiv.append(goodsNameDiv, goodsAmountDiv, goodsPriceDiv);


        goodsDiv.append(goodsIdDiv, goodsTextDiv, goodsPictureDiv, oneGoodsDelDiv);
        goodsListDiv.appendChild(goodsDiv);
    })
}

printGoods();

function oneGoodsDel(event) {
    // console.log(event);
    // console.log(event.path[2].children[0].innerText);
    let goodsIdToDel = +event.path[2].children[0].innerText;

    listOfGoods = listOfGoods.filter(goods => goods.id !== goodsIdToDel);
    localStorage.setItem('listOfGoods', JSON.stringify(listOfGoods));

    cleanGoods();

    printGoods();
}

function delAllGoods() {
    listOfGoods = [];
    localStorage.setItem('listOfGoods', JSON.stringify(listOfGoods));

    cleanGoods();

    printGoods();
}