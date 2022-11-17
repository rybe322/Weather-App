export const LocationInformationElement = (locationModel) => {
  const div = document.createElement("div");
  div.id = "location-info-container";

  const municipalityDiv = document.createElement("div");
  const countryDiv = document.createElement("div");
  municipalityDiv.textContent = locationModel.municipality;
  countryDiv.textContent = locationModel.country;

  div.appendChild(municipalityDiv);
  div.appendChild(countryDiv);
  return div;
};
