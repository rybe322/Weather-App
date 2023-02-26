import { TomTomAPI, TomTomJsonParser } from "../apis/tomtomapi";
import { WeatherAPI } from "../apis/weatherapi";
import { WeatherModel } from "../models/weathermodel";
import { SearchForm } from "./searchform";
import { LocationInformationElement } from "./locationinformationelement";
import { WeatherInformationElement } from "./weatherinformationelement";
import { TimeApi, TimeParser } from "../apis/timeapi";
import { TimeInformationElement } from "./timeinformationelement";

export const DomManager = ((weatherModel, locationModel, timeModel) => {
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
  const resetTimeInformation = () => {
    const root = document.querySelector("#root");
    const timeInfoDiv = document.querySelector("#time-info-container");
    root.removeChild(timeInfoDiv);
  };

  const updateInformation = (weatherModel, locationModel, timeModel) => {
    const root = document.querySelector("#root");
    if (document.querySelector("#weather-info-container")) {
      // should not use this for checking empty or not
      resetWeatherInformation();
      resetLocationInformation();
      resetTimeInformation();
    }
    root.appendChild(LocationInformationElement(locationModel));
    root.appendChild(TimeInformationElement(timeModel));
    root.appendChild(WeatherInformationElement(weatherModel));
    // pass in the timeModel to update the background or pictures
  };

  return { initialLoad, updateInformation };
})();

export const DomEventManager = () => {
  function modelCheck(weatherModel, locationModel, timeModel) {
    return (weatherModel && locationModel && timeModel)

  }
  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    let value = document.querySelector("input").value;

    let tomtomdata = await TomTomAPI(value).getData();
    if (!tomtomdata) {
      return
    }
    let locationModel = TomTomJsonParser(tomtomdata);
    let weatherData = await WeatherAPI(locationModel).getWeatherData();
    console.log(weatherData);
    let timeData = await TimeApi(locationModel);
    let timeModel = TimeParser(timeData);
    let weatherModel = WeatherModel(weatherData);

    if (!modelCheck(weatherModel, locationModel, timeModel)) {
      console.log('nope')
    }

    DomManager.updateInformation(weatherModel, locationModel, timeModel);
    input.value = "";
  };

  document.querySelector("form").onsubmit = HandleFormSubmit;
};
