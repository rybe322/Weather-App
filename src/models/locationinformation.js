export const LocationInformation = (CITY, STATE, COUNTRY, ZIPCODE) => {
  let city = CITY !== undefined ? CITY.replaceAll(" ", "-") : undefined;
  let state = STATE !== undefined ? STATE.replaceAll(" ", "-") : undefined;
  let country =
    COUNTRY !== undefined ? COUNTRY.replaceAll(" ", "-") : undefined;
  let zipcode = ZIPCODE !== undefined ? ZIPCODE : undefined;

  const setCity = (newCity) => (city = newCity);
  const setState = (newState) => (state = newState);
  const setCountry = (newCountry) => (country = newCountry);
  const setZipcode = (newZipcode) => (zipcode = newZipcode);

  const getCity = () => city;
  const getState = () => state;
  const getCountry = () => country;
  const getZipcode = () => zipcode;

  return {
    setCity,
    setCountry,
    setState,
    setZipcode,
    getCity,
    getCountry,
    getState,
    getZipcode,
  };
};
