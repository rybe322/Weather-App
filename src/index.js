import { WeatherModel } from "./models/weathermodel";
import { weatherAPItest } from "./apis/weatherapi";
import { WeatherAPI } from "./apis/weatherapi";
import { LocationModel } from "./models/locationmodel";
import { JsonToLocationObject } from "./models/locationmodel";
import "./styles/style.css";
import { TomTomAPI } from "./apis/tomtomapi";
import { divide } from "lodash";

let form = document.createElement("form");
let searchLabel = document.createElement("label");
let searchInput = document.createElement("input");
let btn = document.createElement("button");
btn.type = "submit";
form.appendChild(searchLabel);
form.appendChild(searchInput);
form.appendChild(btn);
btn.textContent = "submit";
searchLabel.textContent = "Search";

document.body.appendChild(form);
/*
let parser = require("parse-address");
var parsed = parser.parseLocation(
  "1005 N Gravenstein Highway Sebastopol CA 95472"
);

searchInput.oninput = () => {
  let value = searchInput.value;
  console.log(value);
  let parser = require("parse-address");
  let parsedObject = parser.parseLocation(value);
  if (parsedObject.city && parsedObject.state) console.log(parsedObject);
};
*/
//asdfad
form.onsubmit = async (e) => {
  e.preventDefault();
  const value = document.querySelector("input").value;
  /*
  TomTomAPI(value)
    .getData()
    .then((r) => {
      console.log(r);
      console.log(JsonToLocationObject(r));
      let locationModel = LocationModel(JsonToLocationObject(r));
      console.log("location model: ", locationModel);
      WeatherAPI(locationModel)
        .getWeatherData()
        .then((r) => {
          console.log(WeatherModel(r));
        });
    });
    */
  console.log(value);
  const tomTomData = await TomTomAPI(value).getData();
  const locationModel = LocationModel(JsonToLocationObject(tomTomData));
  const weatherData = await WeatherAPI(locationModel).getWeatherData();
  const weatherModel = WeatherModel(weatherData);

  console.log("location model : ", locationModel);
  console.log("weather model: ", weatherModel);
};

//tomtomsearchtest();
