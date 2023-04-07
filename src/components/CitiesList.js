const CitiesList = (props) => {
  return (
    <div className="citiesList">
      {props.filteredWeatherData.map((city) => {
        const cisnienie = city.cisnienie ? "Ciśnienie: " + city.cisnienie + " hPa" : "";
        const aboveOrBelow = city.temperatura >= props.averageTemp ? "above" : "below";
        return (
          <div className="city" key={city.id_stacji} onClick={() => console.log("rozwiń pełne dane o", city)}>
            <h2>{city.stacja}</h2>
            <p className={aboveOrBelow}>Temperatura: {city.temperatura} &#186;C</p>
            <p>{cisnienie}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CitiesList;
