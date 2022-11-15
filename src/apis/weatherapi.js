import { WeatherModel } from "../models/weathermodel";
import { LocationModel } from "../models/locationmodel";

export const WeatherAPI = (locationModel) => {
  const API_KEY = "f3c32091bf8f9865219ac12748616ead";
  let BASE_URL = " https://api.openweathermap.org/data/2.5/weather?";

  /*
  TO USE:
  Pass in WeatherAPI a LocationModel object 
  
  let locationData = await GeocodingAPI(locationInformation).getLocationData();
  let locationModel = LocationModel(locationData);
  let weatherData = await WeatherAPI(locationModel).getWeatherData();
  let weatherModel = WeatherModel(weatherData);

  */

  const makeUrl = () => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    let URL = BASE_URL;
    URL += `lat=${locationModel.lat}&lon=${locationModel.lon}&appid=${API_KEY}`;
    //console.log(URL);
    return URL;
  };
  // Returns an object with the location data.
  async function getWeatherData() {
    try {
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }
  return { getWeatherData };
};
