const btn = document.getElementById('btnToClick');
btn.addEventListener('click', (event) => {
    console.log(event);
});


const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
    console.log(event.target.value);
});


const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});
