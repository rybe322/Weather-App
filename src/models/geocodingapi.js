/*
Direct geocoding allows to get geographical coordinates (lat, lon) by using name of the location (city name or area name). 
If you use the limit parameter in the API call, you can cap how many locations with the same name will be seen in the 
API response (for instance, London in the UK and London in the US).

API call

http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

Example of API call

http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

Example API response

                

{
  "zip": "90210",
  "name": "Beverly Hills",
  "lat": 34.0901,
  "lon": -118.4065,
  "country": "US"
}
                

              

*/

import { LocationInformation } from "./locationinformation";
import { LocationModel } from "./locationmodel";

export const GeocodingAPI = (locationInformation) => {
  const API_KEY = "f3c32091bf8f9865219ac12748616ead";

  /*
  TO USE:
  Pass in a LocationInformation object to GeocodingApi.
  Then use the function getLocationData() to retrievet the JSON with the location data.
  Best when used to pass the JSON data to a LocationModel object
  const locationInformation = LocationInformation(
    CITYNAME,
    STATECODE,
    COUNTRYCODE,
    ZIPCODE
  );
  */

  const makeNameUrl = () => {
    const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct?q=";
    let URL = BASE_URL;
    let queryString = "";
    queryString += locationInformation.getCity();
    if (locationInformation.getState())
      queryString += `,${locationInformation.getState()}`;
    if (locationInformation.getCountry())
      queryString += `,${locationInformation.getCountry()}`;
    URL += queryString;
    URL += `&appid=${API_KEY}`;
    return URL;
  };

  const makeZipUrl = () => {
    const BASE_URL = "http://api.openweathermap.org/geo/1.0/zip?zip=";
    let URL = BASE_URL;
    URL += locationInformation.getZipcode();
    if (locationInformation.getCountry()) {
      URL += ",";
      URL += locationInformation.getCountry();
    }
    URL += "&";
    URL += `appid=${API_KEY}`;
    return URL;
  };

  // Returns an object with the location data.
  async function getLocationData() {
    try {
      if (locationInformation.getZipcode()) {
        //console.log("hello from getzipcode if");
        let response = await fetch(makeZipUrl(), { mode: "cors" });
        let json = await response.json();
        return json;
      } else if (locationInformation.getCity()) {
        //console.log("hello from getcity if");
        let response = await fetch(makeNameUrl(), { mode: "cors" });
        let json = await response.json();
        return json[0];
      }
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  return { makeNameUrl, makeZipUrl, getLocationData };
};

/*
GeocodingAPI(LocationInformation("", "", "US", "60193"))
  .getLocationData()
  .then((r) => {
    console.log("zipcode location data:", r);
  });

GeocodingAPI(LocationInformation("schaumburg"))
  .getLocationData()
  .then((r) => {
    console.log("name location data usa: ", r);
  });

GeocodingAPI(LocationInformation("london"))
  .getLocationData()
  .then((r) => {
    console.log("location data name london: ", r);
  });

how you can use this:
GeocodingAPI(LocationInformation("Schaumburg", "ILL"))
  .getLocationData()
  .then((r) => console.log(r));

  */

async function weatherTester() {
  const API_KEY = "f3c32091bf8f9865219ac12748616ead";

  GeocodingAPI(LocationInformation("schaumburg"))
    //// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    .getLocationData()
    .then(async (r) => {
      let url = " https://api.openweathermap.org/data/2.5/weather?";
      let locationModel = LocationModel(r);
      url += `lat=${locationModel.latitude}&lon=${locationModel.longitude}&appid=${API_KEY}`;
      let response = await fetch(url);
      let json = await response.json();
      console.log(`weather data for ${locationModel.cityName}: `, json);
      let weatherModel = WeatherModel(json);
      for (let item in weatherModel) {
        console.log(item, weatherModel[item]);
      }
    });
}

//weatherTester();

/*
GeocodingAPI(LocationInformation("schaumburg"))
  .getLocationData()
  .then((r) => {
    let curLocation = LocationModel(r);
    for (let key in curLocation) {
      console.log(key, curLocation[key]);
    }
  });

GeocodingAPI(LocationInformation("asdfasdfdasdasf"))
  .getLocationData()
  .then((r) => {
    let curLocation = LocationModel(r);
    for (let key in curLocation) {
      console.log(key, curLocation[key]);
    }
  });
  */
