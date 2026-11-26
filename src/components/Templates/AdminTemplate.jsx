import AdminSidebar from "../molecules/";
import AdminHeader from "../molecules/AdminHeader";

import Dashboard from "../organisms/Dashboard";
import ProductManagement from "../organisms/ProductManagement";
import UserManagement from "../organisms/UserManagement";

const AdminTemplate = ({
  vista,
  setVista,
  cerrarSesion,
  titulo,
  sesion,
  productos,
  usuarios,
  productProps,
  userProps,
}) => {
  return (
    <div className="admin-shell">
      <AdminSidebar
        vista={vista}
        setVista={setVista}
        cerrarSesion={cerrarSesion}
      />

      <main className="admin-main">
        <AdminHeader titulo={titulo} sesion={sesion} />

        {vista === "inicio" && (
          <Dashboard productos={productos} usuarios={usuarios} />
        )}

        {vista === "productos" && (
          <ProductManagement productos={productos} {...productProps} />
        )}

        {vista === "usuarios" && (
          <UserManagement usuarios={usuarios} {...userProps} />
        )}
      </main>
    </div>
  );
};

export default AdminTemplate;
