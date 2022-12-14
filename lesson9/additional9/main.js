// - Є масив :

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів
// створити свої окремі блок.

usersList.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item')
    const idDiv = document.createElement('div');
    idDiv.innerText = 'id: ' + item.id;
    const nameDiv = document.createElement('div');
    nameDiv.innerText = 'name: ' + item.name;
    const usernameDiv = document.createElement('div');
    usernameDiv.innerText = 'username: ' + item.username;
    const emailDiv = document.createElement('div');
    emailDiv.innerText = 'email: ' + item.email;

    const addressDiv = document.createElement('div');
    const streetDiv = document.createElement('div');
    streetDiv.innerText = 'street: ' + item.address.street;
    const suiteDiv = document.createElement('div');
    suiteDiv.innerText = 'suite: ' + item.address.suite;
    const cityDiv = document.createElement('div');
    cityDiv.innerText = 'city: ' + item.address.city;
    const zipcodeDiv = document.createElement('div');
    zipcodeDiv.innerText = 'zipcode: ' + item.address.zipcode;

    const geoDiv = document.createElement('div');
    const latDiv = document.createElement('div');
    latDiv.innerText = 'lat: ' + item.address.geo.lat;
    const lngDiv = document.createElement('div');
    lngDiv.innerText = 'lng: ' + item.address.geo.lng;

    geoDiv.append(latDiv, lngDiv);

    addressDiv.append(streetDiv, suiteDiv, cityDiv, zipcodeDiv, geoDiv);

    const phoneDiv = document.createElement('div');
    phoneDiv.innerText = 'phone: ' + item.phone;
    const websiteDiv = document.createElement('div');
    websiteDiv.innerText = 'website: ' + item.website;
    const companyDiv = document.createElement('div');

    const comNameDiv = document.createElement('div');
    comNameDiv.innerText = 'name: ' + item.company.name;
    const catchPhraseDiv = document.createElement('div');
    catchPhraseDiv.innerText = 'catchPhrase: ' + item.company.catchPhrase;
    const bsDiv = document.createElement('div');
    bsDiv.innerText = 'bs: ' + item.company.bs;

    companyDiv.append(comNameDiv, catchPhraseDiv, bsDiv);

    itemDiv.append(idDiv, nameDiv, usernameDiv, emailDiv, addressDiv, phoneDiv, websiteDiv, companyDiv)


    document.body.appendChild(itemDiv);

})


//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));                                     //Второй вариант
//////////////////////////////////////////////////////////////////////////////////////////////////////

usersList.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    let userDiv = document.createElement('div');
    let user2Div = document.createElement('div');
    let addressDiv = document.createElement('div');
    let address2Div = document.createElement('div');
    let geoDiv = document.createElement('div');
    let geoDiv2 = document.createElement('div');
    let companyDiv = document.createElement('div');
    let company2Div = document.createElement('div');
    let cloneDiv = document.createElement('div');

    for (let user in item) {
        if (user === 'address') {
            for (let key2 in item[user]) {
                if (key2 === 'geo') {
                    for (let key3 in item[user][key2]) {
                        geoDiv2 = cloneDiv.cloneNode(true);
                        geoDiv2.innerText = `${key3}: ${item[user][key2][key3]}`;
                        geoDiv.appendChild(geoDiv2);
                    }
                } else {
                    address2Div = cloneDiv.cloneNode(true);
                    address2Div.innerText = `${key2}: ${item[user][key2]}`;
                }
                addressDiv.append(address2Div, geoDiv);
            }
        } else if (user === 'company') {
            for (let key2 in item[user]) {
                company2Div = cloneDiv.cloneNode(true);
                company2Div.innerText = `${key2}: ${item[user][key2]}`;
                companyDiv.appendChild(company2Div);
            }
        } else {
            user2Div = cloneDiv.cloneNode(true);
            user2Div.innerText = `${user}: ${item[user]}`;
            userDiv.appendChild(user2Div);
        }

    }

    itemDiv.append(userDiv, addressDiv, companyDiv);

    document.body.appendChild(itemDiv);
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));                                     //Третий вариант
//////////////////////////////////////////////////////////////////////////////////////////////////////

usersList.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
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

    for (const [key, value] of Object.entries(item)) {
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
    document.body.appendChild(itemDiv);
})

// --------
// за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив)
// характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs


let count = 0;

const arr = {headings: [], paragraphs: []};

function reqrsiv(count) {
    const allElem = Array.from(document.getElementsByTagName('*'));

    if (count >= allElem.length) {
        return;
    } else {
        const object = allElem[count];
        const oName = object.localName;

        if (oName === 'h1' || oName === 'h2' || oName === 'h3' || oName === 'h4' || oName === 'h5') {
            arr.headings.push(object.outerText); //в умові не зазначено, що саме з об'єкта покласти в масив
            // arr.headings.push(allElem[count].outerHTML);   в умові не зазначено, що саме з об'єкта покласти в масив
            // arr.headings.push(allElem[count]);   в умові не зазначено, що саме з об'єкта покласти в масив
            count++;
            reqrsiv(count);
        } else if (oName === 'p') {
            arr.paragraphs.push(object.outerText); //в умові не зазначено, що саме з об'єкта покласти в масив
            count++;
            reqrsiv(count);
        } else {
            count++;
            reqrsiv(count);
        }
    }
}

reqrsiv(count);

console.log(arr);

// ------

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.body.appendChild(document.createElement('hr'));
//////////////////////////////////////////////////////////////////////////////////////////////////////

// зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

const contDiv = document.createElement('div');
contDiv.contentEditable = 'true';
contDiv.innerText = 'Welcome';
document.body.appendChild(contDiv);
contDiv.onkeydown = (e) => {
    if (e.key === 'Tab') {
        console.log(contDiv.innerText);
        contDiv.innerText = `<${contDiv.innerText}></${contDiv.innerText}>`
    }
}