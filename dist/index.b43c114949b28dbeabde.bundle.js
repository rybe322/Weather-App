"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_weathermodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/weathermodel */ 179);
/* harmony import */ var _models_geocodingapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/geocodingapi */ 385);
/* harmony import */ var _models_weatherapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/weatherapi */ 26);
/* harmony import */ var _models_locationinformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/locationinformation */ 520);



// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const API_KEY = "e66a63c7961f75024cf1170ee5f1058b";




/***/ }),

/***/ 385:
/*!************************************!*\
  !*** ./src/models/geocodingapi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodingAPI": () => (/* binding */ GeocodingAPI)
/* harmony export */ });
/* harmony import */ var _locationinformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationinformation */ 520);
/* harmony import */ var _locationmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationmodel */ 479);
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




const GeocodingAPI = (locationInformation) => {
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

  GeocodingAPI((0,_locationinformation__WEBPACK_IMPORTED_MODULE_0__.LocationInformation)("schaumburg"))
    //// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    .getLocationData()
    .then(async (r) => {
      let url = " https://api.openweathermap.org/data/2.5/weather?";
      let locationModel = (0,_locationmodel__WEBPACK_IMPORTED_MODULE_1__.LocationModel)(r);
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


/***/ }),

/***/ 520:
/*!*******************************************!*\
  !*** ./src/models/locationinformation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInformation": () => (/* binding */ LocationInformation)
/* harmony export */ });
const LocationInformation = (CITY, STATE, COUNTRY, ZIPCODE) => {
  let city = CITY !== undefined ? CITY.replaceAll(" ", "-") : undefined;
  let state = STATE !== undefined ? STATE.replaceAll(" ", "-") : undefined;
  let country =
    COUNTRY !== undefined ? COUNTRY.replaceAll(" ", "-") : undefined;
  let zipcode = ZIPCODE !== undefined ? ZIPCODE : undefined;

  const setCity = (newCity) => (city = newCity);
  const setState = (newState) => (state = newState);
  const setCountry = (newCountry) => (country = newCountry);
  const setZipcode = (newZipcode) => (zipcode = newZipcode);

  const getCity = () => city;
  const getState = () => state;
  const getCountry = () => country;
  const getZipcode = () => zipcode;

  return {
    setCity,
    setCountry,
    setState,
    setZipcode,
    getCity,
    getCountry,
    getState,
    getZipcode,
  };
};


/***/ }),

/***/ 479:
/*!*************************************!*\
  !*** ./src/models/locationmodel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationModel": () => (/* binding */ LocationModel)
/* harmony export */ });
const LocationModel = (locationJson) => {
  console.log("Hello from LocationModel with json: ", locationJson);
  let latitude = locationJson ? locationJson.lat : "";
  let longitude = locationJson ? locationJson.lon : "";
  let cityName = locationJson ? locationJson.name : "";
  let country = locationJson ? locationJson.country : "";
  let state = locationJson ? locationJson.state : "";

  //console.log(latitude, longitude, cityName, country, state);
  return { latitude, longitude, cityName, country, state };
};


/***/ }),

/***/ 26:
/*!**********************************!*\
  !*** ./src/models/weatherapi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherAPI": () => (/* binding */ WeatherAPI)
/* harmony export */ });
/* harmony import */ var _geocodingapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geocodingapi */ 385);
/* harmony import */ var _weathermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weathermodel */ 179);
/* harmony import */ var _locationmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationmodel */ 479);




const WeatherAPI = (locationModel) => {
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
    URL += `lat=${locationModel.latitude}&lon=${locationModel.longitude}&appid=${API_KEY}`;
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
/*
Example uses:
export async function weatherAPItest(locationInformation) {
  let locationData = await GeocodingAPI(locationInformation).getLocationData();
  let locationModel = LocationModel(locationData);
  console.log(locationModel);
  let weatherData = await WeatherAPI(locationModel).getWeatherData();
  let weatherModel = WeatherModel(weatherData);
  console.log(weatherModel);
}
weatherAPItest(LocationInformation("London", "Englanasdfasdfd"));
weatherAPItest(LocationInformation("", "", "", "60173"));

*/


/***/ }),

/***/ 179:
/*!************************************!*\
  !*** ./src/models/weathermodel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherModel": () => (/* binding */ WeatherModel)
/* harmony export */ });
let jsonstring = `{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}                        
`;

const WeatherModel = (weatherJson) => {
  console.log("hello from WeatherModel");
  console.log("WeatherModel json: ", weatherJson);
  let feelsLike = weatherJson ? weatherJson.main.feels_like : "";
  let humidity = weatherJson ? weatherJson.main.humidity : "";
  let pressure = weatherJson ? weatherJson.main.pressure : "";
  let curTemp = weatherJson ? weatherJson.main.temp : "";
  let minTemp = weatherJson ? weatherJson.main.temp_min : "";
  let maxTemp = weatherJson ? weatherJson.main.temp_max : "";
  let windSpeed = weatherJson ? weatherJson.wind.speed : "";
  let description = weatherJson ? weatherJson.weather[0].description : "";

  return {
    feelsLike,
    humidity,
    pressure,
    curTemp,
    minTemp,
    maxTemp,
    windSpeed,
    description,
  };
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kZWxzL2dlb2NvZGluZ2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2RlbHMvbG9jYXRpb25pbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2RlbHMvbG9jYXRpb25tb2RlbC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2RlbHMvd2VhdGhlcmFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2RlbHMvd2VhdGhlcm1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYXRoZXJNb2RlbCB9IGZyb20gXCIuL21vZGVscy93ZWF0aGVybW9kZWxcIjtcbmltcG9ydCB7IEdlb2NvZGluZ0FQSSB9IGZyb20gXCIuL21vZGVscy9nZW9jb2RpbmdhcGlcIjtcbmltcG9ydCB7IHdlYXRoZXJBUEl0ZXN0IH0gZnJvbSBcIi4vbW9kZWxzL3dlYXRoZXJhcGlcIjtcbi8vIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD17bGF0fSZsb249e2xvbn0mYXBwaWQ9e0FQSSBrZXl9XG5cbmNvbnN0IEFQSV9LRVkgPSBcImU2NmE2M2M3OTYxZjc1MDI0Y2YxMTcwZWU1ZjEwNThiXCI7XG5pbXBvcnQgeyBXZWF0aGVyQVBJIH0gZnJvbSBcIi4vbW9kZWxzL3dlYXRoZXJhcGlcIjtcbmltcG9ydCB7IExvY2F0aW9uSW5mb3JtYXRpb24gfSBmcm9tIFwiLi9tb2RlbHMvbG9jYXRpb25pbmZvcm1hdGlvblwiO1xuIiwiLypcbkRpcmVjdCBnZW9jb2RpbmcgYWxsb3dzIHRvIGdldCBnZW9ncmFwaGljYWwgY29vcmRpbmF0ZXMgKGxhdCwgbG9uKSBieSB1c2luZyBuYW1lIG9mIHRoZSBsb2NhdGlvbiAoY2l0eSBuYW1lIG9yIGFyZWEgbmFtZSkuIFxuSWYgeW91IHVzZSB0aGUgbGltaXQgcGFyYW1ldGVyIGluIHRoZSBBUEkgY2FsbCwgeW91IGNhbiBjYXAgaG93IG1hbnkgbG9jYXRpb25zIHdpdGggdGhlIHNhbWUgbmFtZSB3aWxsIGJlIHNlZW4gaW4gdGhlIFxuQVBJIHJlc3BvbnNlIChmb3IgaW5zdGFuY2UsIExvbmRvbiBpbiB0aGUgVUsgYW5kIExvbmRvbiBpbiB0aGUgVVMpLlxuXG5BUEkgY2FsbFxuXG5odHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPXtjaXR5IG5hbWV9LHtzdGF0ZSBjb2RlfSx7Y291bnRyeSBjb2RlfSZsaW1pdD17bGltaXR9JmFwcGlkPXtBUEkga2V5fVxuXG5FeGFtcGxlIG9mIEFQSSBjYWxsXG5cbmh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9TG9uZG9uJmxpbWl0PTUmYXBwaWQ9e0FQSSBrZXl9XG5cbkV4YW1wbGUgQVBJIHJlc3BvbnNlXG5cbiAgICAgICAgICAgICAgICBcblxue1xuICBcInppcFwiOiBcIjkwMjEwXCIsXG4gIFwibmFtZVwiOiBcIkJldmVybHkgSGlsbHNcIixcbiAgXCJsYXRcIjogMzQuMDkwMSxcbiAgXCJsb25cIjogLTExOC40MDY1LFxuICBcImNvdW50cnlcIjogXCJVU1wiXG59XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgXG5cbiovXG5cbmltcG9ydCB7IExvY2F0aW9uSW5mb3JtYXRpb24gfSBmcm9tIFwiLi9sb2NhdGlvbmluZm9ybWF0aW9uXCI7XG5pbXBvcnQgeyBMb2NhdGlvbk1vZGVsIH0gZnJvbSBcIi4vbG9jYXRpb25tb2RlbFwiO1xuXG5leHBvcnQgY29uc3QgR2VvY29kaW5nQVBJID0gKGxvY2F0aW9uSW5mb3JtYXRpb24pID0+IHtcbiAgY29uc3QgQVBJX0tFWSA9IFwiZjNjMzIwOTFiZjhmOTg2NTIxOWFjMTI3NDg2MTZlYWRcIjtcblxuICAvKlxuICBUTyBVU0U6XG4gIFBhc3MgaW4gYSBMb2NhdGlvbkluZm9ybWF0aW9uIG9iamVjdCB0byBHZW9jb2RpbmdBcGkuXG4gIFRoZW4gdXNlIHRoZSBmdW5jdGlvbiBnZXRMb2NhdGlvbkRhdGEoKSB0byByZXRyaWV2ZXQgdGhlIEpTT04gd2l0aCB0aGUgbG9jYXRpb24gZGF0YS5cbiAgQmVzdCB3aGVuIHVzZWQgdG8gcGFzcyB0aGUgSlNPTiBkYXRhIHRvIGEgTG9jYXRpb25Nb2RlbCBvYmplY3RcbiAgY29uc3QgbG9jYXRpb25JbmZvcm1hdGlvbiA9IExvY2F0aW9uSW5mb3JtYXRpb24oXG4gICAgQ0lUWU5BTUUsXG4gICAgU1RBVEVDT0RFLFxuICAgIENPVU5UUllDT0RFLFxuICAgIFpJUENPREVcbiAgKTtcbiAgKi9cblxuICBjb25zdCBtYWtlTmFtZVVybCA9ICgpID0+IHtcbiAgICBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT1cIjtcbiAgICBsZXQgVVJMID0gQkFTRV9VUkw7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcbiAgICBxdWVyeVN0cmluZyArPSBsb2NhdGlvbkluZm9ybWF0aW9uLmdldENpdHkoKTtcbiAgICBpZiAobG9jYXRpb25JbmZvcm1hdGlvbi5nZXRTdGF0ZSgpKVxuICAgICAgcXVlcnlTdHJpbmcgKz0gYCwke2xvY2F0aW9uSW5mb3JtYXRpb24uZ2V0U3RhdGUoKX1gO1xuICAgIGlmIChsb2NhdGlvbkluZm9ybWF0aW9uLmdldENvdW50cnkoKSlcbiAgICAgIHF1ZXJ5U3RyaW5nICs9IGAsJHtsb2NhdGlvbkluZm9ybWF0aW9uLmdldENvdW50cnkoKX1gO1xuICAgIFVSTCArPSBxdWVyeVN0cmluZztcbiAgICBVUkwgKz0gYCZhcHBpZD0ke0FQSV9LRVl9YDtcbiAgICByZXR1cm4gVVJMO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VaaXBVcmwgPSAoKSA9PiB7XG4gICAgY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvemlwP3ppcD1cIjtcbiAgICBsZXQgVVJMID0gQkFTRV9VUkw7XG4gICAgVVJMICs9IGxvY2F0aW9uSW5mb3JtYXRpb24uZ2V0WmlwY29kZSgpO1xuICAgIGlmIChsb2NhdGlvbkluZm9ybWF0aW9uLmdldENvdW50cnkoKSkge1xuICAgICAgVVJMICs9IFwiLFwiO1xuICAgICAgVVJMICs9IGxvY2F0aW9uSW5mb3JtYXRpb24uZ2V0Q291bnRyeSgpO1xuICAgIH1cbiAgICBVUkwgKz0gXCImXCI7XG4gICAgVVJMICs9IGBhcHBpZD0ke0FQSV9LRVl9YDtcbiAgICByZXR1cm4gVVJMO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGxvY2F0aW9uIGRhdGEuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGxvY2F0aW9uSW5mb3JtYXRpb24uZ2V0WmlwY29kZSgpKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGdldHppcGNvZGUgaWZcIik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1ha2VaaXBVcmwoKSwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbkluZm9ybWF0aW9uLmdldENpdHkoKSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGVsbG8gZnJvbSBnZXRjaXR5IGlmXCIpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtYWtlTmFtZVVybCgpLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGpzb25bMF07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZnJvbSBnZXRMb2NhdGlvbkRhdGE6IFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbWFrZU5hbWVVcmwsIG1ha2VaaXBVcmwsIGdldExvY2F0aW9uRGF0YSB9O1xufTtcblxuLypcbkdlb2NvZGluZ0FQSShMb2NhdGlvbkluZm9ybWF0aW9uKFwiXCIsIFwiXCIsIFwiVVNcIiwgXCI2MDE5M1wiKSlcbiAgLmdldExvY2F0aW9uRGF0YSgpXG4gIC50aGVuKChyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ6aXBjb2RlIGxvY2F0aW9uIGRhdGE6XCIsIHIpO1xuICB9KTtcblxuR2VvY29kaW5nQVBJKExvY2F0aW9uSW5mb3JtYXRpb24oXCJzY2hhdW1idXJnXCIpKVxuICAuZ2V0TG9jYXRpb25EYXRhKClcbiAgLnRoZW4oKHIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm5hbWUgbG9jYXRpb24gZGF0YSB1c2E6IFwiLCByKTtcbiAgfSk7XG5cbkdlb2NvZGluZ0FQSShMb2NhdGlvbkluZm9ybWF0aW9uKFwibG9uZG9uXCIpKVxuICAuZ2V0TG9jYXRpb25EYXRhKClcbiAgLnRoZW4oKHIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uIGRhdGEgbmFtZSBsb25kb246IFwiLCByKTtcbiAgfSk7XG5cbmhvdyB5b3UgY2FuIHVzZSB0aGlzOlxuR2VvY29kaW5nQVBJKExvY2F0aW9uSW5mb3JtYXRpb24oXCJTY2hhdW1idXJnXCIsIFwiSUxMXCIpKVxuICAuZ2V0TG9jYXRpb25EYXRhKClcbiAgLnRoZW4oKHIpID0+IGNvbnNvbGUubG9nKHIpKTtcblxuICAqL1xuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyVGVzdGVyKCkge1xuICBjb25zdCBBUElfS0VZID0gXCJmM2MzMjA5MWJmOGY5ODY1MjE5YWMxMjc0ODYxNmVhZFwiO1xuXG4gIEdlb2NvZGluZ0FQSShMb2NhdGlvbkluZm9ybWF0aW9uKFwic2NoYXVtYnVyZ1wiKSlcbiAgICAvLy8vIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD17bGF0fSZsb249e2xvbn0mYXBwaWQ9e0FQSSBrZXl9XG5cbiAgICAuZ2V0TG9jYXRpb25EYXRhKClcbiAgICAudGhlbihhc3luYyAocikgPT4ge1xuICAgICAgbGV0IHVybCA9IFwiIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiO1xuICAgICAgbGV0IGxvY2F0aW9uTW9kZWwgPSBMb2NhdGlvbk1vZGVsKHIpO1xuICAgICAgdXJsICs9IGBsYXQ9JHtsb2NhdGlvbk1vZGVsLmxhdGl0dWRlfSZsb249JHtsb2NhdGlvbk1vZGVsLmxvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWA7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhgd2VhdGhlciBkYXRhIGZvciAke2xvY2F0aW9uTW9kZWwuY2l0eU5hbWV9OiBgLCBqc29uKTtcbiAgICAgIGxldCB3ZWF0aGVyTW9kZWwgPSBXZWF0aGVyTW9kZWwoanNvbik7XG4gICAgICBmb3IgKGxldCBpdGVtIGluIHdlYXRoZXJNb2RlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLCB3ZWF0aGVyTW9kZWxbaXRlbV0pO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG4vL3dlYXRoZXJUZXN0ZXIoKTtcblxuLypcbkdlb2NvZGluZ0FQSShMb2NhdGlvbkluZm9ybWF0aW9uKFwic2NoYXVtYnVyZ1wiKSlcbiAgLmdldExvY2F0aW9uRGF0YSgpXG4gIC50aGVuKChyKSA9PiB7XG4gICAgbGV0IGN1ckxvY2F0aW9uID0gTG9jYXRpb25Nb2RlbChyKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gY3VyTG9jYXRpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKGtleSwgY3VyTG9jYXRpb25ba2V5XSk7XG4gICAgfVxuICB9KTtcblxuR2VvY29kaW5nQVBJKExvY2F0aW9uSW5mb3JtYXRpb24oXCJhc2RmYXNkZmRhc2Rhc2ZcIikpXG4gIC5nZXRMb2NhdGlvbkRhdGEoKVxuICAudGhlbigocikgPT4ge1xuICAgIGxldCBjdXJMb2NhdGlvbiA9IExvY2F0aW9uTW9kZWwocik7XG4gICAgZm9yIChsZXQga2V5IGluIGN1ckxvY2F0aW9uKSB7XG4gICAgICBjb25zb2xlLmxvZyhrZXksIGN1ckxvY2F0aW9uW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gICovXG4iLCJleHBvcnQgY29uc3QgTG9jYXRpb25JbmZvcm1hdGlvbiA9IChDSVRZLCBTVEFURSwgQ09VTlRSWSwgWklQQ09ERSkgPT4ge1xuICBsZXQgY2l0eSA9IENJVFkgIT09IHVuZGVmaW5lZCA/IENJVFkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpIDogdW5kZWZpbmVkO1xuICBsZXQgc3RhdGUgPSBTVEFURSAhPT0gdW5kZWZpbmVkID8gU1RBVEUucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpIDogdW5kZWZpbmVkO1xuICBsZXQgY291bnRyeSA9XG4gICAgQ09VTlRSWSAhPT0gdW5kZWZpbmVkID8gQ09VTlRSWS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikgOiB1bmRlZmluZWQ7XG4gIGxldCB6aXBjb2RlID0gWklQQ09ERSAhPT0gdW5kZWZpbmVkID8gWklQQ09ERSA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBzZXRDaXR5ID0gKG5ld0NpdHkpID0+IChjaXR5ID0gbmV3Q2l0eSk7XG4gIGNvbnN0IHNldFN0YXRlID0gKG5ld1N0YXRlKSA9PiAoc3RhdGUgPSBuZXdTdGF0ZSk7XG4gIGNvbnN0IHNldENvdW50cnkgPSAobmV3Q291bnRyeSkgPT4gKGNvdW50cnkgPSBuZXdDb3VudHJ5KTtcbiAgY29uc3Qgc2V0WmlwY29kZSA9IChuZXdaaXBjb2RlKSA9PiAoemlwY29kZSA9IG5ld1ppcGNvZGUpO1xuXG4gIGNvbnN0IGdldENpdHkgPSAoKSA9PiBjaXR5O1xuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHN0YXRlO1xuICBjb25zdCBnZXRDb3VudHJ5ID0gKCkgPT4gY291bnRyeTtcbiAgY29uc3QgZ2V0WmlwY29kZSA9ICgpID0+IHppcGNvZGU7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRDaXR5LFxuICAgIHNldENvdW50cnksXG4gICAgc2V0U3RhdGUsXG4gICAgc2V0WmlwY29kZSxcbiAgICBnZXRDaXR5LFxuICAgIGdldENvdW50cnksXG4gICAgZ2V0U3RhdGUsXG4gICAgZ2V0WmlwY29kZSxcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgTG9jYXRpb25Nb2RlbCA9IChsb2NhdGlvbkpzb24pID0+IHtcbiAgY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIExvY2F0aW9uTW9kZWwgd2l0aCBqc29uOiBcIiwgbG9jYXRpb25Kc29uKTtcbiAgbGV0IGxhdGl0dWRlID0gbG9jYXRpb25Kc29uID8gbG9jYXRpb25Kc29uLmxhdCA6IFwiXCI7XG4gIGxldCBsb25naXR1ZGUgPSBsb2NhdGlvbkpzb24gPyBsb2NhdGlvbkpzb24ubG9uIDogXCJcIjtcbiAgbGV0IGNpdHlOYW1lID0gbG9jYXRpb25Kc29uID8gbG9jYXRpb25Kc29uLm5hbWUgOiBcIlwiO1xuICBsZXQgY291bnRyeSA9IGxvY2F0aW9uSnNvbiA/IGxvY2F0aW9uSnNvbi5jb3VudHJ5IDogXCJcIjtcbiAgbGV0IHN0YXRlID0gbG9jYXRpb25Kc29uID8gbG9jYXRpb25Kc29uLnN0YXRlIDogXCJcIjtcblxuICAvL2NvbnNvbGUubG9nKGxhdGl0dWRlLCBsb25naXR1ZGUsIGNpdHlOYW1lLCBjb3VudHJ5LCBzdGF0ZSk7XG4gIHJldHVybiB7IGxhdGl0dWRlLCBsb25naXR1ZGUsIGNpdHlOYW1lLCBjb3VudHJ5LCBzdGF0ZSB9O1xufTtcbiIsImltcG9ydCB7IEdlb2NvZGluZ0FQSSB9IGZyb20gXCIuL2dlb2NvZGluZ2FwaVwiO1xuaW1wb3J0IHsgV2VhdGhlck1vZGVsIH0gZnJvbSBcIi4vd2VhdGhlcm1vZGVsXCI7XG5pbXBvcnQgeyBMb2NhdGlvbk1vZGVsIH0gZnJvbSBcIi4vbG9jYXRpb25tb2RlbFwiO1xuXG5leHBvcnQgY29uc3QgV2VhdGhlckFQSSA9IChsb2NhdGlvbk1vZGVsKSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcImYzYzMyMDkxYmY4Zjk4NjUyMTlhYzEyNzQ4NjE2ZWFkXCI7XG4gIGxldCBCQVNFX1VSTCA9IFwiIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiO1xuXG4gIC8qXG4gIFRPIFVTRTpcbiAgUGFzcyBpbiBXZWF0aGVyQVBJIGEgTG9jYXRpb25Nb2RlbCBvYmplY3QgXG4gIFxuICBsZXQgbG9jYXRpb25EYXRhID0gYXdhaXQgR2VvY29kaW5nQVBJKGxvY2F0aW9uSW5mb3JtYXRpb24pLmdldExvY2F0aW9uRGF0YSgpO1xuICBsZXQgbG9jYXRpb25Nb2RlbCA9IExvY2F0aW9uTW9kZWwobG9jYXRpb25EYXRhKTtcbiAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgV2VhdGhlckFQSShsb2NhdGlvbk1vZGVsKS5nZXRXZWF0aGVyRGF0YSgpO1xuICBsZXQgd2VhdGhlck1vZGVsID0gV2VhdGhlck1vZGVsKHdlYXRoZXJEYXRhKTtcblxuICAqL1xuXG4gIGNvbnN0IG1ha2VVcmwgPSAoKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PXtsYXR9Jmxvbj17bG9ufSZhcHBpZD17QVBJIGtleX1cbiAgICBsZXQgVVJMID0gQkFTRV9VUkw7XG4gICAgVVJMICs9IGBsYXQ9JHtsb2NhdGlvbk1vZGVsLmxhdGl0dWRlfSZsb249JHtsb2NhdGlvbk1vZGVsLmxvbmdpdHVkZX0mYXBwaWQ9JHtBUElfS0VZfWA7XG4gICAgLy9jb25zb2xlLmxvZyhVUkwpO1xuICAgIHJldHVybiBVUkw7XG4gIH07XG4gIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGxvY2F0aW9uIGRhdGEuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtYWtlVXJsKCksIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGZyb20gZ2V0TG9jYXRpb25EYXRhOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXRXZWF0aGVyRGF0YSB9O1xufTtcbi8qXG5FeGFtcGxlIHVzZXM6XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2VhdGhlckFQSXRlc3QobG9jYXRpb25JbmZvcm1hdGlvbikge1xuICBsZXQgbG9jYXRpb25EYXRhID0gYXdhaXQgR2VvY29kaW5nQVBJKGxvY2F0aW9uSW5mb3JtYXRpb24pLmdldExvY2F0aW9uRGF0YSgpO1xuICBsZXQgbG9jYXRpb25Nb2RlbCA9IExvY2F0aW9uTW9kZWwobG9jYXRpb25EYXRhKTtcbiAgY29uc29sZS5sb2cobG9jYXRpb25Nb2RlbCk7XG4gIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXJBUEkobG9jYXRpb25Nb2RlbCkuZ2V0V2VhdGhlckRhdGEoKTtcbiAgbGV0IHdlYXRoZXJNb2RlbCA9IFdlYXRoZXJNb2RlbCh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJNb2RlbCk7XG59XG53ZWF0aGVyQVBJdGVzdChMb2NhdGlvbkluZm9ybWF0aW9uKFwiTG9uZG9uXCIsIFwiRW5nbGFuYXNkZmFzZGZkXCIpKTtcbndlYXRoZXJBUEl0ZXN0KExvY2F0aW9uSW5mb3JtYXRpb24oXCJcIiwgXCJcIiwgXCJcIiwgXCI2MDE3M1wiKSk7XG5cbiovXG4iLCJsZXQganNvbnN0cmluZyA9IGB7XG4gIFwiY29vcmRcIjoge1xuICAgIFwibG9uXCI6IDEwLjk5LFxuICAgIFwibGF0XCI6IDQ0LjM0XG4gIH0sXG4gIFwid2VhdGhlclwiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiA1MDEsXG4gICAgICBcIm1haW5cIjogXCJSYWluXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwibW9kZXJhdGUgcmFpblwiLFxuICAgICAgXCJpY29uXCI6IFwiMTBkXCJcbiAgICB9XG4gIF0sXG4gIFwiYmFzZVwiOiBcInN0YXRpb25zXCIsXG4gIFwibWFpblwiOiB7XG4gICAgXCJ0ZW1wXCI6IDI5OC40OCxcbiAgICBcImZlZWxzX2xpa2VcIjogMjk4Ljc0LFxuICAgIFwidGVtcF9taW5cIjogMjk3LjU2LFxuICAgIFwidGVtcF9tYXhcIjogMzAwLjA1LFxuICAgIFwicHJlc3N1cmVcIjogMTAxNSxcbiAgICBcImh1bWlkaXR5XCI6IDY0LFxuICAgIFwic2VhX2xldmVsXCI6IDEwMTUsXG4gICAgXCJncm5kX2xldmVsXCI6IDkzM1xuICB9LFxuICBcInZpc2liaWxpdHlcIjogMTAwMDAsXG4gIFwid2luZFwiOiB7XG4gICAgXCJzcGVlZFwiOiAwLjYyLFxuICAgIFwiZGVnXCI6IDM0OSxcbiAgICBcImd1c3RcIjogMS4xOFxuICB9LFxuICBcInJhaW5cIjoge1xuICAgIFwiMWhcIjogMy4xNlxuICB9LFxuICBcImNsb3Vkc1wiOiB7XG4gICAgXCJhbGxcIjogMTAwXG4gIH0sXG4gIFwiZHRcIjogMTY2MTg3MDU5MixcbiAgXCJzeXNcIjoge1xuICAgIFwidHlwZVwiOiAyLFxuICAgIFwiaWRcIjogMjA3NTY2MyxcbiAgICBcImNvdW50cnlcIjogXCJJVFwiLFxuICAgIFwic3VucmlzZVwiOiAxNjYxODM0MTg3LFxuICAgIFwic3Vuc2V0XCI6IDE2NjE4ODIyNDhcbiAgfSxcbiAgXCJ0aW1lem9uZVwiOiA3MjAwLFxuICBcImlkXCI6IDMxNjM4NTgsXG4gIFwibmFtZVwiOiBcIlpvY2NhXCIsXG4gIFwiY29kXCI6IDIwMFxufSAgICAgICAgICAgICAgICAgICAgICAgIFxuYDtcblxuZXhwb3J0IGNvbnN0IFdlYXRoZXJNb2RlbCA9ICh3ZWF0aGVySnNvbikgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlbGxvIGZyb20gV2VhdGhlck1vZGVsXCIpO1xuICBjb25zb2xlLmxvZyhcIldlYXRoZXJNb2RlbCBqc29uOiBcIiwgd2VhdGhlckpzb24pO1xuICBsZXQgZmVlbHNMaWtlID0gd2VhdGhlckpzb24gPyB3ZWF0aGVySnNvbi5tYWluLmZlZWxzX2xpa2UgOiBcIlwiO1xuICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4uaHVtaWRpdHkgOiBcIlwiO1xuICBsZXQgcHJlc3N1cmUgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4ucHJlc3N1cmUgOiBcIlwiO1xuICBsZXQgY3VyVGVtcCA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi50ZW1wIDogXCJcIjtcbiAgbGV0IG1pblRlbXAgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLm1haW4udGVtcF9taW4gOiBcIlwiO1xuICBsZXQgbWF4VGVtcCA9IHdlYXRoZXJKc29uID8gd2VhdGhlckpzb24ubWFpbi50ZW1wX21heCA6IFwiXCI7XG4gIGxldCB3aW5kU3BlZWQgPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLndpbmQuc3BlZWQgOiBcIlwiO1xuICBsZXQgZGVzY3JpcHRpb24gPSB3ZWF0aGVySnNvbiA/IHdlYXRoZXJKc29uLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gOiBcIlwiO1xuXG4gIHJldHVybiB7XG4gICAgZmVlbHNMaWtlLFxuICAgIGh1bWlkaXR5LFxuICAgIHByZXNzdXJlLFxuICAgIGN1clRlbXAsXG4gICAgbWluVGVtcCxcbiAgICBtYXhUZW1wLFxuICAgIHdpbmRTcGVlZCxcbiAgICBkZXNjcmlwdGlvbixcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=