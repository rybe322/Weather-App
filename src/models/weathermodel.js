export const WeatherModel = (weatherJson) => {
  let feelsLike = weatherJson ? weatherJson.main.feels_like : "";
  let humidity = weatherJson ? weatherJson.main.humidity : "";
  let pressure = weatherJson ? weatherJson.main.pressure : "";
  let curTemp = weatherJson ? weatherJson.main.temp : "";
  let minTemp = weatherJson ? weatherJson.main.temp_min : "";
  let maxTemp = weatherJson ? weatherJson.main.temp_max : "";
  let windSpeed = weatherJson ? weatherJson.wind.speed : "";
  let description = weatherJson ? weatherJson.weather[0].description : "";

  return {
    feelsLike, // this is in kelvin
    humidity,
    pressure,
    curTemp,
    minTemp,
    maxTemp,
    windSpeed,
    description,
  };
};
