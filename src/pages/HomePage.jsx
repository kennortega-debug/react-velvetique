import { HomeTemplate } from '../components/Templates/HomeTemplate';

export const HomePage = ({ productos, categorias }) => {
  return <HomeTemplate productos={productos} categorias={categorias} />;
};