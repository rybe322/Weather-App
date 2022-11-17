export const WeatherInformation = (weatherModel) => {
  const InfoPair = (label, value) => {
    const div = document.createElement("div");
    const labelP = document.createElement("p");
    const valueP = document.createElement("p");
    labelP.textContent = label;
    valueP.textContent = value;
    div.appendChild(labelP);
    div.appendChild(valueP);
    return div;
  };
  const div = document.createElement("div");
  div.appendChild(InfoPair("Feels Like", weatherModel.feelsLike));
  div.appendChild(InfoPair("Humidity", weatherModel.humidity));
  div.appendChild(InfoPair("Pressure", weatherModel.pressure));
  div.appendChild(InfoPair("Current Temperature", weatherModel.curTemp));
  div.appendChild(InfoPair("Minimum Temperature", weatherModel.minTemp));
  div.appendChild(InfoPair("Maximum Temperature", weatherModel.maxTemp));
  div.appendChild(InfoPair("Wind Speed", weatherModel.windSpeed));
  div.appendChild(InfoPair("Description", weatherModel.description));
  div.id = "weather-info-container";
  return div;
};
