import { Button } from "../atoms/Button";

const HeroSection = () => {
  return (
    <section className="portada-section">
      <div className="cont-portada">
        <span className="portada-subtitulo">LO NUEVO EN</span>

        <h1 className="portada-titulo">
          PIEL RADIANTE.
          <br />
          INFALIBLE
        </h1>

        <p className="portada-descripcion">
          Belleza limpia que te nutre, realza y empodera.
        </p>

        <Button variant="primary">SHOP NOW</Button>
      </div>
    </section>
  );
};

export default HeroSection;
