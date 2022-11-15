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
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json.results[0];
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  async function getJsonData() {
    try {
      let response = await fetch(makeUrl(), { mode: "cors" });
      let json = await response.json();
      return json;
    } catch (error) {
      console.log("Error from getLocationData: ", error);
    }
  }

  return { getData, getJsonData };
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
