import React from "react";
import letra from "../../imagenes/View5/150Hours.png";
import ocho from "../../imagenes/View5/8Elements.png";
import darknes from "../../imagenes/View5/Darkness.png";
import fire from "../../imagenes/View5/Fire.png";
import earth from "../../imagenes/View5/earth.png";
import ice from "../../imagenes/View5/ice.png";
import light from "../../imagenes/View5/Light.png"
import water from "../../imagenes/View5/Water.png";
import posion from "../../imagenes/View5/poison.png";
import plant from "../../imagenes/View5/plant.png";
import enig from "../../imagenes/View5/textos/EngagingGuest.png";
import help from "../../imagenes/View5/textos/Form-Text.png";
import follow from "../../imagenes/View5/textos/FollowUs.png"
import discord from "../../imagenes/View5/textos/BtnDiscord.png"
import lsp from "../../imagenes/View5/textos/FlyingMounts-Title.png"

import "./view5.css"


function ViewCinco() {

    const handleButtonClick = (buttonName) => {
        // Lógica para manejar el clic en los botones
        console.log(`Botón "${buttonName}" presionado`);
    };

    return (
        <dir>
            <div className="Cinco">
                <img src={letra} alt="" className="letra" />
            </div>
            <div className="Cinco2">
                <img src={ocho} alt="" className="ocho" />
                <div className="iconos">
                    <img src={darknes} alt="" />
                    <img src={fire} alt="" />
                    <img src={earth} alt="" />
                    <img src={ice} alt="" />
                    <img src={light} alt="" />
                    <img src={water} alt="" />
                    <img src={posion} alt="" />
                    <img src={plant} alt="" />

                </div>
                <img src={lsp} alt="" className="fly" />
                <img src={enig} alt="" className="enig" />
                <img src={help} alt="" className="help" />

                <div className="input2">
                    <div>
                        <input type="text" placeholder="Ingresa algo..." className="barra" />
                    </div>

                    <div class="contenedor-botones">
                        <button onClick={() => handleButtonClick('Botón 1')} className="boton1"> Sing up </button>
                        <button onClick={() => handleButtonClick('Botón 2')} className="boton2">Sing up</button>
                    </div>
                </div>

                <img src={follow} alt="" className="follow" />
                <img src={discord} alt="" className="discord" />



            </div>
        </dir>
    )
}

export default ViewCinco;



