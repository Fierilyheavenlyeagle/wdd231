const year = document.querySelector('#year');
const lastMod = document.querySelector('#lastModified');

const today = new Date();
const modified = new Date(document.lastModified);

year.innerHTML = `<span class="year1"> ${today.getFullYear()}</span>`;
lastMod.innerHTML = `Last Modification: <span class="mod1">${modified}</span>`;

const hamburger = document.querySelector('#mybutton');
const animateme = document.querySelector('.animateme');

hamburger.addEventListener('click', () => {
  animateme.classList.toggle('close');
  hamburger.classList.toggle('close');
});

/**********************************************/

const cards = document.querySelector('#cards');

async function getCompaniesData() {
  try {
    const response = await fetch('https://fierilyheavenlyeagle.github.io/wdd231/finalproject/js/activities-list.json');
    if (!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
    const data = await response.json();
    displayBusinesses(data.activities);
  } catch (error) {
    console.error("Error fetching companies data:", error);
  }
}

const displayBusinesses = (activities) => {
  activities.forEach(activity => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const description = document.createElement('h4');
    const date = document.createElement('h4');
    const time = document.createElement('h4');
    const address = document.createElement('h4');
    const phone = document.createElement('h4');
    const submit = document.createElement('button');
    const image = document.createElement('img');

    // Label creation
    const createLabel = (text) => {
      const label = document.createElement('span');
      label.textContent = text;
      label.classList.add('label');
      return label;
    };

    // Adding content
    name.textContent = activity.name;
    description.append(createLabel('Description '), document.createTextNode(activity.description));
    date.append(createLabel('Date '), document.createTextNode(activity.date));
    time.append(createLabel('Time '), document.createTextNode(activity.time));
    address.append(createLabel('Address '), document.createTextNode(activity.address));
    phone.append(createLabel('Phone Number '), document.createTextNode(activity.contact));

    // Image setup
    image.setAttribute('src', activity.image);
    image.setAttribute('alt', `Icon of ${activity.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');

    // Submit button
    submit.textContent = 'Register';
    submit.classList.add('registerButton');

    // Appending all elements to card
    card.append(name, description, date, time, address, phone, image, submit);
    cards.appendChild(card);
  });

  // Adding event listeners for each register button
  document.querySelectorAll('.registerButton').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      modal?.showModal();
    });
  });
};

// Toggle grid and list views
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton?.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list", "origin");
});

listbutton?.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid", "origin");
});

// Fetch and display data
getCompaniesData();

// Modal setup
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-button');
closeModal?.addEventListener('click', () => {
  modal?.close();
});
