import { Header } from '../organisms/Header';
import { CategoryGrid } from '../organisms/CategoryGrid';
import { ProductGrid } from '../organisms/ProductGrid';
import { Footer } from '../organisms/Footer';
import { Button } from '../atoms/Button';
import AnuncioImg from '../../assets/images/oferta.jpg';

export const HomeTemplate = ({ productos, categorias }) => {
  return (
    <div className="principal">
      <Header />

      <section className="portada-section">
        <div className="cont-portada">
          <span className="portada-subtitulo">LO NUEVO EN</span>
          <h1 className="portada-titulo">
            PIEL RADIANTE.<br />INFALIBLE
          </h1>
          <p className="portada-descripcion">
            Belleza limpia que te nutre, realza y empodera.
          </p>
          <Button variant="primary">SHOP NOW</Button>
        </div>
      </section>

      <div className="features-banner">
        <div className="features-container">
          <div className="feature-item">
            <i className="bi bi-flower2"></i>
            <div className="feature-info">
              <h4>Ingredientes limpios</h4>
              <p>Seguros y libres de toxinas</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-shield-check"></i>
            <div className="feature-info">
              <h4>Clínicamente probado</h4>
              <p>Dermatológicamente probado</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-heart"></i>
            <div className="feature-info">
              <h4>Libre de crueldad</h4>
              <p>Nosotros nunca probamos en animales</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-globe"></i>
            <div className="feature-info">
              <h4>Belleza sostenible</h4>
              <p>Bueno para ti & el planeta</p>
            </div>
          </div>
        </div>
      </div>
      <div className="calugas-cont">
        <CategoryGrid categorias={categorias} />
      </div>
      

      <section className="promo-section">
        <div className="promo-card">
          <div className="promo-content">
            <span className="promo-tag">OFERTA POR TIEMPO LIMITADO</span>
            <h2 className="promo-title">Hasta un 30% de descuento<br />en los más vendidos</h2>
            <p className="promo-desc">Brilla más, gasta menos.<br />Mima tu piel hoy!</p>
            <Button variant="secondary">SHOP NOW</Button>
          </div>
          <div className="promo-image">
            <img src={AnuncioImg} alt="Promo products" />
          </div>
        </div>
      </section>

      <div className="calugas-cont">
        <ProductGrid productos={productos} />
      </div>
      
      <Footer />
    </div>
  );
};