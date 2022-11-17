export const TimeApi = async (locationModel) => {
  const apikey = "4ARFZ53KTQ4R";
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apikey}&format=json&by=position&lat=${locationModel.position.lat}&lng=${locationModel.position.lon}`;
  let response = await fetch(url, { mode: "cors" });
  let json = await response.json();
  return json.formatted;
};
export const TimeParser = (timeData) => {
  let year = "";
  let month = "";
  let day = "";

  let hour = "";
  let min = "";
  let sec = "";
  if (timeData) {
    const dateSplit = timeData.split(" ")[0].split("-");
    year = dateSplit[0];
    month = dateSplit[1];
    day = dateSplit[2];

    const timeSplit = timeData.split(" ")[1].split(":");
    hour = timeSplit[0];
    min = timeSplit[1];
    sec = timeSplit[2];
  }
  return { year, month, day, hour, min, sec };
};
