
export function validarProducto(producto) {
  const code = producto.code.trim();
  const name = producto.name.trim();
  const description = producto.description.trim();
  const { price, stock, criticalStock, category } = producto;

  if (code.length < 3)
    return "El código es requerido y debe tener al menos 3 caracteres.";
  if (!name || name.length > 100)
    return "El nombre es requerido y admite máximo 100 caracteres.";
  if (description.length > 500)
    return "La descripción admite máximo 500 caracteres.";
  if (
    price === "" ||
    Number(price) < 0 ||
    !Number.isFinite(Number(price))
  )
    return "El precio debe ser un número mayor o igual a 0.";
  if (
    stock === "" ||
    !Number.isInteger(Number(stock)) ||
    Number(stock) < 0
  )
    return "El stock debe ser un entero mayor o igual a 0.";
  if (
    criticalStock !== "" &&
    (!Number.isInteger(Number(criticalStock)) || Number(criticalStock) < 0)
  )
    return "El stock crítico debe ser un entero mayor o igual a 0.";
  if (!category) return "Selecciona una categoría.";
  return "";
}