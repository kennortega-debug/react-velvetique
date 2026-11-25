import FeatureItem from "../molecules/FeatureItem";

const FeaturesBanner = () => {
  return (
    <section className="features-banner">
      <div className="features-container">

        <FeatureItem
          icon="bi bi-flower2"
          title="Ingredientes limpios"
          description="Seguros y libres de toxinas"
        />

        <FeatureItem
          icon="bi bi-shield-check"
          title="Clínicamente probado"
          description="Dermatológicamente probado"
        />

        <FeatureItem
          icon="bi bi-heart"
          title="Libre de crueldad"
          description="Nosotros nunca probamos en animales"
        />

        <FeatureItem
          icon="bi bi-globe"
          title="Belleza sostenible"
          description="Bueno para ti y el planeta"
        />

      </div>
    </section>
  );
};

export default FeaturesBanner;