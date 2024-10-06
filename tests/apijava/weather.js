const temperature = document.querySelector("#current-temp");
const img = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=-6.64&appid=d16701ddf6db3e383491687e5ce7f0d2&units=imperial'

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error)
  }
}

apiFetch();

function displayResults(data) {
  temperature.innerHTML = `${data.main.temp}`
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  let desc = data.weather[0].description;
  console.log(temperature.innerHTML)
  img.setAttribute('iconSRC', iconsrc);
  img.setAttribute('alt', desc);
  caption.textContent = `${desc}`
} 
