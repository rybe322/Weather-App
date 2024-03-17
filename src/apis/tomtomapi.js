export const TomTomAPI = (searchQuery) => {
  const API_KEY = "fcHahkaWpps5D8BvVWNrkXwb0ASMm9BT";
  const BASE_URL = "https://api.tomtom.com/search/2/search/";

  const makeUrl = () => {
    let URL = BASE_URL;
    URL += searchQuery.replaceAll(" ", "-");
    URL += ".json";
    URL += `?key=${API_KEY}`;
    return URL;
  };

  async function getData() {
    try {
      const response = await fetch(makeUrl(), { mode: "cors" });
      const json = await response.json();
      return json.results[0];
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  async function getPositionData() {
    try {
      const response = await fetch(makeUrl(), { mode: "cors" });
      const json = await response.json();
      return json.results[0].position;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  async function getJsonData() {
    try {
      const response = await fetch(makeUrl(), { mode: "cors" });
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  return { getData, getPositionData, getJsonData };
};

export const TomTomJsonParser = (jsonObject) => {
  const municipality = jsonObject.address.municipality;
  const country = jsonObject.address.countrySubdivisionName;
  const position = jsonObject.position;
  return { municipality, country, position };
};

/*
TO USE:

  TomTomAPI(searchQuery)
    .getJsonData()
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
