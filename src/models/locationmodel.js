export const LocationModel = (locationJson) => {
  console.log("Hello from LocationModel with json: ", locationJson);
  let latitude = locationJson ? locationJson.lat : "";
  let longitude = locationJson ? locationJson.lon : "";
  let cityName = locationJson ? locationJson.name : "";
  let country = locationJson ? locationJson.country : "";
  let state = locationJson ? locationJson.state : "";

  //console.log(latitude, longitude, cityName, country, state);
  return { latitude, longitude, cityName, country, state };
};
