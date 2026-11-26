import { useState } from "react";
import { validarProducto } from "../services/validarProducto";

const productoVacio = {
  id: "",
  code: "",
  name: "",
  description: "",
  price: "",
  stock: "",
  criticalStock: "",
  category: "",
  image: "",
};

export const useProductManagement = (productos, persistirProductos) => {
  const [formProducto, setFormProducto] = useState(null);
  const [errorProducto, setErrorProducto] = useState("");

  const nuevoProducto = () => {
    setFormProducto({ ...productoVacio });
    setErrorProducto("");
  };

  const editarProducto = (producto) => {
    setFormProducto({ ...productoVacio, ...producto });
    setErrorProducto("");
  };

  const cancelarProducto = () => {
    setFormProducto(null);
    setErrorProducto("");
  };

  const cambiarProducto = (event) => {
    const { name, value } = event.target;

    setFormProducto((actual) => ({
      ...actual,
      [name]: value,
    }));
  };

  const guardarProducto = (event) => {
    event.preventDefault();

    const mensaje = validarProducto(formProducto);

    if (mensaje) {
      setErrorProducto(mensaje);
      return;
    }

    const id = formProducto.id || `p-${Date.now()}`;

    const existente = productos.find((producto) => producto.id === id);

    const producto = {
      id,
      code: formProducto.code.trim(),
      name: formProducto.name.trim(),
      description: formProducto.description.trim(),
      price: Number(formProducto.price),
      stock: Number(formProducto.stock),
      criticalStock:
        formProducto.criticalStock === ""
          ? 0
          : Number(formProducto.criticalStock),
      category: formProducto.category,
      image: formProducto.image.trim(),
      visible: existente ? existente.visible : true,
    };

    const nuevos = existente
      ? productos.map((item) => (item.id === id ? producto : item))
      : [...productos, producto];

    persistirProductos(nuevos);
    cancelarProducto();
  };

  const eliminarProducto = (id) => {
    if (!window.confirm("¿Eliminar este producto?")) return;

    persistirProductos(productos.filter((producto) => producto.id !== id));
  };

  return {
    formProducto,
    errorProducto,
    nuevoProducto,
    editarProducto,
    cancelarProducto,
    cambiarProducto,
    guardarProducto,
    eliminarProducto,
  };
};
