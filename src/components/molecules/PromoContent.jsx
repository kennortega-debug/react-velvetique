import { Button } from "../atoms/Button";

const PromoContent = () => {
  return (
    <div className="promo-content">
      <span className="promo-tag">OFERTA POR TIEMPO LIMITADO</span>

      <h2 className="promo-title">
        Hasta un 30% de descuento
        <br />
        en los más vendidos
      </h2>

      <p className="promo-desc">
        Brilla más, gasta menos.
        <br />
        ¡Mima tu piel hoy!
      </p>

      <Button variant="secondary">SHOP NOW</Button>
    </div>
  );
};

export default PromoContent;
