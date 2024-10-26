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
/*************************************/

const url = window.location.href;
console.log(url);

const halfUrl = url.split('?');

const urlData = halfUrl[1].split('&');

function display(requested) {
  urlData.forEach((element) => {
    if (element.startsWith(requested)) {
      elementData = element.split('=')[1].replace('%40', '@').replace(/\+/g, ' ');
    }
  })
  return (elementData);

};

const displayInfo = document.querySelector('#results');

const email = display("email");
displayInfo.innerHTML = `<p> Full Name:${display("first")} ${display('last')}</p>
<p> Email: ${display("email")}</p>`

console.log(elementData); console.log(elementData);



