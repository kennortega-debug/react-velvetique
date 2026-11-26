import { Link } from "react-router";
import AdminNavItem from "./AdminNavItem";

const AdminSidebar = ({ vista, setVista, cerrarSesion }) => {
  const opciones = [
    { id: "inicio", label: "Inicio" },
    { id: "productos", label: "Productos" },
    { id: "usuarios", label: "Usuarios" },
  ];

  return (
    <aside className="sidebar">
      <Link className="brand" to="/admin">
        VELVETIQUE <small>ADMIN</small>
      </Link>

      <nav className="admin-nav" aria-label="Menú administrativo">
        {opciones.map((opcion) => (
          <AdminNavItem
            key={opcion.id}
            label={opcion.label}
            active={vista === opcion.id}
            onClick={() => setVista(opcion.id)}
          />
        ))}
      </nav>

      <button type="button" className="logout" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </aside>
  );
};

export default AdminSidebar;
