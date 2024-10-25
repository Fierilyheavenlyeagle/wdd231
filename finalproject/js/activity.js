const year = document.querySelector('#year');
const lastMod = document.querySelector('#lastModified');

const today = new Date();
const modified = new Date(document.lastModified)

year.innerHTML = `<span class="year1"> ${today.getFullYear()}</span>`
lastMod.innerHTML = `Last Modification: <span class="mod1">${modified}</span>`

const hamburger = document.querySelector('#mybutton')
const animateme = document.querySelector('.animateme');


hamburger.addEventListener('click', () => {
  animateme.classList.toggle('close');
  hamburger.classList.toggle('close');
})