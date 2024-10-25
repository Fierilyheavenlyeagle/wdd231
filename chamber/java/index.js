const hamburger = document.querySelector('#mybutton')
const animateme = document.querySelector('.animateme');


hamburger.addEventListener('click', () => {
  animateme.classList.toggle('close');
  hamburger.classList.toggle('close');
})

const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
const modfied = new Date(document.lastModified)
year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
lastMod.innerHTML = `Last Modification : <span class="mod1">${modfied}</span>`

/*---------------------------------------------------------------------------*/

const businessesTitle = document.querySelector('#businessTitle');

const area = document.querySelector('#area')

const businessesTitle2 = document.querySelector('#businessTitle2');

const area2 = document.querySelector('#area2')

const businessesTitle3 = document.querySelector('#businessTitle3');

const area3 = document.querySelector('#area3')

const businessone = document.querySelector('.businessone');
const businesstwo = document.querySelector('.businesstwo');
const businessthree = document.querySelector('.businessthree');

async function getCompaniesData() {

  const response = await fetch('https://fierilyheavenlyeagle.github.io/wdd231/chamber/java/members.json');
  const data = await response.json();

  const shuffledBusinesses = data.businesses.sort(() => 0.5 - Math.random());
  const randomBusiness = shuffledBusinesses.slice(0, 3);

  console.log(randomBusiness);

  businessesTitle.innerHTML = randomBusiness[0].name;
  area.innerHTML = randomBusiness[0].area;

  businessesTitle2.innerHTML = randomBusiness[1].name;
  area2.innerHTML = randomBusiness[1].area;

  businessesTitle3.innerHTML = randomBusiness[2].name;
  area3.innerHTML = randomBusiness[2].area;

  const cardcero = document.createElement('div');
  cardcero.setAttribute('class', "contactbusiness")

  const imgcero = document.createElement('img');
  imgcero.setAttribute('class', "businessimg")
  imgcero.setAttribute('src', randomBusiness[0].image);
  imgcero.setAttribute('alt', `Icon of ${randomBusiness[0].name}`);
  imgcero.setAttribute('loading', 'lazy');
  imgcero.setAttribute('width', '150');
  imgcero.setAttribute('height', '100');

  const emailcero = document.createElement('h4');
  emailcero.innerHTML = `EMAIL:<span>${randomBusiness[0].email}</span>`

  const phonecero = document.createElement('h4');
  phonecero.innerHTML = `PHONE:<span>${randomBusiness[0].phone}</span>`

  const urlcero = document.createElement('h4');
  urlcero.innerHTML = `URL:<span>${randomBusiness[0].website}</span>`

  businessone.appendChild(imgcero);
  cardcero.appendChild(emailcero);
  cardcero.appendChild(phonecero);
  cardcero.appendChild(urlcero);

  businessone.appendChild(cardcero);


  /*--------------------------------------------*/

  const imgone = document.createElement('img');
  imgone.setAttribute('class', "businessimg")
  imgone.setAttribute('src', randomBusiness[1].image);
  imgone.setAttribute('alt', `Icon of ${randomBusiness[1].name}`);
  imgone.setAttribute('loading', 'lazy');
  imgone.setAttribute('width', '150');
  imgone.setAttribute('height', '100');

  const cardone = document.createElement('div');
  cardone.setAttribute('class', "contactbusiness")

  const emailone = document.createElement('h4');
  emailone.innerHTML = `EMAIL:<span>${randomBusiness[1].email}</span>`

  const phoneone = document.createElement('h4');
  phoneone.innerHTML = `PHONE:<span>${randomBusiness[1].phone}</span>`

  const urlone = document.createElement('h4');
  urlone.innerHTML = `URL:<span>${randomBusiness[1].website}</span>`

  businesstwo.appendChild(imgone);
  cardone.appendChild(emailone);
  cardone.appendChild(phoneone);
  cardone.appendChild(urlone);

  businesstwo.appendChild(cardone);

  /*----------------------------------------------------------*/

  const imgtwo = document.createElement('img');
  imgtwo.setAttribute('class', "businessimg")
  imgtwo.setAttribute('src', randomBusiness[2].image);
  imgtwo.setAttribute('alt', `Icon of ${randomBusiness[2].name}`);
  imgtwo.setAttribute('loading', 'lazy');
  imgtwo.setAttribute('width', '150');
  imgtwo.setAttribute('height', '100');

  const cardtwo = document.createElement('div');
  cardtwo.setAttribute('class', "contactbusiness")

  const emailtwo = document.createElement('h4');
  emailtwo.innerHTML = `EMAIL:<span>${randomBusiness[2].email}</span>`

  const phonetwo = document.createElement('h4');
  phonetwo.innerHTML = `PHONE:<span>${randomBusiness[2].phone}</span>`

  const urltwo = document.createElement('h4');
  urltwo.innerHTML = `URL:<span>${randomBusiness[2].website}</span>`

  businessthree.appendChild(imgtwo);
  cardtwo.appendChild(emailtwo);
  cardtwo.appendChild(phonetwo);
  cardtwo.appendChild(urltwo);

  businessthree.appendChild(cardtwo);


}

getCompaniesData();

const completeForecast = document.querySelector('.forecast');
const temperatures = document.querySelector('.forecast')



async function forecast() {

  const url = 'https://api.weatherapi.com/v1/forecast.json?key=c28bd730645c4b4f86c164853240510&q=07112&days=4'

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      /*---------------------------------------------------------------------- */

      const todayStamp = document.createElement('h2');
      todayStamp.setAttribute('class', 'forecastTitle')

      todayStamp.innerHTML = 'Today';

      ////////////////////
      const tomorrowStamp = document.createElement('h2');
      tomorrowStamp.setAttribute('class', 'forecastTitle')

      const tomorrow = data.forecast.forecastday[2].date

      const date1 = new Date(tomorrow);
      const weekday1 = date1.toLocaleDateString('en-US', { weekday: 'long' })
      console.log(weekday1)

      ////////////////////

      const dayaftertomorrowStamp = document.createElement('h2');
      dayaftertomorrowStamp.setAttribute('class', 'forecastTitle')

      const dayaftertomorrow = data.forecast.forecastday[3].date

      const date2 = new Date(dayaftertomorrow);
      const weekday2 = date2.toLocaleDateString('en-US', { weekday: 'long' })

      /*---------------------------------------------------------------------- */

      const todayTemperature = document.createElement('h2');
      todayTemperature.setAttribute('class', 'AveTemp');
      todayTemperature.innerHTML = `<span class='temperatureItself'>${data.forecast.forecastday[0].day.avgtemp_c}<span>C°`

      const tomorrowTemperature = document.createElement('h2');
      tomorrowTemperature.setAttribute('class', 'AveTemp');
      tomorrowTemperature.innerHTML = `<span class='temperatureItself'>${data.forecast.forecastday[1].day.avgtemp_c}<span>C°`

      const dayaftertomorrowTemp = document.createElement('h2');
      dayaftertomorrowTemp.setAttribute('class', 'AveTemp');
      dayaftertomorrowTemp.innerHTML = `<span class='temperatureItself'>${data.forecast.forecastday[2].day.avgtemp_c}<span>C°`
      completeForecast.appendChild(todayStamp);
      completeForecast.appendChild(todayTemperature);
      tomorrowStamp.innerHTML = weekday1;
      completeForecast.appendChild(tomorrowStamp);
      completeForecast.appendChild(tomorrowTemperature);
      dayaftertomorrowStamp.innerHTML = weekday2;
      completeForecast.appendChild(dayaftertomorrowStamp);
      completeForecast.appendChild(dayaftertomorrowTemp);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }


}

forecast();

const currentWeatherhtml = document.querySelector('.currentWeather');
const currentWeatherImg = document.querySelector('.currentWeatherImg');
const currentWeatherInfo = document.querySelector('.currentWeatherInfo');


async function currentWeather() {

  try {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=c28bd730645c4b4f86c164853240510&q=07112&days=4'

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      const img = document.createElement('img');
      img.setAttribute('class', 'weatherImg');
      img.setAttribute('src', `${data.current.condition.icon}`);
      img.setAttribute('alt', 'Weather Image');
      img.setAttribute('width', '75');
      img.setAttribute('height', '70');

      const temperature = document.createElement('h4');
      temperature.setAttribute('class', 'currentTemperature');
      temperature.innerHTML = `<span>${data.current.temp_c}</span>C°`

      const condition = document.createElement('h4');
      condition.setAttribute('class', 'condition');
      condition.innerHTML = data.current.condition.text;

      const high = document.createElement('h4');
      high.setAttribute('class', 'high');
      high.innerHTML = `High: ${data.forecast.forecastday[0].day.maxtemp_c}`;

      const low = document.createElement('h4');
      low.setAttribute('class', 'low');
      low.innerHTML = `Low: ${data.forecast.forecastday[0].day.mintemp_c}`;

      const humidity = document.createElement('h4');
      humidity.setAttribute('class', 'humidity');
      humidity.innerHTML = `Humidity: ${data.current.humidity}%°`

      const sunrise = document.createElement('h4');
      sunrise.setAttribute('class', 'sunrise');
      sunrise.innerHTML = `Sunrise: ${data.forecast.forecastday[0].astro.sunrise}`;

      const sunset = document.createElement('h4');
      sunset.setAttribute('class', 'sunset');
      sunset.innerHTML = `Sunset: ${data.forecast.forecastday[0].astro.sunset}`;

      currentWeatherImg.appendChild(img);
      currentWeatherInfo.appendChild(temperature);
      currentWeatherInfo.appendChild(condition);
      currentWeatherInfo.appendChild(high);
      currentWeatherInfo.appendChild(low);
      currentWeatherInfo.appendChild(humidity);
      currentWeatherInfo.appendChild(sunrise);
      currentWeatherInfo.appendChild(sunset);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

currentWeather();




