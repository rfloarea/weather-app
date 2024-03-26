function searchWeather() {
    const city = document.getElementById('location-input').value;
    const apiKey = '3021ea628941d0b00b4c4f176672ac88';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json()) // convert response data to JSON format
        .then(data => {
            // update weather-info element
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${data.main.temp}°F</p>
                <p>Description: ${data.weather[0].description}</p>
            `;

            // log weather data
            console.log(`Weather in ${city}:`);
            console.log(`Temperature: ${data.main.temp}°F`);
            console.log(`Description: ${data.weather[0].description}`);
        })
        .catch(error => {
            console.log('Error fetching weather data: ', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '<p>Whoops! Location not found.</p>';
        })
}

searchWeather();