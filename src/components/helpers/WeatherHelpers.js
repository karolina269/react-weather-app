export const calcAverage = (weatherData) => {
  let temperatureAcc = 0;
  let pressureAcc = 0;
  let pressureNull = 0;
  let rainfallAcc = 0;
  let humidityAcc = 0;
  let windspeedAcc = 0;

  for (const weatherItem of weatherData) {
    temperatureAcc += parseInt(weatherItem.temperatura);
    if (weatherItem.cisnienie !== null) {
      pressureAcc += parseInt(weatherItem.cisnienie);
    } else {
      pressureNull++;
    }
    rainfallAcc += parseInt(weatherItem.suma_opadu);
    humidityAcc += parseInt(weatherItem.wilgotnosc_wzgledna);
    windspeedAcc += parseInt(weatherItem.predkosc_wiatru);
  }

  return {
    temperature: temperatureAcc / weatherData.length,
    pressure: pressureAcc / (weatherData.length - pressureNull),
    rainfall: rainfallAcc / weatherData.length,
    humidity: humidityAcc / weatherData.length,
    windspeed: windspeedAcc / weatherData.length,
  };
};
