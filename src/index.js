import "./styles/style.css";
import { DomManager } from "./dom-models/dommanager";

import { TomTomAPI } from "./apis/tomtomapi";
import { TomTomJsonParser } from "./apis/tomtomapi";

import { TimeApi, TimeParser } from "./apis/timeapi";

DomManager.initialLoad();

async function timeTest() {
  let apikey = "4ARFZ53KTQ4R";
  let tomtomdata = await TomTomAPI("chicago").getData();
  let locationModel = TomTomJsonParser(tomtomdata);
  let timeData = await TimeApi(locationModel);
  let timeModel = TimeParser(timeData);
  console.log(timeModel);
  console.log(
    `current date: ${timeModel.year}-${timeModel.month}-${timeModel.day}`
  );
}

timeTest();
