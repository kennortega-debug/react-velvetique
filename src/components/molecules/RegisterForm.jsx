import { Link } from "react-router-dom";

import { Button } from "../../atoms/Button";
import Input from "../../atoms/TextInput";

const RegisterForm = ({
  nombre,
  setNombre,
  email,
  setEmail,
  contrasenia1,
  setContrasenia1,
  contrasenia2,
  setContrasenia2,
  aceptarTerminos,
  setAceptarTerminos,
  error,
  manejarRegistro,
}) => {
  return (
    <div className="box">
      <h2>Register</h2>
      <p>Rellena los datos a continuación para crear tu cuenta.</p>

      <form className="register-form" onSubmit={manejarRegistro}>
        <div>
          <Input
            id="register-name"
            name="name"
            label="Nombre Completo"
            placeholder="Nombre"
            icon="bi-person"
            autoComplete="name"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />

          <Input
            id="register-email"
            name="email"
            label="Email"
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
            minLength={8}
            onChange={(event) => setContrasenia2(event.target.value)}
            required
          />
        </div>

        {error && (
          <p className="register-error" role="alert">
            {error}
          </p>
        )}

        <div className="terms">
          <div className="check">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={aceptarTerminos}
              onChange={(event) => setAceptarTerminos(event.target.checked)}
              required
            />

            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms & Conditions</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </label>
          </div>

          <div>
            <Button variant="primary" type="submit">
              CREAR UNA CUENTA
            </Button>
          </div>
        </div>
      </form>

      <span>
        Already have an account? <Link to="/login">Sign in</Link>
      </span>
    </div>
  );
};

export default RegisterForm;
