import { useState } from 'react'; 
import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';
import { Link } from 'react-router-dom';
import fondoProductos from '../../assets/images/productos.jpg';
import './Carrito.css';

export const CarritoPage = ({ carrito, setCarrito }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const handleFinalizarCompra = () => {
    if (carrito.length === 0) return;

    setCarrito([]);
    
    localStorage.removeItem('velvetique_carrito');

    alert('¡Gracias por su compra! Su pedido ha sido procesado con éxito.');
    
    setCompraFinalizada(true);
  };

  const totalPagar = carrito.reduce((acc, item) => acc + (Number(item.precio) * item.cantidad), 0);

  return (
    <div className="home-layout">
      <Header />

      <div className="carrito-container" style={{ backgroundImage: `url(${fondoProductos})` }}>
        <div className="carrito-content-box">
          <h2>Tu Carrito de Compras</h2>

          {compraFinalizada ? (
            <div className="carrito-vacio">
              <h3> ¡Muchas gracias por tu compra!</h3>
              <p>Te hemos enviado el detalle de tu pedido.</p>
              <Link to="/shop" className="btn-seguir-comprando" onClick={() => setCompraFinalizada(false)}>
                Volver a la tienda
              </Link>
            </div>
          ) : carrito.length === 0 ? (
            <div className="carrito-vacio">
              <p>Tu carrito está vacío.</p>
              <Link to="/shop" className="btn-seguir-comprando">Ir a la tienda</Link>
            </div>
          ) : (
            <>
              <table className="carrito-table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td className="producto-info-td">
                        <img src={item.image} alt={item.titulo} className="carrito-img-min" />
                        <span>{item.titulo}</span>
                      </td>
                      <td>${item.precio}</td>
                      <td>{item.cantidad}</td>
                      <td>${item.precio * item.cantidad}</td>
                      <td>
                        <button 
                          className="btn-eliminar-item" 
                          onClick={() => eliminarProducto(item.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="carrito-resumen">
                <h3>Total por pagar: ${totalPagar}</h3>
                <div className="carrito-acciones">
                  <button className="btn-finalizar" onClick={handleFinalizarCompra}>
                    Finalizar Compra
                  </button>
                  <Link to="/shop" className="btn-seguir">Seguir comprando</Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};