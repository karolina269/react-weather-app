import Searchbar from "./Searchbar";
import InfoDisplay from "./InfoDisplay";
import Station from "./Station";
import axios from "axios";
import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const [filteredWeatherData, setFilteredWeatherData] = useState([]);

  const [averageTemp, setAverageTemp] = useState();

  const calcAverageTemp = () => {
    const allTempAcc = weatherData.reduce((acc, weatherItem) => {
      return acc + parseInt(weatherItem.temperatura);
    }, 0);
    return allTempAcc / weatherData.length;
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
    setAverageTemp(calcAverageTemp());
  }, [weatherData]);

  return (
    <section className="content">
      <div className="caption">
        <Searchbar search={search} />
        <InfoDisplay averageTemp={averageTemp} />
      </div>
      <div className="stationsList">
        {filteredWeatherData.map((station) => {
          return <Station station={station} key={station.id_stacji} averageTemp={averageTemp} />;
        })}
      </div>
    </section>
  );
};

export default Weather;
