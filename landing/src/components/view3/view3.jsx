import React from "react";
import "./view3.css";
import ImageCarousel from "./carrusel";

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
        <div className="vista">
            <div className="carousel-container">
                <ImageCarousel images={images} />
            </div>
        </div>
    )
}

export default ViewTres;