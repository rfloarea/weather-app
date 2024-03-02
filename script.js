//use async/await to fetch our data
async function getForecast() {
    try {
        const response = await fetch('https://api.weather.gov/gridpoints/OKX/34,37/forecast', {mode: 'cors'});
        const weatherData = await response.json();
        return (weatherData.properties.periods[0].detailedForecast) // logs detailed forecast for 'tonight' (period 0)
    } catch (error){
        return error;
    }
    
}
console.log(getForecast())