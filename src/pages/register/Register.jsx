import { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import Input from "../../components/atoms/TextInput";
import { registrarUsuario } from "../../services/usuariosService";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia1, setContrasenia1] = useState("");
  const [contrasenia2, setContrasenia2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    setError("");

    if (contrasenia1.trim() !== contrasenia2.trim()) {
      setError("Las contraseñas deben coincidir.");
      return;
    }

    try {
      const usuario = registrarUsuario({
        nombre,
        email,
        password: contrasenia1,
      });
      if (!usuario) {
        setError("Ya existe una cuenta registrada con ese correo.");
        return;
      }

      navigate("/shop");
    } catch (storageError) {
      console.error("No se pudo guardar el usuario registrado.", storageError);
      setError("No se pudo guardar tu cuenta. Inténtalo nuevamente.");
    }
  };

  return (
    <>
      <div className="register-page">
        <div className="header-register">
          <h2>VELVETIQUE</h2>
          <h3>Crea tu cuenta</h3>
          <h4>ÚNETE A NUESTRA COMUNIDAD DE BELLEZA</h4>
          <p>Regístrate hoy y disfruta de</p>
          <p>ofertas exclusivas, acceso anticipado</p>
          <p>a nuevas colecciones y una</p>
          <p>experiencia de belleza personalizada.</p>
        </div>

        <div className="box">
          <h2>Registro</h2>
          <p>Rellena los datos a continuación para crear tu cuenta.</p>
          <form className="register-form" onSubmit={register}>
            <div>
              <Input
                id="register-name"
                name="name"
                label="Nombre Completo"
                placeholder="nombre"
                icon="bi-person"
                autoComplete="name"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                required
              />

              <Input
                id="register-email"
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="nombre@gmail.com"
                icon="bi-envelope"
                autoComplete="email"
                value={email}
                inputMode="email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <Input
                id="register-password"
                name="password"
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                icon="bi-lock"
                autoComplete="new-password"
                value={contrasenia1}
                minLength={8}
                onChange={(event) => setContrasenia1(event.target.value)}
                required
              />

              <Input
                id="register-confirm-password"
                name="confirmPassword"
                label="Confirma tu contraseña"
                type="password"
                placeholder="Confirma tu contraseña"
                icon="bi-lock"
                autoComplete="new-password"
                value={contrasenia2}
                onChange={(event) => setContrasenia2(event.target.value)}
                required
              />
            </div>
            {error && <p className="login-error" role="alert">{error}</p>}
            <div className="terms">
              <input type="checkbox" />
              <p>
                Acepto los <a href="#">Términos y condiciones</a> y la
                <a href="#"> Política de privacidad.</a>
              </p>
              <div>
                <Button type="submit" variant="primary">
                  CREAR UNA CUENTA
                </Button>
              </div>
            </div>
          </form>
          <span>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
