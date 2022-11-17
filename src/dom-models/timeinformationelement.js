export const TimeInformationElement = (timeModel) => {
  const timeDiv = document.createElement("div");
  timeDiv.id = "time-info-container";

  const dateDiv = document.createElement("div");
  dateDiv.textContent = `${timeModel.hour}:${timeModel.min}:${timeModel.sec}`;

  timeDiv.appendChild(dateDiv);
  return timeDiv;
};
