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

const weather = document.querySelector('.weatherData');
const forecastSection = document.querySelector('.forecastData');



async function forecastFunction() {

  const url = 'https://api.weatherapi.com/v1/forecast.json?key=c28bd730645c4b4f86c164853240510&q=07112&days=5'

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      const todayStamp = document.createElement('h2');
      todayStamp.setAttribute('class', 'forecastTitle');
      todayStamp.innerHTML = 'Today';
      ////////////////////
      const tomorrowStamp = document.createElement('h2');
      tomorrowStamp.setAttribute('class', 'forecastTitle');

      const tomorrow = data.forecast.forecastday[1].date + "T00:00:00";

      const date1 = new Date(tomorrow);
      const weekday1 = date1.toLocaleDateString('en-US', { weekday: 'long', timeZone: `America/New_York` });
      console.log(weekday1);

      ///////////////////
      const dayaftertomorrowStamp = document.createElement('h2');
      dayaftertomorrowStamp.setAttribute('class', 'forecastTitle');
      const dayaftertomorrow = data.forecast.forecastday[2].date + "T00:00:00"

      const date2 = new Date(dayaftertomorrow);
      const weekday2 = date2.toLocaleDateString('en-US', { weekday: 'long', timeZone: `America/New_York` });
      /////////////////////////

      const todayTemperature = document.createElement('h2');
      todayTemperature.setAttribute('class', 'AveTemp');
      todayTemperature.innerHTML = `<span id="temperatureItself">${data.forecast.forecastday[0].day.avgtemp_c}<span>C°`;

      const tomorrowTemperature = document.createElement('h2');
      tomorrowTemperature.setAttribute('class', 'AveTemp');
      tomorrowTemperature.innerHTML = `<span id="temperatureItself">${data.forecast.forecastday[1].day.avgtemp_c}<span>C°`

      const dayaftertomorrowTemp = document.createElement('h2');
      dayaftertomorrowTemp.setAttribute('class', 'AveTemp');
      dayaftertomorrowTemp.innerHTML = `<span id="temperatureItself">${data.forecast.forecastday[2].day.avgtemp_c}<span>C°`


      forecastSection.appendChild(todayStamp);
      forecastSection.appendChild(todayTemperature);
      tomorrowStamp.innerHTML = weekday1;
      forecastSection.appendChild(tomorrowStamp);
      forecastSection.appendChild(tomorrowTemperature);
      dayaftertomorrowStamp.innerHTML = weekday2;
      forecastSection.appendChild(dayaftertomorrowStamp);
      forecastSection.appendChild(dayaftertomorrowTemp);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

};

forecastFunction();

async function currentWeather() {
  try {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=c28bd730645c4b4f86c164853240510&q=07112&days=4'

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      const img = document.createElement('img');
      img.setAttribute('class', 'weatherImage')
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
      high.innerHTML = `High: ${data.forecast.forecastday[0].day.maxtemp_c}°C`;

      const low = document.createElement('h4');
      low.setAttribute('class', 'low');
      low.innerHTML = `Low: ${data.forecast.forecastday[0].day.mintemp_c}°C`;

      const humidity = document.createElement('h4');
      humidity.setAttribute('class', 'humidity');
      humidity.innerHTML = `Humidity: ${data.current.humidity}%°`

      const sunrise = document.createElement('h4');
      sunrise.setAttribute('class', 'sunrise');
      sunrise.innerHTML = `Sunrise: ${data.forecast.forecastday[0].astro.sunrise}`;

      const sunset = document.createElement('h4');
      sunset.setAttribute('class', 'sunset');
      sunset.innerHTML = `Sunset: ${data.forecast.forecastday[0].astro.sunset}`;

      weather.appendChild(img);
      weather.appendChild(temperature);
      weather.appendChild(condition);
      weather.appendChild(high);
      weather.appendChild(low);
      weather.appendChild(humidity);
      weather.appendChild(sunrise);
      weather.appendChild(sunset);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

}

currentWeather();