import { TodosLosProductos } from "../mocks/productos";

export const adminStorage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export const productosIniciales = TodosLosProductos.map((producto) => ({
  id: producto.id,
  code: `SKU-${producto.id}`,
  name: producto.titulo,
  description: producto.descripcion ?? "",
  price: Number(producto.precio),
  stock: 10,
  criticalStock: 3,
  category: producto.category,
  image: producto.image,
  images: producto.imagenes ?? [producto.image],
  brand: producto.marca ?? "",
  visible: true,
}));

const CLAVE_PRODUCTOS = "velvetique_productos";
const CLAVE_VERSION_PRODUCTOS = "velvetique_productos_version";

export function obtenerProductosAdministrados() {
  const guardados = adminStorage.get(CLAVE_PRODUCTOS, null);
  if (!Array.isArray(guardados)) return productosIniciales;
  if (localStorage.getItem(CLAVE_VERSION_PRODUCTOS) === "2") return guardados;

  const productosAntiguos = guardados.filter(
    (producto) => !["SKN001", "MKP001"].includes(producto.code),
  );
  const productosMigrados = productosIniciales.map((producto) => {
    const guardado = guardados.find(
      (item) =>
        (producto.id === 1 && item.code === "SKN001") ||
        item.id === producto.id ||
        item.name?.trim().toLowerCase() === producto.name.toLowerCase(),
    );

    if (!guardado) return producto;

    const categoria = {
      "Skin Care": "SKIN CARE",
      "Make Up": "MAKE UP",
      "Hair Care": "HAIR CARE",
      "Sun Care": "SUN CARE",
    }[guardado.category] ?? guardado.category;

    return {
      ...producto,
      ...guardado,
      id: producto.id,
      category: categoria || producto.category,
      image: guardado.image || producto.image,
      images: producto.images,
      brand: guardado.brand ?? producto.brand,
    };
  });
  const extras = productosAntiguos.filter(
    (guardado) =>
      !productosIniciales.some(
        (producto) =>
          producto.id === guardado.id ||
          producto.name.toLowerCase() === guardado.name?.trim().toLowerCase(),
      ),
  );
  const migrados = [...productosMigrados, ...extras];

  guardarProductosAdministrados(migrados);
  return migrados;
}

export function guardarProductosAdministrados(productos) {
  adminStorage.set(CLAVE_PRODUCTOS, productos);
  localStorage.setItem(CLAVE_VERSION_PRODUCTOS, "2");
}

export const usuariosIniciales = [
  {
    id: "u-admin",
    run: "19011022K",
    name: "Administrador",
    lastname: "Velvetique",
    email: "admin@duoc.cl",
    birthdate: "",
    role: "Administrador",
    region: "Metropolitana",
    commune: "Santiago",
    address: "Casa matriz Velvetique",
  },
];
