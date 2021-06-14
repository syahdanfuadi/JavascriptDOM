const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

// const close = document.querySelectorAll('.close');
// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function() {
//         close[i].parentElement.style.display = 'none';
//     });
// }

// Prevent Default & stopPropagation
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('Oke');
//     });
// });


const container = document.querySelector('.container');

container,addEventListener('click', function(e) {
    if( e.target.className == 'close' )
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
});