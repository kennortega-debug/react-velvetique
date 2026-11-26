import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

import { iniciarSesion } from "../../services/loginService";
import LoginSection from "../../components/organisms/LoginSection/LoginSection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manejarSubmit = (event) => {
    event.preventDefault();

    setError("");

    const usuario = iniciarSesion(email, password);

    if (!usuario) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    navigate(usuario.role === "Administrador" ? "/admin" : "/");
  };

  return (
    <main className="login-page">
      <LoginSection
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        manejarSubmit={manejarSubmit}
      />
    </main>
  );
};

export default Login;
