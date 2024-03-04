// Phase One: Take a location and return the weather data for that location

// Get coordinates with address input
function getCoordinatesWithAddress() {
    return prompt('Enter the address of a location you want the weather for', '350 5th Ave New York City NY');
};

// Get the coordinates with device location
function getCoordinatesWithDeviceLocation() {
  
    function success(position) {
      const latitude = position.coords.latitude.toFixed(4);
      const longitude = position.coords.longitude.toFixed(4);
      console.log('lat: ', latitude);
      console.log('long: ', longitude);
    }
  
    function error() {
      console.log("Unable to retrieve your location");
    }
  
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
}

getCoordinatesWithDeviceLocation();

// Use these coordinates for our first weather API call: `https://api.weather.gov/points/{lat},{lon}`

// Step Five: Make our first weather API call using the above URL

// Step Six: Use this second URL to make our final API call
async function getTonightsForecast() {
    try {
        const response = await fetch('https://api.weather.gov/gridpoints/OKX/34,37/forecast', {mode: 'cors'});
        const weatherData = await response.json();
        const tonightsForecast = await weatherData.properties.periods[0].detailedForecast
        // console.log(tonightsForecast) // logs the value data
        return tonightsForecast; // returns a promise
    } catch (error){
        return error;
    }   
}

// async function buildURL() {
//     try {
//         const url = new URL(`https://geocoding.geo.census.gov`);
//         url.pathname = `/geocoder/locations/onelineaddress?address=${address}&benchmark=2020&format=json`
//         console.log(url.pathname);
//         console.log(url.href);
//     } catch (error) {
//         return error;
//     }
// }
// GOAL - https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=350%205th%20Ave%20New%20York%20City%20NY&benchmark=2020&format=json
// ACTUAL - https://geocoding.geo.census.gov/geocoder/locations/onelineaddress%3Faddress=350%205th%20Ave%20New%20York%20City%20NY&benchmark=2020&format=json


// Step Two: Get coordinates of that address
// async function getCoordinates(address) {
//     try {
//         const response = await fetch(`${url}`, {mode: 'cors'});
//         const rawCoordinates = await response.json();
//     } catch (error) {
//         return error;
//     }
// };