let url = new URL(location.href);

let id = url.searchParams.get('id');

console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        console.log(user);

        let itemDiv = document.getElementById('item');

        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        let user2Div = document.createElement('div');
        let addressDiv = document.createElement('div');
        addressDiv.classList.add('address');
        let address2Div = document.createElement('div');
        let geoDiv = document.createElement('div');
        geoDiv.classList.add('geo');
        let geoDiv2 = document.createElement('div');
        let companyDiv = document.createElement('div');
        companyDiv.classList.add('company');
        let company2Div = document.createElement('div');
        let cloneDiv = document.createElement('div');

        for (const [key, value] of Object.entries(user)) {
            console.log(value);
            if (key === 'address') {
                for (const [key2, value2] of Object.entries(value)) {
                    if (key2 === 'geo') {
                        for (const [key3, value3] of Object.entries(value2)) {
                            geoDiv2 = cloneDiv.cloneNode(true);
                            geoDiv2.innerText = `${key3}: ${value3}`;
                            geoDiv.appendChild(geoDiv2);
                        }
                    } else {
                        address2Div = cloneDiv.cloneNode(true);
                        address2Div.innerText = `${key2}: ${value2}`;
                    }
                    addressDiv.append(address2Div, geoDiv);
                }
            } else if (key === 'company') {
                for (const [key2, value2] of Object.entries(value)) {
                    company2Div = cloneDiv.cloneNode(true);
                    company2Div.innerText = `${key2}: ${value2}`;
                    companyDiv.appendChild(company2Div);
                }
            } else {
                user2Div = cloneDiv.cloneNode(true);
                user2Div.innerText = `${key}: ${value}`;
                userDiv.appendChild(user2Div);
            }
        }
        itemDiv.append(userDiv, addressDiv, companyDiv);

    })