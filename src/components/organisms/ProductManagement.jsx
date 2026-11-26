import SectionHeading from "../molecules/SectionHeading";
import ProductForm from "./ProductForm";

const ProductManagement = ({
  productos,
  onNuevo,
  onEditar,
  onEliminar,
  formProducto,
  ...formProps
}) => {
  return (
    <section className="admin-view">
      <SectionHeading eyebrow="Catálogo" title="Mantenedor de productos">
        <button className="primary" type="button" onClick={onNuevo}>
          + Nuevo producto
        </button>
      </SectionHeading>

      {/* Aquí irá la tabla de productos */}

      {/* Formulario condicional */}
      {formProducto && (
        <ProductForm formProducto={formProducto} {...formProps} />
      )}
    </section>
  );
};

export default ProductManagement;
