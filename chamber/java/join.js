const modalProfit = document.querySelector('#profitModal');
const openModalProfit = document.querySelector('#openProfit');
const closeModalProfit = document.querySelector('.close-button-profit');

openModalProfit.addEventListener('click', () => {
  modalProfit.showModal();
});

closeModalProfit.addEventListener('click', () => {
  modalProfit.close();
})


const modalBronze = document.querySelector('#bronzeModal');
const openModalBronze = document.querySelector('#openBronze');
const closeModalBronze = document.querySelector('.close-button-bronze');

openModalBronze.addEventListener('click', () => {
  modalBronze.showModal();
});

closeModalBronze.addEventListener('click', () => {
  modalBronze.close();
})



const modalSilver = document.querySelector('#silverModal');
const openModalSilver = document.querySelector('#openSilver');
const closeModalSilver = document.querySelector('.close-button-silver');

openModalSilver.addEventListener('click', () => {
  modalSilver.showModal();
});

closeModalSilver.addEventListener('click', () => {
  modalSilver.close();
})



const modalGold = document.querySelector('#goldModal');
const openModalGold = document.querySelector('#openGold');
const closeModalGold = document.querySelector('.close-button-gold');

openModalGold.addEventListener('click', () => {
  modalGold.showModal();
});

closeModalGold.addEventListener('click', () => {
  modalGold.close();
})

/*--------------------------------------------*/

const year = document.querySelector('#year');
const lastMod = document.querySelector('#lastModified');

const today = new Date();
const modified = new Date(document.lastModified);

year.innerHTML = `<span class="year1"> ${today.getFullYear()}</span>`

lastMod.innerHTML = `Last Modification: <span class="mod1">${modified}</span>`

/*----------------------------------------- */

const hamburger = document.querySelector('#mybutton')
const animateme = document.querySelector('.animateme');


hamburger.addEventListener('click', () => {
  animateme.classList.toggle('close');
  hamburger.classList.toggle('close');
})