import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { ProductCard } from '../molecules/ProductCard';

export const ShopTemplate = ({ todosLosProductos = [] }) => {
  const location = useLocation();

  const categorias = useMemo(
    () => [...new Set(todosLosProductos.map((p) => p.category))],
    [todosLosProductos],
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');

    if (categoryParam) {
      const categoria = categorias.find(
        (nombre) =>
          nombre.toLowerCase().replace(/\s+/g, '-') ===
          categoryParam.toLowerCase(),
      );
      const sectionElement = categoria
        ? document.getElementById(`section-${categoria}`)
        : null;
      
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, categorias]);

  return (
    <div className="home-layout">
      <Header />

      <main className="shop-container">
        {categorias.map((catName) => {
          const categoriaProductos = todosLosProductos.filter((p) => p.category === catName);
          const sectionId = `section-${catName}`; 

          return (
            <section key={catName} id={sectionId} className="shop-category-section">
              <div className="category-header">
                <h2 className="category-header-title">{catName}</h2>
                <hr className="category-header-line" />
              </div>

              <div className="shop-product-grid">
                {categoriaProductos.map((producto) => (
                  <ProductCard 
                    key={producto.id} 
                    id= {producto.id}
                    image={producto.image}
                    imagenes={producto.imagenes}
                    titulo={producto.titulo}
                    marca={producto.marca || "VELVETIQUE"}
                    precio={producto.precio}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};