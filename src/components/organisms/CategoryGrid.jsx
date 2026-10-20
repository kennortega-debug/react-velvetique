import { useNavigate } from 'react-router-dom';

export const CategoryGrid = ({ categorias = [] }) => {
  const navigate = useNavigate();
  const listaCategorias = Array.isArray(categorias) ? categorias : [];

  const handleCategoryClick = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/shop?category=${slug}`);
  };

  return (
    <section className="categoriaGrid-section">
      <h2 className="categoriaGrid-titulo">SHOP BY CATEGORY</h2>
      <hr className="linea-decorativa" />
      <div className="caluga-categoria">
        {listaCategorias.map((cat) => (
          <div 
            key={cat.id} 
            className="tarjeta-categoria"
            onClick={() => handleCategoryClick(cat.title)}
          >
            <div className="imagen-categoria">
              <img src={cat.image} alt={cat.title} />
            </div>
            <span className="categoriaGrid-titulo">{cat.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};