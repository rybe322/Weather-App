export const LocationModel = (locationJson) => {
  let lat = locationJson ? locationJson.lat : "";
  let lon = locationJson ? locationJson.lon : "";
  let municipality = locationJson ? locationJson.municipality : "";
  let country = locationJson ? locationJson.country : "";

  //console.log(latitude, longitude, cityName, country, state);
  return { lat, lon, municipality, country };
};
export const JsonToLocationObject = (jsonData) => {
  console.log("JSONtOlocatin object jsondata: ", jsonData);
  let municipality = jsonData.address.municipality;
  let country = jsonData.address.country;
  let lat = jsonData.position.lat;
  let lon = jsonData.position.lon;

  return { municipality, country, lat, lon };
};
