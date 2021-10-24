// 1.	Atskiri elementai
// a.	Tamsiai žaliai nuspalvinti h1 tagą;

let h1DOM = document.getElementsByTagName('h1')[0];
h1DOM.style.backgroundColor = "green";

console.log(h1DOM);

// b.	Tagui i pridėti klasę small;
let iDOM = document.getElementsByTagName('i')[0];
iDOM.classList.add('small');

console.log(iDOM);

// c.	Iš tago h1 pašalinti klasę main;

h1DOM.classList.remove('main');

console.log(h1DOM);

// d.	Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;

let h2DOM = document.querySelector('h1 + h2');
h2DOM.classList.add('first');
h2DOM.classList.remove('main');

console.log(h2DOM);

// e.	Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
let spanDOM = document.querySelector('h2 > span:first-of-type');
spanDOM.style.color = 'gray';
spanDOM.style.fontSize = '10px';

console.log(spanDOM);
// ------------------------------------------------------------------------
// 2.	Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a.	Suskaičiuoti kiek yra h2 tagų;

function countH2() {
    return document.querySelectorAll('h2').length;
}
console.log('kiek yra h2 tagų: ', countH2());

// b.	Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

function firstH2() {
    return document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length;
}
console.log('h2 tagų, kurie neturi klasės first: ', firstH2());

// c.	Visus h2 tagus nuspalvinti šviesiai mėlynai

h2DOM = document.querySelectorAll('h2');
h2DOM.forEach(function (element) {
    element.style.color = 'lightblue'
});

console.log(h2DOM);

// d.	Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

let divDOM = document.querySelectorAll('div.prices');
divDOM.forEach(function (element) {
    element.classList.add('price-tag');
});

console.log(divDOM);

// e.	Pabraukti visus tagus su klase new;
let newDOM = document.querySelectorAll('.new');
newDOM.forEach(function (element) {
    element.style.textDecoration = 'underline'
});

console.log(newDOM);

// f.	Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

let gyvunai = document.querySelectorAll('ul').length;
console.log('kiek yra gyvūnų kategorijų: ', gyvunai);


let zirafos = document.querySelectorAll('#zirafos li:not(.like-button)').length;

console.log('kiek yra zirafu: ', zirafos);

// g.	Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

let ulDOM = document.querySelectorAll('ul');

ulDOM.forEach(function (element) {
    element.style.border = '5px solid blue'
});

ulDOM.forEach(function (element) {
    element.style.padding = '15px 50px 15px 50px'
});
console.log(ulDOM);

// h.	Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

let naujiGyvunai = document.querySelectorAll('.new').length;

console.log('kiek yra naujų gyvūnų (su klase new): ', naujiGyvunai);

// i.	Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

let atskiraiGyvunai = document.querySelectorAll('.animals .new').length;

console.log('atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje: ', atskiraiGyvunai);

let zirafuKiekis = document.querySelectorAll('#zirafos .new').length;
console.log('nauju zirafu kiekis: ', zirafuKiekis);

let plesrunuKiekis = document.querySelectorAll('#plesrunai .new').length;
console.log('nauju plesrunu kiekis: ', plesrunuKiekis);

let gyvaciuKiekis = document.querySelectorAll('#gyvates .new').length;
console.log('nauju gyvaciu kiekis: ', gyvaciuKiekis);

let zoliaedziuKiekis = document.querySelectorAll('#zoliaedziai .new').length;
console.log('nauju zoliaedziu kiekis: ', zoliaedziuKiekis);

// ------------------------------------------------------------------------
// Elementų events
// a.	Padaryti tai ką liepia mygtukai Header1 sekcijoje;

let header1Color = document.getElementById('h1-color');
h1DOM = document.getElementsByTagName('h1')[0];

header1Color.addEventListener('click', function () {
    if (headerColorCount > 0) {
        headerColorCount = 0;
    } else {
        h1DOM.style.color = 'lightgreen';
    }
});

let header1Font = document.getElementById('h1-font');

header1Font.addEventListener('click', function () {
    h1DOM.style.fontSize = '10px';
});

// b.	Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
iDOM = document.getElementsByTagName('i')[0];

iDOM.addEventListener('click', function () {
    iDOM.style.fontWeight = 'bold';
})

// c.	Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

let prices = document.querySelector('.prices');

let count = 0

prices.addEventListener('click', function () {
    count++;
    if (count % 2 === 1) {
        prices.style.backgroundColor = 'grey';
    } else {
        prices.style.backgroundColor = 'white';
    }
});

// d.	Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

let contacts = document.querySelector('#contacts:not(b)');
contacts.addEventListener('click', function () {
    if (colorCount > 0) {
        colorCount = 0;
    } else {
        contacts.style.color = 'orange';
    }
});

// e.	Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
let padidinti = document.querySelector('#contacts > u');

padidinti.addEventListener('click', function () {
    contacts.style.fontSize = '20px';
})

// f.	Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

let x = document.querySelector('#contacts > b');
let colorCount = 0;

x.addEventListener('click', function () {
    colorCount++;
    contacts.style.color = "black";
    contacts.style.fontSize = null;
});
// g.	Padaryti tai ką liepia mygtukai Header2 sekcijoje;

let headerColorCount = 0;
let header2Color = document.getElementById('h1-color-back');


header2Color.addEventListener('click', function () {
    headerColorCount++;
    h1DOM.style.color = 'black';
});

let header2Font = document.getElementById('h1-font-back');

header2Font.addEventListener('click', function () {
    h1DOM.style.fontSize = null;
});
// -----------------------------------------------------------------------
// 4.	Elementų grupių events
// a.	Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

newDOM = document.querySelectorAll('.new');
newDOM.forEach(function (element) {
    element.addEventListener('dbclick', function () {
        element.style.color = 'red';
    });
});

// b.	Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
let didesniGyvunai = document.querySelectorAll('.animals> ul > li:not(.like-button)');

didesniGyvunai.forEach(function (element) {
    element.addEventListener('click', function () {
        element.style.fontSize = '130%';
    });
})

// c.	Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

let patinka = document.querySelectorAll('.animals > ul');
console.log(patinka);

patinka.forEach(function (element) {
    element.addEventListener('click', function () {
        element.classList.add('like');
    });
});

// 5.	Dinaminis elementų kūrimas (su createElement)

// a.	Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

let newTag = document.createElement('h2');
newTag.innerText = 'Senjorai tik: 1.99 eur';
prices = document.querySelector('.prices');
prices.appendChild(newTag);

// b.	Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
let secondTag = document.createElement('h2');
secondTag.innerText = 'Senjorų grupė iki 10: tik 5.99 eu';
prices = document.querySelector('.prices');
prices.appendChild(secondTag);
console.log(prices);

let lastElement = document.querySelector('h2:last-child ');
lastElement.classList.add('new');
lastElement.addEventListener('click', function () {
    lastElement.style.color = 'green';
})
console.log(lastElement);

// c.	Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like


// d.	Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta

