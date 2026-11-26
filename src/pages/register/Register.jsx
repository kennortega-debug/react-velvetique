import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.scss";

import { usuariosMock } from "../../mocks/usuarioMock";
import RegisterSection from "../../components/organisms/RegisterSection/RegisterSection";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia1, setContrasenia1] = useState("");
  const [contrasenia2, setContrasenia2] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manejarRegistro = (event) => {
    event.preventDefault();
    setError("");

    const correo = email.trim().toLowerCase();
    const nombreCompleto = nombre.trim();

    // Validar nombre
    if (!nombreCompleto) {
      setError("Debes ingresar tu nombre.");
      return;
    }

    // Verificar si el usuario ya existe
    const usuarioExiste = usuariosMock.some(
      (usuario) => usuario.email.toLowerCase() === correo,
    );

    if (usuarioExiste) {
      setError("Este correo electrónico ya está registrado.");
      return;
    }

    // Validar contraseñas
    if (contrasenia1 !== contrasenia2) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Validar términos
    if (!aceptarTerminos) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    // Crear usuario
    const nuevoUsuario = {
      id: `u-${Date.now()}`,
      run: "",
      name: nombreCompleto,
      lastname: "",
      email: correo,
      password: contrasenia1,
      birthdate: "",
      role: "Cliente",
      region: "",
      commune: "",
      address: "",
    };

    usuariosMock.push(nuevoUsuario);

    navigate("/shop");
  };

  return (
    <main className="register-page">
      <RegisterSection
        nombre={nombre}
        setNombre={setNombre}
        email={email}
        setEmail={setEmail}
        contrasenia1={contrasenia1}
        setContrasenia1={setContrasenia1}
        contrasenia2={contrasenia2}
        setContrasenia2={setContrasenia2}
        aceptarTerminos={aceptarTerminos}
        setAceptarTerminos={setAceptarTerminos}
        error={error}
        manejarRegistro={manejarRegistro}
      />
    </main>
  );
};

export default Register;
