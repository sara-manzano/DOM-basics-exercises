// Click — imprime el objeto del evento
const btn = document.getElementById('btnToClick');
btn.addEventListener('click', (event) => {
    console.log(event);
});

// Focus — imprime el valor al hacer foco
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
    console.log(event.target.value);
});

// Input — imprime el valor en tiempo real
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});
