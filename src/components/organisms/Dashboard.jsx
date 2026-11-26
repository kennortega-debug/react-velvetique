import StatCard from "../atoms/StatCard";

const Dashboard = ({ productos, usuarios }) => {
  const productosCriticos = productos.filter(
    (producto) => Number(producto.stock) <= Number(producto.criticalStock),
  ).length;

  return (
    <section className="admin-view">
      <div className="welcome">
        <p className="eyebrow">Gestión Velvetique</p>

        <h2>Todo bajo control.</h2>

        <p>
          Administra el catálogo, los perfiles y el contenido de tu tienda desde
          un solo lugar.
        </p>
      </div>

      <div className="stats-grid">
        <StatCard title="Productos" value={productos.length} />

        <StatCard title="Usuarios" value={usuarios.length} />

        <StatCard title="Stock crítico" value={productosCriticos} />
      </div>
    </section>
  );
};

export default Dashboard;
