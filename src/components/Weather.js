import Searchbar from "./Searchbar";
import InfoDisplay from "./InfoDisplay";
import Station from "./Station";
import axios from "axios";
import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const [filteredWeatherData, setFilteredWeatherData] = useState([]);

  const [average, setAverage] = useState({});

  const calcAverage = () => {
    let temperatureAcc = 0;
    let pressureAcc = 0;
    let pressureNull = 0;
    let rainfallAcc = 0;
    let humidityAcc = 0;
    let windspeedAcc = 0;

    for (const weatherItem of weatherData) {
      temperatureAcc += parseInt(weatherItem.temperatura);
      if (weatherItem.cisnienie != null) {
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

  const search = (value) => {
    setFilteredWeatherData(weatherData.filter((weatherItem) => weatherItem.stacja.toUpperCase().includes(value.toUpperCase())));
  };

  const getData = () => {
    axios
      .get("https://danepubliczne.imgw.pl/api/data/synop")
      .then((response) => {
        setWeatherData(response.data);
        setFilteredWeatherData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setAverage(calcAverage());
  }, [weatherData]);

  return (
    <section className="content">
      <div className="caption">
        <Searchbar search={search} />
        <InfoDisplay average={average} />
      </div>
      <div className="stationsList">
        {filteredWeatherData.map((station) => {
          return <Station station={station} key={station.id_stacji} averageTemp={average.temperature} />;
        })}
      </div>
    </section>
  );
};

export default Weather;
