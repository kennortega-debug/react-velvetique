import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import Input from "../../components/atoms/TextInput";
import { usuariosMock } from "../../mocks/usuarioMock";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia1, setContrasenia1] = useState("");
  const [contrasenia2, setContrasenia2] = useState("");
  const navigate = useNavigate();

  const register = () => {
    let user = usuariosMock.find((usuario) => usuario.email === email);
    console.log(user);
    if (user) {
      console.log("Usuario ya existe");
    } else if (contrasenia1.trim() != contrasenia2.trim()) {
      console.log("deben ser igual.");
    } else {
      usuariosMock.push({
        id: `u-${Date.now()}`,
        run: "",
        name: nombre,
        lastname: "",
        email,
        password: contrasenia1,
        birthdate: "",
        role: "Cliente",
        region: "",
        commune: "",
        address: "",
      });
      console.log(usuariosMock);
      navigate("/shop");
    }
  };

  return (
    <>
      <div className="register-page">
        <div className="header-register">
          <h2>VELVETIQUE</h2>
          <h3>Create your acount</h3>
          <h4>JOIN OUR BEAUTY COMMUNITY</h4>
          <p>Sign up today and enjoy</p>
          <p>exclusive offers,early access</p>
          <p>to new collections and a</p>
          <p>personalized beauty experience.</p>
        </div>

        <div className="box">
          <h2>Register</h2>
          <p>Rellena los datos a continuación para crear tu cuenta.</p>
          <form className="register-form">
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
                label="Email"
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
          </form>
          <div className="terms">
            <input type="checkbox" />
            <p>
              I agree to the <a href="#">Terms&Conditons </a> and
              <a href="#"> Privacy&Policy.</a>
            </p>
            <div>
              <Button onClick={register} variant="primary">
                CREAR UNA CUENTA
              </Button>
            </div>
          </div>
          <span>
            Already have an account <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
