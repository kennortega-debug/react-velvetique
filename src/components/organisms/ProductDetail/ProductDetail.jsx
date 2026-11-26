import ProductGallery from "../../molecules/ProductGallery/ProductGallery";
import ProductPrice from "../../molecules/ProductPrice/ProductPrice";
import ProductQuantity from "../../molecules/ProductQuantity/ProductQuantity";

const ProductDetail = ({ producto, agregarAlCarrito }) => {
  const [cantidad, setCantidad] = React.useState(1);

  return (
    <div className="productoDetalle-container productoDetalle-grid">
      <ProductGallery
        imagenes={producto.imagenes}
        imagenPrincipal={producto.image}
        titulo={producto.titulo}
      />

      <div className="productoDetalle-info">
        <h1>{producto.titulo}</h1>

        <ProductPrice precio={producto.precio} />

        <p>{producto.descripcion}</p>

        <ProductQuantity cantidad={cantidad} setCantidad={setCantidad} />

        <button
          type="button"
          className="btn-añadir-carrito"
          onClick={() => agregarAlCarrito(producto, cantidad)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
