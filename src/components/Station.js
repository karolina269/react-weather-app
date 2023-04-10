import { useState } from "react";
import { createPortal } from "react-dom";
import Details from "./Details";

const Station = (props) => {
  const [showModal, setShowModal] = useState(false);

  const cisnienie = props.station.cisnienie ? "Ciśnienie: " + props.station.cisnienie + " hPa" : "";
  const aboveOrBelow = props.station.temperatura >= props.averageTemp ? "above" : "below";

  return (
    <>
      <div className="station" key={props.station.id_stacji} onClick={() => setShowModal(true)}>
        <h2>{props.station.stacja}</h2>
        <p className={aboveOrBelow}>Temperatura: {props.station.temperatura} &#186;C</p>
        <p>{cisnienie}</p>
      </div>
      {showModal && createPortal(<Details details={props.station} onClose={() => setShowModal(false)} />, document.body)}
    </>
  );
};

export default Station;
