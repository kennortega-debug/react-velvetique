import { useState, useEffect, useMemo } from "react";

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

import {
  obtenerProductosAdministrados,
  guardarProductosAdministrados,
} from "./services/adminStorage";
import { mockCategorias } from "./mocks/categorias";
import { mockProductos } from "./mocks/mockProductos";

function App() {
  const [productosAdmin, setProductosAdmin] = useState(() =>
    obtenerProductosAdministrados(),
  );

  const guardarCatalogo = (productos) => {
    setProductosAdmin(productos);
    guardarProductosAdministrados(productos);
  };

  const productosVisibles = useMemo(
    () =>
      productosAdmin
        .filter((producto) => producto.visible !== false)
        .map((producto) => ({
          id: producto.id,
          category: String(producto.category ?? "").toUpperCase(),
          titulo: producto.name,
          precio: String(producto.price),
          image: producto.image,
          imagenes: producto.images?.length
            ? producto.images
            : producto.image
              ? [producto.image]
              : [],
          descripcion: producto.description,
          marca: producto.brand || "VELVETIQUE",
        })),
    [productosAdmin],
  );

  const productosInicio = useMemo(
    () =>
      mockProductos.flatMap((destacado) => {
        const producto = productosAdmin.find(
          (item) => String(item.id) === String(destacado.id),
        );
        if (!producto || producto.visible === false) return [];
        return [
          {
            ...destacado,
            titulo: producto.name,
            precio: String(producto.price),
            image: producto.image || destacado.image,
            marca: producto.brand || destacado.marca,
          },
        ];
      }),
    [productosAdmin],
  );

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
            productos={productosInicio}
            categorias={mockCategorias}
            todosLosProductos={productosVisibles}
          />
        }
      />
      <Route
        path="/shop"
        element={<ShopPage todosLosProductos={productosVisibles} />}
      />
      <Route
        path= "/producto/:id"
        element = {<DetallePage 
          todosLosProductos={productosVisibles}
          agregarAlCarrito={agregarAlCarrito}/>}
      />
      <Route path ="/carrito" element= {<CarritoPage carrito={carrito} setCarrito={setCarrito}/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/admin"
        element={
          <Admin
            productosDelCatalogo={productosAdmin}
            onProductosChange={guardarCatalogo}
          />
        }
      />
    </Routes>
  );
}

export default App;
