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

/**********************************************/

const cards = document.querySelector('#cards')


async function getCompaniesData() {
  const response = await fetch('https://fierilyheavenlyeagle.github.io/wdd231/finalproject/js/activities-list.json');
  const data = await response.json();

  displayBusinesses(data.activities);

}

const displayBusinesses = (activity) => {
  activity.forEach(activities => {

    const card = document.createElement("section");
    const name = document.createElement("h2");
    const description = document.createElement('h4');
    const date = document.createElement('h4');
    const time = document.createElement('h4');
    const address = document.createElement('h4');
    const phone = document.createElement('h4');
    const submit = document.createElement('button');
    const image = document.createElement('img');


    const descriptionLabel = document.createElement('span');
    descriptionLabel.textContent = 'Description ';
    descriptionLabel.classList.add('label');

    const dateLabel = document.createElement('span');
    dateLabel.textContent = 'Date ';
    dateLabel.classList.add('label');

    const timeLabel = document.createElement('span');
    timeLabel.textContent = 'Time ';
    timeLabel.classList.add('label');

    const addressLabel = document.createElement('span');
    addressLabel.textContent = 'Address ';
    addressLabel.classList.add('label');

    const phoneLabel = document.createElement('span');
    phoneLabel.textContent = 'Phone Number ';
    phoneLabel.classList.add('label');

    name.textContent = `${activities.name}`;

    const addressSpan = document.createElement('span')
    addressSpan.classList.add('textSpan');
    addressSpan.textContent = `${activities.address}`

    address.appendChild(addressLabel);
    address.appendChild(addressSpan);

    const phoneSpan = document.createElement('span')
    phoneSpan.classList.add('textSpan');
    phoneSpan.textContent = `${activities.contact
      }`

    phone.appendChild(phoneLabel);
    phone.appendChild(phoneSpan);

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = `${activities.date}`;

    date.appendChild(dateLabel);
    date.appendChild(dateSpan);


    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time');
    timeSpan.textContent = `${activities.time}`

    time.appendChild(timeLabel);
    time.appendChild(timeSpan);


    const descriptionSpan = document.createElement('span')
    descriptionSpan.classList.add('textSpan');
    descriptionSpan.textContent = `${activities.description}`

    description.appendChild(descriptionLabel);
    description.appendChild(descriptionSpan);

    submit.textContent = 'Register';
    submit.classList.add('registerButton');


    image.setAttribute('src', activities.image);
    image.setAttribute('alt', `Icon of ${activities.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('heigth', '440');

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(date);
    card.appendChild(time);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(image);
    card.appendChild(submit);

    cards.appendChild(card);
  });

  const registerButtons = document.querySelectorAll('.registerButton');
  registerButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      modal.showModal();
    });
  });

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
  display.classList.remove('origin');
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  display.classList.remove('origin');
}


getCompaniesData();

/********************************/


const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-button');

if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.close();
  });
}



