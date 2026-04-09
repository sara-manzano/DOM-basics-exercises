// Exercise 1: Select elements using different DOM methods

// Select button by class
const button = document.querySelector('.showme');
console.log('Button:', button);

// Select h1 by id
const h1 = document.querySelector('#pillado');
console.log('H1:', h1);

// Select first paragraph
const p = document.querySelector('p');
console.log('First paragraph:', p);

// Select first pokemon element
const pokemon = document.querySelector('.pokemon');
console.log('First pokemon:', pokemon);

// Select all elements with data-function attribute
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log('All testMe elements:', testMe);

// Select third element with data-function attribute
const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('Third character:', thirdCharacter);

