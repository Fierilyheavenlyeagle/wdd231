function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();

const year = document.querySelector('#year');
const lastMod = document.querySelector('#lastModified');

const today = new Date();
const modified = new Date(document.lastModified)

year.innerHTML = `<span class="year1"> ${today.getFullYear()}</span>`
lastMod.innerHTML = `Last Modification: <span class="mod1">${modified}</span>`

const hamburger = document.querySelector('#mybutton')
const animateme = document.querySelector('nav');


hamburger.addEventListener('click', () => {
  animateme.classList.toggle('open');
  hamburger.classList.toggle('open');
})


/*-----------------------------------------------*/

const modal = document.querySelector('#modal');
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
})