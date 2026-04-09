// Exercise 2: Create and manipulate DOM elements

// 1. Create and append a simple div
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
console.log('New div:', newDiv);

// 2. Create a div with a paragraph inside
const divWithP = document.createElement('div');
const paragraph = document.createElement('p');
paragraph.textContent = 'Soy un párrafo dentro de un div';
divWithP.appendChild(paragraph);
document.body.appendChild(divWithP);
console.log('Div with paragraph:', divWithP);

// 3. Create a div with 6 paragraphs inside
const divWith6P = document.createElement('div');

for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i}`;
  divWith6P.appendChild(p);
}

document.body.appendChild(divWith6P);
console.log('Div with 6 paragraphs:', divWith6P);
