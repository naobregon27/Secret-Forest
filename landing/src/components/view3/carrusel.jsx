import React, { useState } from 'react';

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
      <button onClick={goToPrevious}>Anterior</button>
      <img src={images[current]} alt={`Imagen ${current + 1}`} />
      <button onClick={goToNext}>Siguiente</button>
    </div>
  );
};

export default ImageCarousel;