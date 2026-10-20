const obtenerCarritoGuardado = () => {
  const contenido = localStorage.getItem("carrito_velvetique");
  return contenido ? JSON.parse(contenido) : [];
};

const ObtenerCarritoGuardado = () => {
  const carrito = obtenerCarritoGuardado();

  return (
    <>
      <h2>Carrito Guardado</h2>
      <pre>{JSON.stringify(carrito, null, 2)}</pre>
    </>
  );
};


export default ObtenerCarritoGuardado;
