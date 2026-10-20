import { useState } from "react";

import "./Login.scss";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import Input from "../../components/atoms/TextInput";
import { iniciarSesion } from "../../services/loginService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = (event) => {
    event.preventDefault();

    let usuario;
    try {
      usuario = iniciarSesion(email, password);
    } catch (storageError) {
      console.error("No se pudieron consultar los usuarios guardados.", storageError);
      setError("No se pudo acceder a las cuentas guardadas. Inténtalo nuevamente.");
      return;
    }

    if (!usuario) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    navigate(usuario.role === "Administrador" ? "/admin" : "/");
  };

  return (
    <div className="login-page">
      <div className="register">
        <div className="login-header">
          <h2>VELVETIQUE</h2>
          <h3>Bienvenido de nuevo</h3>
          <h4>LA BELLEZA COMIENZA CONTIGO</h4>
          <p>Inicia sesión en tu cuenta y continúa</p>
          <p>tu viaje de belleza con ofertas</p>
          <p>exclusivas, novedades y mucho más.</p>
        </div>

        <div className="box-login">
          <h2>Iniciar sesión</h2>
          <p>Introduce tus datos para acceder a tu cuenta.</p>
          <form
            className="register-form"
            id="login-form"
            onSubmit={manejarSubmit}
          >
            <div>
              <Input
                id="login-email"
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="nombre@gmail.com"
                icon="bi-envelope"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <Input
                id="login-password"
                name="password"
                label="Contraseña"
                type="password"
                placeholder="Ingresa tu contraseña"
                icon="bi-lock"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            {error && <p className="login-error" role="alert">{error}</p>}

            <div className="terms">
              <div className="check">
                <input type="checkbox" />
                <p>Recuérdame</p>
              </div>
              <div>
                <Button type="submit" variant="primary">
                  Iniciar sesión
                </Button>
              </div>
            </div>
          </form>
          <span>
            ¿No tienes una cuenta?
            <Link to="/register"> Regístrate</Link>
          </span>
          <span>
            <Link to="/"> Volver al inicio</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
