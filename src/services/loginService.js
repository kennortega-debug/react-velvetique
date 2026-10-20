import { iniciarSesionUsuario } from "./usuariosService";

export function iniciarSesion(email, password) {
  return iniciarSesionUsuario(email, password);
}