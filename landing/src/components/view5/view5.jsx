import React from "react";
import letra from "/View5/150Hours.png";
import ocho from "/View5/8Elements.png";
import darknes from "/View5/Darkness.png";
import fire from "/View5/Fire.png";
import earth from "/View5/earth.png";
import ice from "/View5/ice.png";
import light from "/View5/Light.png"
import water from "/View5/Water.png";
import posion from "/View5/poison.png";
import plant from "/View5/plant.png";
import enig from "/View5/textos/EngagingGuest.png";
import help from "/View5/textos/Form-Text.png";
import follow from "/View5/textos/FollowUs.png"
import discord from "/View5/textos/BtnDiscord.png"
import lsp from "/View5/textos/FlyingMounts-Title.png"
import We from "/View5/textos/WeWantToGive.png"

import "./view5.css"


function ViewCinco() {

    const handleButtonClick = (buttonName) => {
        // Lógica para manejar el clic en los botones
        console.log(`Botón "${buttonName}" presionado`);
    };

    return (
        <div>
            <div className="placa">
                <img src={letra} alt="" className="letra" />
            </div>
            <div className="Cinco2">
                <img src={ocho} alt="" className="ocho" />
                <div className="iconos">
                    <img src={darknes} alt="" className="dark" />
                    <img src={fire} alt="" className="fire" />
                    <img src={earth} alt="" className="earth"/>
                    <img src={ice} alt="" className="ice" />
                    <img src={light} alt="" className="light"/>
                    <img src={water} alt="" className="weter"/>
                    <img src={posion} alt="" className="posion" />
                    <img src={plant} alt="" className="plant" />

                </div>
                <img src={We} alt="" className="we" />

                <img src={lsp} alt="" className="fly" />
                <img src={enig} alt="" className="enig" />
                <img src={help} alt="" className="help" />

                <div className="input2">
                    <h4 className="email">Email</h4>
                    <div>
                        <input type="text" placeholder="Ingresa algo..." className="barra1" />
                    </div>

                    <div class="contenedor-botones">
                        <button onClick={() => handleButtonClick('Botón 1')} className="botones"> Sing up </button>
                       
                    </div>
                </div>

                <img src={follow} alt="" className="follow" />
                <img src={discord} alt="" className="discord" />



            </div>
        </div>
    )
}

export default ViewCinco;



