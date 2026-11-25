const darkThemeButton = document.getElementById('darkButton');
const html = document.documentElement;

const sunIcon = document.getElementById('icon-sun');
const moonIcon = document.getElementById('icon-moon');

darkThemeButton.addEventListener('click', () => {
    html.classList.toggle('dark');
    sunIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('block');
    moonIcon.classList.toggle('block');
    moonIcon.classList.toggle('hidden');
})


const darkButtonAside = document.getElementById('darkButtonAside');
const htmlAside = document.documentElement;

const sunIconAside = document.getElementById('icon-sun');
const moonIconAside = document.getElementById('icon-moon');

darkButtonAside.addEventListener('click', () => {
    htmlAside.classList.toggle('dark');
    sunIconAside.classList.toggle('hidden');
    sunIconAside.classList.toggle('block');
    moonIconAside.classList.toggle('block');
    moonIconAside.classList.toggle('hidden');
})