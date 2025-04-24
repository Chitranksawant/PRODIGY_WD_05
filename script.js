const apiKey = '10fa5790d6a5cbf198611692397c6552';

async function getWeather() {
  const location = document.getElementById('locationInput').value;
  if (!location) {
    alert('Please enter a location');
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById('weatherInfo').innerHTML = `Error: ${data.message}`;
    } else {
      document.getElementById('weatherInfo').innerHTML = `
        <strong>${data.name}</strong><br>
        Weather: ${data.weather[0].description}<br>
        Temperature: ${data.main.temp} °C<br>
        Humidity: ${data.main.humidity}%<br>
        Wind Speed: ${data.wind.speed} m/s
      `;
    }
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = 'Error fetching data';
  }
}
