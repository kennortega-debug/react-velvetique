import React, { useState } from "react";

const ProductGallery = ({ imagenes, imagenPrincipal, titulo }) => {
  const listaImagenes = imagenes?.length ? imagenes : [imagenPrincipal];

  const [imagenActiva, setImagenActiva] = useState(imagenPrincipal);

  return (
    <div className="productoDetalle-imagen-section">
      <div className="productoDetalle-imagen-principal">
        <img src={imagenActiva} alt={titulo} />
      </div>

      <div className="productoDetalle-miniaturas">
        {listaImagenes.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${titulo} - imagen ${index + 1}`}
            className={`miniatura-item ${
              imagenActiva === imgSrc ? "activa" : ""
            }`}
            onClick={() => setImagenActiva(imgSrc)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
