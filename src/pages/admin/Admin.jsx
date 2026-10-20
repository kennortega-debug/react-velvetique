import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validarProducto } from "../../services/validarProducto";
import { validarUsuario } from "../../services/validarUsuario";
import "./Admin.scss";
import {
  adminStorage,
  obtenerProductosAdministrados,
  guardarProductosAdministrados,
  usuariosIniciales,
} from "../../services/adminStorage";

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
  brand: "",
};

const usuarioVacio = {
  id: "",
  run: "",
  name: "",
  lastname: "",
  email: "",
  birthdate: "",
  role: "",
  region: "",
  commune: "",
  address: "",
};

const etiquetasCategoria = {
  "SKIN CARE": "Cuidado de la piel",
  "MAKE UP": "Maquillaje",
  "HAIR CARE": "Cuidado capilar",
  "SUN CARE": "Protección solar",
};

const Admin = ({ productosDelCatalogo, onProductosChange }) => {
  const navigate = useNavigate();

  const [vista, setVista] = useState("inicio");
  const [productos, setProductos] = useState(() =>
    productosDelCatalogo ??
      obtenerProductosAdministrados(),
  );
  const [usuarios, setUsuarios] = useState(() =>
    adminStorage.get("velvetique_usuarios", usuariosIniciales),
  );

  const [formProducto, setFormProducto] = useState(null);
  const [errorProducto, setErrorProducto] = useState("");
  const [formUsuario, setFormUsuario] = useState(null);
  const [errorUsuario, setErrorUsuario] = useState("");

  const sesion = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("velvetique_admin"));
    } catch {
      return null;
    }
  })();

  const productosCriticos = productos.filter(
    (producto) => producto.stock <= producto.criticalStock,
  ).length;

  const titulo = vista.charAt(0).toUpperCase() + vista.slice(1);

  // ---------- Sesión ----------
  const cerrarSesion = () => {
    sessionStorage.removeItem("velvetique_admin");
    navigate("/login");
  };

  // ---------- Productos ----------
  const persistirProductos = (nuevos) => {
    setProductos(nuevos);
    if (onProductosChange) {
      onProductosChange(nuevos);
    } else {
      guardarProductosAdministrados(nuevos);
    }
  };

  const nuevoProducto = () => {
    setFormProducto({ ...productoVacio });
    setErrorProducto("");
  };

  const editarProducto = (producto) => {
    setFormProducto({
      ...productoVacio,
      ...producto,
      brand: producto.brand ?? "",
    });
    setErrorProducto("");
  };

  const cancelarProducto = () => {
    setFormProducto(null);
    setErrorProducto("");
  };

  const cambiarProducto = (event) => {
    setFormProducto({
      ...formProducto,
      [event.target.name]: event.target.value,
    });
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
      ...(existente ?? {}),
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
      brand: formProducto.brand.trim(),
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

  const cambiarVisibilidadProducto = (id) => {
    persistirProductos(
      productos.map((producto) =>
        producto.id === id
          ? { ...producto, visible: !producto.visible }
          : producto,
      ),
    );
  };

  // ---------- Usuarios ----------
  const persistirUsuarios = (nuevos) => {
    setUsuarios(nuevos);
    adminStorage.set("velvetique_usuarios", nuevos);
  };

  const nuevoUsuario = () => {
    setFormUsuario({ ...usuarioVacio });
    setErrorUsuario("");
  };

  const editarUsuario = (usuario) => {
    setFormUsuario({ ...usuarioVacio, ...usuario });
    setErrorUsuario("");
  };

  const cancelarUsuario = () => {
    setFormUsuario(null);
    setErrorUsuario("");
  };

  const cambiarUsuario = (event) => {
    setFormUsuario({
      ...formUsuario,
      [event.target.name]: event.target.value,
    });
  };

  const guardarUsuario = (event) => {
    event.preventDefault();

    const mensaje = validarUsuario(formUsuario);
    if (mensaje) {
      setErrorUsuario(mensaje);
      return;
    }

    const id = formUsuario.id || `u-${Date.now()}`;

    const usuario = {
      id,
      run: formUsuario.run.trim().toUpperCase(),
      name: formUsuario.name.trim(),
      lastname: formUsuario.lastname.trim(),
      email: formUsuario.email.trim().toLowerCase(),
      birthdate: formUsuario.birthdate.trim(),
      role: formUsuario.role,
      region: formUsuario.region.trim(),
      commune: formUsuario.commune.trim(),
      address: formUsuario.address.trim(),
    };

    const existe = usuarios.some((item) => item.id === id);
    const nuevos = existe
      ? usuarios.map((item) => (item.id === id ? usuario : item))
      : [...usuarios, usuario];

    persistirUsuarios(nuevos);
    cancelarUsuario();
  };

  const eliminarUsuario = (id) => {
    if (!window.confirm("¿Eliminar este usuario?")) return;
    persistirUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <Link className="brand" to="/admin">
          VELVETIQUE <small>ADMINISTRACIÓN</small>
        </Link>
        <nav className="admin-nav" aria-label="Menú administrativo">
          <button
            type="button"
            className={vista === "inicio" ? "active" : ""}
            onClick={() => setVista("inicio")}
          >
            Inicio
          </button>
          <button
            type="button"
            className={vista === "productos" ? "active" : ""}
            onClick={() => setVista("productos")}
          >
            Productos
          </button>
          <button
            type="button"
            className={vista === "usuarios" ? "active" : ""}
            onClick={() => setVista("usuarios")}
          >
            Usuarios
          </button>
        </nav>
        <button type="button" className="logout" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Panel de control</p>
            <h1>{titulo}</h1>
          </div>
          <span className="session-badge">
            {sesion ? `${sesion.email} · ${sesion.role}` : ""}
          </span>
        </header>

        {vista === "inicio" && (
          <section className="admin-view">
            <div className="welcome">
              <p className="eyebrow">Gestión Velvetique</p>
              <h2>Todo bajo control.</h2>
              <p>
                Administra el catálogo, los perfiles y el contenido de tu tienda
                desde un solo lugar.
              </p>
            </div>
            <div className="stats-grid">
              <article>
                <span>Productos</span>
                <strong>{productos.length}</strong>
              </article>
              <article>
                <span>Usuarios</span>
                <strong>{usuarios.length}</strong>
              </article>
              <article>
                <span>Stock crítico</span>
                <strong>{productosCriticos}</strong>
              </article>
            </div>
          </section>
        )}

        {vista === "productos" && (
          <section className="admin-view">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Catálogo</p>
                <h2>Mantenedor de productos</h2>
              </div>
              <button className="primary" type="button" onClick={nuevoProducto}>
                + Nuevo producto
              </button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto) => {
                    const critico = producto.stock <= producto.criticalStock;
                    return (
                      <tr key={producto.id}>
                        <td>
                          <strong>{producto.name}</strong>
                          <br />
                          <small>{producto.code}</small>
                        </td>
                        <td>
                          {etiquetasCategoria[producto.category] ??
                            producto.category}
                        </td>
                        <td>
                          ${Number(producto.price).toLocaleString("es-CL")}
                        </td>
                        <td className={critico ? "low-stock" : ""}>
                          {producto.stock}
                          {critico ? " · Stock crítico" : ""}
                        </td>
                        <td>{producto.visible ? "Publicado" : "Oculto"}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => editarProducto(producto)}
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            onClick={() => eliminarProducto(producto.id)}
                          >
                            Eliminar
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              cambiarVisibilidadProducto(producto.id)
                            }
                          >
                            {producto.visible ? "Ocultar" : "Publicar"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {formProducto && (
              <form
                className="admin-form"
                noValidate
                onSubmit={guardarProducto}
              >
                <h3>
                  {formProducto.id ? "Editar producto" : "Nuevo producto"}
                </h3>
                <div className="form-grid">
                  <label>
                    Código *
                    <input
                      name="code"
                      type="text"
                      value={formProducto.code}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label>
                    Nombre *
                    <input
                      name="name"
                      type="text"
                      maxLength="100"
                      value={formProducto.name}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label className="wide">
                    Descripción
                    <textarea
                      name="description"
                      maxLength="500"
                      value={formProducto.description}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label>
                    Marca
                    <input
                      name="brand"
                      type="text"
                      maxLength="100"
                      value={formProducto.brand}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label>
                    Precio *
                    <input
                      name="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formProducto.price}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label>
                    Stock *
                    <input
                      name="stock"
                      type="number"
                      min="0"
                      step="1"
                      value={formProducto.stock}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label>
                    Stock crítico
                    <input
                      name="criticalStock"
                      type="number"
                      min="0"
                      step="1"
                      value={formProducto.criticalStock}
                      onChange={cambiarProducto}
                    />
                  </label>
                  <label>
                    Categoría *
                    <select
                      name="category"
                      value={formProducto.category}
                      onChange={cambiarProducto}
                    >
                      <option value="">Selecciona una categoría</option>
                      <option value="SKIN CARE">Cuidado de la piel</option>
                      <option value="MAKE UP">Maquillaje</option>
                      <option value="HAIR CARE">Cuidado capilar</option>
                      <option value="SUN CARE">Protección solar</option>
                    </select>
                  </label>
                  <label>
                    Imagen
                    <input
                      name="image"
                      type="url"
                      placeholder="https://..."
                      value={formProducto.image}
                      onChange={cambiarProducto}
                    />
                  </label>
                </div>
                <p className="form-alert" role="alert">
                  {errorProducto}
                </p>
                <div className="form-actions">
                  <button
                    type="button"
                    className="secondary"
                    onClick={cancelarProducto}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="primary">
                    Guardar producto
                  </button>
                </div>
              </form>
            )}
          </section>
        )}

        {vista === "usuarios" && (
          <section className="admin-view">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Accesos</p>
                <h2>Mantenedor de usuarios</h2>
              </div>
              <button className="primary" type="button" onClick={nuevoUsuario}>
                + Nuevo usuario
              </button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>RUN</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Perfil</th>
                    <th>Ubicación</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td>{usuario.run}</td>
                      <td>
                        {usuario.name} {usuario.lastname}
                      </td>
                      <td>{usuario.email}</td>
                      <td>{usuario.role}</td>
                      <td>
                        {usuario.commune}, {usuario.region}
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => editarUsuario(usuario)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => eliminarUsuario(usuario.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {formUsuario && (
              <form className="admin-form" noValidate onSubmit={guardarUsuario}>
                <h3>{formUsuario.id ? "Editar usuario" : "Nuevo usuario"}</h3>
                <div className="form-grid">
                  <label>
                    RUN *
                    <input
                      name="run"
                      type="text"
                      placeholder="19011022K"
                      maxLength="9"
                      value={formUsuario.run}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label>
                    Nombre *
                    <input
                      name="name"
                      type="text"
                      maxLength="50"
                      value={formUsuario.name}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label>
                    Apellidos *
                    <input
                      name="lastname"
                      type="text"
                      maxLength="100"
                      value={formUsuario.lastname}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label>
                    Correo electrónico *
                    <input
                      name="email"
                      type="email"
                      maxLength="100"
                      value={formUsuario.email}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label>
                    Fecha de nacimiento
                    <input
                      name="birthdate"
                      type="text"
                      placeholder="DD/MM/AAAA"
                      value={formUsuario.birthdate}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label>
                    Tipo de usuario *
                    <select
                      name="role"
                      value={formUsuario.role}
                      onChange={cambiarUsuario}
                    >
                      <option value="">Selecciona un perfil</option>
                      <option>Administrador</option>
                      <option>Vendedor</option>
                      <option>Cliente</option>
                    </select>
                  </label>
                  <label>
                    Región *
                    <input
                      name="region"
                      type="text"
                      placeholder="Ejemplo: Metropolitana"
                      value={formUsuario.region}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label>
                    Comuna *
                    <input
                      name="commune"
                      type="text"
                      placeholder="Ejemplo: Santiago"
                      value={formUsuario.commune}
                      onChange={cambiarUsuario}
                    />
                  </label>
                  <label className="wide">
                    Dirección *
                    <textarea
                      name="address"
                      maxLength="300"
                      value={formUsuario.address}
                      onChange={cambiarUsuario}
                    />
                  </label>
                </div>
                <p className="form-alert" role="alert">
                  {errorUsuario}
                </p>
                <div className="form-actions">
                  <button
                    type="button"
                    className="secondary"
                    onClick={cancelarUsuario}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="primary">
                    Guardar usuario
                  </button>
                </div>
              </form>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;
