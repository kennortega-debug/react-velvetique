
export function validarUsuario(usuario) {
  const run = usuario.run.trim().toUpperCase();
  const name = usuario.name.trim();
  const lastname = usuario.lastname.trim();
  const email = usuario.email.trim().toLowerCase();
  const region = usuario.region.trim();
  const commune = usuario.commune.trim();
  const address = usuario.address.trim();

  if (!/^[0-9]{6,8}[0-9K]$/.test(run))
    return "El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guión.";
  if (!name || name.length > 50)
    return "El nombre es requerido y admite máximo 50 caracteres.";
  if (!lastname || lastname.length > 100)
    return "Los apellidos son requeridos y admiten máximo 100 caracteres.";
  if (
    !/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/.test(email) ||
    email.length > 100
  )
    return "Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com de máximo 100 caracteres.";
  if (!usuario.role || !region || !commune)
    return "Completa el tipo de usuario, región y comuna.";
  if (!address || address.length > 300)
    return "La dirección es requerida y admite máximo 300 caracteres.";
  return "";
}
