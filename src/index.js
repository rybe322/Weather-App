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
  const form = document.querySelector("form");
  form.onsubmit = async (e) => {
    e.preventDefault();
    const value = document.querySelector("input").value;

    let tomtomdata = await TomTomAPI(value).getData();
    let tomtomlocatoin = TomTomJsonParser(tomtomdata);
    let weatherData = await WeatherAPI(tomtomlocatoin).getWeatherData();
    let weatherModel = WeatherModel(weatherData);
    if (document.querySelector("#weather-info-container"))
      DomManager().resetWeatherInformation();
    document
      .querySelector("#root")
      .appendChild(WeatherInformation(weatherModel));
  };
};

const DomManager = () => {
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

  const addWeatherInformation = () => {};

  return { initialLoad, resetWeatherInformation };
};

DomManager().initialLoad();
DomEventManager();
