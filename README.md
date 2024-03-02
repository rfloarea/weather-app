# Weather App

## How to use the weather.gov API to get a forecast

**Step One**
Find the lat long for the location we want. Some options for finding coordinates are:
- [Geocode.xyz](Geocode.xyz) for "geoparsing.
- [Esri ArcGIS World Geocoding Service](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm)
- [US Census Bureau Geocoding Service](https://geocoding.geo.census.gov/geocoder/)
- Bing Maps Locations
- Google Maps Geocoding
- MapBox Geocoding
- MapQuest Geocoding

**Step Two**
Insert the lat and long into the API URL to return a JSON document with metadata about our location. The URL template looks like: `https://api.weather.gov/points/{lat},{lon}`

**Step Three**
After receiving the JSON document, locate the `properties` object. Inside `properties`, find the `forecast` object. This object contains another URL. (Alternatively, we can get an hour-by-hour forecast with the `forecastHourly` property.)

**Step Four**
Use this URL to return another JSON document containing our forecast data about our location. Done!

## Example

I'll use the address for the Empire State Building in NYC.

**Step One: get coordinates**
Manually input the address into the US Census Bureau Geocoding Service (this will be an API call in the future)
Address: 350 5th Ave New York City, NY
Latitude: 40.7478
Longitude: -73.9850

**Step Two: get our first JSON doc**
Insert our lat long into our weather.gov API URL: `https://api.weather.gov/points/40.7478,-73.9850`
It worked!!

**Step Three: get our `forecast` JSON**
URL: `https://api.weather.gov/gridpoints/OKX/34,37/forecast`
It works!!

Now we play with data :D