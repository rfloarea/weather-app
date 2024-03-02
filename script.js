// GOAL: take any location (input) and return weather data for that location (output)

// Step One: Get user input (location)
const address = () => {
    return prompt('Address', 'example: 350 5th Ave New York City, NY')
};
address();

// Step Two: Get coordinates of that address
// async function getCoordinates() {
//     try {
//         const response = await fetch( /* API URL */, {mode: 'cors'});
//         const rawCoordinates = await response.json();
//     } catch (error) {
//         return error;
//     }
// };

// Step Four: Inject our cookedCoordinates into our first weather API URL: `https://api.weather.gov/points/{lat},{lon}`

// Step Five: Make our first weather API call using the above URL

// Step Six: Use this second URL to make our final API call
async function getForecast() {
    try {
        const response = await fetch('https://api.weather.gov/gridpoints/OKX/34,37/forecast', {mode: 'cors'});
        const weatherData = await response.json();
        const tonightsForecast = await weatherData.properties.periods[0].detailedForecast
        return tonightsForecast;
    } catch (error){
        return error;
    }
    
}
console.log(getForecast())