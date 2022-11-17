import { WeatherModel } from "./models/weathermodel";
import { weatherAPItest } from "./apis/weatherapi";
import { WeatherAPI } from "./apis/weatherapi";
import "./styles/style.css";
import { TomTomAPI } from "./apis/tomtomapi";
import { TomTomJsonParser } from "./apis/tomtomapi";
import { divide } from "lodash";
import { SearchForm } from "./dom-models/searchform";
import { WeatherInformation } from "./dom-models/weatherinformation";

const TestWeatherModel = async () => {
  let tomtomdata = await TomTomAPI("london").getData();
  console.log(tomtomdata);
  let tomtomlocatoin = TomTomJsonParser(tomtomdata);
  console.log(tomtomlocatoin);
  let weatherData = await WeatherAPI(tomtomlocatoin).getWeatherData();
  let weatherModel = WeatherModel(weatherData);
  return weatherModel;
};

const DomEventManager = () => {
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    let value = document.querySelector("input").value;

    let tomtomdata = await TomTomAPI(value).getData();
    let locationModel = TomTomJsonParser(tomtomdata);
    console.log("location data", locationModel);
    let weatherData = await WeatherAPI(locationModel).getWeatherData();
    let weatherModel = WeatherModel(weatherData);

    DomManager.updateInformation(weatherModel, locationModel);
    input.value = "";
  };

  document.querySelector("form").onsubmit = HandleFormSubmit;
};

const LocationInformationElement = (locationModel) => {
  const div = document.createElement("div");
  div.id = "location-info-container";

  const municipalityDiv = document.createElement("div");
  const countryDiv = document.createElement("div");
  municipalityDiv.textContent = locationModel.municipality;
  countryDiv.textContent = locationModel.country;

  div.appendChild(municipalityDiv);
  div.appendChild(countryDiv);
  return div;
};

const DomManager = (() => {
  const initialLoad = () => {
    const rootDiv = document.createElement("div");
    rootDiv.id = "root";
    rootDiv.appendChild(SearchForm());

    document.body.appendChild(rootDiv);
  };

  const resetWeatherInformation = () => {
    console.log("resetWeatherInformation");
    const weatherInfoDiv = document.querySelector("#weather-info-container");
    const rootDiv = document.querySelector("#root");
    console.log(rootDiv);
    rootDiv.removeChild(weatherInfoDiv);
    /*
    console.log("weatherInfoDivbefore", weatherInfoDiv);
    while (weatherInfoDiv.firstChild) {
      weatherInfoDiv.removeChild(weatherInfoDiv.firstChild);
    }
    console.log("weatherinfodiv after", weatherInfoDiv);
    */
  };
  const resetLocationInformation = () => {
    const root = document.querySelector("#root");
    const locationInfoDiv = document.querySelector("#location-info-container");
    root.removeChild(locationInfoDiv);
  };

  const updateInformation = (weatherModel, locationModel) => {
    const root = document.querySelector("#root");
    if (document.querySelector("#weather-info-container")) {
      console.log("hello from if");
      resetWeatherInformation();
      resetLocationInformation();
    }

    console.log("update information weathermodel: ", weatherModel);
    console.log("update information locatoinModel: ", locationModel);
    root.appendChild(LocationInformationElement(locationModel));
    root.appendChild(WeatherInformation(weatherModel));
  };

  const addWeatherInformation = () => {};

  return { initialLoad, resetWeatherInformation, updateInformation };
})();

DomManager.initialLoad();
DomEventManager();
