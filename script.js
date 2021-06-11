// // DOM Selection
// // 1. documen.getElemenById() -> element
//     const judul = document.getElementById('judul');
//     judul.style.color = 'yellow';
//     judul.style.backgroundColor = 'black';
//     judul.style.fontFamily = 'arabic';
//     judul.innerHTML = 'Syahdan Fuadi';


// // document.getElementsByTagName()
// // -> HTMLCollection
//     const p = document.getElementsByTagName('p');
//     p[0].style.backgroundColor = 'grey';
//     p[1].style.backgroundColor = 'grey';
//     p[2].style.backgroundColor = 'grey';
//     p[3].style.backgroundColor = 'grey';
//     p[4].style.backgroundColor = 'grey';
//     const h1 = document.getElementsByTagName('h1') [0];
//     h1.style.fontSize = '50px';


// // document.getElementsByClassName()
// // -> HTMLCollection
//     const p1 = document.getElementsByClassName('p1');


// // document.querySelector() -> element
//     const p4 = document.querySelector('#b p');
//     p4.style.color = 'black';
//     const li2 = document.querySelector('section#b ul li:nth-child(2)');
//     li2.style.backgroundColor = 'yellow';


// // querySelectorAll()
//     const p = document.querySelectorAll('p');
//     for ( let i = 0; i < p.length; i++) {
//         p[i].style.backgroundColor = 'lightblue';
//     }


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'blue';
