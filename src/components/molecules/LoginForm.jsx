import { Button } from "../../atoms/Button";
import Input from "../../atoms/TextInput";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  manejarSubmit,
}) => {
  return (
    <div className="box-login">
      <h2>Iniciar sesión</h2>
      <p>Introduce tus datos para acceder a tu cuenta.</p>

      <form className="register-form" id="login-form" onSubmit={manejarSubmit}>
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

        {error && (
          <p className="login-error" role="alert">
            {error}
          </p>
        )}

        <div className="terms">
          <div className="check">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Recuérdame</label>
          </div>

          <Button variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </div>
      </form>

      <span>
        ¿No tienes una cuenta?
        <Link to="/register"> Regístrate</Link>
      </span>

      <span>
        <Link to="/">Volver al inicio</Link>
      </span>
    </div>
  );
};

export default LoginForm;
