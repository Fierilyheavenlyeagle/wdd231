const cards = document.querySelector('#cards')


async function getCompaniesData() {
  const response = await fetch('https://fierilyheavenlyeagle.github.io/wdd231/chamber/java/members.json');
  const data = await response.json();

  displayBusinesses(data.businesses);

}

const displayBusinesses = (businesses) => {
  businesses.forEach(business => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const address = document.createElement('h4');
    const phone = document.createElement('h4');
    const website = document.createElement('h4');
    const membership_level = document.createElement('h4');
    const description = document.createElement('h4');
    const founded = document.createElement('h4');
    const image = document.createElement('img');

    const addressLabel = document.createElement('span');
    addressLabel.textContent = 'Address ';
    addressLabel.classList.add('label');

    const phoneLabel = document.createElement('span');
    phoneLabel.textContent = 'Phone Number ';
    phoneLabel.classList.add('label');

    const websiteLabel = document.createElement('span');
    websiteLabel.textContent = 'Website ';
    websiteLabel.classList.add('label');

    const membershipLabel = document.createElement('span');
    membershipLabel.textContent = 'Membership Level ';
    membershipLabel.classList.add('label');

    const descriptionLabel = document.createElement('span');
    descriptionLabel.textContent = 'Description ';
    descriptionLabel.classList.add('label');

    const foundedLabel = document.createElement('span');
    foundedLabel.textContent = 'Founded ';
    foundedLabel.classList.add('label');


    name.textContent = `${business.name}`;

    const addressSpan = document.createElement('span')
    addressSpan.classList.add('textSpan');
    addressSpan.textContent = `${business.address}`

    address.appendChild(addressLabel);
    address.appendChild(addressSpan);

    const phoneSpan = document.createElement('span')
    phoneSpan.classList.add('textSpan');
    phoneSpan.textContent = `${business.phone}`

    phone.appendChild(phoneLabel);
    phone.appendChild(phoneSpan);

    const websiteSpan = document.createElement('span');
    websiteSpan.classList.add('website');
    websiteSpan.textContent = `${business.website}`;

    website.appendChild(websiteLabel);
    website.appendChild(websiteSpan);


    const membershipSpan = document.createElement('span');
    membershipSpan.classList.add('membership');
    membershipSpan.textContent = `${business.membership_level}`

    membership_level.appendChild(membershipLabel);
    membership_level.appendChild(membershipSpan);


    const descriptionSpan = document.createElement('span')
    descriptionSpan.classList.add('textSpan');
    descriptionSpan.textContent = `${business.description}`

    description.appendChild(descriptionLabel);
    description.appendChild(descriptionSpan);


    const foundedSpan = document.createElement('span')
    foundedSpan.classList.add('textSpan');
    foundedSpan.textContent = `${business.founded}`


    founded.appendChild(foundedLabel);
    founded.appendChild(foundedSpan);


    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Icon of ${business.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '340');
    image.setAttribute('heigth', '440');

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership_level);
    card.appendChild(description);
    card.appendChild(founded);
    card.appendChild(image);

    cards.appendChild(card);
  });

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}


getCompaniesData();

const hamburger = document.querySelector('#mybutton')
const animateme = document.querySelector('.animateme');


hamburger.addEventListener('click', () => {
  animateme.classList.toggle('open');
  hamburger.classList.toggle('open');
})

const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
const modfied = new Date(document.lastModified)
year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
lastMod.innerHTML = `Last Modification : <span class="mod1">${modfied}</span>`

