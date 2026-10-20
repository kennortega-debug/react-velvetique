import { ProductCard } from '../molecules/ProductCard';

export const ProductGrid = ({ productos = [] }) => {
  return (
    <section className="productosGrid-section">
      <h2 className="productosGrid-titulo">POPULARES</h2>
      <hr className="linea-decorativa" />
      <div className="producto-grid">
        {productos.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};