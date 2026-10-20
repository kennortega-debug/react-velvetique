import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/organisms/Header'; 
import { Footer } from '../../components/organisms/Footer'; 
import './ProductoPage.css';

export const DetallePage = ({ todosLosProductos = [], agregarAlCarrito }) => {
  const { id } = useParams();
  const [cantidad, setCantidad]= useState(1);

  const productoActual = todosLosProductos.find(
    (p) => String(p.id) === String(id)
  );

  if (!productoActual) {
    return (
      <div className="home-layout">
        <Header />
        <div className="producto-no-encontrado" style={{ padding: '80px', textAlign: 'center' }}>
          <h2>Producto no encontrado</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const listaMiniaturas = productoActual.imagenes || [productoActual.image];
  const [imagenActiva, setImagenActiva] = useState(productoActual.image);
  
  return (
    <div className="home-layout">
      <Header />

      <div className="productoDetalle-container productoDetalle-grid" >
        
        <div className="productoDetalle-imagen-section">
          <div className="productoDetalle-imagen-principal">
            <img src={imagenActiva} alt={productoActual.titulo} />
          </div>

          <div className="productoDetalle-miniaturas">
            {listaMiniaturas.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Miniatura ${index + 1}`}
                className={`miniatura-item ${imagenActiva === imgSrc ? 'activa' : ''}`}
                onClick={() => setImagenActiva(imgSrc)}
              />
            ))}
          </div>
        </div>

        <div className="productoDetalle-info">
          <h1>{productoActual.titulo}</h1>
          <span className="precio">${productoActual.precio}</span>
          <p>{productoActual.descripcion}</p>

          <div className="cantidad-container">
            <label>Cantidad</label>
            <select 
                className='select-cantidad'
                value={cantidad}
                onChange= {(e)=> setCantidad(Number(e.target.value))}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button 
            className="btn-añadir-carrito"
            onClick={() => agregarAlCarrito(productoActual, cantidad)}
            >Añadir al carrito</button>
        </div>

      </div>


      <Footer />
    </div>
  );
};