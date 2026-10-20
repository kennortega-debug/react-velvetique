import { usuariosMock } from "../mocks/usuarioMock";

const CLAVE_USUARIOS_REGISTRADOS = "velvetique_usuarios_registrados";

function obtenerUsuariosRegistrados() {
  const contenido = localStorage.getItem(CLAVE_USUARIOS_REGISTRADOS);
  if (!contenido) return [];

  const usuarios = JSON.parse(contenido);
  if (!Array.isArray(usuarios)) {
    throw new Error("El almacenamiento de usuarios tiene un formato inválido.");
  }

  return usuarios;
}

function buscarUsuarioPorCorreo(email) {
  const correo = email.trim().toLowerCase();
  return (
    usuariosMock.find((usuario) => usuario.email.toLowerCase() === correo) ??
    obtenerUsuariosRegistrados().find(
      (usuario) => usuario.email.toLowerCase() === correo,
    )
  );
}

export function registrarUsuario({ nombre, email, password }) {
  if (buscarUsuarioPorCorreo(email)) return null;

  const usuarios = obtenerUsuariosRegistrados();
  const usuario = {
    id: `u-${Date.now()}`,
    name: nombre.trim(),
    lastname: "",
    email: email.trim().toLowerCase(),
    password,
    role: "Cliente",
    birthdate: "",
    region: "",
    commune: "",
    address: "",
  };

  localStorage.setItem(
    CLAVE_USUARIOS_REGISTRADOS,
    JSON.stringify([...usuarios, usuario]),
  );

  return usuario;
}

export function iniciarSesionUsuario(email, password) {
  const usuario = buscarUsuarioPorCorreo(email);
  return usuario?.password === password ? usuario : null;
}
