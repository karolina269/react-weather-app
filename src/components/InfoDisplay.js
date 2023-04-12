import { useState } from "react";

const InfoDisplay = (props) => {
  const [averageValue, setAverageValue] = useState(null);

  const updateAverageValue = (e) => {
    const parameter = e.target.value;
    if (parameter === "choose") {
      setAverageValue(null);
      return;
    }
    setAverageValue(Math.round(props.average[parameter] * 10) / 10);
  };

  return (
    <div className="info">
      <p>
        Średnia temperatura: <span className="avg">{Math.round(props.average.temperature * 10) / 10} &#186;C</span>
      </p>
      <div className="legend">
        <div className="legendItem">
          <div className="legendSquare above"></div>Temperatura powyżej średniej
        </div>
        <div className="legendItem">
          <div className="legendSquare below"></div>Temperatura poniżej średniej
        </div>
      </div>
      <p>
        Pokaż średnią wartość parametru
        <select defaultValue="choose" onChange={(e) => updateAverageValue(e)}>
          <option value="choose"></option>
          <option value="pressure">ciśnienie (hPa)</option>
          <option value="rainfall">suma opadu (mm)</option>
          <option value="humidity">wilgotność względna (%)</option>
          <option value="windspeed">prędkość wiatru (km/h)</option>
        </select>
        : <span className="avg">{averageValue}</span>
      </p>
      <p>Wybierz stację, aby wyświetlić szczegółowe dane</p>
    </div>
  );
};

export default InfoDisplay;
