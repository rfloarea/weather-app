// use openweather for weather data
async function getWeather(city, apiKey) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

async function main() {
    const city = prompt("Enter city name:");
    const apiKey = '3021ea628941d0b00b4c4f176672ac88';
    const weatherData = await getWeather(city, apiKey);
    if (weatherData && weatherData.cod === 200) {
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
    } else {
        console.log("City not found!");
    }
}

main();