import { useState } from "react";

import {
  adminStorage,
  productosIniciales,
  usuariosIniciales,
} from "../services/adminStorage";

export const useAdminData = () => {
  const [productos, setProductos] = useState(() =>
    adminStorage.get("velvetique_productos", productosIniciales),
  );

  const [usuarios, setUsuarios] = useState(() =>
    adminStorage.get("velvetique_usuarios", usuariosIniciales),
  );

  const persistirProductos = (nuevos) => {
    setProductos(nuevos);
    adminStorage.set("velvetique_productos", nuevos);
  };

  const persistirUsuarios = (nuevos) => {
    setUsuarios(nuevos);
    adminStorage.set("velvetique_usuarios", nuevos);
  };

  return {
    productos,
    usuarios,
    persistirProductos,
    persistirUsuarios,
  };
};
