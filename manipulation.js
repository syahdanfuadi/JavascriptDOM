// .innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Syahdan Fuadi';

// .style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'black';
// judul.style.backgroundColor = 'salmon';

// setAtribute()
// const judul = document.getElementsByTagName('h1') [0];
// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');


// DOM Manipulation Node
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

pBaru.appendChild(teksPBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.appendChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';










