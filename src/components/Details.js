const Details = (props) => {
  return (
    <div className="modal">
      <p>
        <span className="detailKey">Data pomiaru: </span>
        {props.details.data_pomiaru} godz. {props.details.godzina_pomiaru}
      </p>
      <p>
        <span className="detailKey">Suma opadu: </span>
        {props.details.suma_opadu} mm
      </p>
      <p>
        <span className="detailKey">Wilgotność względna: </span>
        {props.details.wilgotnosc_wzgledna} %
      </p>
      <p>
        <span className="detailKey">Prędkość wiatru: </span>
        {props.details.predkosc_wiatru} km/h
      </p>
      <p>
        <span className="detailKey">Kierunek wiatru: </span>
        {props.details.kierunek_wiatru} &#186;
      </p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

export default Details;
