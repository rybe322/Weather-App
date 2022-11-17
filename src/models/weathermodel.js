export const WeatherModel = (weatherJson, units = "f") => {
  const kelvinToFarenheight = (temp) => {
    return ((temp - 273.15) * 9) / 5 + 32;
  };

  const kelvinToCelcius = (temp) => {};

  console.log("units: ", units);

  let feelsLike = weatherJson ? weatherJson.main.feels_like : "";
  let humidity = weatherJson ? weatherJson.main.humidity : "";
  let pressure = weatherJson ? weatherJson.main.pressure : "";
  let curTemp = weatherJson ? weatherJson.main.temp : "";
  let minTemp = weatherJson ? weatherJson.main.temp_min : "";
  let maxTemp = weatherJson ? weatherJson.main.temp_max : "";
  let windSpeed = weatherJson ? weatherJson.wind.speed : "";
  let main = weatherJson ? weatherJson.weather[0].main : "";
  let description = weatherJson ? weatherJson.weather[0].description : "";

  if (curTemp) {
    console.log("hello from if");
    if (units === "f") {
      feelsLike = kelvinToFarenheight(Number(feelsLike)).toFixed(2);
      curTemp = kelvinToFarenheight(Number(curTemp)).toFixed(2);
      minTemp = kelvinToFarenheight(Number(minTemp)).toFixed(2);
      maxTemp = kelvinToFarenheight(Number(maxTemp)).toFixed(2);
    }
    if (units === "c") {
    }
  }

  return {
    feelsLike, // this is in kelvin
    humidity,
    pressure,
    curTemp,
    minTemp,
    maxTemp,
    windSpeed,
    main,
    description,
    units,
  };
};
