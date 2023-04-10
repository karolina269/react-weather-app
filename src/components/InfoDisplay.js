const InfoDisplay = (props) => {
  return (
    <div className="info">
      <p>Średnia temperatura: {Math.round(props.averageTemp * 10) / 10} &#186;C</p>
      <div className="legend">
        <div className="legendItem">
          <div className="legendSquare above"></div>Temperatura powyżej średniej
        </div>
        <div className="legendItem">
          <div className="legendSquare below"></div>Temperatura poniżej średniej
        </div>
      </div>
      <p>Wybierz stację, aby wyświetlić szczegółowe dane</p>
    </div>
  );
};

export default InfoDisplay;
