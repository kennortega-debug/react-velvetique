import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

const HeaderBrand = () => {
  return (
    <Link to="/" className="logo">
      <Logo />
      <span className="header-titulo">
        VELVETIQUE
      </span>
    </Link>
  );
};

export default HeaderBrand;
