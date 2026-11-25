import PromoContent from "../molecules/PromoContent";
import AnuncioImg from "../../assets/images/oferta.jpg";

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-card">
        <PromoContent />

        <div className="promo-image">
          <img src={AnuncioImg} alt="Productos en promoción" />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
