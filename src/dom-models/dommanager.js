import { TomTomAPI } from "../apis/tomtomapi";
import { TomTomJsonParser } from "../apis/tomtomapi";
import { WeatherAPI } from "../apis/weatherapi";
import { WeatherModel } from "../models/weathermodel";
import { SearchForm } from "./searchform";
import { LocationInformationElement } from "./locationinformationelement";
import { WeatherInformationElement } from "./weatherinformationelement";

export const DomManager = (() => {
  const initialLoad = () => {
    const rootDiv = document.createElement("div");
    const formDiv = document.createElement("div");
    formDiv.id = "form-container";
    rootDiv.id = "root";
    formDiv.appendChild(SearchForm());
    rootDiv.appendChild(formDiv);
    document.body.appendChild(rootDiv);
    DomEventManager();
  };

  const resetWeatherInformation = () => {
    const weatherInfoDiv = document.querySelector("#weather-info-container");
    const rootDiv = document.querySelector("#root");
    rootDiv.removeChild(weatherInfoDiv);
  };
  const resetLocationInformation = () => {
    const root = document.querySelector("#root");
    const locationInfoDiv = document.querySelector("#location-info-container");
    root.removeChild(locationInfoDiv);
  };

  const updateInformation = (weatherModel, locationModel) => {
    const root = document.querySelector("#root");
    if (document.querySelector("#weather-info-container")) {
      resetWeatherInformation();
      resetLocationInformation();
    }
    root.appendChild(LocationInformationElement(locationModel));
    root.appendChild(WeatherInformationElement(weatherModel));
  };

  return { initialLoad, updateInformation };
})();

export const DomEventManager = () => {
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
