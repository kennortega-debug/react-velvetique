import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/organisms/Header";
import { Footer } from "../../components/organisms/Footer";
import ProductDetail from "../../components/organisms/ProductDetail/ProductDetail";

import "./ProductoPage.css";

export const DetallePage = ({ todosLosProductos = [], agregarAlCarrito }) => {
  const { id } = useParams();

  const productoActual = todosLosProductos.find(
    (producto) => String(producto.id) === String(id),
  );

  return (
    <div className="home-layout">
      <Header />

      <main>
        {productoActual ? (
          <ProductDetail
            producto={productoActual}
            agregarAlCarrito={agregarAlCarrito}
          />
        ) : (
          <div
            className="producto-no-encontrado"
            style={{ padding: "80px", textAlign: "center" }}
          >
            <h2>Producto no encontrado</h2>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
