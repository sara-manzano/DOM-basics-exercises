const places = [
    "Gondor",
    "Mordor",
    "Rivendell",
    "La Comarca",
    "Númenor"
];

const ul = document.createElement('ul');

places.forEach(place => {
    const li = document.createElement('li');
    li.textContent = place;
    ul.appendChild(li);
});

document.querySelector('[data-function="printHere"]').appendChild(ul);
