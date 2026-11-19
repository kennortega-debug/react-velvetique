import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import "./global.css";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import {DetallePage} from "./pages/detalleProduct/DetallePage"

import { CarritoPage } from "./pages/Carrito/CarritoPage";
/* Login -Register -Contact */
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";

import { TodosLosProductos } from "./mocks/productos";
import { mockCategorias } from "./mocks/categorias";
import { mockProductos } from "./mocks/mockProductos";


function App() {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('velvetique_carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('velvetique_carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto, cantidadSeleccionada) => {
    setCarrito((prevCarrito) => {
      // Verificamos si el producto ya está en el carrito
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);

      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + Number(cantidadSeleccionada) }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: Number(cantidadSeleccionada) }];
      }
    });
    alert('¡Producto añadido al carrito con éxito!');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            productos={mockProductos}
            categorias={mockCategorias}
            todosLosProductos={TodosLosProductos}
          />
        }
      />
      <Route
        path="/shop"
        element={<ShopPage todosLosProductos={TodosLosProductos} />}
      />
      <Route
        path= "/producto/:id"
        element = {<DetallePage 
          todosLosProductos={TodosLosProductos}
          agregarAlCarrito={agregarAlCarrito}/>}
      />
      <Route path ="/carrito" element= {<CarritoPage carrito={carrito} setCarrito={setCarrito}/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
