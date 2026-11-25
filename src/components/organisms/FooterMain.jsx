import BrandLogo from "../atoms/BrandLogo";
import FooterLink from "../atoms/FooterLink";
import FooterColumn from "../molecules/FooterColumn";
import NewsletterForm from "../molecules/NewsletterForm";

const FooterMain = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        {/* Columna 1 */}
        <div className="footer-col">
          <BrandLogo />

          <p style={{ fontSize: "13px", opacity: 0.8 }}>
            Belleza concebida con esmero para todo tipo de piel, cada día.
          </p>
        </div>

        {/* Columna 2 */}
        <FooterColumn title="ENLACES RÁPIDOS">
          <ul>
            <FooterLink>Home</FooterLink>
            <FooterLink>Shop</FooterLink>
            <FooterLink>About Us</FooterLink>
          </ul>
        </FooterColumn>

        {/* Columna 3 */}
        <FooterColumn title="ATENCIÓN AL CLIENTE">
          <ul>
            <FooterLink>Rastrea tu pedido</FooterLink>
            <FooterLink>Política de envíos</FooterLink>
            <FooterLink>Devoluciones y reembolsos</FooterLink>
          </ul>
        </FooterColumn>

        {/* Columna 4 */}
        <FooterColumn title="HOJA INFORMATIVA">
          <p
            style={{
              fontSize: "12px",
              opacity: 0.8,
              marginBottom: "8px",
            }}
          >
            Suscríbete para recibir ofertas especiales.
          </p>

          <NewsletterForm />
        </FooterColumn>
      </div>
    </footer>
  );
};

export default FooterMain;
