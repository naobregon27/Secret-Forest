import React from "react";
import "./view3.css";

import diez from "../../imagenes/view3/fondos/10Races-Title.png";
import discoveri from "../../imagenes/view3/fondos/DiscoverRace (1).png"
import ImageCarousel from "./carrusel";
import become from "../../imagenes/view3/fondos/YouBecome.png"


function ViewTres() {
    const images = [
        '/view3/Ajolote.png',
        '/view3/Aquan_Mesa de trabajo 1.png',
        '/view3/Elfa_Mesa de trabajo 1.png',
        '/view3/Embear_Mesa de trabajo 1.png',
        '/view3/Goblina_Mesa de trabajo 1.png',
        '/view3/Perro_Mesa de trabajo 1.png',

        // ... más imágenes
    ];


    return (
        <div class="sol d-flex justify-content-center align-items-center">
        <img src={diez} class="img-fluid diez" />
        <img src={discoveri} class="img-fluid discoveri" />
            <div className="carousel-container">
                <ImageCarousel images={images} />
                <ImageCarousel images={become} />
            </div>
        </div>
    )
}

export default ViewTres;