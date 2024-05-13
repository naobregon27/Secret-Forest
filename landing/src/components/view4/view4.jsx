import React from "react";
import letras from "/view4/MixedSkill.png"
import biome from "/view4/Biomes-Text.png"
import fantasy from "/view4/10BiomesTitle (1).png"
import will from "/view4/ItWillHaveEverything (1).png"
import cincuenta from "/view4/150Squarre (1).png"


import "./view4.css";


function ViewCuatro() {
    return (
        <div>
            <div className="parte1">
                <img src={biome} alt="" className="biome" />
                <img src={fantasy} alt="" className="fantasy" />

            </div>
            <div className="parte2">
                <img src={will} alt="" className="will" />

            </div>

            <div className="parte3">
                <img src={letras} alt="" className="letras" />
            </div>
            <div className="parte4">
                <img src={cincuenta} alt="" className="cincuenta" />
            </div>

        </div>
    )
}

export default ViewCuatro;