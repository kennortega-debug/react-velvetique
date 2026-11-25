import FeatureItem from "../molecules/FeatureItem";

const FooterServices = () => {
  return (
    <footer className="footer-servicios">
      <div className="servicios-container">
        <FeatureItem
          icon="bi bi-truck"
          title="ENVÍO GRATIS"
          description="En pedidos superiores a $10990"
        />

        <FeatureItem
          icon="bi bi-arrow-repeat"
          title="DEVOLUCIÓN FÁCIL"
          description="Política de devoluciones de 15 días"
        />

        <FeatureItem
          icon="bi bi-shield-lock"
          title="PAGO SEGURO"
          description="Proceso de pago 100 % seguro"
        />

        <FeatureItem
          icon="bi bi-headset"
          title="SOPORTE 24/7"
          description="Estamos aquí para ayudar."
        />
      </div>
    </footer>
  );
};

export default FooterServices;
