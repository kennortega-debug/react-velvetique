
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';

import fondoProductos from '../../assets/images/productos.jpg';
import './Carrito.css';

export const CarritoPage = ({ carrito, setCarrito }) => {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(
      (item) => item.id !== id
    );

    setCarrito(nuevoCarrito);
    localStorage.setItem(
      'velvetique_carrito',
      JSON.stringify(nuevoCarrito)
    );
  };

  // Calcular total de la compra
  const totalPagar = carrito.reduce(
    (total, item) =>
      total + Number(item.precio) * Number(item.cantidad),
    0
  );

  // Finalizar compra
  const handleFinalizarCompra = () => {
    if (carrito.length === 0) return;

    setCarrito([]);
    localStorage.removeItem('velvetique_carrito');

    setCompraFinalizada(true);
  };

  return (
    <div className="home-layout">

      <Header />

      <main
        className="carrito-container"
        style={{ backgroundImage: `url(${fondoProductos})` }}
      >
        <div className="carrito-content-box">

          <h2>Tu Carrito de Compras</h2>

          {compraFinalizada ? (

            <div className="carrito-vacio">
              <h3>¡Muchas gracias por tu compra!</h3>
              <p>Tu pedido ha sido procesado con éxito.</p>

              <Link
                to="/shop"
                className="btn-seguir-comprando"
                onClick={() => setCompraFinalizada(false)}
              >
                Volver a la tienda
              </Link>
            </div>

          ) : carrito.length === 0 ? (

            <div className="carrito-vacio">
              <p>Tu carrito está vacío.</p>

              <Link to="/shop" className="btn-seguir-comprando">
                Ir a la tienda
              </Link>
            </div>

          ) : (

            <>
              <table className="carrito-table">

                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio Un.</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                  </tr>
                </thead>

                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>

                      <td className="producto-info-td">
                        <img
                          src={item.image}
                          alt={item.titulo}
                          className="carrito-img-min"
                        />
                        <span>{item.titulo}</span>
                      </td>

                      <td>${Number(item.precio).toLocaleString('es-CL')}</td>

                      <td>{item.cantidad}</td>

                      <td>
                        ${(Number(item.precio) * Number(item.cantidad))
                          .toLocaleString('es-CL')}
                      </td>

                      <td>
                        <button
                          type="button"
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

                <h3>
                  Total a Pagar: ${totalPagar.toLocaleString('es-CL')}
                </h3>

                <div className="carrito-acciones">

                  <button
                    type="button"
                    className="btn-finalizar"
                    onClick={handleFinalizarCompra}
                  >
                    Finalizar Compra
                  </button>

                  <Link to="/shop" className="btn-seguir">
                    Seguir comprando
                  </Link>

                </div>
              </div>
            </>

          )}

        </div>
      </main>

      <Footer />

    </div>
  );
};
