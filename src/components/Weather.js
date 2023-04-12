import Searchbar from "./Searchbar";
import InfoDisplay from "./InfoDisplay";
import Station from "./Station";
import axios from "axios";
import { useState, useEffect } from "react";
import { calcAverage } from "./helpers/WeatherHelpers.js";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const [filteredWeatherData, setFilteredWeatherData] = useState([]);

  const [average, setAverage] = useState({});

  const searchStation = (value) => {
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
    setAverage(calcAverage(weatherData));
  }, [weatherData]);

  return (
    <section className="content">
      <div className="caption">
        <Searchbar searchStation={searchStation} />
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
