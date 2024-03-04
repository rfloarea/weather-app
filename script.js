// GOAL: take any location (input) and return weather data for that location (output)

// Step One: Get user input (location)
const address = prompt('Enter an address', '350 5th Ave New York City NY');

// Step Two: build a new URL with our address to hit the geocoding API
async function buildURL() {
    try {
        const url = new URL(`https://geocoding.geo.census.gov`);
        url.pathname = `/geocoder/locations/onelineaddress?address=${address}&benchmark=2020&format=json`
        console.log(url.pathname);
        console.log(url.href);
    } catch (error) {
        return error;
    }
}
// GOAL - https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=350%205th%20Ave%20New%20York%20City%20NY&benchmark=2020&format=json
// ACTUAL - https://geocoding.geo.census.gov/geocoder/locations/onelineaddress%3Faddress=350%205th%20Ave%20New%20York%20City%20NY&benchmark=2020&format=json
// That dam '?'   

buildURL();
// Step Two: Get coordinates of that address
// async function getCoordinates(address) {

//     const encodeAddress
    
//     try {
//         const response = await fetch(`${url}`, {mode: 'cors'});
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