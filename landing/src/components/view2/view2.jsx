import React from "react";
import gato from "../../imagenes/view1/Gato_Mesa de trabajo 1.png"
import franja from "../../imagenes/view1/FranjasInicioLanding.png"
import otro from "../../imagenes/view1/Ajolote_1.png"
import fores from "../../imagenes/view1/LogoSFInicio.png"

import "./view2.css"


function ViewDos() {
  const handleButtonClick = (buttonName) => {
    // Lógica para manejar el clic en los botones
    console.log(`Botón "${buttonName}" presionado`);
  };



  return (
    <div className="contenedor">

      <div className="inicio">

        {/* <img src={franja} alt="" className="franja" /> */}
        <img src={gato} alt="" className="gato" />
        <img src={otro} alt="" className="otro" />
        <img src={fores} alt="" className="fores" />

        <div className="input">
          <div>
          <input type="text" placeholder="Ingresa algo..." className="barra" />
          </div>

          <div class="contenedor-botones">
            <button onClick={() => handleButtonClick('Botón 1')} className="boton1"> Sing up </button>
            <button onClick={() => handleButtonClick('Botón 2')} className="boton2">Sing up</button>
          </div>
        </div>
      </div>
      <div className="inicio2">

      </div>

    </div>
  )
}

export default ViewDos;