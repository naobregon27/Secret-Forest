import React from "react";
import "./view3.css";

import diez from "/view3/fondos/10Races-Title.png";
import discoveri from "/view3/fondos/DiscoverRace (1).png"
import ImageCarousel from "./carrusel";
import become from "/view3/fondos/YouBecome.png"


function ViewTres() {
    const images = [
        '/view/Ajolote.png',
        '/view/Aquan_Mesa de trabajo 1.png',
        '/view/Elfa_Mesa de trabajo 1.png',
        '/view/Embear_Mesa de trabajo 1.png',
        '/view/Goblina_Mesa de trabajo 1.png',
        '/view/Perro_Mesa de trabajo 1.png',
        "/view/Fairan_Mesa de trabajo 1 (1).png",
        '/view/Foxy_Mesa de trabajo 1 (1).png',
        '/view/Gato_Mesa de trabajo 1 (1).png',
        '/view/Troll_Mesa de trabajo 1 (1).png'   
    ];


    return (
        <div class="sol d-flex justify-content-center align-items-center">
        <img src={diez} class="img-fluid diez" />
        <img src={discoveri} class="img-fluid discoveri" />
        <img src={become} class="img-fluid become" />
            <div className="carousel-container">
                <ImageCarousel images={images} />  
            </div>
        </div>
    )
}

export default ViewTres;