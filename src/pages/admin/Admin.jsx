import { useState } from "react";
import { useNavigate } from "react-router";

import AdminTemplate from "../components/templates/AdminTemplate";

import { useAdminData } from "../hooks/useAdminData";
import { useProductManagement } from "../hooks/useProductManagement";
import { useUserManagement } from "../hooks/useUserManagement";

const Admin = () => {
  const navigate = useNavigate();

  const [vista, setVista] = useState("inicio");

  const { productos, usuarios, persistirProductos, persistirUsuarios } =
    useAdminData();

  const productProps = useProductManagement(productos, persistirProductos);

  const userProps = useUserManagement(usuarios, persistirUsuarios);

  let sesion = null;

  try {
    sesion = JSON.parse(sessionStorage.getItem("velvetique_admin"));
  } catch {
    sesion = null;
  }

  const cerrarSesion = () => {
    sessionStorage.removeItem("velvetique_admin");
    navigate("/login");
  };

  const titulo = vista.charAt(0).toUpperCase() + vista.slice(1);

  return (
    <AdminTemplate
      vista={vista}
      setVista={setVista}
      cerrarSesion={cerrarSesion}
      titulo={titulo}
      sesion={sesion}
      productos={productos}
      usuarios={usuarios}
      productProps={productProps}
      userProps={userProps}
    />
  );
};

export default Admin;
