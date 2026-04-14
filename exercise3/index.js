const countries = [
    'Japón', 
    'Nicaragua', 
    'Suiza', 
    'Australia', 
    'Venezuela'
];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota Corolla'];

const countriesImage = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// Genera un ul > li a partir de un array
function createList(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
}

//Lista de países en el body
document.body.appendChild(createList(countries));

//Elimina el elemento marcado
document.querySelector('.fn-remove-me')?.remove();

//Lista de coches en el contenedor
document.querySelector('[data-function="printHere"]').appendChild(createList(cars));

//Divs con h4 + img
const fragment = document.createDocumentFragment();

countriesImage.forEach(country => {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = country.title;

    const img = document.createElement('img');
    img.src = country.imgUrl;
    img.alt = country.title;

    div.appendChild(h4);
    div.appendChild(img);
    fragment.appendChild(div);
});

document.body.appendChild(fragment);
