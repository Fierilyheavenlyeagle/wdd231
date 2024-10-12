async function currentWeather() {

  try {
    const url = 'http://api.weatherapi.com/v1/forecast.json?key=c28bd730645c4b4f86c164853240510&q=07112&days=4'

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      const img = document.createElement('img');
      img.setAttribute('class', 'weatherImg');
      img.setAttribute('src', `${data.current.condition.icon}`);
      img.setAttribute('alt', 'Weather Image');
      img.setAttribute('width', '44');
      img.setAttribute('height', '44');

      const temperature = document.createElement('h4');
      temperature.setAttribute('class', 'currentTemperature');
      temperature.innerHTML = `<span>${data.current.temp_c}</span>C°`

      const condition = document.createElement('h4');
      condition.setAttribute('class', 'condition');
      condition.innerHTML = data.current.condition.text;

      const high = document.createElement('h4');
      high.setAttribute('class', 'high');
      high.innerHTML = data.forecast.forecastday[0].day.maxtemp_c;

      const low = document.createElement('h4');
      low.setAttribute('class', 'low');
      low.innerHTML = data.forecast.forecastday[0].day.mintemp_c;

      const humidity = document.createElement('h4');
      humidity.setAttribute('class', 'humidity');
      humidity.innerHTML = `${data.current.humidity}%°`

      const sunrise = document.createElement('h4');
      sunrise.setAttribute('class', 'sunrise');
      sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise;

      const sunset = document.createElement('h4');
      sunset.setAttribute('class', 'sunset');
      sunset.innerHTML = data.forecast.forecastday[0].astro.sunset;

      currentWeatherhtml.appendChild(img);
      currentWeatherhtml.appendChild(temperature);
      currentWeatherhtml.appendChild(condition);
      currentWeatherhtml.appendChild(high);
      currentWeatherhtml.appendChild(low);
      currentWeatherhtml.appendChild(sunrise);
      currentWeatherhtml.appendChild(sunset);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

}

currentWeather();
