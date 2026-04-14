// Selección de elementos del DOM
const button = document.querySelector('.showme');
console.log('Button:', button);

const h1 = document.querySelector('#pillado');
console.log('H1:', h1);

// Primer párrafo
const p = document.querySelector('p');
console.log('First paragraph:', p);

// Primer elemento con clase .pokemon
const pokemon = document.querySelector('.pokemon');
console.log('First pokemon:', pokemon);

// Todos los elementos con data-function="testMe"
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log('All testMe elements:', testMe);

// Tercer elemento
const thirdCharacter = testMe[2];
console.log('Third character:', thirdCharacter);

