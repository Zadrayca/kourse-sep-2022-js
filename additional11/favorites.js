let favorites = (JSON.parse(localStorage.getItem('favorites')));

const favoritesDiv = document.getElementById('favorites');
favorites.forEach(item => {
    let divDiv = document.createElement('div');
    // .innerText = JSON.stringify(item);
    divDiv.classList.add('userDiv');
    divDiv.innerText = `name: ${item.name}, age: ${item.age}, status: ${item.status}`;
    favoritesDiv.appendChild(divDiv)
})