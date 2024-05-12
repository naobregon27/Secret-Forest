import React, { useState } from 'react';
import "./carrusel.css"

import flechiz from "../../imagenes/view3/fondos/FlechaRazas (1).png"

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const goToPrevious = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const goToNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div>
      <button onClick={goToPrevious} className='botons'><img src={flechiz} alt="" class="img-fluid flecha" /></button>
      <img src={images[current]} alt={`Imagen ${current + 1}`} className='image' />
      <button onClick={goToNext} className='botons2'
      ><img src={flechiz} alt="" class="img-fluid flecha" /></button>
    </div>
  );
};

export default ImageCarousel;