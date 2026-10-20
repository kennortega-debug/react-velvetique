import { useState } from "react";
import logoImg from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img className="icono" src={logoImg} alt="Logo de Velvetique" />
          <span className="header-titulo">VELVETIQUE</span>
        </Link>

        <div className="header-actions">

          <nav aria-label="Menú principal">
            <ul
              id="menu-principal"
              className={`nav-lista${menuAbierto ? " is-open" : ""}`}
            >
              <li>
                <Link to="/" className="nav-link" onClick={cerrarMenu}>
                  INICIO
                </Link>
              </li>
              <li>
                <Link to="/shop" className="nav-link" onClick={cerrarMenu}>
                  TIENDA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link" onClick={cerrarMenu}>
                  CONTACTO
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link" onClick={cerrarMenu}>
                  INICIAR SESIÓN
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-icons">
            <Link
              to="/login"
              className="header-icon"
              aria-label="Iniciar sesión"
            >
              <i className="bi bi-person" aria-hidden="true"></i>
            </Link>
            <Link to="/carrito" className="header-icon" aria-label="Carrito">
              <i className="bi bi-bag" aria-hidden="true"></i>
            </Link>
                      <button
            type="button"
            className="burger-toggle"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            <span />
            <span />
            <span />
          </button>
          </div>
        </div>
      </div>
    </header>
  );
};
