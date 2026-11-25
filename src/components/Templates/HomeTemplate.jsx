import { Header } from "../organisms/Header";
import { CategoryGrid } from "../organisms/CategoryGrid";
import { ProductGrid } from "../organisms/ProductGrid";
import { Footer } from "../organisms/Footer";

import HeroSection from "../organisms/HeroSection";
import FeaturesBanner from "../organisms/FeaturesBanner";
import PromoSection from "../organisms/PromoSection";

export const HomeTemplate = ({ productos, categorias }) => {
  return (
    <div className="principal">
      <Header />

      <HeroSection />

      <FeaturesBanner />

      <div className="calugas-cont">
        <CategoryGrid categorias={categorias} />
      </div>

      <PromoSection />

      <div className="calugas-cont">
        <ProductGrid productos={productos} />
      </div>

      <Footer />
    </div>
  );
};
