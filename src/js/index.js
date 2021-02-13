import '../scss/main.scss';


// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const heading = document.querySelector(".hero__text-top--js");
console.log(heading);
heading.innerHTML = `Outdoor Photography is a Journey`;

const empty = document.querySelector(".title__heading--js");
console.log(empty);
empty.innerHTML = `Section title`;


const button = document.querySelector ('.another-title__button--js');
console.log (button)

const myClick = () => {
    const heading = document.querySelector ('.another-title__button--js');
    heading.innerHTML = `Czytaj więcej`;
}

button.addEventListener ('click', myClick);





const check = document.querySelector ('.hero__text-button--js');
console.log (check)

const myCheck = () => {
    const heading = document.querySelector ('.hero__text-button--js');
    heading.innerHTML = `WITAJ :)`;
}

check.addEventListener ('click', myCheck);