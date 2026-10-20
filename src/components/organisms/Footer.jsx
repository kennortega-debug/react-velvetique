import { Button } from '../atoms/Button';

export const Footer = () => {
  return (
    <>
      <footer className="footer-servicios">
        <div className="servicios-container">
          <div className="feature-item">
            <i className="bi bi-truck"></i>
            <div className="feature-info">
              <h4>ENVÍO GRATIS</h4>
              <p>En pedidos superiores a $10990</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-arrow-repeat"></i>
            <div className="feature-info">
              <h4>DEVOLUCIÓN FÁCIL</h4>
              <p>Política de devoluciones de 15 días</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-shield-lock"></i>
            <div className="feature-info">
              <h4>PAGO SEGURO</h4>
              <p>Proceso de pago 100 % seguro</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="bi bi-headset"></i>
            <div className="feature-info">
              <h4>SOPORTE 24/7</h4>
              <p>Estamos aquí para ayudar.</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <span className="brand-title" style={{ color: '#fff' }}>VELVETIQUE</span>
            </div>
            <p style={{ fontSize: '13px', opacity: 0.8 }}>Belleza concebida con esmero para todo tipo de piel, cada día..</p>
          </div>
          <div className="footer-col">
            <h4>ENLACES RÁPIDOS</h4>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Tienda</a></li>
              <li><a href="#">Sobre nosotros</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ATENCIÓN AL CLIENTE</h4>
            <ul>
              <li><a href="#">Rastrea tu pedido</a></li>
              <li><a href="#">Política de envíos</a></li>
              <li><a href="#">Devoluciones y reembolsos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>HOJA INFORMATIVA</h4>
            <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '8px' }}>Suscríbete para recibir ofertas especiales.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Ingresa tu correo electrónico" className="input-text" />
              <Button variant="primary">Suscríbete</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};