import React from "react";
import gato from "/view1/Gato_Mesa de trabajo 1.png"
import otro from "/view1/Ajolote_1.png"
import fores from "/view1/LogoSFInicio.png"
import titulo from "/view1/Titulo.png"
import inicio from "/view1/FadeInicio (1).png"
import hep from "/view1/HelpFormulario.png"
 
import 'bootstrap/dist/css/bootstrap.min.css';

import "./view2.css"


function ViewDos() {
  const handleButtonClick = (buttonName) => {
    // Lógica para manejar el clic en los botones
    console.log(`Botón "${buttonName}" presionado`);
  };



  return (
    <div class="fondo d-flex justify-content-center align-items-center">
    

      <div class="inicio" >

        
        <img src={gato} class="img-fluid gato d-none d-md-block" />
        <img src={otro} alt="" className="img-fluid otro d-none d-md-block" />
        <img src={fores} alt="" class="img-fluid fores" />
        <img src={titulo} alt="" class="img-fluid titulo" />
        <img src={hep} alt="" class="img-fluid hep"/>


       <div className="input">
        <h4>Email:</h4>
          <div>
          <input type="text" placeholder="Ingresa algo..." className="barra" />
          </div>

            <button onClick={() => handleButtonClick('Botón 1')} class="boton1"> Sing up </button>
         
        </div>
         <img src={inicio} alt="" class="img-fluid fran" />
      </div>
     
    </div>
  )
}

export default ViewDos;